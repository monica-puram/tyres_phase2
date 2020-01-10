import React from 'react';
import Rating from 'react-rating';
import {IoIosStarOutline, IoIosStar} from 'react-icons/io';

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
						emptySymbol={<IoIosStarOutline/>}
  						fullSymbol={<IoIosStar/>}
  						onClick = {this.handleRatingChange}
  						style = {{"color": "orange"}}/>
			</div>

			)
	}
}

export default RatingFilter;