import ProductoRepository from '../repositories/ProductoRepository.js';

class ProductoService {
    async getProductoById(id) {
        return await ProductoRepository.getProductoById(id);
    }

    async getProductoByNombre(nombre) {
        return await ProductoRepository.getProductoByNombre(nombre);
    }
    
    async addProducto(id, data) {
        return await ProductoRepository.addProducto(id, data);
    }
    async updateProducto(id, data) {
        return await ProductoRepository.updateProducto(id, data);
    }
    async deleteProducto(id) {
        return await ProductoRepository.deleteProducto(id);
    }
}
export default new ProductoService();