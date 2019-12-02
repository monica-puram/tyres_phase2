import React from "react";
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';
import '../css/filters.css';

class Filters extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rating: this.props.rating,
			price : this.props.price
		}
		this.intermediateFunction = this.intermediateFunction.bind(this);
	}
	intermediateFunction(rating,price){
			this.props.handleFilterValues(rating, price);
		} 

	render(){
		
		return(
			<div className = 'filters'>
				<PriceFilter price = {this.state.price} intermediateFunction = {this.intermediateFunction}/>
				<RatingFilter rating={this.state.rating} intermediateFunction = {this.intermediateFunction}/>
			</div>
			)
	}
}

export default Filters;