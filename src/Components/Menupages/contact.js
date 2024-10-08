import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Contact() {
  return (
    <>
     
      <div className="row">
        <div className="col-sm-12">
          <div className="card my-3">
          <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">Contact Us</h1>
            </div>
            <div className="card-body row">
              <div className="col-lg-6 col-sm-12">
                <h6 className="colorcontact1">
                  Maharashtra State Board of Art Education
                  <br />
                  <small>महाराष्ट्र राज्य कला शिक्षण मंडळ</small>
                </h6>
                <hr />
                <ul className="contact py-1 mb-3 text-dark font-16">
                  <li>
                    <i className="fa fa-university m-3"></i>
                    <span className="mt-2 p-1">
                      <b>Address :</b>
                      <br />
                      <span>
                        Sir J. J. School of Art Campus Dr. D. N. Raod, Mumbai
                        400 001.
                      </span>
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-envelope m-3"></i>
                    <div className="mt-2 p-1">
                      <b>Email : </b>
                      <br />
                      <a href="mailto: director.msbae@gmail.com">
                        director.msbae@gmail.com
                      </a>
                      <br />
                      <a href="mailto: directorateofart@gmail.com">
                        directorateofart@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
                <hr />
              </div>
              <div className="col-lg-6 col-sm-12">
                <h6 className="colorcontact1 pb-2">Regional offices</h6>
                <div className="table-responsive regionTable">
                  <table className="table table-bordered">
                    <tr>
                      <th>Region</th>
                      <th>District</th>
                    </tr>
                    <tr>
                      <td>Mumbai</td>
                      <td>
                        Kolhapur, Mumbai, Mumbai Sub-urban, Pune, Raigad,
                        Ratnagiri, Sangali, Satara, Sindhudurg, Solapur, Thane
                        and Palghar.
                      </td>
                    </tr>
                    <tr>
                      <td>Nagpur</td>
                      <td>
                        Akola, Amravati, Bhandara, Buldhana, Chandrapur,
                        Gadchiroli, Washim, Nagpur, Wardha, Yavatmal and Gondia.
                      </td>
                    </tr>
                    <tr>
                      <td>Chhatrapati Sambhaji Nagar</td>
                      <td>
                        Chhatrapati Sambhaji Nagar, Ahmednagar, Beed, Dhule,
                        Jalgaon, Jalna, Latur, Nanded, Hingoli, Nashik,
                        Dharashiv, Nandurbar and Parbhani.
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="card my-3  p-3">
            <div className="card-body row">
              <div className="col-lg-12 col-sm-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7358760643942!2d72.83180877497388!3d18.943081582234324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d17ed3b5ee5f%3A0x74ce0f313f5d6e47!2sSir%20J.J%20Institute%20Of%20Applied%20Art!5e0!3m2!1sen!2sin!4v1723109392662!5m2!1sen!2sin"
                  width="100%"
                  height="350px"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  style={{
                    border: "1px solid",
                    borderRadius: "4px",
                    padding: "5px",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
