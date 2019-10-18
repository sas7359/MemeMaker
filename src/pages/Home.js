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
                            <Col ><Image src="MemeMakerHome_1.png"/></Col>
                            <Col ><Image src="MemeMaker.png"/></Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col ><Image src="MemeMakerHome_2.png"/></Col>
                            <Col ><Image src="MemeMaker.png"/></Col>
                            <Col ><Image src="MemeMaker.png"/></Col>
                        </Row>
                </Container>
            </div>
        );
    }

}

export default Home;