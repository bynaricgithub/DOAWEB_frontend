import React, { useState, useEffect, useContext, useRef } from "react";
import { ShowContext } from "../App";
import API from "../API";
import Modal from "react-bootstrap/Modal";
import Moment from "react-moment";

const TabContent5 = () => {
  const { setShow, setMsg } = useContext(ShowContext);
  const [circulars, setCirculars] = useState();
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    getCirculars(setCirculars, setShow, setMsg);
  }, []);

  let i = 1;
  return (
    <>
      <div className="overflow-auto heighttableDiv2">
        <table className="table table-borderless circulars border border-light">
          <thead>
            <tr className="text-center">
              <th>Sr.No</th>
              <th>Date</th>
              <th>News</th>
            </tr>
          </thead>
          <tbody>
            {circulars &&
              circulars
                .filter((circular) => circular.category === 5)
                .map((circular, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td>
                      <Moment format="DD/MM/YY">{circular.fromDate}</Moment>
                    </td>
                    <td colSpan="4">
                      <a
                        href="#"
                        aria-disabled="true"
                        onClick={() => {
                          handleShow();
                          setFile(circular.url);
                        }}
                      >
                        {circular.heading}
                      </a>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
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

export default TabContent5;
