import React from 'react';
import MemeCard from '../components/MemeCard';
import UploadPrompt from '../components/UploadPrompt';
import { Container, Accordion, Button } from 'react-bootstrap';

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
                    title: "PepoClown",
                    description: 
                    `
                        The origin of "pepoclown", its original name,comes from a Discord server for a 3v3 League of 
                        Legends community, The Shadow Isles .While the reason for creating this is unknown, the user is not. 
                        The creator of "pepoclown" goes by the online alias as "Brizi".
                    `,
                },
                {
                    eventKey: "1",
                    imgSource: "ScaredPatrickMeme.jpg",
                    title: "Scared Patrick",
                    description: 
                    `   
                        The scared patrick meme was a made up quote added to Patrick's sweater in the episode
                        "My Pretty Seahorse" of Spongebob Squarepants.
                    `,
                },
                {
                    eventKey: "0",
                    imgSource: "UgandaMeme.jpg",
                    title: "Ugandan Knuckles",
                    description: 
                    `   
                        On January 3rd, Redditor JebusMcAzn submitted TanksBlast's "Ugandan Knuckles Tribe" 
                        video to /r/youtubehaiku, where it received more than 400 points (93% upvoted) and 25 comments
                        within 12 hours. On January 5th, Ebaumsworld published an article about the meme titled 
                        "Ugandan Knuckles Is A Hilarious Meme That's Taken Gaming By Storm."
                    `,
                }
            ],
            newMemeCards: [],
        }
        const setStateOverride = this.setState;
        this.setState = function() {
            // eslint-disable-next-line
            let updateArg = () => (arguments[1], sessionStorage.setItem('curLibraryState', JSON.stringify(this.state)));
            setStateOverride.bind(this)(arguments[0], updateArg);
        }
        this.globalFileReader = new FileReader()
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
            imgSource: `data:image/png;base64,${image}`,
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