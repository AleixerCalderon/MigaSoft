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

    async getTraslado(req, res) {
        try {
            const traslado = await trasladoService.getTrasladoById(req.params.id);
            res.json(traslado);
        } catch (error) {
            res.status(404).json({ error: 'Traslado no encontrado Error: ' + error });
        }
    }
    
    // async getTrasladoByNombre(req, res) {
    //     try {
    //         const traslado = await trasladoService.getTrasladoByNombre(req.params.nombre);
    //         res.json(traslado);
    //     } catch (error) {
    //         res.status(404).json({ error: 'Traslado no encontrado Error: ' + error} );
    //     }
    // }
    
    // async updateTraslado(req, res) {
    //     try {
    //         const traslado = await trasladoService.updateTraslado(req.params.id, req.body);
    //         res.json(traslado);
    //     } catch (error) {
    //         res.status(400).json({ error: error.message });
    //     }
    // }



    // async deleteTraslado(req, res) {
    //     try {
    //         await trasladoService.deleteTraslado(req.params.id);
    //         res.status(204).send();
    //     } catch (error) {
    //         res.status(400).json({ error: error.message });
    //     }
    // }
}
export default new TrasladoController();
