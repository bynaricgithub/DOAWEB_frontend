import React, { useState } from "react";

function Committees() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">Constitution of Committees (u/s 20)</h1>
        </div>
        <div className="card-body">
          <div className="p-3">
            <table class="table table-bordered region-table">
              <thead class="thead-dark">
                <tr>
                  <th width="50px">Sr. No.</th>
                  <th>Committee</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="my-2">
                  <td>1.</td>
                  <td>Academic Committee</td>
                </tr>
                <tr className="my-2">
                  <td>2.</td>

                  <td>Finance Committee</td>
                </tr>
                <tr className="my-2">
                  <td>3.</td>

                  <td>Course Committee</td>
                </tr>
                <tr className="my-2">
                  <td>4.</td>

                  <td>Equivalence Committee</td>
                </tr>
                <tr className="my-2">
                  <td>5.</td>

                  <td>Examination Committee</td>
                </tr>
                <tr className="my-2">
                  <td>6.</td>
                  <td>Fee Fixation Committee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Committees;
