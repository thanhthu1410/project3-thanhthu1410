import React, { useContext, useEffect, useState } from 'react'
import api from '@api'
import { RootContext } from '../../App';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./auth.scss"

function Example() {
    const { userStore } = useContext(RootContext);
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = "/"
        }
    }, [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Change Password
            </Button>

            <Modal
                style={{ marginTop: "200px" }}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Change Password !</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={async (e) => {
                        e.preventDefault();
                        alert("đã gọi")
                        let result = await api.users.changePassword({
                            new_pass: e.target.new_pass.value,
                            old_pass: e.target.old_pass.value
                        })
                    }}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Password:</Form.Label>
                            <Form.Control type="password" name="old_pass" placeholder="Enter your password ..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>New Password:</Form.Label>
                            <Form.Control type="password" name="new_pass" placeholder="Enter your new password ..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Confirm New Password:</Form.Label>
                            <Form.Control type="password" name="cornfirm_pass" placeholder="Enter your new password ..." />
                        </Form.Group>
                        <Button variant="primary" type='submit'>Change</Button>
                    </Form>
                    <p>Resend Email In <span style={{ color: "red", cursor: "pointer" }} onClick={async (e) => {
                        console.log("đã vào đây")
                        if (!userStore.data?.email_confirm) {
                            alert("đã vào")
                            let result = await api.users.resend();
                            console.log("result", result)
                        }
                    }}>Here</span> !</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;