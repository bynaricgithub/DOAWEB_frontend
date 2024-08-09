import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <>
      <div className="commonSubheader">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="">
                <h3 className="innercommTitle">
                About 
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="row px-5">
        <div className="col-sm-12">
          <div className="card mb-3 borderforcard paddingAboutMsbte">   
              <div className="card-body removePadding row">
                <p className="commonparatext">
                  Government, non-government aided and unaided/permanently
                  unaided art institutes are functioning under the Directorate
                  of Art. Maharashtra State Board of Technical Education Act,
                  1997 has been prepared on the lines of Maharashtra State Board
                  of Art Education Act, 2023 so that the said institutions can
                  be controlled effectively. The said Act has been published in
                  the Government Gazette of Maharashtra on 19th January, 2024.
                  Also, in the Maharashtra Government Gazette dated 23th
                  February, 2024, the date of the said Act has been implemented
                  from 23th February, 2024.
                </p>
                <p  className="commonparatext">
                  Maharashtra State Board of Art Education has its headoffice in
                  Mumbai. Also, divisional offices of the board are functioning
                  at Nagpur, Chhatrapati Sambhajinagar and Mumbai. There is a
                  regulatory council of the board, the ex-officio President of
                  this council is the Hon'ble Minister, Higher and Technical
                  Education Department and the Hon'ble Minister of State, Higher
                  and Technical Education Department is the Vice- President.
                  Maharashtra State Board of Art Education conducts Higher Art
                  Examination, Drawing Grade Examination (Elementary &
                  Intermediate) for school students. At present 10
                  Diploma/Certificate courses are being implemented by the
                  Board. Every year about 8 lakh students from Maharashtra and
                  other states appear for the Drawing Grade Examination
                  (Elementary & Intermediate). Excellent syllabus, effective
                  implementation, disciplined examination system is the policy
                  of the board. The ultimate aim is to conduct the examination
                  and declaration of results and award of certificates in a
                  transparent and fair manner.
                </p>
              </div>   
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
