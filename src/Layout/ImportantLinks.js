import React, { useState, useEffect, useContext } from "react";
import { ShowContext } from "../App";
import API from "../API";
import Modal from "react-bootstrap/Modal";
import { de } from "../utils/Helper";

const ImportantLinks = () => {
    const { setShow, setMsg } = useContext(ShowContext);
    const [links, setLinks] = useState();
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState("");
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    useEffect(() => {
        getLinks(setLinks, setShow, setMsg);
    }, []);

    return (
        <>
            <div className="card">
                <div className="card-header backgroundImpLink">
                    <h4>IMPORTANT LINK</h4>
                </div>
                <div className="card-body overflow-auto heighttableDiv">
                    <div className="p-0">
                        {links &&
                            links.map((link, index) => {
                                return (
                                    <div className="p-1 impLinklist" key={index}>
                                        <div className="p-1">
                                            <i className="fas fa-angle-double-right iconsarrow"></i>
                                            {link.type === 1 ? (
                                                <a
                                                    className="view-pdf"
                                                    rel="noreferrer"
                                                    href="#"
                                                    aria-disabled="true"
                                                    onClick={() => {
                                                        handleShow();
                                                        setFile(link.url);
                                                    }}
                                                >
                                                    {link.heading}
                                                </a>
                                            ) : (
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="view-pdf"
                                                >
                                                    {link.heading}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
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

async function getLinks(setLinks, setShow, setMsg) {
    API.get("impLinks")
        .then((res) => {
            if (res.data.status === "success") {
                setLinks(JSON.parse(de(res.data.data)));
            }
        })
        .catch((error) => {
            setShow(true);
            setMsg(error.response.data.message);
        });
}

export default ImportantLinks;
