import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function CareerFair() {
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
                    href="https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=4410"
                    className="link-primary"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Duplicate Marksheet
                  </a>
                </li>
                <li className="p-1 listRemoveborder link-primary">
                  <a
                    href="https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=5772"
                    className="link-primary"
                    target={"_blank"}
                    rel="noreferrer"
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
                    aria-disabled="true"
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
          <div className="card mb-3  borderforcard paddingAboutMsbte ">
            <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">CAREER FAIR</h1>
            </div>
            <div className="row g-0">
              <div className="card-body removePadding">
                <div className="row p-4 removrTablePadding table-responsive">
                  <table className="table table-bordered  widthTable">
                    <thead>
                      <tr>
                        <th>SNo</th>
                        <th>Date</th>
                        <th>News</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <span className="badge BadgeColor">7 Jun 19</span>
                        </td>
                        <td>
                          <a
                            // href="https://msbte.org.in/file/1671FinalAdvertisementCopy_070620191247.pdf"
                            // target="_blank"
                            className="link-primary DescSizeFont"
                            href="#"
                            onClick={() => {
                              handleShow();
                              setFile(
                                "/assets/file/1671FinalAdvertisementCopy_070620191247.pdf"
                              );
                            }}
                          >
                            Carrier Fair at SCJF'S SHRI CHIMASAHEB JAGDALE
                            INSTITUTE OF TECHNOLOGY, Narsobawadi-Kolhapur on 11
                            June 2019.(Marathi) (520 KB)
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <span className="badge BadgeColor">8 Jan 19</span>
                        </td>
                        <td>
                          <a
                            // href="https://msbte.org.in/file/MSBTECareerfairbybelhe_080120191055.pdf"
                            // target="_blank"
                            className="link-primary DescSizeFont"
                            href="#"
                            aria-disabled="true"
                            onClick={() => {
                              handleShow();
                              setFile(
                                "/assets/file/MSBTECareerfairbybelhe_080120191055.pdf"
                              );
                            }}
                          >
                            MSBTE sponsored career fair on wheel at Samarth
                            Polytechnic Belhe ( institute code:0992) from 8
                            January to 11 January 2019.(Marathi) (3,070 KB)
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <span className="badge BadgeColor">7 Jan 19</span>
                        </td>
                        <td>
                          <a
                            // href="https://msbte.org.in/file/onwheel_070120191804.pdf"
                            // target="_blank"
                            className="link-primary DescSizeFont"
                            href="#"
                            aria-disabled="true"
                            onClick={() => {
                              handleShow();
                              setFile("/assets/file/onwheel_070120191804.pdf");
                            }}
                          >
                            Career fair by VVP Polytechnic,Solapur.(Marathi)
                            (1,432 KB) pdf
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <span className="badge BadgeColor">1 Jan 19</span>
                        </td>
                        <td>
                          <a
                            // href="https://msbte.org.in/file/MSBTECareerFair(On%20Wheels-2019)_040120191224.pdf"
                            // target="_blank"
                            className="link-primary DescSizeFont"
                            href="#"
                            aria-disabled="true"
                            onClick={() => {
                              handleShow();
                              setFile(
                                "/assets/file/MSBTECareerFair(On%20Wheels-2019)_040120191224.pdf"
                              );
                            }}
                          >
                            MSBTE Career Fair,on wheels ( January 7th to 9th )at
                            G.H.RAISONI POLYTECHNIC,Nagpur.(Marathi)(1,780 KB)
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>
                          <span className="badge BadgeColor">8 Jan 19</span>
                        </td>
                        <td>
                          <a
                            // href="https://msbte.org.in/file/onwheel_010120191549.pdf"
                            // target="_blank"
                            className="link-primary DescSizeFont"
                            href="#"
                            aria-disabled="true"
                            onClick={() => {
                              handleShow();
                              setFile("/assets/file/onwheel_010120191549.pdf");
                            }}
                          >
                            Career fair by Samarth Polytechnic, Junnar,Pune from
                            08-01-2019.(Marathi) (1,133 KB)
                          </a>
                        </td>
                      </tr>
                    </tbody>
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
          <iframe title="myFrame" className="w-100 h-100" src={file}></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CareerFair;
