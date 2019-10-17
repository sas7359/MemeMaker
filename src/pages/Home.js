import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

class Home extends React.Component {

    render() {
        return(
            <div>
                <h1>Home page</h1>
                <Container>
                <Row>
                    <Col><Image src="MemeMaker.png"/></Col>
                    <Col><Image src="MemeMaker.png"/></Col>
                </Row>
                <Row>
                    <Col><Image src="MemeMaker.png"/></Col>
                    <Col><Image src="MemeMaker.png"/></Col>
                    <Col><Image src="MemeMaker.png"/></Col>
                </Row>
                </Container>
            </div>
        );
    }

}

export default Home;