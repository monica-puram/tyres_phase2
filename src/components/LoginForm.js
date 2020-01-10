import React from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: this.props.isLoggedIn
        }
        
    }
    
    handleSubmit(e){
        e.preventDefault();
        var values = this.state;
        axios.post('http://localhost:3001/signin',values)
            .then(response=>{
                if(response.data.success === true){
                    sessionStorage.loginToken = response.data.tokenId;
                    sessionStorage.userName = response.data.userName;
                    this.setState({isLoggedIn: true});
                    this.props.handleLogin(this.state.isLoggedIn);
                }
                    
                else
                    console.log("failed to login!");
            }).catch(error =>{
                console.log(error);
            })
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });  
    }
    render(){
        return(
            <Form onSubmit = {this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name = 'email' onChange = {this.handleChange} value = {this.state.email} placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name = 'password' onChange = {this.handleChange} value = {this.state.password} placeholder="Password" required />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember my password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>Not a member? Please <a href = "/signup">Sign up</a></p>
                <p><a href = '#'>Forgot Password</a></p>
            </Form>
        )
    }
}

export default LoginForm;