import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import Product from "./Product.jsx";
import Myoutfit from "./Myoutfit.jsx"
import Modalcomparison from"./Modalcomparison.jsx"

export default class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  
  }
 
componentDidMount(){
  
     axios
    .get(`/api/products/11005`)
    .then((response) => {
  
      var data = response.data
      this.setState({
        data: data
      });
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  
  
  // console.log(this.state.data);
}


  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 1, itemsToShow: 2 },
      { width: 1, itemsToShow: 3 },
      { width: 1, itemsToShow: 4 },
    ];

    return (
    
    <div>
      <h1>RELATED PRODUCTS</h1>
      <Carousel breakPoints={breakPoints}>
        {this.state.data.map((product, index) => {
          return <Product product={product} key={index}  />;
          
        })}
      </Carousel>
     
  </div>
    );
  }

}

// var result = []
//     var ratingg = 0
//     var counter = 0
//     this.state.rating.map((el) => {
//       if (el.results.length === 0) {
//         result.push(0)
//         ratingg = 0
//         counter = 0
//       }
//       el.results.map((eel, i) => {
//         ratingg += eel.rating
//         counter += 1
//         if (counter === 5) {
//           result.push(ratingg)
//           ratingg = 0
//           counter = 0
//         }
//       })
//     })