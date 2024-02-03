import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import './Button.css';

const AppNavbar = () => {
    return (
        <Navbar className="p-2" style={{ backgroundColor: "#6f42c1" }}>
            <Navbar.Brand className="fs-3" style={{ color: "white", marginLeft: "4.5%" }} href="/">Car Park Finder</Navbar.Brand>
            <Navbar.Collapse className="justify-content-center" style={{ margin: "0 2% 0 9%" }}>
                <Nav className="flex-grow-1 justify-content-end">
                    <Nav.Item className="align-self-center">
                        <Nav.Link href="/browse" className="fs-5" style={{ color: "white" }}>Browse</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="flex-grow-1 align-self-center mx-5">
                        <Form>
                            <Form.Control placeholder="Search" />
                        </Form>
                    </Nav.Item>
                    <Nav.Item style={{ display: "flex" }}>
                        <button href="/login" className="btn1-grad mx-2">Login</button>
                        <button href="/register" className="btn1-grad mx-2">Register</button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavbar;