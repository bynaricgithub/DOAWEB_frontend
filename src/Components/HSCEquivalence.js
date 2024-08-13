import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function HSCEquivalence() {
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
                    // data-bs-target="#hscboradpdf1"
                    href="#"
                    aria-disabled="true"
                    onClick={() => {
                      handleShow();
                      setFile(
                        "/assets/file/12thEquivalnce _Application_05110221629.pdf"
                      );
                    }}
                  >
                    Application for HSC Equivalence Certificate pdf
                  </a>
                </p>
                <br />
                {/* <p>
                  <a
                    className="link-primary"
                    // data-bs-toggle="modal"
                    // data-bs-target="#hscboradpdf2"
                    href="#"
                    onClick={() => {
                      handleShow();
                      setFile(
                        "/assets/file/Letterformatfor12thEquivalence30062022.pdf"
                      );
                    }}
                  >
                    Letter format for 12th Equivalence for Autonomous
                    Institute's Students
                  </a>
                </p> */}
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

export default HSCEquivalence;
