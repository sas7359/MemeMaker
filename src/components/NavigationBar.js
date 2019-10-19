import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar bg="light" variant="light">
                <Nav classname="mr-auto">
                    <Nav.Item><Nav.Link href="/">
                        <i class="fa fa-home" aria-hidden="true" /> Home
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Editor">
                        <i class="fa fa-pencil" aria-hidden="true" /> Meme Editor
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Library">
                        <i class="fa fa-book" aria-hidden="true" /> Template Library
                    </Nav.Link></Nav.Item>
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