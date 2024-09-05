import { Bodegas , TiposBodega } from "../models/index.js";

class BodegaRepository {
    async getAllBodegas() {
        return await Bodegas.findAll({
        include:[
          {
            model:TiposBodega,
            as:'tiposBodega',
            attributes:['nombre'],
          }
        ]
    });
      }
}
 export default new BodegaRepository();