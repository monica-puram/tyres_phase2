import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../css/priceFilter.css';

class PriceFilter extends React.Component{
	constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }
  handlePriceChange(price){
  	this.setState({
  		value: price
  	});
  	this.props.intermediateFunction(null ,price);
  }
	render(){
		return(
			<div className = "priceFilter">
				<span>Select Price Range:</span>
				<InputRange 
			        maxValue={100}
			        minValue={0}
			        value={this.state.value}
			        onChange={this.handlePriceChange}
			         />
		    </div>

			)
	}
}

export default PriceFilter;