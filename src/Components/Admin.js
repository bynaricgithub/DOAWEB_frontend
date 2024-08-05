import React, { useEffect } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import API from "../../src/API";
import axios from "axios";
import { useState } from "react";

const Admin = (props) => {
  const [listData, setListData] = useState([]);
  const initialValues = { srno: "", latestupdate: "", email: "" };
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    user();
  }, [edit]);

  async function user() {
    await API.get("Admin/list")
      .then((res) => {
        if (res.data.status === "success") {
          console.log(res.data.data);
          setListData(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err: ", err.response);
        setListData([]);
      });
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        console.log("Submited Values: ", values);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        } = props;
        return (
          <div>
            <div
              className="container-fluid add_mobview"
              style={{ marginTop: "100px" }}
            >
              <div className="card">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h3 className="page-title">
                    <center>Subscribed Users</center>
                  </h3>
                </div>

                <form
                  id="form-config"
                  method="post"
                  className="form-horizontal"
                  onSubmit={handleSubmit}
                >
                  <div className="col-lg-12 col-md-12 col-sm-12 animate__animated animate__pulse animate_slower">
                    <div className="col-lg-12 col-md-12 col-sm-12 card mb-3 table-responsive ">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">E-mail</th>
                          </tr>
                        </thead>
                        <tbody>
                          {listData.map((user, index) => (
                            <tr key={index} className="table-row">
                              <td className="col-lg-1 col-md-1 col-sm-1">
                                {user.id}
                              </td>
                              <td className="col-lg-3 col-md-3 col-sm-3">
                                {user.name}
                              </td>
                              <td className="col-lg-3 col-md-3 col-sm-3">
                                {user.email}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Admin;
