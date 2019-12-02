import React from 'react';
import {Navbar, Nav, Dropdown, Button, ButtonGroup} from 'react-bootstrap';
import { IoIosHome } from 'react-icons/io';
import "../css/headerNav.css";

class HeaderNav extends React.Component{
	constructor(props){
		super(props);
	}
	render(){ 
		return(
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					  		<Navbar.Brand href="/home">SM Tyres</Navbar.Brand>
							  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
							  <Navbar.Collapse id="responsive-navbar-nav">
							    <Nav className="mr-auto">
							      <Nav.Link href="/home">Home <IoIosHome/></Nav.Link>
							      <Dropdown as={ButtonGroup}  >
								    <Button as = "a" className = "dropdown" href = "/products">Products</Button>
								    <Dropdown.Toggle className = "dropdown" split id="dropdown-custom-2" />
								    <Dropdown.Menu>
								      <Dropdown.Item href = "/products/2-wheeler">2 Wheeler</Dropdown.Item>
								      <Dropdown.Divider />
								      <Dropdown.Item href = "/products/3-wheeler">3 Wheeler</Dropdown.Item>
								      <Dropdown.Divider />
								      <Dropdown.Item href = "/products/4-wheeler">4 Wheeler</Dropdown.Item>
								    </Dropdown.Menu>
								  </Dropdown>
							      <Nav.Link href="/About">About</Nav.Link>
							      <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
							    </Nav>
							  </Navbar.Collapse>
					  	
					</Navbar>
				
			)
	}
}

export default HeaderNav;