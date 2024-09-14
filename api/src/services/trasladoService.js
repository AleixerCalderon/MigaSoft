import TrasladoRepository from '../repositories/trasladoRepository.js';

class TrasladoService {
    async addTraslado(traslado, detalles) {
        return await TrasladoRepository.addTraslado(traslado, detalles);
    };
    async getTrasladoById(id) {
        return await TrasladoRepository.getTrasladoById(id);
    };
    async getTraslados() {
        return await TrasladoRepository.getTraslados();
    };
    async getTrasladoXBodegaOrigen(id) {
        return await TrasladoRepository.getTrasladoXBodegaOrigen(id);
    };
    async getTrasladoXBodegaDestino(id) {
        return await TrasladoRepository.getTrasladoXBodegaDestino(id);
    };
    // async deleteTraslado(id) {
    //     return await TrasladoRepository.deleteTraslado(id);
    // };
    async confirmarTraslado(idTraslado) {
        return await TrasladoRepository.confirmarTraslado(idTraslado);
    };

    
}
export default new TrasladoService();