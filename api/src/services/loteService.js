import LoteRepository from '../repositories/loteRepository.js';

class LoteService {
    async getLoteById(id) {
        return await LoteRepository.getLoteById(id);
    }
    async getLoteByNombreOCodigo(nombreOCodigo) {
        return await LoteRepository.getLoteByNombreOCodigo(nombreOCodigo);
    }    
    async addLote(id, data) {
        return await LoteRepository.addLote(id, data);
    }
    async updateLote(id, data) {
        return await LoteRepository.updateLote(id, data);
    }
    async deleteLote(id) {
        return await LoteRepository.deleteLote(id);
    }
    async getLoteAll() {
        return await LoteRepository.getLoteAll();
    }        
}
export default new LoteService();