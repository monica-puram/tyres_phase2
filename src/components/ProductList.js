import React from 'react';
import data from '../json/products.json';
import {Card, Button} from 'react-bootstrap';
import Rating from 'react-rating';
import ProductsPagination from './ProductsPagination';

class ProductList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			productList: [],
			error: '',
			currentPage :1,
			postsPerPage : 12
		}
	}
	componentDidMount(){
		let url = new Request('http://localhost:3000/products.json');
		fetch(url)
		.then(function(response){
			return response.json();
			}
		)
		.then((result) => {
			console.log(result);
          this.setState({
            productList: result
          })
      })
		.catch(error => {
			this.setState(error);
		})
	}

	render(){ 

		//Category
		const category = this.props.category;
		console.log(category);

		const price = this.props.price;
		const rating = this.props.rating;
		let totalPosts = 0;
		let tempArr = this.state.productList;
		if(category!=null){
			tempArr = tempArr.filter((item)=> (item.category == category));
		}

		if(rating !=0){
			tempArr = tempArr.filter((item)=> (item.rating==rating));
		}
		if(price !=0 && tempArr.length > 0){
			tempArr = tempArr.filter((item)=> (item.price.substring(1,price.length) <= price));
		}
		const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
		const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
		let currentPosts=[];
		if(tempArr.length != 0) {
			 currentPosts = tempArr.slice(indexOfFirstPost,indexOfLastPost);
			 totalPosts = tempArr.length;	
		} 	
		if(rating ==0 && price ==0 && category == null){
			currentPosts = this.state.productList.slice(indexOfFirstPost,indexOfLastPost);
			totalPosts = this.state.productList.length;
		}

		const paginate= (pageNumber) => {
			this.setState({
				currentPage :pageNumber
			})
		}
		return(
			<div style = {{"minHeight": "500px"}}>
				<h3>Products List:</h3>
				<ul>
					{
						currentPosts.length>0 ?
						currentPosts.map((item)=>
							<Card as = "li" key = {item.id} style = {{"display": "inline-block", "width": "25%", "margin": "10px" }}>
								<Card.Img variant="top" src={item.image} />
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
									<Card.Text>
									    {item.price}
									</Card.Text>
									<Rating initialRating = {item.rating}
											readonly 
									      	emptySymbol="glyphicon glyphicon-star-empty"
				  							fullSymbol="glyphicon glyphicon-star"
				  							style = {{"color": "orange"}}/>
				  					<Button variant="success">Add to cart</Button>
								</Card.Body>									    
							</Card>
						)
						: <h1>No products found</h1>
					}	  
				</ul>
				<ProductsPagination 
					postsPerPage = {this.state.postsPerPage} 
					totalPosts = {totalPosts} 
					paginate = {paginate}/>
			</div>
			
			)
	}
}

export default ProductList;