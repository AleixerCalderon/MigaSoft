import { Bodegas, Traslados, DetalleTraslados, sequelize, Inventario, MovimientosInventarioBodega, Lotes, Productos } from '../models/index.js';
//import { Op } from "sequelize";


class TrasladoRepository {
    async addTraslado(trasladoData, detallesData) {
        try {
            const result = await sequelize.transaction(async (t) => {
                const traslado = await Traslados.create(trasladoData, { transaction: t });
                const idTraslado = traslado.id;
                const detallesInsert = detallesData.map((detalle) => ({
                    idTraslado: idTraslado,
                    idLote: detalle.idLote,
                    Cantidad: detalle.cantidad,
                }));
                await DetalleTraslados.bulkCreate(detallesInsert, { transaction: t });
                return traslado;
            });
            return result;
        } catch (error) {
            throw new Error(`Error al crear el traslado ${error}`);
        }
    }

    async getTrasladoById(id) {
        return await Traslados.findByPk(id);
    }
    async getTraslados() {
        return await Traslados.findAll({
            include: [
                {
                    model: Bodegas,
                    as: 'BodegaOrigen',
                    attributes: ['nombre'],
                },
                {
                    model: Bodegas,
                    as: 'BodegaDestino',
                    attributes: ['nombre'],
                },
                {
                    model: DetalleTraslados,
                    as: 'Detalles',
                    include: [{
                        model: Lotes,
                        as: 'Lote',
                        attributes: ['idProducto','CodigoLote','CodigoBarras','FechaVencimiento','FechaEntrada'],
                        include:[
                            {
                                model:Productos,
                                as: "Producto",
                                attributes: ["nombre","descripcion"]
                            }
                        ]
                    }]
                }
            ]
        });
    }

    async getTrasladoXBodegaOrigen(id) {
        return await Traslados.findAll({ where: { idBodegaOrigen: id }, });
    }
    async getTrasladoXBodegaDestino(id) {
        return await Traslados.findAll({ where: { idBodegaDestino: id }, });
    }

    async deleteTraslado(id) {
        //TODO Eliminar el detalle y usar el Trans 
        return await Traslados.destroy({
            where: {
                [Op.and]: [
                    {
                        id: id
                    },
                    {
                        estado: "Por Confirmar"
                    }
                ]
            }
        });
    }

    async confirmarTraslado(idTraslado) {
        try {
            // Iniciar una transacción
            const result = await sequelize.transaction(async (t) => {
                // Obtener el traslado por ID
                const traslado = await Traslados.findByPk(idTraslado, {
                    include: [
                        { model: DetalleTraslados, as: 'Detalles' } // Incluye los detalles del traslado
                    ],
                    transaction: t
                });

                if (!traslado) {
                    throw new Error('El traslado no existe');
                }
                if (traslado.estado == 'Confirmado') {
                    throw new Error('El traslado ya ha sido confirmado');
                }

                // Recorrer cada detalle del traslado para actualizar el inventario
                for (const detalle of traslado.Detalles) {
                    const { idLote, Cantidad } = detalle.dataValues;
                    // Restar la cantidad de la bodega origen
                    const inventarioOrigen = await Inventario.findOne({
                        where: {
                            idBodega: traslado.idBodegaOrigen,
                            idLote: idLote
                        },
                        transaction: t
                    });
                    if (inventarioOrigen) {
                        await Inventario.increment(
                            { Cantidad: -Cantidad },
                            {
                                where: {
                                    idBodega: traslado.idBodegaOrigen,
                                    idLote: idLote
                                },
                                transaction: t
                            }
                        );
                    }
                    else {
                        await Inventario.create({
                            idBodega: traslado.idBodegaOrigen,
                            idLote: idLote,
                            Cantidad: -Cantidad
                        }, { transaction: t });
                    }
                    const inventarioDestino = await Inventario.findOne({
                        where: {
                            idBodega: traslado.idBodegaDestino,
                            idLote: idLote
                        },
                        transaction: t
                    });
                    if (inventarioDestino) {
                        // Sumar la cantidad a la bodega destino
                        await Inventario.increment(
                            { Cantidad: Cantidad },
                            {
                                where: {
                                    idBodega: traslado.idBodegaDestino,
                                    idLote: idLote
                                },
                                transaction: t
                            }
                        );
                    }
                    else {
                        await Inventario.create({
                            idBodega: traslado.idBodegaDestino,
                            idLote: idLote,
                            Cantidad: Cantidad
                        }, { transaction: t });
                    }
                    // Insertar el movimiento para la bodega origen
                    await MovimientosInventarioBodega.create({
                        idBodega: traslado.idBodegaOrigen,
                        idLote: idLote,
                        fechaMovimiento: new Date(),
                        tipoMovimiento: 'Salida', // O "Traslado-Salida"
                        cantidad: Cantidad,
                        descripcion: `Salida por traslado N#: ${traslado.id}, a la bodega ${traslado.idBodegaDestino}`
                    }, { transaction: t });

                    // Insertar el movimiento para la bodega destino
                    await MovimientosInventarioBodega.create({
                        idBodega: traslado.idBodegaDestino,
                        idLote: idLote,
                        fechaMovimiento: new Date(),
                        tipoMovimiento: 'Entrada', // O "Traslado-Entrada"
                        cantidad: Cantidad,
                        descripcion: `Entrada por traslado N#: ${traslado.id}, desde la bodega ${traslado.idBodegaOrigen}`
                    }, { transaction: t });
                }

                // Actualizar el estado del traslado a "Confirmado"
                traslado.estado = 'Confirmado';
                await traslado.save({ transaction: t });

                return traslado;
            });

            return result;
        } catch (error) {
            throw new Error('No se pudo confirmar el traslado: ' + error);
        }
    }
}

export default new TrasladoRepository();
