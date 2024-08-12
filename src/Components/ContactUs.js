import React from "react";
import NewMap from "./MapNew";

function ContactUs() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card mb-3 borderforcard paddingTopxl">
            <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">Contact Us</h1>
            </div>
            <div className="row g-0">
              <div className="card-body removePadding row">
                <div className="col-lg-6 col-sm-12">
                  <div className="row p-2">
                    <p className="colorcontact1">
                      MAHARASHTRA STATE BOARD OF TECHNICAL EDUCATION <br />
                      (Autonomous) (ISO 9001:2015) (ISO/IEC 27001:2013)
                    </p>
                    <div className="d-flex">
                      <span className="colorcontact1">Address</span>
                      <span className="colorcontact1 paddingFornewSpan">:</span>
                      <span className="colorcontact">
                        <a
                          className="phoneLinkColor"
                          href="https://goo.gl/maps/CeosixxKD1qFBi4S8"
                          target="_blank"
                          rel="noreferrer"
                        >
                          4th floor, Govt. Polytechnic Building, 49, Kherwadi,
                          Bandra (E), Mumbai- 400 051
                        </a>
                      </span>
                    </div>
                    <div className="d-flex">
                      <span className="colorcontact1">Phone</span>
                      <span className="colorcontact1 paddingFornewSpan">:</span>
                      <span className="colorcontact">
                        <a
                          className="phoneLinkColor"
                          href="tel:+022-62542100"
                          target="_blank"
                          rel="noreferrer"
                        >
                          +022-62542100
                        </a>
                      </span>
                    </div>
                    <div className="d-flex">
                      <span className="colorcontact1">Email</span>
                      <span className="colorcontact1 paddingFornewSpan">:</span>
                      <span className="colorcontact">
                        <a
                          className="phoneLinkColor"
                          href="mailto:secretary@msbte.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          secretary@msbte.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="row p-2">
                    <span className="colorcontact1">REGIONAL OFFICES</span>
                  </div>
                  <div className="row p-4 removrTablePadding table-responsive">
                    <table className="table table-bordered  widthTable contactTable">
                      {/* <thead>
                      <tr>
                        <th
                          colSpan="6"
                          className=" backgroundColorCardHeadertableHead"
                        >
                          Abbreviations:-
                        </th>
                      </tr>
                    </thead> */}
                      <tbody>
                        <tr>
                          <td>Mumbai Region</td>
                          <td>
                            Dy.Secretary, Maharashtra State Board of Technical
                            Education,Region Office, 2nd Floor,Govt.Polytechnic
                            Building,49,Kherwadi, Bandra(East), Mumbai:400051
                            <div className="d-flex">
                              <span className="contactFont">
                                Phone<span className="paddingSpan">:</span>
                              </span>
                              <a
                                className="phoneLinkColor"
                                href="tel:+022-62542118, +022-62542112"
                              >
                                022-62542118, 022-62542112
                              </a>
                            </div>
                            <div className="d-flex">
                              <span className="contactFont">
                                Mail<span className="paddingSpan">:</span>
                              </span>
                              <a href="mailto:rbtemumbai@msbte.com">
                                rbtemumbai@msbte.com
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Pune Region</td>
                          <td>
                            Dy.Secretary, Maharashtra State Board of Technical
                            Education,Region Office, 412-E,Shivaji Nager,
                            Bahirat Patil Chowk,Pune-411016
                            <div className="d-flex">
                              <span className="contactFont">
                                Phone<span className="paddingSpan">:</span>
                              </span>
                              <a
                                className="phoneLinkColor"
                                href="tel:+020-25656994, +25660319"
                              >
                                020-25656994/25660319
                              </a>
                            </div>
                            <div className="d-flex">
                              <span className="contactFont">
                                Mail<span className="paddingSpan">:</span>
                              </span>
                              <a href="mailto:rbtepn@msbte.com">
                                rbtepn@msbte.com
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Nagpur Region</td>
                          <td>
                            Dy.Secretary, Maharashtra State Board of Technical
                            Education, Region Office,Sadar,Nagpur-440001
                            <div className="d-flex">
                              <span className="contactFont">
                                Phone<span className="paddingSpan">:</span>
                              </span>
                              <a
                                className="phoneLinkColor"
                                href="tel:+ 0712-6603875, +25660319"
                              >
                                0712-6603875/ 6603876/ 6603877
                              </a>
                            </div>
                            <div className="d-flex">
                              <span className="contactFont">
                                Mail<span className="paddingSpan">:</span>
                              </span>{" "}
                              <a href="mailto:rbteng@msbte.com">
                                rbteng@msbte.com
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Chatrapati Shambhajinagar Region</td>
                          <td>
                            Dy.Secretary,Maharashtra State Board of Technical
                            Education,Region Office,Osmanapura,Chatrapati
                            Shambhajinagar-431005
                            <div className="d-flex">
                              <span className="contactFont">
                                Phone<span className="paddingSpan">:</span>
                              </span>
                              <a
                                className="phoneLinkColor"
                                href="tel:+ 0712-6603875, +6603876 ,+6603877"
                              >
                                0240-2331273/ 2334025
                              </a>
                            </div>
                            <div className="d-flex">
                              <span className="contactFont">
                                Mail<span className="paddingSpan">:</span>
                              </span>
                              <a href="mailto:rbteau@msbte.com">
                                rbteau@msbte.com
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <NewMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
