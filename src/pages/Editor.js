import React from 'react';
import { Container, Row, Col, Image, OverlayTrigger, Tooltip, Button, ButtonToolbar} from 'react-bootstrap';

class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.state = sessionStorage.getItem("curEditorState") ? JSON.parse(sessionStorage.getItem("curEditorState")) :
            {}
        const setStateOverride = this.setState;

        this.setState = function () {
            // eslint-disable-next-line
            let updateArg = () => (arguments[1], sessionStorage.setItem('curEditorState', JSON.stringify(this.state)));
            setStateOverride.bind(this)(arguments[0], updateArg);
        }

        this.addText = this.addText.bind(this);
        this.deepFry = this.deepFry.bind(this);
        this.lensFlare = this.lensFlare.bind(this);
        this.editFour = this.editFour.bind(this);
        this.editFive = this.editFive.bind(this);
        this.editSix = this.editSix.bind(this);
        this.sendImageUp = this.sendImageUp.bind(this);
        this.replaceImage = this.replaceImage.bind(this);
    }

    sendImageUp(image) {
        this.props.addImage(image);
    }

    replaceImage(image) {
        const newState = {}
        newState.memeImage = this.state.memeImage;
        const currentImage = this.props.addImage(image);
        newState.memeImage.push(currentImage);
        this.setState(newState);
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

                            {/* Edit 4 */}
                            <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        <strong>Edit 4</strong>
                                    </Tooltip>
                                }
                            >
                                <Button variant="outline-primary" size="sm" onClick={this.editFour}>
                                    Edit 4
                                </Button>
                            </OverlayTrigger>
                            &nbsp; &nbsp;

                            {/* Edit 5 */}
                            <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        <strong>Edit 5</strong>
                                    </Tooltip>
                                }
                            >
                                <Button variant="outline-primary" size="sm" onClick={this.editFive}>
                                    Edit 5
                                </Button>
                            </OverlayTrigger>
                            &nbsp; &nbsp;

                            {/* Edit 6 */}
                            <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        <strong>Edit 6</strong>
                                    </Tooltip>
                                }
                            >
                                <Button variant="outline-primary" size="sm" onClick={this.editSix}>
                                    Edit 6
                                </Button>
                            </OverlayTrigger>
                            &nbsp; &nbsp;

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

        if (this.sendImageUp == "peepoClown.png") {
            this.replaceImage("peepoClown_Deepfried.png")

        } else if (this.sendImageUp == "peepoClown_Lensflare.png") {
            this.replaceImage("peepoClown_2edits.png")

        } else if (this.sendImageUp == "UgandaMeme.png") {
            this.replaceImage("UgandaMeme_Deepfried.png")

        } else if (this.sendImageUp == "UgandaMeme_Lensflare.png") {
            this.replaceImage("UgandaMeme_2edits.png")

        } else if (this.sendImageUp == "ScaredPatrick.png") {
            this.replaceImage("ScaredPatrick_Deepfried.png")

        } else if (this.sendImageUp == "ScaredPatrick_Lensflare.png") {
            this.replaceImage("ScaredPatrick_2edits.png")

        }
    }

    lensFlare() {

        if (this.sendImageUp == "peepoClown.png") {
            this.replaceImage("peepoClown_Lensflare.png")

        } else if (this.sendImageUp == "peepoClown_Deepfried.png") {
            this.replaceImage("peepoClown_2edits.png")

        } else if (this.sendImageUp == "UgandaMeme.png") {
            this.replaceImage("UgandaMeme_Lensflare.png")

        } else if (this.sendImageUp == "UgandaMeme_Deepfried.png") {
            this.replaceImage("UgandaMeme_2edits.png")

        } else if (this.sendImageUp == "ScaredPatrick.png") {
            this.replaceImage("ScaredPatrick_Lensflare.png")

        } else if (this.sendImageUp == "ScaredPatrick_Deepfried.png") {
            this.replaceImage("ScaredPatrick_2edits.png")

        }
    }

    editFour() {

    }

    editFive() {

    }

    editSix() {

    }

}

export default Editor;