import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { s3 } from "../../utils/Helper";

function Institute() {
    return (
        <>

            <div className="row">
                <div className="col-sm-12">
                    <div className="card mb-3 borderforcard paddingTopxl">
                        <div className="card-header backgroundColorCardHeader">
                            <h1 className="fontForHeader">Institutes</h1>
                        </div>
                        <div className="card-body removePadding row">
                            <div className="col-lg-12 col-sm-12">
                                <div className="pdfDiv">
                                    <iframe
                                        src={s3 + "/files/institutes.pdf"}
                                        style={{ width: "100%", height: "100%" }}
                                        title="PDF"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Institute;
