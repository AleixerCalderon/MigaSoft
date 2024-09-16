import BodegaRepository from '../repositories/bodegaRepository.js';

class BodegaService {
    async getAllBodegas() {
        return await BodegaRepository.getAllBodegas();
    };
    async addBodega(bodega)  {
        return await BodegaRepository.addBodega(bodega);
    };

    async updateBodega(id, data) {
        return await BodegaRepository.updateBodega(id, data);
    }
    async deleteBodega(id) {
        return await BodegaRepository.deleteBodega(id);
    }
}
export default new BodegaService();