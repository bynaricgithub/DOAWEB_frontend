import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import API from "../API";
import { ShowContext } from "../App";

const News = () => {
  const { setShow, setMsg } = useContext(ShowContext);
  const [circulars, setCirculars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const marqueeRef = useRef(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (fileUrl) => {
    setFile(fileUrl);
    setShowModal(true);
  };

  const handleMouseEnter = () => marqueeRef.current?.stop();
  const handleMouseLeave = () => marqueeRef.current?.start();

  useEffect(() => {
    getCirculars();
  }, []);

  const getCirculars = async () => {
    try {
      const res = await API.get("circulars");
      if (res.data.status === "success") {
        setCirculars(res.data.data);
      }
    } catch (error) {
      setShow(true);
      setMsg(error.response?.data?.message || "Failed to fetch circulars.");
    }
  };

  return (
    <>
      <div className="card border border-light shadow-0 mb-3">
        <div className="card-header backgroundColorCircular">
          <h4>Notices & Announcements</h4>
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
              {circulars.length > 0 ? (
                circulars.map((item, index) => (
                  <li className="circularsList" key={index}>
                    <a
                      href={item.link}
                      className="py-1"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => handleShow(item.link)}
                    >
                      {item.title}
                    </a>
                  </li>
                ))
              ) : (
                <li className="circularsList">No circulars available.</li>
              )}
            </ul>
          </marquee>
        </div>
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          contentClassName="modal-pdf-content"
        >
          <Modal.Header closeButton />
          <Modal.Body>
            <iframe title="Circular PDF" className="w-100 h-100" src={file} />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default News;
