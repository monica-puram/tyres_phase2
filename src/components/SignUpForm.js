import React from 'react';
import {Form, Button,Col, Modal} from 'react-bootstrap';
import { Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
//import SignUpAlert from './SignUpAlert';
import ModalComponent from './ModalComponent';
import SignUpAlert from './SignUpAlert';
import '../css/signUp.css';

class SignUpForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			displayAlert: false,
			success : false,
			modalShow: false
		}
		this.toggleModal = this.toggleModal.bind(this);
		
	}
	toggleModal = () => {
		var modalRoot = document.getElementById('modal-root');
		var child = document.querySelector("#modal-root > div");
		modalRoot.removeChild(child);
		//document.getElementById('modal-root').removeChild(document.getElementsByClassName('modalChild'));
		this.setState({
		   modalShow: false
		})
	 };
    
    render(){
		
		let validationSchema = Yup.object().shape({
			firstName: Yup.string().min(3, <p className="errField">Must have atleast 3 characters</p>).max(255, <p className="errField">Must be shorter than 255 characters</p>).required(<p className="errField">First name is mandatory</p>),
			lastName: Yup.string().min(1, <p className="errField">Must have atleast a character</p>).max(255, <p className="errField">Must be shorter than 255 characters</p>).required(<p className="errField">Last name is mandatory</p>),
			email: Yup.string().email(<p className="errField">Must be a valid email address</p>).max(255, <p className="errField">Must be shorter than 255 characters</p>).required(<p className="errField">Email address is mandatory</p>),
			password: Yup.string().min(8, <p className="errField">Length of password must be minimum 8</p>).max(15,<p className="errField">Password cannot be more than 15 characters</p>).required(<p className="errField">Password is mandatory</p>),
			confirmPassword: Yup.string().min(8, <p className="errField">Length of password must be minimum 8</p>).max(15,<p className="errField">Password cannot be more than 15 characters</p>).required(<p className="errField">Password is mandatory</p>)
			.test('passwords-match', 'Passwords must match ya fool', function(value) {
				return this.parent.password === value;
			  }),
			
			city: Yup.string().required(<p className="errField">City is mandatory</p>),
			zipCode:Yup.string().matches(/^[0-9]*$/).length(6, <p>Zip Code must be 6 digits</p>)
		  })
		  
		  
        return(
			<div>
				{
					(this.state.displayAlert && this.state.success && this.state.modalShow) ?
						
							<ModalComponent modalShow = {this.state.modalShow} as = {Modal}
								
								show = {this.state.modalShow}
								variant = 'success'
								aria-labelledby="contained-modal-title-vcenter"
								centered
							>
								<div className = 'modalComponent'>
								<Modal.Header style = {{backgroundColor: 'darkseagreen'}}>
								   Success!
								</Modal.Header>
								<Modal.Body>
								
								<p>
									Registered successfully
								</p>
								</Modal.Body>
								<Modal.Footer>
									<Button onClick={this.toggleModal}>Close</Button>
								</Modal.Footer>
								</div>
							</ModalComponent>
						
					
					:(this.state.displayAlert && !this.state.success && this.state.modalShow) ?
					<ModalComponent modalShow = {this.state.modalShow} as = {Modal}
								className = 'modalComponent'
								show = {this.state.modalShow}
								variant = "danger"
								aria-labelledby="contained-modal-title-vcenter"
								centered
							>
								<div className = 'modalComponent'>
								<Modal.Header style = {{backgroundColor: "indianred"}}>
								   Failed!
								</Modal.Header>
								<Modal.Body>
								
								<p>
									This email is already registered. Please use another email address!
								</p>
								</Modal.Body>
								<Modal.Footer>
									<Button onClick={this.toggleModal}>Close</Button>
								</Modal.Footer>
								</div>
							</ModalComponent>
					: null
				}
			<Formik
				initialValues={{ firstName: '', lastName:'', email: '',password: '',confirmPassword:'', address1: '',address2:'',city:'',state:'',  zipCode:''}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setTimeout(() => {
					
					setSubmitting(false);
					console.log(values);
					axios.post('http://localhost:3001/newUser',values)
						.then(response=>{
							if(response.data ==="Duplicate emails"){
								this.setState({
									displayAlert : true,
									success : false,
									modalShow: true
								});
								
								console.log("Duplicate emails", this.state.displayAlert, this.state.success);
							}
							else if(response.data ==="Successfully inserted!"){
								this.setState({
									displayAlert: true,
									success: true,
									modalShow: true
								});
								resetForm(true);
								console.log("Different emails", this.state.displayAlert, this.state.success);
							}
						})
						.catch(error =>{
							console.log(error);
						})
					}, 500);
				}}
				>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
				}) => (
            <Form onSubmit = {handleSubmit}>
				  	<Form.Row>
					    <Form.Group as={Col} sm ="12" md = "12" lg = "6" xl = "6"  controlId="firstName">
					      <Form.Label>First Name</Form.Label>
						  <Form.Control 
						  name = "firstName" 
						  value = {values.firstName} 
						  onBlur={handleBlur} 
						  type="text" 
						  placeholder="First name" 
						  onChange = {handleChange}
						  className={errors.firstName && touched.firstName ? "has-error" : "inputs"}
						   />
						   {errors.firstName && touched.firstName && errors.firstName}
					    </Form.Group>

					    <Form.Group as={Col} sm ="12" md = "12" lg = "6" xl = "6" controlId="lastName">
					      <Form.Label>Last Name</Form.Label>
						  <Form.Control 
						   name="lastName"
						   type="text" 
						   value = {values.lastName} 
						   placeholder="Last name" 
						   onChange = {handleChange}
						   onBlur = {handleBlur} />
						   {errors.lastName && touched.lastName && errors.lastName}
					    </Form.Group>
					  </Form.Row>
					  <Form.Row>
					    <Form.Group as={Col} sm ="12" md = "12" lg = "4" xl = "4" controlId="formGridEmail">
					      <Form.Label>Email</Form.Label>
						  <Form.Control 
						   type="email" 
						   name = "email"
						   value = {values.email} 
						   placeholder="Enter email"
						   onChange = {handleChange}
						   onBlur = {handleBlur}
						    />
							{errors.email && touched.email && errors.email}
					    </Form.Group>

					    <Form.Group as={Col} controlId="formGridPassword">
					      <Form.Label>Password</Form.Label>
						  <Form.Control
						   type="password" 
						   name = "password" 
						   value = {values.password} 
						   placeholder="Password" 
						   onChange = {handleChange}
						   onBlur = {handleBlur} />
						   {errors.password && touched.password && errors.password}
					    </Form.Group>

					    <Form.Group as={Col} controlId="formGridPassword">
					      <Form.Label>Confirm Password</Form.Label>
						  <Form.Control
						   type="password" 
						   name = "confirmPassword" 
						   placeholder="Password" 
						   onChange = {handleChange}
						   onBlur = {handleBlur}
						   value = {values.confirmPassword} 
						    />
						   {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
					    </Form.Group>
					  </Form.Row>

					  <Form.Group controlId="formGridAddress1">
					    <Form.Label>Address</Form.Label>
						<Form.Control
						 type = "text"
						 placeholder="Enter address"
						 value = {values.address1}
						 name = "address1"
						 onChange = {handleChange}
						 onBlur = {handleBlur} />
						 {errors.address1 && touched.address1 && errors.address1}
					  </Form.Group>

					  <Form.Group controlId="formGridAddress2">
					    <Form.Label>Address 2</Form.Label>
					    <Form.Control
						 type = "text"
						 placeholder="Apt/Suite"
						 value = {values.address2}
						 name = "address2"
						 onChange = {handleChange}
						 onBlur = {handleBlur} />
						 {errors.address2 && touched.address2 && errors.address2}
					  </Form.Group>

					  <Form.Row>
					    <Form.Group as={Col} controlId="formGridCity">
					      <Form.Label>City</Form.Label>
					      <Form.Control
							type = "text"
							placeholder="City"
							value = {values.city}
							name = "city"
							onChange = {handleChange}
							onBlur = {handleBlur} />
							{errors.city && touched.city && errors.city}
					    </Form.Group>

					    <Form.Group as={Col} controlId="formGridState">
					      <Form.Label>State</Form.Label>
						  <Form.Control 
						   as="select"
						   value = {values.state}
							name = "state"
							onChange = {handleChange}
							onBlur = {handleBlur}
							
						   >
					        <option></option>
					        <option>Indiana</option>
					        <option>Texas</option>
					        <option>California</option>
					      </Form.Control>
						  {errors.state && touched.state && errors.state}
					    </Form.Group>

					    <Form.Group as={Col} controlId="formGridZip">
					      <Form.Label>Zip</Form.Label>
					      <Form.Control 
						  type = "text"
						  name = "zipCode"
						  value = {values.zipCode}
						  onChange = {handleChange}
						  onBlur = {handleBlur} />
						  {errors.zipCode && touched.zipCode && errors.zipCode}
					    </Form.Group>
					  </Form.Row>

					  <Form.Group id="formGridCheckbox">
					    <Form.Check type="checkbox" label="Check me out" />
					  </Form.Group>

					  <Button variant="primary" type="submit" disabled={isSubmitting}>
					    SignUp
					  </Button>
					</Form>
					
				)}
				
				</Formik>
				
				</div>
        )
    }
}

export default SignUpForm;