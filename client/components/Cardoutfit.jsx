import React from "react";
import Rating from './Rating.jsx'



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
            <a></a>
          </div>
          <div className="card-title"></div>
          <span className="card-price">
         ${this.props.outfit.price}
          </span>
          <br />
          <br />
         <Rating/>
        </div>
      
      </div>
    );
  }
}
