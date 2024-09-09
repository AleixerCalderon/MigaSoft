import { Traslados, DetalleTraslados, sequelize } from '../models/index.js';
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

    //   async updateTraslado(id, data) {
    //     return await Traslados.update(data, { where: { id }, individualHooks: true, });
    //   }

    //   async deleteTraslado(id) {
    //     return await Traslados.destroy({ where: { id } });
    //   }
}

export default new TrasladoRepository();
