import BodegaService from "../services/bodegaService.js";

class BodegaController {
    async getAllBodegas(req, res) {
        try {
            const bodegas = await BodegaService.getAllBodegas();
            res.json(bodegas);
        } catch (error) {
            res.status(404).json({ error: 'Bodegas no encontradas' });
        }
    }
    // getAllBodegas = async(req,res)=>{
    //     try{
    //         const bodegas = await this.bodegaService.getAllBodegas();
    //         res.status(200).json(bodegas);
    //     } catch (error) {
    //         res.status(500).json({error: error.message});
    //     }
    // }
    async addBodega (req, res){
        try {
            const bodega = await BodegaService.addBodega(req.body);
            res.status(200).json(bodega);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    async updateBodega(req, res) {
        try {
            const bodega = await BodegaService.updateBodega(req.params.id, req.body);
            res.json(bodega);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async deleteBodega(req, res) {
        try {
            await BodegaService.deleteBodega(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new BodegaController();