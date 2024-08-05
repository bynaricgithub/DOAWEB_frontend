import React, { useState, useEffect, useContext } from "react";
import { ShowContext } from "../App";
import API from "../API";
import { useSearchParams } from "react-router-dom";
import { Modal } from "react-bootstrap";

function Search() {
  const { setShow, setMsg } = useContext(ShowContext);
  let [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  useEffect(() => {
    setQuery(searchParams.get("query"));
  }, [searchParams]);
  useEffect(() => {
    getResults(setList, query, setShow, setMsg);
  }, [query]);
  useEffect(() => {
    getResults(setList, query, setShow, setMsg);
  }, []);
  return (
    <>
      <div className="card mb-3  borderforcard paddingAboutMsbte">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">
            Search Results for "<em>{query}</em>"
          </h1>
        </div>
        <div className="row g-0">
          {list && list.length > 0 ? (
            list.map((item) => (
              <div className="px-2 my-1">
                <div className="p-2">
                  {item.url.includes(".pdf") ? (
                    <a
                      className="fontqualitypolicy"
                      href="#"
                      aria-disabled="true"
                      onClick={() => {
                        handleShow();
                        setFile(item.url);
                      }}
                    >
                      [PDF]
                      {item.heading}
                    </a>
                  ) : (
                    <a
                      className="fontqualitypolicy"
                      href={item.url}
                      target={"_blank"}
                    >
                      {item.heading}
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <h2>No Results found!</h2>
          )}
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

function getResults(setList, query, setShow, setMsg) {
  API.get("search", { params: { query } })
    .then((res) => {
      if (res.data.status === "success") {
        setList(res.data.data);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.message);
    });
}

export default Search;
