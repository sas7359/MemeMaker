import React from 'react';
import { Container, Row, Col, Modal, Image, OverlayTrigger, Tooltip, Button, ButtonToolbar } from 'react-bootstrap';

class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.state = sessionStorage.getItem("curEditorState") ? JSON.parse(sessionStorage.getItem("curEditorState")) :
            {
                helpMenuVisible: false
            }
        const setStateOverride = this.setState;

        this.setState = function () {
            // eslint-disable-next-line
            let updateArg = () => (arguments[1], sessionStorage.setItem('curEditorState', JSON.stringify(this.state)));
            setStateOverride.bind(this)(arguments[0], updateArg);
        }

        this.deepFry = this.deepFry.bind(this);
        this.lensFlare = this.lensFlare.bind(this);
        this.sendImageUp = this.sendImageUp.bind(this);
        this.replaceImage = this.replaceImage.bind(this);
        this.setVisibility = this.setVisibility.bind(this);
    }

    sendImageUp(image) {
        this.props.addImage(image);
    }

    replaceImage(image) {
        const newState = {}
        newState.memeImage = this.state.memeImage;
        //const currentImage = this.props.location.data
        //const newImage = this.props.addImage(image);
        this.props.location.data = image;
        //newState.memeImage.push(newImage);
        this.setState(newState);
    }

    setVisibility(condition) {
        this.setState({
            helpMenuVisible: condition,
        })
    }

    render() {
        return (
            <div>
                <br />
                <h1 className="text-center">Meme Editor</h1>
                <br />
                <Modal show={this.state.helpMenuVisible} onHide={() => this.setVisibility(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Help</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>
                            Deep Fry
                        </h3>
                        <p>Description of deep frying..</p>
                        <h3>
                            Lens Flare
                        </h3>
                        <p>
                            Description of lens flare..
                        </p>
                    </Modal.Body>
                </Modal>
                <Container fluid>
                    {/* This row contains the edits */}
                    <Row>
                        <Col xs>
                            <ButtonToolbar>

                                {/* Add Text */}
                                {
                                /*
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
                                */
                                }

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
                                        <img src="DeepFry.png" width={32} height={32} alt="Deep Fry" onClick={this.deepFry} />
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
                                        <img src="RedLensFlare.png" width={32} height={32} alt="Lens Flare" onClick={this.lensFlare} />
                                    </Button>
                                </OverlayTrigger>
                                &nbsp; &nbsp;

                            </ButtonToolbar>
                        </Col>
                        <Col xs>
                            <Button variant="info" className="pull-right" onClick={() => this.setVisibility(true)}>
                                Need help?
                            </Button>
                        </Col>
                        {/*console.log(this.props.location.data)*/}
                    </Row>
                    {/* This row will contain the editor window & templates */}
                    <br /><br />
                    <Row>
                        <Col sm={1}>
                        </Col>
                        <Col className="text-center" sm={10}>
                            <Image
                                //className="align-self-center mr-3"
                                src={this.props.location.data || "Blank.png"}
                                alt="No Loaded image"
                                fluid
                            />
                            {/* fluid */}
                        </Col>
                        <Col sm={1}>
                        </Col>
                    </Row>
                    {/* this row contains download button */}
                    <br /><br />
                    <Row>
                        <a href="peepoClown_2edits.png" download="Meme.png"> 
                        <button type="button">Download</button> 
                        </a> 
                    </Row>
                </Container>
            </div>
        );
    }

    deepFry() {

        if (this.props.location.data === "peepoClown.png") {
            this.replaceImage("peepoClown_Deepfried.png")

        } else if (this.props.location.data === "peepoClown_Lensflare.png") {
            this.replaceImage("peepoClown_2edits.png")

        } else if (this.props.location.data === "UgandaMeme.jpg") {
            this.replaceImage("UgandaMeme_Deepfried.png")

        } else if (this.props.location.data === "UgandaMeme_Lensflare.jpg") {
            this.replaceImage("UgandaMeme_2edits.png")

        } else if (this.props.location.data === "ScaredPatrickMeme.jpg") {
            this.replaceImage("ScaredPatrick_Deepfried.png")

        } else if (this.props.location.data === "ScaredPatrick_Lensflare.jpg") {
            this.replaceImage("ScaredPatrick_2edits.png")

        }
    }

    lensFlare() {

        if (this.props.location.data === "peepoClown.png") {
            this.replaceImage("peepoClown_Lensflare.png")

        } else if (this.props.location.data === "peepoClown_Deepfried.png") {
            this.replaceImage("peepoClown_2edits.png")

        } else if (this.props.location.data === "UgandaMeme.jpg") {
            this.replaceImage("UgandaMeme_Lensflare.jpg")

        } else if (this.props.location.data === "UgandaMeme_Deepfried.png") {
            this.replaceImage("UgandaMeme_2edits.png")

        } else if (this.props.location.data === "ScaredPatrickMeme.jpg") {
            this.replaceImage("ScaredPatrick_Lensflare.jpg")

        } else if (this.props.location.data === "ScaredPatrick_Deepfried.png") {
            this.replaceImage("ScaredPatrick_2edits.png")

        }
    }

}

export default Editor;