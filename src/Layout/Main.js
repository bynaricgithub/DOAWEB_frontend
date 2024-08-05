import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Circulars from "./Circulars";
import DignitoryPhotos from "./DignitoryPhotos";
import EventCorousel from "./EventCorousel";
import ImportantLinks from "./ImportantLinks";
import TabBox from "./TabBox";

function Main() {
  const longText =
    "Maharashtra State Board of Technical Education (MSBTE) is an autonomous Board of Government of Maharashtra mandated to regulate matters pertaining to Diploma Level Technical education in the state. Curriculum development- it’s efficient implementation strategies through faculty development programs, student development initiatives, industry-institution interaction, Academic monitoring and various online evaluation activities have been the significant insignia of MSBTE. In the recent past, MSBTE has made its foray into skill development activities, thus broadening its horizon and area of service. However, the revision of curricular to suit the essentially of industry as expected from diploma students had become a dire need and of late a very important parameter for employ ability which has been accomplished and implemented from the academic year 2017-18.";
  const longText2 =
    "Having been closely associated with the system and from the suggestions and feedback of the stake holders, it shall be my endeavor to revamp the various processes and adopt better technological implementation & evaluation techniques for the benefit of stake holder students.";
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-sm-12" id="widthfordiv">
          <div className="row">
            <EventCorousel />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 mt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-sm-12 m-auto">
                <DignitoryPhotos />
              </div>

              <div className="col-lg-12 col-sm-12 directoreDesk RemoveAllpadding">
                <div className="card mb-3 colornone borderforcard1">
                  <div className="card-header backgroundImpLink">
                    <h4> FROM DIRECTOR'S DESK</h4>
                  </div>

                  <div className="row g-0">
                    <div className="col-lg-4 col-sm-5">
                      <div className="card Removerborder marginFont">
                        <img
                          className="img-fluid"
                          src="https://msbteadmin.bynaricexam.com/data/dignitaries/Photo_Shri_Pramod_A._Naik.png"
                          alt="Shri Pramod A. Naik"
                          style={{ borderRadius: "50%", maxHeight: "150px" }}
                        />
                      </div>
                      <span className="names"> Shri Pramod A. Naik</span>
                      <span className="names3"> Director MSBTE</span>
                      {/* <span className="names3">
                          <a className="viewprofile" href="/director_profile">
                          view profile
                        </a>
                      </span> */}
                    </div>
                    <div className="col-lg-8 col-sm-7">
                      <div className="card-body">
                        <p
                          className="fontForDesk"
                          id="fontfordirectordesk"
                        >
                          <ReactReadMoreReadLess
                            charLimit={460}
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
        </div>
        <div className="table-section post">
          <div className="row">
            {/* <div className="col-lg-6 col-sm-12 mb-3 marginCard">
              <ImportantLinks />
            </div> */}
            <div className="col-lg-8 col-sm-12 mb-3 marginCard">
              <TabBox />
            </div>
            <div className="col-lg-4 col-sm-12 mb-3 marginCard">
              <Circulars />
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
