import React from 'react';
import { Card, Accordion, Image, Col, Container, Row } from 'react-bootstrap';

class MemeCard extends React.Component {

    constructor(props) {
        super(props);
        this.eventKey = props.eventKey
        this.imgSource = props.imgSource
    }

    render() {
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey={this.eventKey}>
                    <Container>
                        <Row>
                            <Col sm={2}><Image src={this.imgSource} alt="yes" fluid/></Col>
                            <Col sm={10}>{this.props.children}</Col>
                        </Row>
                    </Container>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.eventKey}>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col sm={2}><Image src="placeholder.png" fluid/></Col>
                                <Col sm={2}><Image src="placeholder.png" fluid/></Col>
                                <Col sm={2}><Image src="placeholder.png" fluid/></Col>
                                <Col sm={2}><Image src="placeholder.png" fluid/></Col>
                                <Col sm={2}><Image src="placeholder.png" fluid/></Col>
                                <Col sm={2}><Image src="placeholder.png" fluid/></Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }

}

export default MemeCard;