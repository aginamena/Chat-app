import React, { useContext, useState } from 'react'
import { Button, Col, Form, Row } from "react-bootstrap"
import "../styles/MessageForm.css";
import { BiPaperPlane } from "react-icons/bi"
import UserContext from '../Context';

function MessageForm() {
    const { socket, currentRoom, privateMemberMsg, userInfo } = useContext(UserContext)
    const [message, setMessage] = useState("");

    function getFormattedDate() {
        const date = new Date()
        const year = date.getFullYear();
        //getMonth returns [0 - 11] but we want [1 - 12] for mongths
        const month = 1 + date.getMonth(); //
        let day = date.getDate() + "";
        day = day.length > 1 ? day : "0" + day
        return month + "/" + day + "/" + year;
    }
    function handleSubmit(e) {
        e.preventDefault();
        const todaysDate = getFormattedDate();
        const today = new Date();
        const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today;
        const time = today.getHours() + ":" + minutes;
        const roomId = currentRoom;
        socket.emit("message-room", roomId, message, userInfo, time, todaysDate)
        setMessage("")

    }
    return (
        <>
            <div className='messages-output'></div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={11}>
                        <Form.Group>
                            <Form.Control type="text" placeholder='Enter your message' required value={message}
                                onChange={e => setMessage(e.target.value)}></Form.Control>
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