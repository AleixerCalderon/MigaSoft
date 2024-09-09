import loteService from '../services/loteService.js';

class LoteController {
    async getLote(req, res) {
        try {
            const lote = await loteService.getLoteById(req.params.id);
            res.json(lote);
        } catch (error) {
            res.status(404).json({ error: 'Lote no encontrado Error: ' + error });
        }
    }
    
    async getLoteByNombreOCodigo(req, res) {
        try {
            const lote = await loteService.getLoteByNombreOCodigo(req.params.nombreOCodigo);
            console.log(req.params.nombreOCodigo);
            res.json(lote);
        } catch (error) {
            res.status(404).json({ error: 'Lote no encontrado Error: ' + error} );
        }
    }
    
    async updateLote(req, res) {
        try {
            const lote = await loteService.updateLote(req.params.id, req.body);
            res.json(lote);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async addLote(req, res) {
        try {
            const lote = await loteService.addLote(req.body);
            res.json(lote);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteLote(req, res) {
        try {
            await loteService.deleteLote(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
export default new LoteController();
