import React from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";
export default class Rating extends React.Component {
  constructor(props) {
    super(props)
this.state={
  ratingdata:{}
}
  }

  // componentDidMount() {
  //   console.log("jrjzjdzz");
  //   axios
  //     .get(`/api/products/11050`)
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({
  //         ratingdata: response.data.rating
  //       });
  //       console.log(response.data.rating);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  

  render() {
    console.log(this.state.ratingdata);
//     var result = 0;
//     var rating = this.props.rating
// rating
//       .map((element) => {
//         result += element.rating;
//       })
  //  var total=result/rating
      return(
        <div>
          <StarRatings
            rating={0.5}
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
