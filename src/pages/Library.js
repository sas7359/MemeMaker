import React from 'react';
import MemeCard from '../components/MemeCard';
import { Container, Accordion, Button, Modal, Form } from 'react-bootstrap';

class UploadPrompt extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            image: null,
            title: React.createRef(),
            description: React.createRef(),
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange(imgFile) {
        this.setState({
            image: imgFile.target.files[0],
        })
    }

    handleSubmit() {
        this.props.closeUpload();
        const newImage = this.props.addImage(this.state.image);
        this.props.updateCards(
            newImage,
            this.state.title.current.value,
            this.state.description.current.value.toString()
        );
    }

    render() {
        return(
            <Modal show={this.props.show} centered>
                <Form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <Form.Label>Upload</Form.Label>
                        <Form.Control required
                            id="memeImage"
                            type="file"
                            accept="image/*"
                            onChange={this.handleImageChange}
                            ref={this.state.image}
                        />
                        <Form.Label>Title</Form.Label>
                        <Form.Control required placeholder="Title of meme.." ref={this.state.title} />
                        <Form.Label>Description</Form.Label>
                        <Form.Control required as="textarea" rows="3" placeholder="Description of meme.." ref={this.state.description}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.closeUpload}>Cancel</Button>
                        <Button variant="success" type="submit" >Upload</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }

}

/*
<MemeCard eventKey="2" imgSource="peepoClown.png">
    <h2>PeepoClown</h2>
    <p>This is the peepoclown meme.</p> 
</MemeCard>,
<MemeCard eventKey="1" imgSource="ScaredPatrickMeme.jpg">
    <h2>Scared Patrick</h2>
    <p>This is the scared patrick meme from a spongebob episode.</p> 
</MemeCard>,
<MemeCard eventKey="0" imgSource="UgandaMeme.jpg">
<h2>PeepoClown</h2>
    <p>This is the ugandan knuckles meme.</p> 
</MemeCard>,
*/

class Library extends React.Component {

    constructor(props) {
        super(props);
        // Variables
        this.state = sessionStorage.getItem("curLibraryState") ? JSON.parse(sessionStorage.getItem("curLibraryState")) : 
        {
            uploadWindowVisible: false,
            memeCards: [
                {
                    eventKey: "2",
                    imgSource: "peepoClown.png",
                    title: "PeepoClown",
                    description: "This is the peepoclown meme.",
                },
                {
                    eventKey: "1",
                    imgSource: "ScaredPatrickMeme.jpg",
                    title: "Scared Patrick",
                    description: "This is the scared patrick meme from a spongebob episode.",
                },
                {
                    eventKey: "0",
                    imgSource: "UgandaMeme.jpg",
                    title: "Ugandan Knuckles",
                    description: "This is the ugandan knuckles meme.",
                }
            ],
        }
        const setStateOverride = this.setState;
        this.setState = function() {
            // eslint-disable-next-line
            let updateArg = () => (arguments[1], sessionStorage.setItem('curLibraryState', JSON.stringify(this.state)));
            setStateOverride.bind(this)(arguments[0], updateArg);
        }
        this.setVisibility = this.setVisibility.bind(this);
        this.createNewCard = this.createNewCard.bind(this);
        this.sendImageUp = this.sendImageUp.bind(this);
    }

    sendImageUp(image) {
        this.props.addImage(image);
    }

    setVisibility(condition) {
        this.setState({
            uploadWindowVisible: condition,
        })
    }

    createNewCard(image, title, description) {
        const newState = {}
        newState.memeCards = this.state.memeCards;
        const newCard = {
            eventKey: newState.memeCards.length,
            imgSource: image,
            title: title,
            description: description,
        }
        newState.memeCards.push(newCard);
        this.setState(newState);
    }

    render() {
        return(
            <div>
                <br />
                <h1>Template Library</h1>
                <br />
                <Container>
                    <Button variant="success" onClick={() => this.setVisibility(true)} block>
                        Upload new meme +
                    </Button>
                    <br />
                    <UploadPrompt show={this.state.uploadWindowVisible} addImage={this.sendImageUp} updateCards={this.createNewCard} closeUpload={() => this.setVisibility(false)} />
                    <Accordion>
                        {this.state.memeCards.map(memeCard => (
                            <MemeCard eventKey={memeCard.eventKey} imgSource={memeCard.imgSource}>
                                <h2>{memeCard.title}</h2>
                                <p>{memeCard.description}</p> 
                            </MemeCard>
                        ))}
                    </Accordion>
                </Container>
            </div>
        );
    }

}

export default Library;