import trasladoService from '../services/trasladoService.js';

class TrasladoController {
    async addTraslado(req, res) {
        const {idBodegaOrigen, idBodegaDestino, descripcion, detalles} = req.body;
        try {
            const traslado = await trasladoService.addTraslado(
                {idBodegaOrigen, idBodegaDestino, descripcion}, 
                detalles
            );
            res.json(traslado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getTrasladoById(req, res) {
        try {
            const traslado = await trasladoService.getTrasladoById(req.params.id);
            res.json(traslado);
        } catch (error) {
            res.status(404).json({ error: 'Traslado no encontrado Error: ' + error });
        }
    }
    async getTraslados(req, res) {
        try {
            const traslados = await trasladoService.getTraslados();
            res.json(traslados);
        } catch (error) {
            res.status(404).json({ error: 'Traslados no encontrados Error: ' + error });
        }
    }
    async getTrasladoXBodegaOrigen(req, res) {
        try {
            const traslado = await trasladoService.getTrasladoXBodegaOrigen(req.params.id);
            res.json(traslado);
        } catch (error) {
            res.status(404).json({ error: 'Traslado no encontrado Error: ' + error });
        }
    }
    async getTrasladoXBodegaDestino(req, res) {
        try {
            const traslado = await trasladoService.getTrasladoXBodegaDestino(req.params.id);
            res.json(traslado);
        } catch (error) {
            res.status(404).json({ error: 'Traslado no encontrado Error: ' + error });
        }
    }
    async confirmarTraslado(req, res) {
        try {
            const traslado = await trasladoService.confirmarTraslado(req.params.id);
            res.json(traslado);
        } catch (error) {
            res.status(404).json({ error: 'Traslado no encontrado Error: ' + error });
        }
    }   
    
}
export default new TrasladoController();
