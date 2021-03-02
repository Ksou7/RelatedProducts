import React, { Component } from "react";
import Modalcomparison from './Modalcomparison.jsx'
import Rating from "./Rating.jsx"


export default class Product extends Component {
  constructor(props) {
    super(props);
   
    this.state= {
      comparison: false
    }
  }

  CompClick() {
    this.setState({
      comparison:true
    })
    console.log("clicked");
  }


  render() {
    return (
      <div>
      {!this.state.comparison ? (<div></div>) : <Modalcomparison relatedProd={this.props.product}/> }
      <div className="card-product">
        <div>
          
      <span className="far fa-star card-star-top" onClick = {this.CompClick.bind(this)}  ></span>
          <img className="card-image" src={this.props.product.url.url}></img>
        </div>
        <div className="card-category">
          <a>{this.props.product.category}</a>
        </div>
        <div className="card-title">{this.props.product.name}</div>
        <span className="card-price">${this.props.product.default_price}</span>
        <br />
        <br />
        <Rating/>
      </div>
      
      </div>
    );
  }
}
