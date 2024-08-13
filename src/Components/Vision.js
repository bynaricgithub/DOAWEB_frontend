import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Vision() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <div className="card mb-3  borderforcard paddingTopxl">
            <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">VISION</h1>
            </div>
            <div className="row g-0">
              <div className="card-body removePadding">
                <p className="p-2 fontp">
                  To ensure that the Diploma level Technical Education
                  constantly matches the latest requirements of Technology and
                  industry and includes the all-round personal development of
                  students including social concerns and to become globally
                  competitive, technology led organization.
                  <br />
                  {/* <a
                // href="/assets/file/Vision.pdf"
                href="#"
                // target="_blank"
                className="link-primary"
                // data-bs-toggle="modal"
                // data-bs-target="#myModalvisionmissionpdf1"
                onClick={() => {
                  handleShow();
                  setFile("/assets/file/Vision.pdf");
                }}
              >
                Download VISION as PDF file (English) (59KB)
                <img src="/assets/Images1/pdf.png" alt="pdf" />
              </a> */}
                </p>

                {/* <a
                // href="/assets/file/Mission.pdf"
                // target="_blank"
                className="link-primary"
                // data-bs-toggle="modal"
                // data-bs-target="#myModalvisionmissionpdf2"
                href="#"
                onClick={() => {
                  handleShow();
                  setFile("/assets/file/Mission.pdf");
                }}
              >
                Download MISSION as PDF file (English) (59KB)
                <img src="/assets/Images1/pdf.png" alt="pdf" />
              </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-sm-6">
          <div className="card mb-3  borderforcard paddingTopxl">
            <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">MISSION</h1>
            </div>
            <div className="row g-0">
              <div className="card-body removePadding">
                <p className="p-2 fontp">
                  To provide high quality technical and managerial manpower,
                  information and consultancy services to the industry and
                  community to enable the industry and community to face the
                  challenging technological & environmental challenges.
                </p>
                <br />
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

export default Vision;
