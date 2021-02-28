import React from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import Cardoutfit from "./Cardoutfit.jsx"

export default class Myoutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
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
        
         <Cardoutfit/>
        
      </Carousel>
    );
  }
}