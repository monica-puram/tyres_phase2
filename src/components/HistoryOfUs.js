import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class HistoryOfUs extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col sm="12" md="6" lg="6" xl="6">
                        <h2>
                            About our history
                        </h2>
                        <hr/>
                        <p>
                            A tire (American English) or tyre (British English; see spelling differences) is a ring-shaped component that surrounds a wheel's rim
                             to transfer a vehicle's load from the axle through the wheel to the ground and to provide traction on the surface traveled over.
                              Most tires, such as those for automobiles and bicycles, are pneumatically inflated structures, which also provide a flexible cushion 
                              that absorbs shock as the tire rolls over rough features on the surface. Tires provide a footprint that is designed to match the weight
                               of the vehicle with the bearing strength of the surface that it rolls over by providing a bearing pressure that will not deform
                                the surface excessively. 
                        </p>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="6">
                        <img 
                        src="http://localhost:3000/images/AirlessTire.JPG" alt="Tubeless tire img" width="100%" height="400px"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HistoryOfUs;