import db from "../utils/db.js";
class Bodega {    
    constructor(){
        this.Bodegas = [];
    }    
    findAll = async()=>{
        const query = 'select * from Bodegas';
        return new Promise((resolve,reject)=>{
            db.query(query, (err, results) => {
                if (err) {
                    reject(err);
                    } else {
                        resolve(results);
                    }                    
                }); 
            });
        //return this.Bodegas;
    }
    create = async(bodega)=>{
        const newBodega = {...bodega};
        this.Bodegas.push(newBodega);
        return newBodega;
    };
}
export default Bodega;