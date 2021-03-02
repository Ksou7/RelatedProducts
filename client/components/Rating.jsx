import React from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";
export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingdata: [],
    };
  }

  componentDidMount() {
    axios
      .get("/reviews/11006")
      .then((res) => {
        this.setState({
          ratingdata: res.ratingdata,
        });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <StarRatings
          rating={5}
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
