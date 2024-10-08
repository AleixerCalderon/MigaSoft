import InventarioService from "../services/InventarioService.js";

class InventarioController {
    async getAllInventario(req, res) {
        try {
            const inventario = await InventarioService.getAllInventario();
            res.json(inventario);
        } catch (error) {
            res.status(404).json({ error: 'Inventario no encontrado: ' + error });
        }
    }  
    async getInventarioById(req, res) {
        try {
            const inventario = await InventarioService.getInventarioById(req.params.id);
            res.json(inventario);
        } catch (error) {
            res.status(404).json({ error: 'Inventario no encontrado: ' + error });
        }
    }
    async getMovimientosInventario(req, res) {
        try {
            const movimientos = await InventarioService.getMovimientosInventario();
            res.json(movimientos);
        } catch (error) {
            res.status(404).json({ error: 'Movimientos no encontrado: ' + error });
        }
    }   
    
}

export default new InventarioController();