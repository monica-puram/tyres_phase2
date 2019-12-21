import React from 'react';
import HeaderNav from './components/HeaderNav';
import SignUpForm from './components/SignUpForm';

class SignUp extends React.Component{
    render(){
        return(
            <React.Fragment>
                <HeaderNav/>
                <div className = "container">
                <SignUpForm/>
                </div>
                
            </React.Fragment>
        )
    }
}

export default SignUp;