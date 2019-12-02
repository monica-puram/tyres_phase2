import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import Thumbnail1 from '../assets/images/thumbnail1.jpg';
import Thumbnail2 from '../assets/images/thumbnail2.jpg';
import Thumbnail3 from '../assets/images/crImage_2.jpg';
import '../css/threeColumnGrid.css';

class ThreeColumnGrid extends React.Component{
	render(){
		return(
			<CardGroup className = "twoColGrid">
				  <Card className = "card">
				    <a href= "/products/2-wheeler"><Card.Img variant="top" src={Thumbnail1} className = "d-block w-100" /></a>
				    <Card.Body>
				      <Card.Title>2 wheeler</Card.Title>
				      <Card.Text>
				        This is a wider card with supporting text below as a natural lead-in to
				        additional content. This content is a little bit longer.
				      </Card.Text>
				    </Card.Body>
			
				  </Card>
				  <Card className = "card">
				    <a href = "/products/3-wheeler"><Card.Img variant="top" src={Thumbnail2} className = "d-block w-100" /></a>
				    <Card.Body>
				      <Card.Title>3 wheeler</Card.Title>
				      <Card.Text>
				        This card has supporting text below as a natural lead-in to additional
				        content.{' '}
				      </Card.Text>
				    </Card.Body>
				   
				  </Card>
				  <Card className = "card">
				    <a href = "/products/4-wheeler"><Card.Img variant="top" src={Thumbnail3} className = "d-block w-100" /></a>
				    <Card.Body>
				      <Card.Title>4 wheeler</Card.Title>
				      <Card.Text>
				        This card has supporting text below as a natural lead-in to additional
				        content.{' '}
				      </Card.Text>
				    </Card.Body>
				   
				  </Card>
			
				</CardGroup>
			)
	}
}

export default ThreeColumnGrid;