import React from 'react';
import ThreeColumnGrid from './ThreeColumnGrid';
import {Container} from 'react-bootstrap';

class HomeBody extends React.Component{
	render(){
		return(
			<React.Fragment>
				<Container>
					<ThreeColumnGrid/>
				</Container>
			</React.Fragment>
			)
	}
}


export default HomeBody;