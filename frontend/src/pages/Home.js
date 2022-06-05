
import React, { useContext, } from 'react'
import { Row, Col, Button, Modal } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import { AiFillWechat } from 'react-icons/ai';
import "../styles/Home.css";
import UserContext from '../Context';

function Home() {
    const { isUserValid, ErrorPopup, setErrorPopup, } = useContext(UserContext)

    return (
        <>
            <Row>
                <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
                    <div>
                        <h1>Share the world with your friends</h1>
                        <p>Chat App lets you connect with the world</p>
                        {
                            isUserValid ?
                                <LinkContainer to="/chat">
                                    <Button variant='success'>
                                        Get Started <AiFillWechat size={30} className="home-message-icon" />
                                    </Button>
                                </LinkContainer>
                                :
                                <Button variant='success' onClick={() => setErrorPopup(true)}>
                                    Get Started <AiFillWechat size={30} className="home-message-icon" />
                                </Button>

                        }
                    </div>
                </Col>
                <Col md={6} className="home__bg">
                </Col>
            </Row>
            <Modal show={ErrorPopup} onHide={() => setErrorPopup(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to Mena!</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have to sign up if you don't have an account or log in if you already
                    have an account.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setErrorPopup(false)}>
                        Close
                    </Button>
                    <LinkContainer to="/login">
                        <Button variant="success">
                            Log in
                        </Button>
                    </LinkContainer>
                    <LinkContainer to="/signin">
                        <Button variant="primary">
                            Sign up
                        </Button>
                    </LinkContainer>

                </Modal.Footer>
            </Modal>
        </>

    )
}

export default Home