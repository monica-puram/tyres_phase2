import React from 'react';
import Rating from 'react-rating';

class RatingFilter extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rating : this.props.rating
		};
		this.handleRatingChange=this.handleRatingChange.bind(this);
	}
	handleRatingChange(value) {
		this.setState({rating:value});
		this.props.intermediateFunction(value, null);

	}
	
	render(){
		return(
			<div className = "ratingFilter">
				<p>Select Rating:</p>
				<Rating initialRating={this.state.rating}
						emptySymbol="glyphicon glyphicon-star-empty"
  						fullSymbol="glyphicon glyphicon-star"
  						onClick = {this.handleRatingChange}
  						style = {{"color": "orange"}}/>
			</div>

			)
	}
}

export default RatingFilter;