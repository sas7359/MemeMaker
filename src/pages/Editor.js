import React from 'react';
import { Container, Row, Col, Modal, Image, OverlayTrigger, Tooltip, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.state = sessionStorage.getItem("curEditorState") ? JSON.parse(sessionStorage.getItem("curEditorState")) :
            {
                helpMenuVisible: false,
                memeImage: this.props.location.data || "Blank.png"
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

    componentDidMount() {
        if (this.props.location.data) {
            this.setState({
                memeImage: this.props.location.data
            });   
        }
    }

    sendImageUp(image) {
        this.props.addImage(image);
    }

    replaceImage(image) {
        const newState = {}
        newState.memeImage = this.props.location.data;
        //const currentImage = this.props.location.data
        //const newImage = this.props.addImage(image);
        this.props.location.data = image
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
                            <ButtonToolbar className="justify-content-between">
                                <ButtonGroup>
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
                                </ButtonGroup>
                                <ButtonGroup>
                                    <a href={this.state.memeImage} download="EditedMeme.png"> 
                                        <Button variant="success" type="button">Download</Button> 
                                    </a> 
                                    &nbsp; 
                                    <div>
                                        <Button variant="info" onClick={() => this.setVisibility(true)}>
                                            Need help?
                                        </Button>
                                    </div>
                                </ButtonGroup>
                            </ButtonToolbar>
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
                                src={this.state.memeImage || "Blank.png"}
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
                        
                    </Row>
                </Container>
            </div>
        );
    }

    deepFry() {

        if (this.state.memeImage === "peepoClown.png") {
            this.replaceImage("peepoClown_Deepfried.png")

        } else if (this.state.memeImage === "peepoClown_Lensflare.png") {
            this.replaceImage("peepoClown_2edits.png")

        } else if (this.state.memeImage === "UgandaMeme.jpg") {
            this.replaceImage("UgandaMeme_Deepfried.png")

        } else if (this.state.memeImage === "UgandaMeme_Lensflare.png") {
            this.replaceImage("UgandaMeme_2edits.png")

        } else if (this.state.memeImage === "ScaredPatrickMeme.jpg") {
            this.replaceImage("ScaredPatrick_Deepfried.png")

        } else if (this.state.memeImage === "ScaredPatrick_Lensflare.png") {
            this.replaceImage("ScaredPatrick_2edits.png")

        }
    }

    lensFlare() {

        if (this.state.memeImage === "peepoClown.png") {
            this.replaceImage("peepoClown_Lensflare.png")

        } else if (this.state.memeImage === "peepoClown_Deepfried.png") {
            this.replaceImage("peepoClown_2edits.png")

        } else if (this.state.memeImage === "UgandaMeme.jpg") {
            this.replaceImage("UgandaMeme_Lensflare.png")

        } else if (this.state.memeImage === "UgandaMeme_Deepfried.png") {
            this.replaceImage("UgandaMeme_2edits.png")

        } else if (this.state.memeImage === "ScaredPatrickMeme.jpg") {
            this.replaceImage("ScaredPatrick_Lensflare.png")

        } else if (this.state.memeImage === "ScaredPatrick_Deepfried.png") {
            this.replaceImage("ScaredPatrick_2edits.png")

        }
    }

}

export default Editor;