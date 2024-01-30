import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

const AppNavbar = () => {
    return (
        <Navbar className="p-2" style={{ backgroundColor: "#6f42c1" }}>
            <Navbar.Brand className="fs-3" style={{ color: "white" }} href="/">Car Park Finder</Navbar.Brand>
            <Navbar.Collapse className="justify-content-center" style={{ margin: "0 15%" }}>
                <Nav className="flex-grow-1 justify-content-end">
                    <Nav.Item>
                        <Nav.Link href="/browse" className="fs-5" style={{ color: "white", marginRight: "20px" }}>Browse</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="flex-grow-1 align-self-center">
                        <Form>
                            <Form.Control placeholder="Search" />
                        </Form>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavbar;