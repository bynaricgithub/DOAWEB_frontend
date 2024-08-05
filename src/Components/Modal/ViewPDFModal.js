import React from "react";
import Modal from "react-bootstrap/Modal";

function ViewPDFModal(props) {
    const { showModal, handleClose, file } = props;
    return (
        <Modal
            show={showModal}
            onHide={handleClose}
            centered
            contentClassName="modal-pdf-content"
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body closeButton>
                <iframe title="myFrame" className="w-100 h-100" src={file}></iframe>
            </Modal.Body>
        </Modal>
    )
}

export default ViewPDFModal;