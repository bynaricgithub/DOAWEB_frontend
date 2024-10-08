/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import API from "../../API";
import { ShowContext } from "../../App";
// import { de } from "../../utils/Helper";

function TopMenu() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const { setShow, setMsg } = useContext(ShowContext);
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    getMenu(setList, setShow, setMsg);
  }, []);

  function MenuItem({ item, last, index }) {
    return item.children && item.children.length > 0 ? (
      <li className="nav-item dropdown" key={index}>
        <a
          className="nav-link dropdown-toggle fontfornav navText"
          href="#"
          aria-disabled="true"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="custom-translate">{item.title}</span>{" "}
          {!last && <span className="marginLSpan">|</span>}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {item.children.map((rec, index) => (
            <li key={index}>
              {rec.menu_url && rec.menu_url.includes(".pdf") ? (
                <a
                  className="dropdown-item custom-translate"
                  href="#"
                  aria-disabled="true"
                  onClick={() => {
                    handleShow();
                    setFile(rec.menu_url);
                  }}
                >
                  {rec.title}
                </a>
              ) : (
                (rec.menu_url?.includes("https://") ||
                  rec.menu_url?.includes("http://")) ?
                  <a
                    className="dropdown-item custom-translate"
                    href={rec.menu_url || "#"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {rec.title}
                  </a> : <Link className="dropdown-item custom-translate" to={rec.menu_url} >{rec.title}</Link>
              )}
              {rec.children && rec.children.length > 0 && (
                <ul className="submenu dropdown-menu ">
                  {rec.children.map((rec2, index) => (
                    <li key={index}>
                      {rec2?.menu_url && rec2?.menu_url?.includes(".pdf") ? (
                        <a
                          className="dropdown-item custom-translate"
                          href="#"
                          aria-disabled="true"
                          onClick={() => {
                            handleShow();
                            setFile(rec2.menu_url);
                          }}
                        >
                          {rec2.title}
                        </a>
                      ) : (
                        (rec2?.menu_url?.includes("https://") ||
                          rec2?.menu_url?.includes("http://")) ?
                          <a
                            className="dropdown-item custom-translate"
                            href={rec2.menu_url || "#"}
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            {rec2.title}
                          </a> : <Link className="dropdown-item custom-translate" to={rec2.menu_url} >{rec2.title}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </li>
    ) : (
      <li className="nav-item">
        {item.menu_url && item.menu_url.includes(".pdf") ? (
          <a
            className="nav-link fontfornav navText"
            href="#"
            aria-disabled="true"
            onClick={() => {
              handleShow();
              setFile(item.menu_url);
            }}
          >
            <span className="custom-translate">{item.title}</span>{" "}
            {!last && <span className="marginLSpan">|</span>}
          </a>
        ) : (
          <a
            className="nav-link fontfornav navText"
            href={item.menu_url}
            target={
              item.menu_url &&
                (item.menu_url.includes("https://") ||
                  item.menu_url.includes("http://"))
                ? "_blank"
                : "_self"
            }
            rel="noreferrer"
          >
            <span className="custom-translate">{item.title}</span>{" "}
            {!last && <span className="marginLSpan">|</span>}
          </a>
        )}
      </li>
    );
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        id="back"
        counterlink="true"
      >
        <div className="container">
          <div className="search mt-0 m-show">
            <input
              type="text"
              className="form-control custom-translate"
              placeholder="Serach"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  navigate(`/search?query=${query}`);
                }
              }}
            />
            <i
              className="fa fa-search fa-flip-horizontal serachbarbackground "
              aria-hidden="true"
              onClick={() => {
                navigate(`/search?query=${query}`);
              }}
            ></i>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            style={{ color: "#111", fontSize: "14px", lineHeight: "30px" }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div
              className="container navbar-nav justify-content-center"
              id="heightNav"
            >
              {list &&
                list.length > 0 &&
                list.map((item, index) => (
                  <MenuItem
                    item={item}
                    last={index === list.length}
                    key={index}
                  />
                ))}

              <div
                className="navbar-toggler close custom-close"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
              >
                &times;
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body closeButton>
          <LogIn />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
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

function getMenu(setList, setShow, setMsg) {
  API.get("homemenu")
    .then((res) => {
      if (res.data.status === "success") {
        const arrayToTree = (arr, parent_id = 0) =>
          arr
            .filter((item) => item.parent_id === parent_id)
            .map((child) => ({
              ...child,
              children: arrayToTree(arr, child.id),
            }));
        let data = res.data.data
        let list = arrayToTree(data, 0);
        setList(list);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.message);
    });
}

export default TopMenu;
