import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

const AppNavbar = () => {
    return (
        <Navbar className="p-2" style={{ backgroundColor: "#6f42c1" }}>
            <Navbar.Brand className="fs-3" style={{ color: "white" }} href="/">Car Park Finder</Navbar.Brand>
            <Navbar.Collapse className="justify-content-center">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/browse" className="fs-5 mx-5" style={{ color: "white" }}>Browse</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Form>
                    <Form.Control placeholder="Search" className="flex-grow-1" />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavbar;