import React from 'react';
import HeaderNav from './components/HeaderNav';
import LoginForm from './components/LoginForm';
import { Container, Row, Col } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(isLoggedIn){
        if(isLoggedIn!==null){
            this.setState({
                isLoggedIn: isLoggedIn
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <HeaderNav/>
                {
                    (sessionStorage.loginToken == null)?
                        <Container>
                        <Row>
                            <Col sm="12" md="12" lg="6" xl="6" style={{ "margin": "auto" }}>
                                <LoginForm isLoggedIn = {this.state.isLoggedIn} handleLogin = {this.handleLogin} />
                            </Col>
                        </Row>
                        </Container>
                        :
                        <h3>
                            You're already logged in! <br/>
                            Explore our website and enjoy shopping! <br/>
                            <a href = '/home'>Home</a>
                        </h3>

                }
                
                


            </React.Fragment>

        )
    }
}

export default Login;