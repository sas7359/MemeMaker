import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

class Home extends React.Component {

    render() {
        return(
            <div>
                <br></br>
                <h1 class="text-center">Welcome to MemeMaker</h1>
                <br></br>
                <Container fluid>
                        <Row className="justify-content-md-center">
                            <Col sm={6}><Image src="MemeMakerHome_1.png" fluid/></Col>
                            <Col sm={6}><Image src="MemeMaker.png" fluid/></Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col sm={4}><Image src="MemeMakerHome_2.png" fluid/></Col>
                            <Col sm={4}><Image src="MemeMaker.png" fluid/></Col>
                            <Col sm={4}><Image src="MemeMaker.png" fluid/></Col>
                        </Row>
                </Container>
            </div>
        );
    }

}

export default Home;