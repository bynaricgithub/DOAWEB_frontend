import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Admission() {
  return (
    <>
      <div className="commonSubheader">
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="innercommTitle">Admission</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card mb-3 borderforcard paddingTopxl">
            {/* <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">Affilation</h1>
            </div> */}
            <a
              href="https://sss.msbae.in/ay2425/"
              className="links text-center p-2"
            >
              Fees Approval System For Academic Year 2024-25
            </a>
            <div className="row g-0">
              <div className="card-body removePadding row">
                <div className="col-lg-6 col-sm-6">
                  <div className="pdfDiv">
                    <iframe
                      src={"/assets/file/admission.pdf"}
                      style={{ width: "100%", height: "100%" }}
                      title="PDF"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="pdfDiv">
                    <iframe
                      src={"/assets/file/ffc-circular.pdf"}
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

export default Admission;
