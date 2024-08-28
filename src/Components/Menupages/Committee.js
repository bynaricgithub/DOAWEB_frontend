import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Committees() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">
            Constitution of Committees <br />
            (u/s 20)
          </h1>
        </div>
        <div className="card-body">
          <div className="p-3">
            <ol type="a">
              <li className="my-2">
                <a
                  className="link-primary"
                  href="#"
                  aria-disabled="true"
                  onClick={() => {
                    handleShow();
                    setFile("/assets/file/institutes.pdf");
                  }}
                >
                  Academic Committee
                  <img src="/assets/Images1/pdf.png" alt="pdf" />
                </a>
              </li>
              <li className="my-2">
                <a
                  className="link-primary"
                  href="#"
                  aria-disabled="true"
                  onClick={() => {
                    handleShow();
                    setFile("/assets/file/institutes.pdf");
                  }}
                >
                  Finance Committee
                  <img src="/assets/Images1/pdf.png" alt="pdf" />
                </a>
              </li>
              <li className="my-2">
                <a
                  className="link-primary"
                  href="#"
                  aria-disabled="true"
                  onClick={() => {
                    handleShow();
                    setFile("/assets/file/institutes.pdf");
                  }}
                >
                  Course Committee
                  <img src="/assets/Images1/pdf.png" alt="pdf" />
                </a>
              </li>
              <li className="my-2">
                <a
                  className="link-primary"
                  href="#"
                  aria-disabled="true"
                  onClick={() => {
                    handleShow();
                    setFile("/assets/file/institutes.pdf");
                  }}
                >
                  Equivalence Committee
                  <img src="/assets/Images1/pdf.png" alt="pdf" />
                </a>
              </li>
              <li className="my-2">
                <a
                  className="link-primary"
                  href="#"
                  aria-disabled="true"
                  onClick={() => {
                    handleShow();
                    setFile("/assets/file/institutes.pdf");
                  }}
                >
                  Examination Committee
                  <img src="/assets/Images1/pdf.png" alt="pdf" />
                </a>
              </li>
              <li className="my-2">
                <a
                  className="link-primary"
                  href="#"
                  aria-disabled="true"
                  onClick={() => {
                    handleShow();
                    setFile("/assets/file/institutes.pdf");
                  }}
                >
                  Fee Fixation Committee
                  <img src="/assets/Images1/pdf.png" alt="pdf" />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default Committees;
