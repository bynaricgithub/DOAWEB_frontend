import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import API from "../../API";
import { ShowContext } from "../../App";

function TopMenu() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { setShow, setMsg } = useContext(ShowContext);
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const [list, setList] = useState([]);

  const handleClose = () => setShowModal(false);
  const handleShow = (fileUrl) => {
    setFile(fileUrl);
    setShowModal(true);
  };

  useEffect(() => {
    getMenu(setList, setShow, setMsg);
  }, []);

  function MenuItem({ item, last, index }) {
    return item.children && item.children.length > 0 ? (
      <li className="nav-item dropdown" key={index}>
        <a
          className="nav-link dropdown-toggle fontfornav navText"
          href="#"
          onClick={(e) => e.preventDefault()} // Prevent default behavior to stop page refresh
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {item.title} {!last && <span className="marginLSpan">|</span>}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {item.children.map((rec, index) => (
            <li key={index}>
              {rec.menu_url && rec.menu_url.includes(".pdf") ? (
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default behavior to stop page refresh
                    handleShow(rec.menu_url);
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
                  onClick={(e) => rec.menu_url === "#" && e.preventDefault()} // Prevent default if the URL is "#"
                >
                  {rec.title}
                </a>
              )}
              {rec.children && rec.children.length > 0 && (
                <ul className="submenu dropdown-menu">
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
                        onClick={(e) =>
                          i.menu_url === "#" && e.preventDefault()
                        } // Prevent default if the URL is "#"
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
      <li className="nav-item" key={index}>
        {item.menu_url && item.menu_url.includes(".pdf") ? (
          <a
            className="nav-link fontfornav navText"
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent default behavior to stop page refresh
              handleShow(item.menu_url);
            }}
          >
            {item.title} {!last && <span className="marginLSpan">|</span>}
          </a>
        ) : // r links links
        item.menu_url &&
          (item.menu_url.includes("https://") ||
            item.menu_url.includes("http://")) ? (
          <a
            className="nav-link fontfornav navText"
            href={item.menu_url}
            target="_blank"
            onClick={(e) => item.menu_url === "#" && e.preventDefault()}
          >
            {item.title} {!last && <span className="marginLSpan">|</span>}
          </a>
        ) : (
          <Link className="nav-link fontfornav navText" to={item.menu_url}>
            {item.title} {!last && <span className="marginLSpan">|</span>}
          </Link>
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
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  navigate(`/search?query=${query}`);
                }
              }}
            />
            <i
              className="fa fa-search fa-flip-horizontal searchbarbackground"
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
                    last={index === list.length - 1} // Fixes last item check
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
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        contentClassName="modal-pdf-content"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <iframe
            title="PDF Viewer"
            className="w-100 h-100"
            src={file}
          ></iframe>
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
        const list = arrayToTree(res.data.data, 0);
        setList(list);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.message);
    });
}

export default TopMenu;
