import React from 'react';
import HeaderNav from './components/HeaderNav';
import ProductsBody from './components/ProductsBody';
import Footer from './components/Footer';

class Products extends React.Component{
	render()
	{
		console.log(JSON.stringify(this.props));
		return(
			<React.Fragment>
				<HeaderNav/>
				<ProductsBody category = {this.props.match.params.category}/>
				<Footer/>
			</React.Fragment>
			)

	}
}

export default Products;