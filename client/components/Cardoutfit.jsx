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
            <a> {this.props.outfit.category}</a>
          </div>
          <div className="card-title">
          {this.props.outfit.name}
          
          <span className="card-price">
        
          <br />
         ${this.props.outfit.price}
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
