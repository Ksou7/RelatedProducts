import React from "react";

import StarRatings from "react-star-ratings";



export default class Cardproduct extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       
        <div className="card-product">
          <div>
          <i class="far fa-times-circle size:3x remove" ></i>
          
            <img className="card-image" src={this.props.outfit.image}></img>
          </div>
          <div className="card-category">
          {this.props.outfit.category}
            <a></a>
          </div>
          <div className="card-title">
          {this.props.outfit.name}
          </div>
          <span className="card-price">
         ${this.props.outfit.price}
          </span>
          <br />
          <br />
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
        </div>
      
      </div>
    );
  }
}
