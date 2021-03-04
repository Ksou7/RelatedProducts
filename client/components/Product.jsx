import React, { Component } from "react";
import Modalcomparison from "./Modalcomparison.jsx";
import StarRatings from "react-star-ratings";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comparison: false,
    };
  }

  CompClick() {
    this.setState({
      comparison: true,
    });
  }

  render() {
    console.log( "==========>" ,this.props.rates);
    return (
      <div>
      {!this.state.comparison ? (
        <div></div>
      ) : (
        <Modalcomparison comparisonproduct={this.props.product} />
      )}
      <div className="card-product" onClick={this.CompClick.bind(this)}>
        <div>
          <span
            className="far fa-star card-star-top"
          
<<<<<<< HEAD
          ></span>
          <img className="card-image" src={this.props.product.url.url}></img>
        </div>
        <div className="card-category">
          <a>{this.props.product.category}</a>
=======
         
        
          <div>
          <StarRatings
          rating={5}
          starRatedColor="orange"
          starDimension="15px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
        </div>
>>>>>>> 7b62dacd87eaccc47106e4dde8e200d81cd20305
        </div>
        <div className="card-title">{this.props.product.name}</div>
        <span className="card-price">
          ${this.props.product.default_price}
        </span>
        
       
      
        <div>
        <StarRatings
        rating={(rates/5)}
        starRatedColor="orange"
        starDimension="15px"
        starSpacing="1px"
        numberOfStars={5}
        name="rating"
      />
      </div>
      </div>
    </div>
    );
  }
}
