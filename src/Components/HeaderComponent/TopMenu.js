import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import API from "../../API";
import { ShowContext } from "../../App";
import { de } from "../../utils/Helper";

function TopMenu() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const { setShow, setMsg } = useContext(ShowContext);
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [list, setList] = useState([]);

  // State to manage open submenus on mobile
  const [openSubmenus, setOpenSubmenus] = useState({});

  useEffect(() => {
    getMenu(setList, setShow, setMsg);
  }, []);

  // Toggle the submenu by its ID
  const toggleSubmenu = (id) => {
    setOpenSubmenus((prevState) => {
      const newState = { ...prevState };
      newState[id] = !newState[id]; // Toggle current submenu
      return newState;
    });
  };

  const isMobile = window.innerWidth <= 600;

  function MenuItem({ item, last, index }) {
    const hasChildren = item.children && item.children.length > 0;

    const handleMouseEnter = (event) => {
      const submenu = event.target.nextElementSibling;
      if (submenu) {
        requestAnimationFrame(() => {
          const submenuRect = submenu.getBoundingClientRect();
          const isOutOfViewport = submenuRect.right > window.innerWidth;
          console.log(
            "Submenu right:",
            submenuRect.right,
            "Window width:",
            window.innerWidth,
            "Out of viewport:",
            isOutOfViewport
          );
          if (isOutOfViewport) {
            submenu.setAttribute("data-flip", "left");
          } else {
            submenu.removeAttribute("data-flip");
          }
        });
      }
    };

    return (
      <li className={`nav-item ${hasChildren ? "dropdown" : ""}`} key={index}>
        {/* Main Parent Links or Submenu Toggle */}
        {item.menu_url ? (
          <Link
            className={`nav-link ${hasChildren
              ? "dropdown-toggle fontfornav navText"
              : "fontfornav navText"
              }`}
            to={item.menu_url}
            onClick={(e) => {
              if (isMobile && hasChildren) {
                e.preventDefault();
                toggleSubmenu(item.id); // For mobile, toggle submenu on click
              }
            }}
            aria-expanded={openSubmenus[item.id] || false}
            onMouseEnter={hasChildren ? handleMouseEnter : null}
          >
            <span className="custom-translate">{item.title}</span>
            {!last && <span className="marginLSpan">|</span>}
          </Link>
        ) : (
          <span
            className="nav-link dropdown-toggle fontfornav navText"
            onClick={() => toggleSubmenu(item.id)} // Toggle submenu if no link (it's just a parent)
            aria-expanded={openSubmenus[item.id] || false}
            onMouseEnter={hasChildren ? handleMouseEnter : null}
          >
            <span className="custom-translate">{item.title}</span>
            {!last && <span className="marginLSpan">|</span>}
          </span>
        )}

        {/* Render Submenu */}
        {hasChildren && (
          <ul
            className={`dropdown-menu ${openSubmenus[item.id] ? "showSub" : ""
              }`}
          >
            {item.children.map((rec, index) => (
              <li key={index}>
                {rec.menu_url && rec.menu_url.includes(".pdf") ? (
                  // For PDF links
                  <span
                    className="dropdown-item custom-translate"
                    onClick={() => {
                      handleShow();
                      setFile(rec.menu_url);
                    }}
                  >
                    {rec.title}
                  </span>
                ) : rec.menu_url?.includes("https://") ||
                  rec.menu_url?.includes("http://") ? (
                  // External links
                  <a
                    className="dropdown-item custom-translate"
                    href={rec.menu_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {rec.title}
                  </a>
                ) : rec.menu_url && rec.menu_url.startsWith("/") ? (
                  // Internal links
                  <Link
                    className="dropdown-item custom-translate"
                    to={rec.menu_url}
                  >
                    {rec.title}
                  </Link>
                ) : rec.children && rec.children.length > 0 ? (
                  // Render Submenu for nested items without recursion
                  <>
                    <span
                      className="dropdown-item custom-translate"
                      onClick={() => toggleSubmenu(rec.id)}
                    >
                      {rec.title}
                    </span>
                    <ul
                      className={`submenu dropdown-menu ${openSubmenus[rec.id] ? "showSub" : ""
                        }`}
                    >
                      {rec.children.map((rec2, index) => (
                        <li key={index}>
                          {rec2.menu_url && rec2.menu_url.includes(".pdf") ? (
                            // Nested PDF or file links
                            <span
                              className="dropdown-item custom-translate"
                              onClick={() => {
                                handleShow();
                                setFile(rec2.menu_url);
                              }}
                            >
                              {rec2.title}
                            </span>
                          ) : rec2.menu_url?.includes("https://") ||
                            rec2.menu_url?.includes("http://") ? (
                            // Nested External Links
                            <a
                              className="dropdown-item custom-translate"
                              href={rec2.menu_url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {rec2.title}
                            </a>
                          ) : (
                            // Nested Internal Links
                            <Link
                              className="dropdown-item custom-translate"
                              to={rec2.menu_url}
                            >
                              {rec2.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  // Submenu item with no children
                  <span className="dropdown-item custom-translate">
                    {rec.title}
                  </span>
                )}
              </li>
            ))}
          </ul>
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
              placeholder="Search"
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
        let data = JSON.parse(de(res.data.data));
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
