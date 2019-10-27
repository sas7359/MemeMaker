import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Editor extends React.Component {

    render() {
        return(
            <div>
                <br />
                <h1 className="text-center">Meme Editor</h1>
                <br />
                <Container>
                    {/* This row will contain the edits */}
                    <Row>
                        {console.log(this.props.location.data)}
                    </Row>
                    {/* This row will contain the editor window & templates */}
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <Image
                                width={128}
                                height={128}
                                className="align-self-center mr-3"
                                src={this.props.location.data || "placeholder.png"}
                                alt="No Loaded image"
                            fluid />
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Editor;