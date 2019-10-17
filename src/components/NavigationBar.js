import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar bg="light" variant="light">
                <Nav classname="mr-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Editor">Meme Editor</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Library">Template Library</Nav.Link></Nav.Item>
                </Nav>
                <Navbar.Collapse classname="justify-content-end" />
                <Navbar.Brand >
                    <Image src="MemeMaker.png"></Image>
                </Navbar.Brand>
            </Navbar>
        );
    }

}

export default NavigationBar;