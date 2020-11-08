import React, { Component } from 'react';

class Agregar extends Component{
    render(){
        return(
            <div className="container">
                <h1>Agregar productos</h1>
                <form>
                    <div className="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="email" className="form-control" id="nombre" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-group">
                        <label for="textarea">Descripcion</label>
                        <textarea className="form-control" id="textarea" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="precio">Precio</label>
                        <input type="email" className="form-control" id="precio" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-group">
                        <label for="File1">Foto 1</label>
                        <input type="file" className="form-control-file" id="File1"></input>
                    </div>
                    <div className="form-group">
                        <label for="File2">Foto 2</label>
                        <input type="file" className="form-control-file" id="File2"></input>
                    </div>
                    <div className="form-group">
                        <label for="File3">Foto 3</label>
                        <input type="file" className="form-control-file" id="File3"></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </form>
            </div>

        )
    }
}
export default Agregar;