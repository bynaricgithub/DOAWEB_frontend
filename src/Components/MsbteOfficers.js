import React, { useContext, useEffect, useState } from "react";
import API from "../API";
import { ShowContext } from "../App";

function OfficerCard({ officer }) {
  return (
    <div className="card mb-3 maxwidthcard officer-details">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-4 col-sm-4">
            <img
              src={officer.img_path}
              className="img-fluid officer-img"
              alt="..."
            />
          </div>
          <div className="col-lg-8 col-sm-8">
            <div className="cBody1">
              <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                {officer.name}
              </h5>
              <p className="card-title">{officer.post}</p>
              <p className="card-text">
                Phone No: {officer.phone} <br />
                Email: {officer.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MsbteOfficers() {
  const { setShow, setMsg } = useContext(ShowContext);
  const [list, setList] = useState();

  useEffect(() => {
    getOfficers(setList, setShow, setMsg);
  }, []);
  return (
    <>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">MSBTE OFFICERS</h1>
        </div>

        {/* {list && list.length > 0 && (
          <div className="card-body px-3">
            <div className="row pt-3 justify-content-center">
              {list.slice(0, 1).map((item) => (
                <div className="col-xl-6 col-md-8 col-sm-8 col-12">
                  <OfficerCard officer={item} />
                </div>
              ))}
            </div>
            <div className="row pb-3 justify-content-center">
              {list.slice(1, 2).map((item) => (
                <div className="col-xl-6 col-md-8 col-sm-8 col-12">
                  <OfficerCard officer={item} />
                </div>
              ))}
            </div>
            <div className="row pb-3">
              {list.slice(2, 6).map((item) => (
                <div className="col-xl-6 col-md-6 col-sm-6 col-12">
                  <OfficerCard officer={item} />
                </div>
              ))}
              {list.slice(6).map((item) => (
                <div className="col-xl-4 col-md-6 col-sm-6 col-12">
                  <OfficerCard officer={item} />
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
                <th>Post</th>
                <th>Phone No.</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {list && list.length > 0 && (
                <>
                  {list.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.post}</td>
                      <td>
                        <a href={`tel:${item.phone}`}>{item.phone}</a>
                      </td>
                      <td>
                        <a href={`mailto:${item.email}`}>{item.email}</a>
                      </td>
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
  API.get("Officers")
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

export default MsbteOfficers;
