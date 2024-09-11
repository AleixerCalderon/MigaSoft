import { Productos } from '../models/index.js';
import {Op}  from "sequelize";


class ProductoRepository {
  async getProductos() {
    return await Productos.findAll();
  }

  async addProducto(data) {
    return await Productos.create(data);
  }

  async getProductoByNombre(nombre) {
    return await Productos.findAll({
      where: {
        nombre: {
          [Op.like]: `%${nombre}%`
        }
      }
      //,attributes:['nombre']
    });
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
