import React from 'react';
import {Pagination} from 'react-bootstrap';

class ProductsPagination extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(this.props.totalPosts/this.props.postsPerPage); i++) {
			pageNumbers.push(i);
		}
		return(
			<Pagination>
				{
					pageNumbers.map((number)=>
						<Pagination.Item key = {number} onClick = {() => this.props.paginate(number)}>{number}</Pagination.Item>
					)	
				}
			</Pagination>
			)
	}
}
export default ProductsPagination;