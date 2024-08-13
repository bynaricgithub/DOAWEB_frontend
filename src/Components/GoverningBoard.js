import React, { useContext, useEffect, useState } from "react";
import API from "../API";
import { ShowContext } from "../App";

function GoverningBoard() {
  const { setShow, setMsg } = useContext(ShowContext);
  const [list, setList] = useState();

  useEffect(() => {
    getOfficers(setList, setShow, setMsg);
  }, []);
  return (
    <>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">GOVERNING BOARD</h1>
        </div>

        {/* {list && list.length > 0 && (
          <div className="row g-0">
            <div className="card-body">
              <div className="row  p-2">
                {list.map((item) => (
                  <div className="col-sm-12 p-2">
                    <div className="card">
                      <div className="card-header backgroundColorCardHeaderGborad">
                        <p className="fontForHeaderGboard">{item.post}</p>
                      </div>
                      <div className="card-body">
                        <p className="fontForHeaderText">{item.name}</p>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )} */}

        <div className="table-responsive">
          <table className="table table-bordered region-table">
            <thead className="thead-dark">
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Description</th>
                <th>Post</th>
              </tr>
            </thead>
            <tbody>
              {list && list.length > 0 && (
                <>
                  {list.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>

                      <td>{item.name}</td>
                      <td>{item.description}</td>

                      <td>{item.post}</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function getOfficers(setList, setShow, setMsg) {
  API.get("boards")
    .then((res) => {
      if (res.data.status === "success") {
        setList(res.data.data);
      }
    })
    .catch((error) => {
      setShow(true);
      setMsg(error.response.data.message);
    });
}

export default GoverningBoard;
