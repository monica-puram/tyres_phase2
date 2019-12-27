import React from 'react';
import HistoryOfUs from './HistoryOfUs';
import Testimonials from './Testimonials';
import SignUpAlert from './SignUpAlert';
import { Button } from 'react-bootstrap';
import  ModalComponent from './ModalComponent';

class AboutUsBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonials: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/testimonials.json")
        .then(res=> res.json())
        .then(data => this.setState({
            testimonials:data
        }))
    }

    render() {
        return(
            <div style={{marginTop: "50px"}}>
                <HistoryOfUs />
                <Testimonials testimonials = {this.state.testimonials}/>
                  
            </div>
        )
    }
}

export default AboutUsBody;