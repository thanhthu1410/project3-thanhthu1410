import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';
import './receiptPop.scss';

function ReceiptPop({ receiptDetails }) {
    console.log("receiptDetails", receiptDetails)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Detail
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Receipt Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receiptDetails?.map((item, index) => (
                                <tr key={randomId()}>
                                    <th scope="row">{index + 1}</th>
                                    <td><img src={item.product.avatar} style={{ width: "50px" }} /></td>
                                    <td>{item.product.name}</td>
                                    <td>{convertToUSD(item.product.Price)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ReceiptPop;