import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Circulars from "./Circulars";
import DignitoryPhotos from "./DignitoryPhotos";
import EventCorousel from "./EventCorousel";
import News from "./news";

function Main() {
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut   aliquip ex ea commodo consequat. Duis aute irure dolor in   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in   culpa qui officia deserunt mollit anim id est laborum.";
  const longText2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut   aliquip ex ea commodo consequat. Duis aute irure dolor in   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in   culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-sm-12 mb-4">
          <EventCorousel />
        </div>
        <div className="col-lg-6 col-sm-12 mb-3">
          <div className="row">
            <div className="col-lg-12 col-sm-12 m-auto">
              <DignitoryPhotos />
            </div>

            <div className="col-lg-12 col-sm-12 directoreDesk">
              <div className="card colornone borderforcard1">
                <div className="card-header backgroundImpLink">
                  <h4> FROM DIRECTOR'S DESK</h4>
                </div>

                <div className="dBox">
                  <div className="diretorImg">
                    <div className="my-2">
                      <img
                        className="img-fluid"
                        src="/assets/Images1/person.jpg"
                        alt="Shri. Vinod R. Dandge"
                      />
                    </div>
                    <span className="names">Shri. Vinod R. Dandge</span>
                    <span className="names3"> Director DOA</span>
                    {/* <span className="names3">
                          <a className="viewprofile" href="/director_profile">
                          view profile
                        </a>
                      </span> */}
                  </div>
                  <div className="dDesc">
                    <div className="p-2">
                      <p className="fontForDesk" id="fontfordirectordesk">
                        <ReactReadMoreReadLess
                          charLimit={400}
                          readMoreText={"Read more ▼"}
                          readLessText={"Read less ▲"}
                          readMoreClassName="read-more-less--more"
                          readLessClassName="read-more-less--less"
                          readMoreStyle={{
                            whiteSpace: "nowrap",
                            color: "#faaf3b",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                          readLessStyle={{
                            whiteSpace: "nowrap",
                            color: "#faaf3b",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          {longText + "\n" + longText2}
                        </ReactReadMoreReadLess>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="table-section post mt-2">
          <div className="row">
            {/* <div className="col-lg-6 col-sm-12 mb-3 marginCard">
              <ImportantLinks />
            </div> */}
            <div className="col-lg-6 col-sm-12 mb-3 marginCard">
              {/* <TabBox /> */}
              <Circulars />
            </div>
            <div className="col-lg-6 col-sm-12 mb-3 marginCard">
              <News />
            </div>
          </div>
        </div>

        {/* <!-- login model --> */}
        {/* <div
          className="modal fade"
          id="loginForm"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="login-form">
                  <form
                    action="/examples/actions/confirmation.php"
                    method="post"
                  >
                    <div className="avatar">
                      <img
                        src="asstes/Images1/mainlogo.png"
                        className="rounded-circle "
                        alt="Cinque Terre"
                      />
                    </div>
                    <h4 className="modal-title">Login to Your Account</h4>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control fontForForm"
                        placeholder=" Enter Username"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control fontForForm"
                        placeholder=" Enter Password"
                        required="required"
                      />
                    </div>
                    <div className="captcha">
                      <div className="captcha-form">
                        <input
                          type="text"
                          className="form-control fontForForm borderRadiusCaptcha"
                          id="captcha-form"
                          placeholder="Enter Captcha"
                          required="required"
                        />
                        <button className="captcha-refresh">
                          <i className="fa fa-refresh"></i>
                        </button>
                      </div>
                      <div className="row d-flex justify-content-center marginTopCaptcha">
                        <div className="col-sm-8">
                          <div
                            className="preview"
                            style={{
                              backgroundImage:
                                "url(/assets/Images1/captcha.jpg)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group small clearfix d-flex justify-content-center RemovemarginCaptcha">
                      <label className="checkbox-inline form-label d-flex justify-content-center">
                        <input
                          type="checkbox"
                          className="form-label marginCheckbox"
                        />{" "}
                        Remember me
                      </label>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-sm-12">
                        <div className="d-grid gap-2 form-group ">
                          <button
                            className="btn btn-primary"
                            type="button"
                            id="login-btn"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Main;
