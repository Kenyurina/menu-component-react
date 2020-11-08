import React, { Component } from 'react';
import './App.css';
import Menu from './Components/menu';
import List from './Components/list';
import Form from './Components/form-prod';
import Agregar from './Components/agregar';
import { Producto } from './product.json';
import { Route, Router } from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Producto
    }
  }

  render() {
    const Producto = this.state.Producto.map((prd, i) => {
      return (
        <div className="" key={prd.titulo}>
          <h3>{prd.titulo}</h3>
        </div>
      )
    })
    return (
      <div className="App">      
          <Menu />
          <Form />
      </div>
    );
  }
}




// react muestra los datos almacenandolos temporalmente en memoria
// constructor(): el constructor es un metodo que se ejecuta a penas el componente es creado, incluso antes de render
// super(): ejecutarlo super para poder heredar toda la funcionalidad que nos trae el componente de react
// state: es el estado de los datos en una aplicacion de react












// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Bienvenidos
//          </p>
//       </header>
//     </div>
//    );
//  }


export default App;