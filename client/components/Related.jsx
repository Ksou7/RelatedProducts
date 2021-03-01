import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import Product from "./Product.jsx";
import Myoutfit from "./Myoutfit.jsx"

export default class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get(`/api/products/11006`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 1, itemsToShow: 2 },
      { width: 1, itemsToShow: 3 },
      { width: 1, itemsToShow: 4 },
    ];

    return (
    
      <Carousel breakPoints={breakPoints}>
        {this.state.data.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </Carousel>
     
    );
  }
 

}
