import { Traslados, DetalleTraslados, sequelize, Inventario, MovimientosInventarioBodega } from '../models/index.js';
//import { Op } from "sequelize";


class TrasladoRepository {
    async addTraslado(trasladoData, detallesData) {
        try {
            const result = await sequelize.transaction(async (t) => {
                const traslado = await Traslados.create(trasladoData, { transaction: t });
                const idTraslado = traslado.id; //tomados el id del traslado recien creado
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
        return await Traslados.findAll();
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
                        { model: DetalleTraslados, as: 'detalles' } // Incluye los detalles del traslado
                    ],
                    transaction: t
                });

                if (!traslado) {
                    throw new Error('El traslado no existe');
                }

                // Recorrer cada detalle del traslado para actualizar el inventario
                for (const detalle of traslado.detalles) {
                    const { idLote, cantidad } = detalle;
                    // Restar la cantidad de la bodega origen
                    await Inventario.increment(
                        { cantidad: -cantidad },
                        {
                            where: {
                                idBodega: traslado.idBodegaOrigen,
                                idLote: idLote
                            },
                            transaction: t
                        }
                    );

                    // Sumar la cantidad a la bodega destino
                    await Inventario.increment(
                        { cantidad: cantidad },
                        {
                            where: {
                                idBodega: traslado.idBodegaDestino,
                                idLote: idLote
                            },
                            transaction: t
                        }
                    );

                    // Insertar el movimiento para la bodega origen
                    await MovimientosInventarioBodega.create({
                        idBodega: traslado.idBodegaOrigen,
                        idLote: idLote,
                        fechaMovimiento: new Date(),
                        tipoMovimiento: 'Salida', // O "Traslado-Salida"
                        cantidad: cantidad,
                        descripcion: `Salida por traslado a la bodega ${traslado.idBodegaDestino}`
                    }, { transaction: t });

                    // Insertar el movimiento para la bodega destino
                    await MovimientosInventarioBodega.create({
                        idBodega: traslado.idBodegaDestino,
                        idLote: idLote,
                        fechaMovimiento: new Date(),
                        tipoMovimiento: 'Entrada', // O "Traslado-Entrada"
                        cantidad: cantidad,
                        descripcion: `Entrada por traslado desde la bodega ${traslado.idBodegaOrigen}`
                    }, { transaction: t });
                }

                // Actualizar el estado del traslado a "Confirmado"
                traslado.estado = 'Confirmado';
                await traslado.save({ transaction: t });

                return traslado;
            });

            return result;
        } catch (error) {
            console.error('Error al confirmar traslado:', error);
            throw new Error('No se pudo confirmar el traslado');
        }
    }
}

export default new TrasladoRepository();
