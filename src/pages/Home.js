import React from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';

// Imline styling stuff cause too lazy to make css file :)
const styles = {
    nopadding: {
        paddingLeft: 0,
        paddingRight: 0
    },
};

class Home extends React.Component {

    render() {
        return(
            <div>
                <br />
                <h1 class="text-center">Welcome to MemeMaker</h1>
                <br />
                <Container>
                    <div>
                        <Row className="justify-content-md-center">
                            <Col sm={4} style={styles.nopadding}><Image src="MemeMakerHome_1.png" fluid/></Col>
                            <Col sm={4} className="align-self-end" style={styles.nopadding}><Image src="MemeMakerHome_3.png" fluid/></Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col sm={4} style={styles.nopadding}><Image src="MemeMakerHome_2.png"  fluid/></Col>
                            <Col sm={3} style={styles.nopadding}><Image src="UgandaMeme.jpg" fluid/></Col>
                            <Col sm={3} style={styles.nopadding}><Image src="ScaredPatrickMeme.jpg" fluid/></Col>
                        </Row>
                        <br />
                        <Row className="justify-content-md-center">
                            <Button size="lg" href="/Editor" variant="primary">
                                Start creating memes now!
                            </Button>
                        </Row>
                        <br />
                    </div>
                    <div>
                        <h1 class="text-center">About us</h1>
                        <p class="text-center">
                            The meme maker website was founded by Spencer Stissi, Timothy Miner, and David Chinnici
                            with the goal of providing a platform for making memes in a streamlined, easy to follow manner.
                            Throughout the website there is a widerange of tools and templates to help users
                            create the meme of their dreams and share it with friends and family.
                        </p>
                    </div>
                </Container>
            </div>
        );
    }

}

export default Home;