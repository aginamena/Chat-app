import React, { useContext } from 'react'
import { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import UserContext from '../Context'

function Sidebar() {
    const {
        socket,
        members,
        setMembers,
        currentRoom,
        setCurrentRoom,
        rooms,
        setRooms
    } = useContext(UserContext)
    async function getRooms() {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/rooms`)
        const data = await response.json();
        setRooms(data);
    }

    useEffect(() => {
        async function joinRoom() {
            setCurrentRoom("general")
            await getRooms()
            socket.emit("new-user");
            socket.on("new-user", allMembers => {
                setMembers(allMembers)
            })
        }
        joinRoom()
    }, [])

    return (
        <>
            <h2>Available rooms</h2>
            <ListGroup >
                {
                    rooms && rooms.map((room, index) => (
                        <ListGroup.Item key={index}>
                            {room}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
            <h2 style={{ marginTop: "20px" }}>Members</h2>
            <ListGroup>
                {
                    members && members.map(member => (
                        <ListGroup.Item key={member._id} style={{ cursor: "pointer" }}>
                            {member.name}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </>

    )
}

export default Sidebar