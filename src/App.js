import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './LogoRojo.png';
import './App.css';
import Menu from './Components/menu';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Menu/>
      </div> 
    );
  }
}

















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