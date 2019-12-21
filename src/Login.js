import React from 'react';
import HeaderNav from './components/HeaderNav';
import LoginForm from './components/LoginForm';
import { Container, Row, Col } from 'react-bootstrap';

class Login extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <React.Fragment>
                <HeaderNav/>
                        <Container>
                            <Row>
                                <Col sm ="12" md = "12" lg = "6" xl = "6" style = {{"margin": "auto"}}>
                                    <LoginForm/>
                                </Col>
                            </Row>
                        </Container>
                        
                
            </React.Fragment>
            
        )
    }
}


export default Login;