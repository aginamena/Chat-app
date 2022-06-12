import React, { useContext } from 'react'
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import UserContext from '../Context'
import "../styles/Navigation.css";

function Navigation() {
    const { userInfo } = useContext(UserContext)
    function logout() {

    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Mena</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            // if the user is not signed in, display the sigin in button
                            userInfo ?
                                <>
                                    <LinkContainer to="/">
                                        <Nav.Link >Home</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/chat">
                                        <Nav.Link>Chat</Nav.Link>
                                    </LinkContainer>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title={<img src={userInfo.picture} alt="my picture" id="my-profile-pic" />}
                                    >
                                        <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            <Button variant="danger" onClick={logout}>Log out</Button>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>

                                :
                                <>
                                    <LinkContainer to="/login">
                                        <Nav.Link >Log in</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/signin">
                                        <Nav.Link >Sign up</Nav.Link>
                                    </LinkContainer>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation