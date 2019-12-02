import React  from "react";
import {Container, Row, Col} from "react-bootstrap";
import Filters from "./Filters";
import ProductList from './ProductList';

class ProductsBody extends React.Component{
	constructor(props)
{
	super(props);
	this.state = {
		rating: 0,
		price:0
	}
	this.handleFilterValues = this.handleFilterValues.bind(this);
}	
handleFilterValues(rating, price) {
	if(rating != null) {
		this.setState({
		rating: rating
	});
	}
	if(price != null) {
		this.setState({
		price: price
	});	
	}
	
}
render(){
		return(
			<Container>
				<Row>
					<Col md = {2} lg = {2} xl = {3}>
						<Filters rating={this.state.rating} price = {this.state.price} handleFilterValues = {this.handleFilterValues}/>
					</Col>
					<Col sm = {12} md = {10} lg = {10} xl = {9}>
						<ProductList category = {this.props.category} rating = {this.state.rating} price = {this.state.price}/>
					</Col>
				</Row>
			</Container>
			)
	}
}

export default ProductsBody;