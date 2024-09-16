import { Bodegas, TiposBodega } from "../models/index.js";

class BodegaRepository {
  async getAllBodegas() {
    return await Bodegas.findAll({
      include: [
        {
          model: TiposBodega,
          as: 'tiposBodega',
          attributes: ['nombre'],
        }
      ]
    });
  }

  async addBodega(data) {
    return await Bodegas.create(data);
  }

  async updateBodega(id, data) {
    return await Bodegas.update(data, { where: { id }, individualHooks: true, });
  }


  async deleteBodega(id) {
    try {
      return await Bodegas.destroy({ where: { id } });
    } catch (error) {
      if (error.name == "ForeignKeyConstraintError" || error.name == "SequelizeForeignKeyConstraintError") {
        try {
          const bodegaD = await this.deshabilitarBodega(id);
          return bodegaD;
        } catch (error) {
          throw new Error('Error al deshabilitar la bodega: ', error);
        }
      }
    }
  }

  async deshabilitarBodega(id) {
    const bodega = await Bodegas.findByPk(id);
    if (!bodega) {
      throw new Error('Bodega no existe');
    }
    bodega.habilitado = false;
    await bodega.save();
    return bodega;
  }
}
export default new BodegaRepository();