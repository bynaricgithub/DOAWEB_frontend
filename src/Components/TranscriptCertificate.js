import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function TranscriptCertificate() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="row ">
        <div className="col-sm-12">
          <div className="card p-2">
            <div className="card-body">
              <p className="linktextcolor">
                <Link to={{ pathname: "/onlinetranscriptCertificate" }}>
                  Online Procedure for Transcript Certificate
                </Link>
              </p>
              <h5 className="pb-2">
                <a
                  href="https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=5764"
                  className="linkcolor1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Online
                </a>
              </h5>
              <p className="linkcolor1">Important Note:</p>
              <ul>
                <li className="pb-1">
                  Transcript Certificate contains the name of the student as per
                  final Board Certificate, total marks of final year or last two
                  semesters total marks & Teaching Examination schemes of the
                  course.
                </li>
                <li className="p-1">
                  If a student wants both Transcript & Authentication
                  Certificate, She/he needs to apply in two different sections
                  i.e. CDC and Exam Section of MSBTE separately. It is advised
                  to process both certificates simultaneously.
                </li>
              </ul>
              <p>
                For the sample Transcript Certificate, please
                <a
                  className="linkcolor paddinfForClick"
                  href="#"
                  aria-disabled="true"
                  onClick={() => {
                    handleShow();
                    setFile(
                      "/assets/file/SampleTranscriptCertificate060620221720.pdf"
                    );
                  }}
                >
                  Click here
                </a>
              </p>
              <p>
                For Queries related to Transcript Certificate, Please write us
                on,
              </p>
              <p className="deskcolor mb-2">
                <a href="mailto:desk50transcript@msbte.com">
                  desk50transcript@msbte.com
                </a>
              </p>
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

export default TranscriptCertificate;
