import React from 'react';
import Header from './components/Header';
import HomeBody from './components/HomeBody';
import Footer from './components/Footer';

class Home extends React.Component{
	render(){
		return(
			<React.Fragment>
				<Header/>
				
				<HomeBody/>
				 <Footer />
			</React.Fragment>
			)
	}
}

export default Home;