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
                        '$Producto.nombre$':{
                            [Op.like]:`%${nombreOCodigoBarras}%`
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
      
        return await Lotes.findAll();
    }

    async updateLote(id, data) {
        return await Lotes.update(data, { where: { id }, individualHooks: true, });
    }

    async deleteLote(id) {
        return await Lotes.destroy({ where: { id } });
    }
}

export default new LoteRepository();
