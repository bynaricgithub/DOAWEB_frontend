import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function MigrationCertificate() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="row ">
        <div className="col-sm-12">
          <div className="card removerborderRadius">
            <div className="card-body">
              <p className="linktextcolor">
                IMPORTANT NOTE FOR STUDENTS OF AUTONOMOUS INSTITUTE:
              </p>

              <span>
                Migration Certificate will be issued to students from MSBTE
                affiliated institutes only. Students of Autonomous Institutes
                should contact their respective institute for Migration
                Certificate.
              </span>
              <br />
              <br />

              <p className="textColornew">
                <Link to={{ pathname: "/OnlineMigrationcertificate" }}>
                  {" "}
                  Online Procedure for Migration certificate Apply Online
                </Link>
              </p>
              <p className="textColornew">
                <a
                  href="https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=4411"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Online
                </a>
              </p>
              <p className="linkcolor">
                <a
                  className="link-primary1 paddinfForClick"
                  href="#"
                  aria-disabled="true"
                  onClick={() => {
                    handleShow();
                    setFile("/assets/file/ReapplyProcedure_060720221145.pdf");
                  }}
                >
                  Procedure for Reapply (Click here)
                </a>
              </p>

              <p>
                For Queries related to Migration Certificate, Please write us
                on,
              </p>
              <p className="deskcolor">
                <a href="mailto:desk50transcript@msbte.com">
                  {" "}
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

export default MigrationCertificate;
