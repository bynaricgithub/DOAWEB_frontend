import React, { useState, useEffect, useContext, useRef } from "react";
import { ShowContext } from "../App";
import API from "../API";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const News = () => {
  const { setShow, setMsg } = useContext(ShowContext);
  const [circulars, setCirculars] = useState();
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  // useEffect(() => {
  //   getCirculars(setCirculars, setShow, setMsg);
  // }, []);

  let i = 1;
  return (
    <>
      <div className="card border border-light shadow-0 mb-3">
        <div className="card-header backgroundColorCircular">
        
          <h4> Notices & Announcements</h4>
        </div>
        <div className="card-body overflow-auto heighttableDiv">
         
          <marquee
            behavior="scroll"
            direction="up"
            scrollamount="2"
            loop="infinite"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={marqueeRef}
            className="circularBox"
          >
             <ul className="listIcon">

<li className="circularsList">
  <a href="https://dge.msbae.in/" className="py-1" target="_blank">
  Click here for center registration and student registration

  </a>
</li>

<li className="circularsList">
  <a href="https://doaonline.in/institute-login" className="py-1" target="_blank">
  Click here for affilation registration form
  </a>
</li>
<li className="circularsList">
  <a href="https://sss.msbae.in/ay2425/" className="py-1" target="_blank">
  Fees Approval System For Academic Year 2024-25
  </a>
</li>
</ul>
          </marquee>
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
      </div>
    </>
  );
};

async function getCirculars(setCirculars, setShow, setMsg) {
  API.get("circulars")
    .then((res) => {
      if (res.data.status === "success") {
        setCirculars(res.data.data);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.data.message);
    });
}

export default News;
