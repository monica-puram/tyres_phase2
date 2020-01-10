import React from 'react';
import axios from 'axios';
import HeaderNav from './components/HeaderNav';


class Logout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginToken: sessionStorage.loginToken,
            isLoggedIn: true
        }
    }
    componentDidMount(){
        var values = {
            token : this.state.loginToken
        }
        axios.post('http://localhost:3001/logout',values)
            .then(response=>{
                if(response.data === true){
                    sessionStorage.clear();
                    this.setState({
                        isLoggedIn: false
                    })
                }
            }).catch(err=>{
                console.log(err);
            })
    }
    render(){
        return(
            <div>
                <HeaderNav/>
                {
                    (!this.state.isLoggedIn)?
                    <div style = {{textAlign: "center"}}>
                        <h3>Successfully logged out!</h3>
                    </div>
                    :null
                }
            </div>
               
        )
    }
}


export default Logout;