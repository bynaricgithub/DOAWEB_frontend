import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Activities() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="row ">
        <div className="col-sm-4">
          <div className="card marginForcard">
            <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">STUDENT</h1>
            </div>
            <div className="card-body">
              <ul>
                <li className="p-1 listRemoveborder link-primary">
                  <a href="/careerFair" className="link-primary">
                    Career Fair
                  </a>
                </li>
                <li className="p-1 listRemoveborder link-primary">
                  <a href="/activities" className="link-primary">
                    ACTIVITIES
                  </a>
                </li>
                <li className="p-1 listRemoveborder link-primary">
                  <a href="/onrsStudents" className="link-primary">
                    ONRS STUDENTS
                  </a>
                </li>
                <li className="p-1 listRemoveborder link-primary">
                  <a href="/transcriptCertificate" className="link-primary">
                    TRANSCRIPT
                  </a>
                </li>
                <li className="p-1 listRemoveborder link-primary">
                  <a
                    rel="noreferrer"
                    href="https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=4410"
                    className="link-primary"
                    target={"_blank"}
                  >
                    Duplicate Marksheet
                  </a>
                </li>
                <li className="p-1 listRemoveborder link-primary">
                  <a
                    rel="noreferrer"
                    href="https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=5772"
                    className="link-primary"
                    target={"_blank"}
                  >
                    Duplicate Certificate
                  </a>
                </li>
                <li className="p-1 listRemoveborder link-primary">
                  <a href="/migrationCertificate" className="link-primary">
                    MIGRATION
                  </a>
                </li>
                <li className="p-1 listRemoveborder link-primary">
                  <a href="/equivalenceOtherBoard" className="link-primary">
                    Equivalence(Other Board)
                  </a>
                </li>
                <li className="p-1 listRemoveborder link-primary">
                  <a href="/hscEquivalence" className="link-primary">
                    HSC Equivalence
                  </a>
                </li>
                <li className="p-1 listRemoveborder link-primary">
                  <a
                    href="#"
                    rel="noreferrer"
                    className="link-primary"
                    onClick={() => {
                      handleShow();
                      setFile("/assets/file/Vision.pdf");
                    }}
                  >
                    Authentication & Verification
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="card mb-3  borderforcard paddingTopxl">
            <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">ACTIVITIES</h1>
            </div>
            <div className="row g-0">
              <div className="card-body removePadding">
                <div className="row p-4 table-responsive">
                  <table className="table table-bordered  widthTable">
                    <thead>
                      <tr>
                        <th>Sr. No</th>
                        <th>Date</th>
                        <th>News</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
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
          <iframe className="w-100 h-100" src={file} title="myFrame"></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Activities;
