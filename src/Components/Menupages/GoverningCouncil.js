import React, { useContext, useEffect, useState } from "react";
import API from "../../API";
import { ShowContext } from "../../App";

function GoverningCouncil() {
  const { setShow, setMsg } = useContext(ShowContext);
  const [list, setList] = useState();

  useEffect(() => {
    getOfficers(setList, setShow, setMsg);
  }, []);
  return (
    <>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">GOVERNING COUNCIL</h1>
        </div>
        {/* 
        {list && list.length > 0 && (
          <div className="card-body px-4">
            <div className="row">
              {list.slice(0, 2).map((item) => (
                <div className="col-lg-6 col-sm-6 p-2">
                  <div className="card removerborderRadius">
                    <div className="card-header backgroundColorCardHeaderGborad removerborderRadius">
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
        )}
        {list && list.length > 0 && (
          <div className="card-body px-4">
            <div className="row">
              {list.slice(2).map((item) => (
                <div className="col-sm-12 p-2">
                  <div className="card removerborderRadius">
                    <div className="card-header backgroundColorCardHeaderGborad removerborderRadius">
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
  API.get("councils")
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

export default GoverningCouncil;
