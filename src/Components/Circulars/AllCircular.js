import React, { useEffect, useState, useContext } from "react";
import { ShowContext } from "../../App";
import API from "../../API";
import Modal from "react-bootstrap/Modal";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Moment from "react-moment";

function AllCircular() {
  const { setShow, setMsg } = useContext(ShowContext);
  const [circulars, setCirculars] = useState();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    getCirculars(setCirculars, setShow, setMsg);
  }, []);

  useEffect(() => {
    if (circulars) getData(circulars);
  }, [circulars]);
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      {" "}
      Showing {from} to {to} of {size} Results
    </span>
  );
  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "20",
        value: 20,
      },
      {
        text: "All",
        value: data?.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  const headers = [
    { text: "Sr.No.", dataField: "srno" },
    { text: "Date", dataField: "date" },
    { text: "News", dataField: "news" },
  ];

  const getData = (list) => {
    if (list && list.length > 0) {
      let myData = [];
      let i = 1;
      list.map((rec, index) => {
        myData.push({
          srno: i++,
          date: <Moment format="DD/MM/YY">{rec.fromDate}</Moment>,
          news: (
            <span
              key={index}
              className="customLinkStyle"
              onClick={() => {
                handleShow();
                setFile(rec.url);
              }}
            >
              {rec.heading}
            </span>
          ),
        });
      });

      setData(myData);
    }
  };

  return (
    <>
      <div className="card border border-light shadow-0 mb-3">
        <div className="card-header backgroundColorCircular text-center">
          <h4>All CIRCULARS</h4>
        </div>
        <div className="card-body mb-5">
          {data && headers && (
            <BootstrapTable
              keyField="id"
              data={data}
              columns={headers}
              pagination={paginationFactory(options)}
            />
          )}
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
}
async function getCirculars(setCirculars, setShow, setMsg) {
  API.get("circulars/all")
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

export default AllCircular;
