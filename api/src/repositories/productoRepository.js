import { Productos } from '../models/index.js';


class ProductoRepository {
  async addProducto(data) {
    return await Productos.create(data);
  }

  async getProductoByNombre(producto) {
    return await Productos.findAll({ where: { nombre : producto }});
  }

  async getProductoById(id) {
    return await Productos.findByPk(id);
  }

  async updateProducto(id, data) {
    return await Productos.update(data, { where: { id }, individualHooks: true, });
  }

  async deleteProducto(id) {
    return await Productos.destroy({ where: { id } });
  }
}

export default new ProductoRepository();
