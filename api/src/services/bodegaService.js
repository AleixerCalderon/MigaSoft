import BodegaRepository from '../repositories/bodegaRepository.js';

class BodegaService {
    async getAllBodegas() {
        return await BodegaRepository.getAllBodegas();
    };
    // async addBodega(bodega)  {
    //     return await Bodega.add(bodega);
    // };
    // async getBodegaById (id) {
    //     return await Bodega.findById(id);
    // };
}
export default new BodegaService();