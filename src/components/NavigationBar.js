import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

const navItemStyle = {
    fontSize: 20,
    fontWeight: "bold"
}

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <Nav.Item><Nav.Link href="/" style={navItemStyle}>
                        <i className="fa fa-home" aria-hidden="true" /> Home
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Editor" style={navItemStyle}>
                        <i className="fa fa-pencil" aria-hidden="true" /> Meme Editor
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Library" style={navItemStyle}>
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