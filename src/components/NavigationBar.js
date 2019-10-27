import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <Nav.Item><Nav.Link href="/">
                        <i className="fa fa-home" aria-hidden="true" /> Home
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Editor">
                        <i className="fa fa-pencil" aria-hidden="true" /> Meme Editor
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Library">
                        <i className="fa fa-book" aria-hidden="true" /> Template Library
                    </Nav.Link></Nav.Item>
                </Nav>
                <Navbar.Collapse className="justify-content-end" />
                <Navbar.Brand >
                    <Image src="MemeMaker.png"></Image>
                </Navbar.Brand>
            </Navbar>
        );
    }

}

export default NavigationBar;