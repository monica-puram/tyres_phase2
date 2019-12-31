import React from 'react';
import {Navbar, Nav, Dropdown, Button, ButtonGroup, Form, FormControl, Row, Col} from 'react-bootstrap';
import { IoIosHome } from 'react-icons/io';
import { IoMdSearch } from 'react-icons/io';
import "../css/headerNav.css";

class HeaderNav extends React.Component{

	constructor(props) {
		super(props);
		this.state={

		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(e) {
		console.log("HandleSearch Event : ",e);
	}

	render() { 
		return(
				<Navbar collapseOnSelect expand="md xs" as = {Row} bg="dark" variant="dark">
						<Col md="2" sm = "12" xs="12">
							<Navbar.Brand className="navBrand" href="/home">SM Tyres</Navbar.Brand>
						</Col>
						<Col md="6" sm="6" xs="6">
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
								<Nav.Link href = "/login">Login/Sign Up</Nav.Link>
							</Nav>
							</Navbar.Collapse>
						</Col>
						<Col md="4" sm="6" xs="6">
							<Form inline>
							<FormControl className ="searchDiv" type="text" placeholder="Search"/>
							<Nav.Link href="/products" onClick={this.handleSearch} variant="outline-primary"><IoMdSearch /></Nav.Link>
							</Form>
						</Col>
				</Navbar>
			)
	}
}

export default HeaderNav;