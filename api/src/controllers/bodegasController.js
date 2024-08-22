import BodegaService from "../services/bodegaService.js";

class BodegaController {
    constructor(){
        this.bodegaService = new BodegaService();
    }
    getAllBodegas = async(req,res)=>{
        try{
            const bodegas = await this.bodegaService.getAllBodegas();
            res.status(200).json(bodegas);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    addBodegas = async(req, res)=>{
        try {
            const bodega = await this.bodegaService.addBodega(req.body);
            res.status(200).json(bodega);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    getBodegaById = async(req,res)=>{
        try {
            const bodega = await this.bodegaService.getBodegaById(req.params.id, req.body);
            if(!bodega){
                return res.status(404).json({message: 'No se encuentra la bodega'});
            }
            res.status(200).json(bodega);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}

export default BodegaController;