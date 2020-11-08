import React, { Component } from 'react';

class Form extends Component{
    render(){
        return(
            <div className="container">
                <h1>Lista de Productos</h1>
                <button type="button" class="btn btn-success">Agregar</button>
                <table className="table table-striped ">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Foto 1</th>
                            <th scope="col">Foto 2</th>
                            <th scope="col">Foto 3</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody className="thead-dark">
                        <tr>
                            <th scope="row">1</th>
                            <td>Iphone XII</td>
                            <td>Sin cargador, sin audifonos</td>
                            <td>1.500 USD</td>
                            <td>Foto 1</td>
                            <td>Foto 2</td>
                            <td>Foto 3</td>
                            <td>
                                <button type="button" class="btn btn-success">Editar</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}
export default Form;

// Nombre
// Descripcion
// Precio 
// Cantidad
// Foto 1
// Foto 2
// Foto 3

