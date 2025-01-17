import React from 'react';
import { Card, Accordion, Image, Col, Container, Row, Media } from 'react-bootstrap';

class MemeCard extends React.Component {

    constructor(props) {
        super(props);
        this.eventKey = props.eventKey
        this.imgSource = props.imgSource
        this.createdMemes = props.createdMemes
    }

    render() {
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey={this.eventKey}>
                    <Media>
                        <Image
                            width={128}
                            height={128}
                            className="align-self-center mr-3"
                            src={this.imgSource}
                            alt="Meme image"
                        fluid />
                        <Media.Body>
                            {this.props.children}
                        </Media.Body>
                    </Media>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.eventKey}>
                    <Card.Body>
                        <Container>
                            <h3>Created Memes</h3>
                            <Row>
                                {this.createdMemes.map(cMeme => (
                                    <Col sm={2}>
                                        <Image width={128} heigth={128} src={cMeme} fluid/>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }

}

export default MemeCard;