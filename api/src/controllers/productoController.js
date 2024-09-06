import productoService from '../services/productoService.js';

class ProductoController {
    async getProducto(req, res) {
        try {
            const producto = await productoService.getProductoById(req.params.id);
            res.json(producto);
        } catch (error) {
            res.status(404).json({ error: 'Producto no encontrado Error: ' + error });
        }
    }
    
    async getProductoByNombre(req, res) {
        try {
            const producto = await productoService.getProductoByNombre(req.params.nombre);
            res.json(producto);
        } catch (error) {
            res.status(404).json({ error: 'Producto no encontrado Error: ' + error} );
        }
    }
    
    async updateProducto(req, res) {
        try {
            const producto = await productoService.updateProducto(req.params.id, req.body);
            res.json(producto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async addProducto(req, res) {
        try {
            const producto = await productoService.addProducto(req.body);
            res.json(producto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteProducto(req, res) {
        try {
            await productoService.deleteProducto(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
export default new ProductoController();
