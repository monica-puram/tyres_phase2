import React from 'react';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import AboutUsBody from './components/AboutUsBody';

class About extends React.Component{
	render(){
		return(
			<React.Fragment>
				<HeaderNav/>
				<AboutUsBody/>
				<Footer/>
			</React.Fragment>
			)
	}
}

export default About;