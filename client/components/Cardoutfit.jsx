import React from "react";
<<<<<<< HEAD
// import Rating from './Rating.jsx'
import StarRatings from "react-star-ratings";
=======

import StarRatings from "react-star-ratings";

>>>>>>> 7b62dacd87eaccc47106e4dde8e200d81cd20305


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
<<<<<<< HEAD
            <a> {this.props.outfit.category}</a>
          </div>
          <div className="card-title">
          {this.props.outfit.name}
          
=======
          {this.props.outfit.category}
            <a></a>
          </div>
          <div className="card-title">
          {this.props.outfit.name}
          </div>
>>>>>>> 7b62dacd87eaccc47106e4dde8e200d81cd20305
          <span className="card-price">
        
          <br />
         ${this.props.outfit.price}
          <br />
<<<<<<< HEAD
          </span>
          <span>
          <StarRatings
          rating={(5)}
=======
          <div>
          <StarRatings
          rating={5}
>>>>>>> 7b62dacd87eaccc47106e4dde8e200d81cd20305
          starRatedColor="orange"
          starDimension="15px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
<<<<<<< HEAD
        </span>
         </div>
        
=======
        </div>
>>>>>>> 7b62dacd87eaccc47106e4dde8e200d81cd20305
        </div>
       
      </div>
    );
  }
}
