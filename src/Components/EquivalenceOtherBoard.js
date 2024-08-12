import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function EquivalenceOtherBoard() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="row ">
        <div className="col-sm-12">
          <div className="card border border-light shadow-0 mb-3 removerborderRadius">
            <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">EQUIVALENCE (OTHER BOARD)</h1>
            </div>
            <div className="card-body removePadding">
              <div className="row p-2">
                <p>
                  <a
                    className="link-primary"
                    // data-bs-toggle="modal"
                    // data-bs-target="#euqvalenceboradpdf1"
                    href="#"
                    aria-disabled="true"
                    onClick={() => {
                      handleShow();
                      setFile("/assets/file/Equivalence.pdf");
                    }}
                  >
                    Application for Equivalence Certificate (Other Board) pdf
                  </a>
                </p>
                <br />
                <p>
                  <a
                    className="link-primary"
                    // data-bs-toggle="modal"
                    // data-bs-target="#euqvalenceboradpdf2"
                    href="#"
                    aria-disabled="true"
                    onClick={() => {
                      handleShow();
                      setFile(
                        "/assets/file/EquivalenceOtherBoard105927052022.pdf"
                      );
                    }}
                  >
                    Procedure for Equivalence (Other Board) pdf
                  </a>
                </p>
              </div>
            </div>
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

export default EquivalenceOtherBoard;
