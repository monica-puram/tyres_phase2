import React from 'react';
import HeaderNav from './HeaderNav';
import Carousel from './Carousel'; 

class Header extends React.Component{
	render(){
		return(
			<React.Fragment>
				<HeaderNav/>
				<Carousel/>
			</React.Fragment>
			)
	}
}

export default Header;