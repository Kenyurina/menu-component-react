import Axios from 'axios';
import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      lst: []
    }
  }

  componentDidMount() {
    this.getProd()
  }

  getProd = async () => {
    const res = await Axios.get("http://172.16.0.151:4000/api/product")
    this.setState({ lst: res.data })
    console.log(this.state);
  }


  render() {

    const Producto = this.state.lst.map((prd, i) => {
      return (
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" key={prd.id}>
          <div className="card">
            <div className="prod">
              <img src="http://172.16.0.151:4000/static/img/hap_ac_lite.png" className="img-responsive" alt={prd.foto1} />
              <h5> USD {prd.precio} </h5> 
              <h5> {prd.nombre} </h5>
              <p> {prd.descripcion} </p> 
            </div>           
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            {Producto}
          </div>
        </div>
      </div>
    );
  }
}

export default List;


