import React from 'react';
import { Container, Row, Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.addText = this.addText.bind(this);
        this.deepFry = this.deepFry.bind(this);
        this.lensFlare = this.lensFlare.bind(this);
        this.editFour = this.editFour.bind(this);
        this.editFive = this.editFive.bind(this);
        this.editSix = this.editSix.bind(this);
    }

    render() {
        return(
            <div>
                <br />
                <h1 className="text-center">Meme Editor</h1>
                <br />
                <Container>
                    {/* This row contains the edits */}
                    <Row>
                        <ButtonToolbar>

                            {/* Add Text */}
                            <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>Add text</strong>
                                </Tooltip>
                                }
                            >
                                <Button variant="outline-primary" size="sm">
                                    <img src="AddText.png" width={24} height={24} alt="Add Text" onClick={this.addText} />
                                </Button>
                            </OverlayTrigger>

                            &nbsp; &nbsp;

                            {/* Deep Fry */}
                            <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>Deep fry</strong>
                                </Tooltip>
                                }
                            >
                                <Button variant="outline-primary" size="sm" onClick={this.deepFry}>
                                    <img src="DeepFry.png" width={24} height={24} alt="Deep Fry" onClick={this.deepFry} />
                                </Button>
                            </OverlayTrigger>

                            &nbsp; &nbsp;

                            {/* Lens Flare */}
                            <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>Lens flare</strong>
                                </Tooltip>
                                }
                            >
                                <Button variant="outline-primary" size="sm" onClick={this.lensFlare}>
                                    <img src="RedLensFlare.png" width={48} height={24} alt="Lens Flare" onClick={this.lensFlare} />
                                </Button>
                            </OverlayTrigger>
                            &nbsp; &nbsp;

                            <Button variant="outline-primary" size="sm" onClick={this.editFour}>
                                Edit 4
                            </Button>

                            &nbsp; &nbsp;

                            <Button variant="outline-primary" size="sm" onClick={this.editFive}>
                                Edit 5
                            </Button>

                            &nbsp; &nbsp;

                            <Button variant="outline-primary" size="sm" onClick={this.editSix}>
                                Edit 6
                            </Button>
                        </ButtonToolbar>
                        {console.log(this.props.location.data)}
                    </Row>
                    {/* This row will contain the editor window & templates */}
                    <br /><br />
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <Image
                                className="align-self-center mr-3"
                                src={this.props.location.data || "Blank.png"}
                                alt="No Loaded image"
                            />
                            {/* fluid */}
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    addText() {

    }

    deepFry() {

    }

    lensFlare() {

    }

    editFour() {

    }

    editFive() {

    }

    editSix() {

    }

}

export default Editor;