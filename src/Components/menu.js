import React, { Component } from 'react';
import logo from '../LogoRojo.png';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';



class Menu extends Component {
    render(){
        return(
            <div className="wrapper">
                <header>
                    <nav className="borde">
                        <div className="menu-icon">                           
                            <i className="fa fa-bars fa-2x"></i>
                        </div>                         
                        <div className="logo">   
                                                 
                            {/* <img src={logo} alt="logo" />*/}
                        </div>  
                        <div className="menu">
                            <ul>
                                <li><a>Home</a></li> 
                                <li><a>Productos</a></li> 
                                <li><a>Clientes</a></li> 
                                <li><a>Usuarios</a></li>
                            </ul> 
                        </div> 
                    </nav> 
                </header> 
            </div>  
        )
    }
}
export default Menu;





















{/* <nav className="navbar navbar-dark bg-dark">
<a href="" className="text-white">
    Mi menu
</a>
</nav> */}