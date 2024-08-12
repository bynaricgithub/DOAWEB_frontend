import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function QualityPolicy() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">QUALITY POLICY</h1>
        </div>
        <div className="row g-0">
          <div className="card-body removePadding">
            <p className="p-2 fontp">
              We, at MSBTE are committed to offer the best in class academic
              services to the students and institutes to enhance the delight of
              industry and society. This will be achieved through continual
              improvement in management practices adopted in the process of
              curriculum design, development, implementation, evaluation and
              monitoring system along with adequate faculty development
              programmes.
              <br />
              <a
                className="link-primary"
                // data-bs-toggle="modal"
                // data-bs-target="#myModalqpolicypdf1"
                href="#"
                aria-disabled="true"
                onClick={() => {
                  handleShow();
                  setFile("/assets/file/MSBTEQualityPolicy.pdf");
                }}
              >
                Download Quality Policy as a PDF file (English)(1,653 kb){" "}
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

export default QualityPolicy;
