import React from "react";
import Carousel from "react-elastic-carousel";
import Cardoutfit from "./Cardoutfit.jsx";
import data from "../data.json";

export default class Myoutfit extends React.Component {
  constructor(props) {
    super(props);
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
        <h1>YOUR OUTFIT</h1>
        <Carousel breakPoints={breakPoints}>
          {data.map((outfit, index) => {
            return <Cardoutfit outfit={outfit} key={index} />;
          })}
        </Carousel>
      </div>
    );
  }
}
