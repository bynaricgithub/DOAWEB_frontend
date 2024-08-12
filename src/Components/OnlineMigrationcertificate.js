import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function OnlineMigrationcertificate() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="card mb-3  borderforcard paddingTopxl OnlineProceduret p-4">
        <div className="card-headers">
          <h3>Online Procedure for Migration certificate</h3>
          <button className="back-btn">
            {" "}
            <Link to={{ pathname: "/migrationCertificate" }}>Back</Link>
          </button>
        </div>
        <br />
        <p>
          Application for Migration certificate is available on www.msbte.org.in
          website &gt; Student &gt; Transcript &gt; apply &gt;
          <a
            href="https://aaplesarkar.mahaonline.gov.in/en/"
            target="_blank"
            rel="noreferrer"
          >
            www.aaplesarkar. mahaonline.gov.in
          </a>
          .
        </p>
        <strong>OR</strong>
        <p>
          <a
            href="https://aaplesarkar.mahaonline.gov.in/en/"
            target="_blank"
            rel="noreferrer"
          >
            www.aaplesarkar.mahaonline.gov.in
          </a>
          New User Registration &gt; Select 'Option 2' &gt; Fill the form for
          Registration
        </p>

        <h6>Required documents for Migration Certificate:</h6>

        <ol>
          <li>
            Diploma Mark sheets of last two Semesters (for semester
            pattern)/final year mark sheet (for yearly Pattern)
          </li>
          <li>
            Provisional /Final Board Certificate. (Provisional certificate is
            valid only for 6 months)
          </li>
          <li>Leaving certificate (Last attended Diploma Institute)</li>
          <p>Fee for Migration certificate is Rs. 300/-</p>
          <b>
            #failed or incomplete diploma Students have to fill the Application
            form only through offline mode. (Required Documents: Attended
            semesters mark sheets and Diploma Inst. Leaving Certificate)#
          </b>
        </ol>

        <h6>Fee for transcript certificate is as follows,</h6>

        <ol>
          <li>Visit: aaplesarkar.mahaonline.gov.in</li>
          <li>Click on track your application (अर्ज मागोवा)</li>
          <li>Select Higher & Technical Education Department</li>
          <li>Select Maharashtra state board of Technical Education</li>
          <li>Select Migration Certificate</li>
          <li>Enter Application Id</li>
          <li>Download Certificate</li>
          <br />
          <p>
            (No signature Validation is required for Adobe Reader version 9.3
            and above)
          </p>
        </ol>

        <h6>Steps to Validate Digital Signature:</h6>
        <ol>
          <li>
            VSave the Certificate and open the Certificate from destination,
            Right click on digital signature panel.
          </li>
          <li>Select 'show signature properties'</li>
          <li>Click on 'show signer's certificate'</li>
          <li>
            Click on 'Trust' and click on 'Add to Trusted Certificates' then
            click on 'Ok'
          </li>
          <li>
            Click on 'check box of certified documents' and below 3 check box
            then click on 'Ok'
          </li>
          <li>Click on 'validate signature.</li>
          <br />
        </ol>

        <b>
          For Migration certificate related Query, you can contact:
          desk50migration@msbte.com OR 022- 62542156
        </b>
        <br />
        <h5>
          <a
            className="link-primary1 paddinfForClick"
            href="#"
            aria-disabled="true"
            onClick={() => {
              handleShow();
              setFile("/assets/file/migration.pdf");
            }}
          >
            {" "}
            Sample application form for Migration certificate
          </a>
        </h5>
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

export default OnlineMigrationcertificate;
