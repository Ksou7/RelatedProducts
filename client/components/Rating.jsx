import React from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";
export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }
  componentDidMount() {
    var result = 0;

    if (this.props.rating !== undefined && this.props.rating.length > 0) {
  
      for (var i = 0; i < this.props.rating.rating.length; i++) {
        result += 1 * this.props.rating[i].rating;
      }
      console.log(result);
      result = result / this.props.rating.rating.length;
    }

    this.setState({ rating: result });
  }

  render() {
    return (
      <div>
        <StarRatings
          rating={this.state.rating}
          starRatedColor="orange"
          starDimension="15px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
      </div>
    );
  }
}
