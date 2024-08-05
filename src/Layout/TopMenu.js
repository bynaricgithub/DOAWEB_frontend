import React, { useState, useEffect, useContext } from "react";
import { ShowContext } from "../App";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
// import LogIn from "../Components/LogIn";
import API from "../API";

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
          {item.title} {!last && <span className="marginLSpan">|</span>}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {item.children.map((rec , index) => (
            <li key={index}>
              {rec.menu_url && rec.menu_url.includes(".pdf") ? (
                <a
                  className="dropdown-item"
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
                <a
                  className="dropdown-item"
                  href={rec.menu_url || "#"}
                  target={
                    rec.menu_url &&
                    (rec.menu_url.includes("https://") ||
                      rec.menu_url.includes("http://"))
                      ? "_blank"
                      : "_self"
                  }
                >
                  {rec.title}
                </a>
              )}
              {rec.children && rec.children.length > 0 && (
                <ul className="submenu dropdown-menu ">
                  {rec.children.map((i, index) => (
                    <li key={index}>
                      <a
                        className="dropdown-item"
                        href={i.menu_url}
                        target={
                          i.menu_url &&
                          (i.menu_url.includes("https://") ||
                            i.menu_url.includes("http://"))
                            ? "_blank"
                            : "_self"
                        }
                      >
                        {i.title}
                      </a>
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
            {item.title} {!last && <span className="marginLSpan">|</span>}
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
          >
            {item.title} {!last && <span className="marginLSpan">|</span>}
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
              className="form-control"
              placeholder="Serach..."
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
                  <MenuItem item={item} last={index === list.length} key={index} />
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
        let list = arrayToTree(res.data.data, 0);
        setList(list);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.message);
    });
}

export default TopMenu;
