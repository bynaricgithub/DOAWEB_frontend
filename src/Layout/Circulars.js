/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import API from "../API";
import { ShowContext } from "../App";

const Circulars = () => {
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

	useEffect(() => {
		getCirculars(setCirculars, setShow, setMsg);
	}, []);

	let i = 1;
	return (
		<>
			<div className="card border border-light shadow-0 mb-3">
				<div className="card-header backgroundColorCircular">
					{/* <span className="all-cricular pull-right">
            <Link to={"/all_circulars"} className="link p-2">
              All Circulars
            </Link>
          </span> */}
					<h4> Important Links</h4>
				</div>
				<div className="card-body overflow-auto heighttableDiv">
					{/* <table className="table table-borderless circulars">
            <thead>
              <tr className="text-center">
                <th>Sr.No</th>
                <th>Date</th>
                <th>News</th>
              </tr>
            </thead>
            <tbody>
              {circulars &&
                circulars.map((circular, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center">{i++}</td>
                      <td>
                        {
                          <Moment format="DD/MM/YY">
                            {circular.fromDate}
                          </Moment>
                        }
                      </td>
                      <td colSpan="4">
                        <a
                          //   href={circular.url}
                          className="py-1"
                          //   data-bs-toggle="modal"
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
                  );
                })}
            </tbody>
          </table> */}
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
						<ul>
							{circulars &&
								circulars
									.filter((circular) => circular.category === 1)
									.sort((a, b) => new Date(b.date) - new Date(a.date))
									.slice(0, 20)
									.map((circular, index) => (
										<li className="circularsList" key={index}>
											<a
												href="#"
												className="py-1"
												aria-disabled="true"
												onClick={() => {
													handleShow();
													setFile(circular.url);
												}}
											>
												{circular.heading}
											</a>
										</li>
									))}
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

function getCirculars(setCirculars, setShow, setMsg) {
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

export default Circulars;
