import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { s3 } from "../../utils/Helper";

function MsbaeAct() {
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState("");
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (
        <>
            <div className="card mb-3  borderforcard paddingTopxl">
                <div className="card-header backgroundColorCardHeader">
                    <h1 className="fontForHeader">
                        Maharashtra Right to Public Services Act, 2015
                    </h1>
                </div>
                <div className="card-body">
                    <div className="row p-2">
                        <p>
                            The Maharashtra Right to Public Services Act, 2015 is enacted and
                            is in force since 28.04.2015 to ensure that notified services are
                            provided to the citizens in a transparent, speedy and time-bound
                            manner by various Government Departments and Public Authorities
                            under the Government. Its objective is to provide easy, prompt and
                            time bound services to the citizens.
                        </p>

                        <p>
                            The Maharashtra State Commission for Right to Public Service has
                            been constituted under the above Act to monitor, coordinate,
                            control and improve the public services being provided by the
                            Government. The Commission consists of a Chief Commissioner and
                            six Commissioners. The headquarter of the Commission is at the New
                            Administrative Building, Opposite Mantralaya, Mumbai and the
                            Divisional Offices of the Commissioners are at the six Divisional
                            Headquarters.
                        </p>

                        <p>
                            If any notified service is not provided to any eligible person
                            within stipulated time or is rejected without proper grounds, the
                            concerned person may file 1st and 2nd appeals with the higher
                            authorities and if he is not satisfied with their decision, hemay
                            prefer third appeal to the Commission. The erring officer is
                            liable for a penalty up to Rs 5000/- per case. Notified Services
                            rendered by this Department are as below.
                        </p>

                        <p>
                            Website of the Maharashtra State Commission for Right to Services
                            is :-{" "}
                            <a
                                className="ExternalLinkClick"
                                href="https://aaplesarkar.mahaonline.gov.in"
                                target="_blank"
                            >
                                https://aaplesarkar.mahaonline.gov.in
                            </a>
                        </p>

                        <div className="d-flex justify-content-start">
                            <a
                                className="btn btn-warning me-2 text-center"
                                href="#"
                                aria-disabled="true"
                                onClick={() => {
                                    handleShow();
                                    setFile(s3 + "/files/RTS_act_2015.pdf");
                                }}
                            >
                                Maharashtra Right to public services Act, 2015
                            </a>
                            <a
                                className="btn btn-warning mx-2 text-center"
                                aria-disabled="true"
                                onClick={() => {
                                    handleShow();
                                    setFile(s3 + "/files/GazetteSearch.pdf");
                                }}
                            >
                                {" "}
                                RTS Rules Gazette
                            </a>
                            <a
                                className="btn btn-warning mx-2 text-center ExternalLinkClick"
                                href="https://aaplesarkar.mahaonline.gov.in/en/CommonForm/ViewAllServices"
                                target="_blank"
                            >
                                List of services notified under RTS Act
                            </a>
                            <a
                                className="btn btn-warning mx-2 text-center"
                                href="https://aaplesarkar.mahaonline.gov.in/en/CommonForm/SewaKendraDetails"
                                target="_blank"
                            >
                                List of AapleSarkar Seva Kendra
                            </a>
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

export default MsbaeAct;
