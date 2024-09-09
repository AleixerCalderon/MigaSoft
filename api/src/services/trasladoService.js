import TrasladoRepository from '../repositories/trasladoRepository.js';

class TrasladoService {
    async addTraslado(traslado, detalles) {
        return await TrasladoRepository.addTraslado(traslado, detalles);
    };
    // async getAllTraslados() {
    //     return await TrasladoRepository.getAllTraslados();
    // };
}
export default new TrasladoService();