import React from 'react';
import {Modal, Spinner} from 'react-bootstrap';

class Testimonials extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayTestimonial : ""
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({
                displayTestimonial : this.props.testimonials[Math.floor(Math.random() * Math.floor(this.props.testimonials.length))]
            }),
            5000
          );
    }
   
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render(props) {
        let item=this.state.displayTestimonial;
        if(item) {
            return(
                <div>
                    <Modal.Dialog key={item.id}>
                        <Modal.Header>
                        <Modal.Title>{item.title}</Modal.Title>
                        </Modal.Header>
        
                        <Modal.Body>
                            <q>{item.review}</q>
                                 <br/>
                                 <h4 style={{float:"right"}}>-@{item.name}</h4>
                        </Modal.Body>
        
                        <Modal.Footer>
                           
                        </Modal.Footer>
                    </Modal.Dialog>    
                </div>
                )
        } else {
            return(
                <div style={{textAlign:"center", margin:"100px"}}>
                    Loading reviews ... <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            )
        }
        
    }
}

export default Testimonials;