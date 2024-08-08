import React from "react";
// import NewMap from "./MapNew";

function Contact() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card mb-3 borderforcard paddingAboutMsbte">
            <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">Contact Us</h1>
            </div>
            <div className="row g-0">
              <div className="card-body removePadding row">
                <div className="col-lg-6 col-sm-12">
                  <div className="row p-2">
                    <p className="colorcontact1">
                    Maharashtra State Board
                    of Art Education
                    </p>
                    <div className="d-flex">
                      <span className="colorcontact1">Address</span>
                      <span className="colorcontact1 paddingFornewSpan">:</span>
                      <span className="colorcontact">
                        <a
                          className="phoneLinkColor"
                          href="https://maps.app.goo.gl/Pz6dz1VfL2XjFdfS8"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Sir J. J. School of Art Campus
                          Dr. D. N. Raod Mumbai 400 001.
                        </a>
                      </span>
                    </div>
                   
                    <div className="d-flex">
                      <span className="colorcontact1">Email</span>
                      <span className="colorcontact1 paddingFornewSpan">:</span>
                      <span className="colorcontact">
                        <a
                          className="phoneLinkColor"
                          href="mailto:director.msbae@gmail.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          director.msbae@gmail.com
                        </a>
                      </span>
                      <span className="colorcontact">
                        <a
                          className="phoneLinkColor"
                          href="mailto: directorateofart@gmail.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                         directorateofart@gmail.com
                        </a>
                      </span>
                    </div>
                  </div>
                  
                </div>
                <div className="col-lg-6 col-sm-12">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7358760643942!2d72.83180877497388!3d18.943081582234324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d17ed3b5ee5f%3A0x74ce0f313f5d6e47!2sSir%20J.J%20Institute%20Of%20Applied%20Art!5e0!3m2!1sen!2sin!4v1723109392662!5m2!1sen!2sin" width="700" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
