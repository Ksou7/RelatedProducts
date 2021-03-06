import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import Product from "./Product.jsx";
import Myoutfit from "./Myoutfit.jsx";
import Modalcomparison from "./Modalcomparison.jsx";

export default class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
     
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`http://165.22.24.57:3001/products/11005`);
      await this.setState({ data: response.data }, () => {console.log(this.state.data)});
    
    } catch (e) {
      console.log(e);
    }
  }


  
  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 1, itemsToShow: 2 },
      { width: 1, itemsToShow: 3 },
      { width: 1, itemsToShow: 4 },
    ];
    var result = [];
    var ratings = 0;
    var counter = 0;
    this.state.data.map((element) => {
   
      if (element.rating.length === 0) {
        result.push(0);
        ratings = 0;
        counter = 0;
      }
      element.rating.map((element, i) => {
        ratings += element.rating;
        counter += 1;
        if (counter === 5) {
          result.push(ratings);
          ratings = 0;
          counter = 0;
        }
      });
   
    });
    

    return this.state.data ? (
      <div>
       
        <Carousel breakPoints={breakPoints}>
          {this.state.data.map((product, index) => {
            return (
              <Product rates={result[index]} product={product} key={index} />
            );
          })}
        </Carousel>
      </div>
    ) : (
      <p>Loading Products ...</p>
    );
  }
}
