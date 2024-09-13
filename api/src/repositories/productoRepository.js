import { Productos } from '../models/index.js';
import { ForeignKeyConstraintError, Op } from "sequelize";


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
    try {
      return await Productos.destroy({ where: { id } });
    } catch (error) {
      if (error instanceof ForeignKeyConstraintError) {
        try {
          const productoD = await this.deshabilitarProducto(id);
          return productoD;
        } catch (error) {
          throw new Error('Error al deshabilitar el producto: ', error);
        }
      }
    }
  }

  async deshabilitarProducto(id) {
    const producto = await Productos.findByPk(id);
    if (!producto) {
      throw new Error('Producto no existe');
    }
    producto.habilitado = false;
    await producto.save();
    return producto;
  }
}

export default new ProductoRepository();
