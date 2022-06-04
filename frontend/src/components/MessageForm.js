import React from 'react'
import { Button, Col, Form, Row } from "react-bootstrap"
import "../styles/MessageForm.css";
import { BiPaperPlane } from "react-icons/bi"
function MessageForm() {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <>
            <div className='messages-output'></div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={11}>
                        <Form.Group>
                            <Form.Control type="text" placeholder='Enter your message'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={1}>
                        <Button variant="primary" type="submit" id="submit">
                            <BiPaperPlane size={20} />
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default MessageForm