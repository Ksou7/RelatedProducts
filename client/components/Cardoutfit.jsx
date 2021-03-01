import React from "react";



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
          
            <img className="card-image" src="https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"></img>
          </div>
          <div className="card-category">
            <a>{this.props.outfit.name}</a>
          </div>
          <div className="card-title">{this.props.outfit.category}</div>
          <span className="card-price">
         ${this.props.outfit.price}
          </span>
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
      
      </div>
    );
  }
}
