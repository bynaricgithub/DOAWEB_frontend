import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Institute() {
  return (
    <>
    	<div className="commonSubheader">
				<Container>
					<Row>
						<Col lg={12}>
							<h3 className="innercommTitle">
                            Institutes
							</h3>
						</Col>
					</Row>
				</Container>
			</div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card mb-3 borderforcard paddingAboutMsbte">
              <div className="card-body removePadding row">
                <div className="col-lg-12 col-sm-12">
                    <div className="pdfDiv">
                  <iframe
                    src={"/assets/file/institutes.pdf"}
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
