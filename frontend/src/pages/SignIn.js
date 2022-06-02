import React, { useState } from 'react'
import { Form, Row, Container, Button, Col } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';

import "../styles/SignIn.css";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [image, setImage] = useState(null);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    function validateImage(event) {

        const file = event.target.files[0];
        //1048576 is one megabyte
        if (file.size >= 1048576)
            return alert("Max file size is 1Mb")
        else {
            setImage(file);
            setImagePreview(URL.createObjectURL(file))
        }
    }
    async function uploadImage() {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset",)
    }
    function handleSignin(event) {
        event.preventDefault();
        if (!image) return alert("You have to upload a profile picture")
        // const url = await uploadingImage(image);
    }

    return (
        <Container>
            <Row>
                <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignin}>
                        <h1 className='text-center'>Create account</h1>
                        <div className='signin-profile-pic__container'>
                            <img
                                // if the image exist then we add it as the profile picture otherwise
                                // we use the default image
                                src={imagePreview || "./assets/default_profile_picture.jpg"}
                                alt="profile pic"
                                className='signin-profile-pic' />
                            <label htmlFor='image-upload' className='image-upload-label'>
                                <GrAddCircle className='add-picture-icon' size={25} />
                            </label>
                            {/* we only accept png and jpg images */}
                            <input type="file" id="image-upload" hidden accept='image/png, image/jpeg'
                                onChange={validateImage} />
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" value={userName} onChange={event => setUserName(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)}
                                value={email} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                        <div className="pv-4">
                            <p className="text-center">
                                Already have an account?  <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </Form>
                </Col>
                <Col md={5} className="signin__bg"></Col>
            </Row>
        </Container>
    )
}

export default SignIn