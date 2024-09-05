import { Bodegas, Inventario, Lotes, Productos } from "../models/index.js";

class InventarioRepository {
    async getAllInventario() {
        return await Inventario.findAll({
            include: [
                {
                    model: Bodegas,
                    as: 'Bodega',
                    attributes: ['nombre'],
                },
                {
                    model: Lotes,
                    as: 'Lote',
                    attributes: ['CodigoLote'],
                    include: {
                        model: Productos,
                        as: 'Producto',
                        attributes: ['nombre', 'descripcion', 'PrecioUnitario', 'PrecioVenta']
                    }
                }
            ]
        });
    }
    async getInventarioById(id) {
        return await Inventario.findAll({
            where: {idBodega: id}, 
            include: [
                {
                    model: Bodegas,
                    as: 'Bodega',
                    attributes: ['nombre'],
                },
                {
                    model: Lotes,
                    as: 'Lote',
                    attributes: ['CodigoLote'],
                    include: {
                        model: Productos,
                        as: 'Producto',
                        attributes: ['nombre', 'descripcion', 'PrecioUnitario', 'PrecioVenta']
                    }
                }
            ]
        });
    }
}
export default new InventarioRepository();