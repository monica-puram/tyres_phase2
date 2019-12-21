import React from 'react';
import {Form, Button} from 'react-bootstrap';

class LoginForm extends React.Component{
    render(){
        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
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