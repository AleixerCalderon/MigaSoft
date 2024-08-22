import Bodega from '../models/bodega.js';
import db from '../utils/db.js';

class BodegaService {
    constructor() {
        this.bodega = new Bodega();
    }
    getAllBodegas = async () => {         
               
        return this.bodega.findAll();
    };
    addBodega = async (bodega) => {
        return this.bodega.add(bodega);
    };
    getBodegaById = async (id) => {
        return this.bodega.findById(id);
    };
}
export default BodegaService;