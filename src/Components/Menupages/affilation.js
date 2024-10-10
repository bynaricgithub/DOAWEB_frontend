import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { s3 } from "../../utils/Helper";

function Affilation() {
    return (
        <>

            <div className="row">
                <div className="col-sm-12">
                    <div className="card mb-3 borderforcard paddingTopxl">
                        <div className="card-header backgroundColorCardHeader">
                            <h1 className="fontForHeader">Affilation</h1>
                        </div>
                        <a
                            href="https://doaonline.in/institute-login"
                            className="links text-center p-2 mt-2"
                        >
                            Click here for affilation registration form
                        </a>
                        <div className="row g-0">
                            <div className="card-body removePadding row">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="pdfDiv">
                                        <iframe
                                            src={s3 + "/files/affiliation.pdf"}
                                            style={{ width: "100%", height: "100%" }}
                                            title="PDF"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Affilation;
