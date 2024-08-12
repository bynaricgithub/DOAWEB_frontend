import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Moment from "react-moment";
import API from "../API";
import { ShowContext } from "../App";

const TabBox = () => {
  const [activeTab, setActiveTab] = useState(0);

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
      <div className="card">
        <div className="card-body">
          <div className="tab-list">
            <button
              className={activeTab === 0 ? "active" : ""}
              onClick={() => setActiveTab(0)}
            >
              Circular/Office Order
            </button>
            <button
              className={activeTab === 1 ? "active" : ""}
              onClick={() => setActiveTab(1)}
            >
              Extra Curricular Activites
            </button>
            <button
              className={activeTab === 2 ? "active" : ""}
              onClick={() => setActiveTab(2)}
            >
              Training
            </button>
            <button
              className={activeTab === 3 ? "active" : ""}
              onClick={() => setActiveTab(3)}
            >
              GR
            </button>

            <button
              className={activeTab === 5 ? "active" : ""}
              onClick={() => setActiveTab(5)}
            >
              Downloads
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 0 && (
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
                        .filter(
                          (circular) =>
                            circular.category === 1 || circular.category === 0
                        )
                        .map((circular, index) => (
                          <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td>
                              <Moment format="DD/MM/YY">
                                {circular.fromDate}
                              </Moment>
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
              </div>
            )}
            {activeTab === 1 && (
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
                        .filter((circular) => circular.category === 2)
                        .map((circular, index) => (
                          <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td>
                              <Moment format="DD/MM/YY">
                                {circular.fromDate}
                              </Moment>
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
              </div>
            )}
            {activeTab === 2 && (
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
                        .filter((circular) => circular.category === 3)
                        .map((circular, index) => (
                          <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td>
                              <Moment format="DD/MM/YY">
                                {circular.fromDate}
                              </Moment>
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
              </div>
            )}
            {activeTab === 3 && (
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
                        .filter((circular) => circular.category === 4)
                        .map((circular, index) => (
                          <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td>
                              <Moment format="DD/MM/YY">
                                {circular.fromDate}
                              </Moment>
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
              </div>
            )}

            {activeTab === 5 && (
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
                        .filter((circular) => circular.category === 6)
                        .map((circular, index) => (
                          <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td>
                              <Moment format="DD/MM/YY">
                                {circular.fromDate}
                              </Moment>
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
              </div>
            )}
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

export default TabBox;
