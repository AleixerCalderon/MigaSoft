import InventarioRepository from '../repositories/InventarioRepository.js';

class InventarioService {
    async getAllInventario() {
        return await InventarioRepository.getAllInventario();
    };

    async getInventarioById (id) {
        return await InventarioRepository.getInventarioById(id);
    };
    async getMovimientosInventario() {
        return await InventarioRepository.getMovimientosInventario();
    };

}
export default new InventarioService();