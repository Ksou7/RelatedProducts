import React, { Component } from "react";
import Modalcomparison from "./Modalcomparison.jsx";
import StarRatings from "react-star-ratings";
// import Rating from "./Rating.jsx";
// import StarRatings from "react-star-ratings";
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
             
      <div className="card-product">
        <div>
        <i class="far fa-times-circle size:3x remove" ></i>
        
          <img className="card-image" src={this.props.product.url.url}></img>
        </div>
        <div className="card-category">
          <a> {this.props.product.category}</a>
        </div>
        <div className="card-title">
        
        {this.props.product.name}
        <span className="card-price">
        <br />
       $  {this.props.product.default_price}
        <br />
        </span>
        <span>
        <StarRatings
        rating={(5)}
        starRatedColor="orange"
        starDimension="15px"
        starSpacing="1px"
        numberOfStars={5}
        name="rating"
      />
      </span>
       </div>
      
      </div>
      
      </div>
    );
  }
}
