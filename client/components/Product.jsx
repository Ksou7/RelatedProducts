import React, { Component } from "react";
import axios from "axios";
import Related from "./Related.jsx";

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-product">
        <div>
          <span className="far fa-star card-star-top"></span>
          <img className="card-image" src={this.props.product.url.url}></img>
        </div>
        <div className="card-category">
          <a>{this.props.product.category}</a>
        </div>
        <div className="card-title">{this.props.product.name}</div>
        <span className="card-price">
          ${this.props.product.default_price}
        </span>{" "}
        <br />
        <br />
        <div className="card-star-rating">
          <i className="far fa-star card-star"></i>
          <i className="far fa-star card-star"></i>
          <i className="far fa-star card-star"></i>
          <i className="far fa-star card-star"></i>
          <i className="far fa-star card-star"></i>
        </div>
      </div>
    );
  }
}

{
  /* <div className='product-card'>
        <div className="ui card ">
          <i
            className="star outline icon card-star-top"
            style={{ float: "right" }}
          ></i>

          <img src={this.props.product.url.url}></img>

          <div className="content">
            <a className="header">{this.props.product.category}</a>
            <div className="meta">
              <span className="date"></span>
            </div>
            <div className="description">{this.props.product.name}</div>
            <a>${this.props.product.default_price}</a>
          </div>
          <div className="extra content">
            <i className="star outline icon"></i>
            <i className="star outline icon"></i>
            <i className="star outline icon"></i>
            <i className="star outline icon"></i>
            <i className="star outline icon"></i>
          </div>
        </div>
      </div> */
}
