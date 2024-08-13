import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Services() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">Services</h1>
        </div>
        <div className="row g-0 serv">
          <div className="card-body removePadding p-3">
            <ul>
              <li>
                <Link to={{ pathname: "/transcriptCertificate" }}>
                  {" "}
                  Transcript Certificate
                </Link>
              </li>
              <li>
                <a href="https://msbte.org.in/pcwebBTRes/pcResult01/pcfrmViewMSBTEResult.aspx">
                  Duplicate Marksheet
                </a>
              </li>

              <li>
                <a href="https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=4410">
                  Duplicate Certificate
                </a>
              </li>

              <li>
                <a href="https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=5772">
                  Migration Certificate
                </a>
              </li>

              <li>
                <a href="/equivalenceOtherBoard">Equivalence (Other Board)</a>
              </li>

              <li>
                <a
                  // href="https://msbte.org.in/portal/authentication-and-verification/"
                  // target={"_blank"}
                  href="#"
                  aria-disabled="true"
                  onClick={() => {
                    handleShow();
                    setFile(
                      "/assets/file/AuthenticationVerificationdocuments&Fees_18120181055.pdf"
                    );
                  }}
                >
                  Authentication and Verification
                </a>
              </li>
            </ul>
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

export default Services;
