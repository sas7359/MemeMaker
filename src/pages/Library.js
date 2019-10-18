import React from 'react';
import MemeCard from '../components/MemeCard';
import { Container, Accordion} from 'react-bootstrap';

class Library extends React.Component {

    render() {
        return(
            <div>
                <br />
                <h1>Template library page</h1>
                <br />
                <Container>
                    <Accordion>
                        <MemeCard eventKey="0" imgSource="peepoClown.png">
                            <h2>PeepoClown</h2>
                            <p>This is the peeopclown meme.</p> 
                        </MemeCard>
                        <MemeCard eventKey="1" imgSource="ScaredPatrickMeme.jpg">
                            <h2>Scared Patrick</h2>
                            <p>This is the scared patrick meme from a spongebob episode.</p> 
                        </MemeCard>
                        <MemeCard eventKey="2" imgSource="UgandaMeme.jpg">
                        <h2>PeepoClown</h2>
                            <p>This is the ugandan knuckles meme.</p> 
                        </MemeCard>
                    </Accordion>
                </Container>
            </div>
        );
    }

}

export default Library;