import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Modal as md } from 'antd'; // thông báo andtd
import "./auth.scss"
import { RootContext } from '../../App';
import { useContext } from 'react';
import api from '../../services/api';

function Example() {
    const { userStore } = useContext(RootContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(false);

    async function update(eventForm) {

        eventForm.preventDefault();

        let user = {
            first_name: eventForm.target.first_name.value,
            last_name: eventForm.target.last_name.value,
            user_name: userStore.data?.user_name
        }

        try {
            setLoading(true);
            let result = await api.users.update(userStore.data?.id, user);
            setLoading(false);
            if (result.status == 200) {
                md.success({
                    content: `${result.data.message}, bạn sẽ phải đăng nhập lại!!`,
                    onOk: () => {
                        localStorage.removeItem("token");
                        window.location.reload();
                    },
                });
            } else {
                md.error({
                    content: `${result.data.message}, vui lòng thử lại!`,
                    onOk: () => {
                        /* Xử lý tiếp */
                    },
                });
            }
        } catch (err) {
            console.log("err", err)
            setLoading(false);
            md.error({
                content: `Lỗi gọi api`,
                onOk: () => {
                    /* Xử lý tiếp */
                },
            });
        }
    }

    async function updateAvatar(e) {

        if (e.target.files.length > 0) {
            e.target.parentNode.querySelector('.input_img_preview').src = URL.createObjectURL(e.target.files[0]);
        }

        try {
            let formData = new FormData();
            formData.append('avatar', e.target.files[0]);
            formData.append("user_name",userStore?.data?.user_name)

            setLoading(true);
            let result = await api.users.updateAvatar(userStore?.data?.id, formData);

            setLoading(false);
            if (result.status == 200) {
                md.success({
                    content: `${result.data.message}, bạn sẽ phải đăng nhập lại!!`,
                    onOk: () => {
                        localStorage.removeItem("token");
                        window.location.reload();
                    },
                });

            } else {
                md.error({
                    content: `${result.data.message}, vui lòng thử lại!`,
                    onOk: () => {
                        /* Xử lý tiếp */
                    },
                });
            }
        } catch (err) {
            console.log("err", err)
            setLoading(false);
            md.error({
                content: `Lỗi gọi api`,
                onOk: () => {
                    /* Xử lý tiếp */
                },
            });
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update Profile
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='xl'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={(e) => {
                        update(e)
                    }}>
                        <div className='content_change'>
                            <div className='content_left'>
                                <img className='input_img_preview' src="" alt="" />
                                Change Avatar : <input type="file" onChange={(e) => {
                                    console.log("e", e);
                                    updateAvatar(e);
                                }} className='input_btn' />
                            </div>
                            <div className='content_right'>
                                <label htmlFor="">Last Name : </label>
                                <input type="text" name='first_name' defaultValue={userStore.data?.first_name ?? "undefine"} style={{ border: "1px solid black", width: "500px", color: "black", borderRadius: "8px", padding: "10px", margin: "5px" }} />
                                <label htmlFor="">First Name : </label>
                                <input type="text" name='last_name' defaultValue={userStore.data?.last_name ?? "undefine"} style={{ border: "1px solid black", width: "500px", color: "black", borderRadius: "8px", padding: "10px", margin: "5px" }} />
                                <button className='form_btn' htmlType='submit' type="primary" ghost>Save</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;