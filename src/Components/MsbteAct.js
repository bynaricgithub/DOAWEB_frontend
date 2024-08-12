import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function MsbteAct() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">MSBTE ACT</h1>
        </div>
        <div className="card-body removePadding">
          <div className="row p-2">
            {/* <p>
              <a
                className="link-primary"
                // data-bs-toggle="modal"
                // data-bs-target="#msbteactpdf"
                href="#"
                aria-disabled="true" 
                onClick={() => {
                  handleShow();
                  setFile("/assets/file/maharshtra_act.pdf");
                }}
              >
                Download MSBTE Act as a PDF file. (English)(64 kb)
                <img src="/assets/Images1/pdf.png" alt="pdf" />
              </a>
            </p>
             */}
            <p>
              <a
                className="link-primary"
                // data-bs-toggle="modal"
                // data-bs-target="#msbteactpdf"
                href="#"
                aria-disabled="true"
                onClick={() => {
                  handleShow();
                  setFile("/assets/file/maharshtra_act.pdf");
                }}
              >
                MAHARASHTRA ACT No. XXXVIII OF 1997, THE MAHARASHTRA STATE BOARD
                OF TECHNICAL EDUCATION ACT, 1997. (English)(64 kb)
                <img src="/assets/Images1/pdf.png" alt="pdf" />
              </a>
            </p>

            <p>
              <a
                className="link-primary"
                // data-bs-toggle="modal"
                // data-bs-target="#msbteactpdf"
                href="#"
                aria-disabled="true"
                onClick={() => {
                  handleShow();
                  setFile("/assets/file/MahActNo22OF2023_180520231740.pdf");
                }}
              >
                Maharashtra State Board of Technical Education (Amendment) Act,
                2023 (Mah. Act No. XXII of 2023). (English)(199 kb)
                <img src="/assets/Images1/pdf.png" alt="pdf" />
              </a>
            </p>
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

export default MsbteAct;
