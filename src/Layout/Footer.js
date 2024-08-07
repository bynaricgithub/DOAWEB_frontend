import React, { useEffect, useState, useContext } from "react";
import { ShowContext } from "../App";

import Carousel from "react-multi-carousel";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import API from "../API";
import moment from "moment";
import Moment from "react-moment";
import Modal from "react-bootstrap/Modal";

function Footer() {
  const { setShow, setMsg } = useContext(ShowContext);
  const [visitor, setVisitor] = useState(0);
  const [lastUpdatedDate, setLastUpdatedDate] = useState();
  useEffect(() => {
    AddVisitor(setMsg, setShow);
    GetVisitor(setMsg, setShow, setVisitor);
  });
  useEffect(() => {
    getLastUpdateDate(setMsg, setShow, setLastUpdatedDate);
  }, []);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div
        className="text-center text-white fixed-footer footerclor"
        // id="fixfooter"
      >
        <div className="container">
          <section className="sliderwidth trigger">
            <div className="slider">
              <div id="logos-home-page">
                <div className="slider">
                  <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={4000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                      desktop: {
                        breakpoint: {
                          max: 3000,
                          min: 1024,
                        },
                        items: 8,
                        partialVisibilityGutter: 40,
                      },
                      tablet: {
                        breakpoint: {
                          max: 1024,
                          min: 700,
                        },
                        items: 6,
                        partialVisibilityGutter: 30,
                      },
                      mobile: {
                        breakpoint: {
                          max: 600,
                          min: 414,
                        },
                        items: 3,
                        partialVisibilityGutter: 20,
                      },
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                  >
                    <div>
                      <a
                        href="https://www.maharashtra.gov.in/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img
                          src="/assets/Images1/mahasahan.png"
                          alt="mahasahan"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://htedu.maharashtra.gov.in/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img
                          src="/assets/Images1/h&tecnicaleducation.png"
                          alt="h&t"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="http://www.dtemaharashtra.gov.in/index.html"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/assets/Images1/carousal.png" alt="dte" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://mhrd.gov.in/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/assets/Images1/image.png" alt="mhrd" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://accounts.google.com/v3/signin/identifier?dsh=S-1526263976%3A1678091645316360&amp%3Bhd=msbte.com&amp%3Bsacu=1&amp%3Bservice=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AddSession#identifier"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/assets/Images1/email.jpg" alt="google" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.aicte-india.org/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/assets/Images1/aicte.png" alt="aicte" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.coa.gov.in/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/assets/Images1/COA.jpeg" alt="COA" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.pci.nic.in/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/assets/Images1/PCI.png" alt="PCI" />
                      </a>
                    </div>

                    <div>
                      <a
                        href="http://goidirectory.nic.in/index.php"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/assets/Images1/webdirectory.png" alt="goi" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="http://apprentice-engineer.com/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/assets/Images1/boat.png" alt="apprentice" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://mahaeschol.maharashtra.gov.in/MahaEschol/Scholarships/Account/Login.aspx"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img
                          src="/assets/Images1/scholership.png"
                          alt="mahaeschol"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://nptel.ac.in/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/assets/Images1/Nptel.png" alt="nptel" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://infyspringboard.onwingspan.com/web/en/login"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img
                          src="/assets/Images1/springboard.png"
                          alt="springboard"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.vlab.co.in/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/assets/Images1/virtuallab.png" alt="vlab" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://swayam.gov.in/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <img src="/assets/Images1/swayam.png" alt="swayam" />
                      </a>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container-fluid footerContainerwidth">
          <div className="row">
            <ul className="">
              <li>
                <Link to={{ pathname: "/" }} target="_top">
                  Home
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/" }} target="_top">
                  About
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/" }} target="_top">
                Institutes
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "/" }}
                  target="_top"
                >
                  Admission
                </Link>
              </li>
              <li>
                <a
                  href=""
                  target="_blank "
                >
                  Examination
                </a>
              </li>
              <li>
                <a href="#" target="_blank ">
                Contact
                </a>
              </li>

              
              
            </ul>
          </div>
          <p className="footertext my-1">
          Maharashtra
State Board
of Art Education, All Rights
            Reserved.
          </p>
          <div className=" marginDiv py-1 my-2">
            <a
              href="#"
              title="Explanation of WCAG 2.0 Level Double-A Conformance"
              className="footerImg"
            >
              <img
                height="32"
                width="88"
                src="/assets/Images1/wcag2AA.jpg"
                alt="Level Double-A conformance,W3C WAI Web Content Accessibility Guidelines 2.0"
                onClick={() => {
                  if (
                    window.confirm(
                      "This link will take you to an external website.यह लिंक आपको बाहरी वेबसाइट पर ले जाएगा।  हा दुवा आपल्याला एका बाह्य वेबसाइटवर घेऊन जाईल."
                    )
                  ) {
                    window.open(
                      "https://www.w3.org/WAI/WCAG2AA-Conformance",
                      "_blank"
                    );
                  }
                }}
              />
            </a>
            <a href="#" title="Valid XHTML 1.0 Transitional">
              <img
                src="/assets/Images1/valid-xhtml.png"
                alt="Valid XHTML 1.0 Transitional"
                height="32"
                width="88"
                onClick={() => {
                  if (
                    window.confirm(
                      "This link will take you to an external website.यह लिंक आपको बाहरी वेबसाइट पर ले जाएगा।  हा दुवा आपल्याला एका बाह्य वेबसाइटवर घेऊन जाईल."
                    )
                  ) {
                    window.open(
                      "https://validator.w3.org/check?uri=https%3A%2F%2Fweb.msbte.ac.in%2F&charset=%28detect+automatically%29&doctype=Inline&group=0",
                      "_blank"
                    );
                  }
                }}
              />
            </a>
            <a href="#" title="Valid CSS!">
              <img
                height="31"
                width="88"
                src="/assets/Images1/vcss.jpg"
                alt="Valid CSS!"
                onClick={() => {
                  if (
                    window.confirm(
                      "This link will take you to an external website.यह लिंक आपको बाहरी वेबसाइट पर ले जाएगा।  हा दुवा आपल्याला एका बाह्य वेबसाइटवर घेऊन जाईल."
                    )
                  ) {
                    window.open(
                      "https://jigsaw.w3.org/css-validator/check/referer",
                      "_blank"
                    );
                  }
                }}
              />
            </a>
            {/* <a href="#" title="India Gov." className="footerImg">
              <img
                src="/assets/Images1/india-gov-in.jpg"
                alt="National portal of India"
                onClick={() => {
                  if (
                    window.confirm(
                      "This link will take you to an external website.यह लिंक आपको बाहरी वेबसाइट पर ले जाएगा।  हा दुवा आपल्याला एका बाह्य वेबसाइटवर घेऊन जाईल."
                    )
                  ) {
                    window.open("https://india.gov.in/", "_blank");
                  }
                }}
              />
            </a> */}
            {/* <a href="#" title="India Gov.">
              <img
                src="/assets/Images1/sqt.jpg"
                alt="sqrt"
                height={"30"}
                onClick={() => {
                  if (
                    window.confirm(
                      "This link will take you to an external website.यह लिंक आपको बाहरी वेबसाइट पर ले जाएगा।  हा दुवा आपल्याला एका बाह्य वेबसाइटवर घेऊन जाईल."
                    )
                  ) {
                    window.open("http://www.stqc.gov.in/", "_blank");
                  }
                }}
              />
            </a> */}
            {/* <a id="Xhtml" href="#" title="Valid XHTML 1.0 Transitional">
              <img
                src="/assets/Images1/xtml.png"
                alt="ValidXHTML1.0Transitional"
                className="img-fluid widthforlogos"
              />
            </a>
            <a href="#" id="WACG" title="Valid CSS!">
              <img
                src="/assets/Images1/w3cwai.png"
                alt="ValidCSS!"
                className="img-fluid widthforlogos"
              />
            </a>
            <a href="#" id="CSS" title="IndiaGov.">
              <img
                className="img-fluid widthforlogos"
                src="/assets/Images1/w3cwai.png"
                alt="National portal of India"
              />
            </a> */}
          </div>
          <div className="counterLink text-center">
            {visitor !== 0 ? (
              <p className="visitorCount">
                Visitor Count :&nbsp;{" "}
                {String(visitor)
                  .split("")
                  .map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="bottom-text pt-2 pb-3">
            <span className="text-left">
              Last updated on :&nbsp;
              {lastUpdatedDate ? (
                <Moment format="DD/MM/YY, hh:mm A">{lastUpdatedDate}</Moment>
              ) : (
                ""
              )}
              {/* &nbsp; | &nbsp; Powered by &nbsp;
              <a
                href="https://web.bynaric.in/"
                target="_blank"
                rel="noreferrer"
                className="bynaricLink"
              >
                Bynaric Systems
              </a> */}
              {/* <i className="text-right">
                powered by
                <a href="https://web.bynaric.in/" target="_blank">
                  Bynaric
                </a>
              </i> */}
            </span>
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

function AddVisitor(setMsg, setShow) {
  API.post("visitor", {})
    .then((res) => {
      if (res.data.status === "success") {
        // console.log("SUCCESS");
        // setPhotos(res.data.data);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.data.message);
    });
}

function GetVisitor(setMsg, setShow, setVisitor) {
  API.get("visitor/count")
    .then((res) => {
      if (res.data.status === "success") {
        // console.log("Visitor", res.data.data);
        // setPhotos(res.data.data);
        setVisitor(res.data.data);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.data.message);
    });
}

function getLastUpdateDate(setMsg, setShow, setLastUpdatedDate) {
  API.get("lastUpdateDate")
    .then((res) => {
      if (res.data.status === "success") {
        setLastUpdatedDate(res.data.data);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.data.message);
    });
}
export default Footer;
