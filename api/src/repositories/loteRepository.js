import { Lotes, Productos } from '../models/index.js';
import { Op } from "sequelize";


class LoteRepository {
    async addLote(data) {
        return await Lotes.create(data);
    }

    async getLoteByNombreOCodigo(nombreOCodigoBarras) {
        return await Lotes.findAll({
            include: [
                {
                    model: Productos,
                    as: 'Producto',
                    // where: {
                    //     nombre: {
                    //         [Op.like]: `%${nombreOCodigoBarras}%`
                    //     }
                    // },
                    attributes: ['id', 'nombre', 'descripcion']
                }
            ],
            where: {
                [Op.or]: [
                    {
                        CodigoBarras: {
                            [Op.like]: `%${nombreOCodigoBarras}%`
                        }
                    },
                    {
                        '$Producto.nombre$': {
                            [Op.like]: `%${nombreOCodigoBarras}%`
                        }
                    }
                ]
            }
            //attributes: ['id','nombre']
        });
    }

    async getLoteById(id) {
        return await Lotes.findByPk(id);
    }
    async getLoteAll() {
        return await Lotes.findAll({
            include: [
                {
                    model: Productos,
                    as: 'Producto',
                    attributes: ['nombre', 'descripcion', 'peso', 'volumen', 'PrecioUnitario', 'PrecioVenta'],
                }
            ]
        });
    }

    async updateLote(id, data) {
        return await Lotes.update(data, { where: { id }, individualHooks: true, });
    }

    async deleteLote(id) {
        try {
            return await Lotes.destroy({ where: { id } });
        } catch (error) {
            if (error instanceof ForeignKeyConstraintError) {
                try {
                    const loteD = await this.deshabilitarLote(id);
                    return loteD;
                } catch (error) {
                    throw new Error('Error al deshabilitar el lote: ', error);
                }
            }
        }
    }

    async deshabilitarLote(id) {
        const lote = await Lotes.findByPk(id);
        if (!lote) {
            throw new Error('Lote no existe');
        }
        lote.habilitado = false;
        await lote.save();
        return lote;
    }
}

export default new LoteRepository();
