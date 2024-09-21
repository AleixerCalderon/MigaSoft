import React, { useEffect, useState } from 'react';

const TrasladoDetalles = ({ traslado }) => {

    return (
       
                <div >
                    <div >
                        <h3>Detalles del Traslado</h3>
                    </div>
                    <div >
                        <h6><strong>ID Traslado:</strong> {traslado.id}</h6>
                        <h6><strong>Bodega Origen:</strong> {traslado.BodegaOrigen.nombre}</h6>
                        <h6><strong>Bodega Destino:</strong> {traslado.BodegaDestino.nombre}</h6>

                        <h4>Productos en el Traslado:</h4>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>ID Lote</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {traslado.Detalles.map((detalle) => (
                                    <tr key={detalle.idLote}>
                                        <td>{detalle.idLote}</td>
                                        <td>{detalle.Lote.Producto.nombre}</td>
                                        <td>{detalle.Cantidad}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


    );
};

export default TrasladoDetalles;