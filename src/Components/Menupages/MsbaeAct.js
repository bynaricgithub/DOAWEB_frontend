import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function MsbaeAct() {
  return (
    <>
      <div className="commonSubheader">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="">
                <h3 className="innercommTitle">MSBAE Act</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card mb-3 borderforcard paddingTopxl">
            <div className="row g-0">
              <div className="card-body removePadding row">
                <div className="col-lg-12 col-sm-12">
                  <div className="pdfDiv">
                    <iframe
                      src={"/assets/file/GazetteSearch.pdf"}
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

export default MsbaeAct;
