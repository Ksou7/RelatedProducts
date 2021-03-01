import StarRatings from './react-star-ratings';
 
export default class Star extends Component {
    constructor(props){
        super(props)

    }
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
        
      return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        />
      );
    }
}
 
 
class Bar extends Component {
  render() {
    // aggregateRating = 2.35;
    return (
      <StarRatings
        rating={2.403}
        starDimension="40px"
        starSpacing="15px"
      />
    );
  }
}