import React, { Component } from "react";
import StarRatings from "react-star-ratings";
export class Rating extends Component {
  render() {
    return (
      <div>
        <StarRatings
          rating={3}
          starRatedColor="rgb(80, 80, 80)"
          starDimension="15px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
      </div>
    );
  }
}

export default Rating;