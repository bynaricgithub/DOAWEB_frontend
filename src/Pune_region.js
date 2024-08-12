import React from "react";

function Pune_region() {
  return (
    <div>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader linearimg">
          <h1 className="fontForHeader">Pune Region</h1>
        </div>
        <br />
        <div className="table-responsive">
          <table className="table table-bordered region-table">
            <thead className="thead-dark">
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Designation</th>
                <th>E-mail</th>
                {/* <th>Officers Image</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> Mr. Mohammad Shahid Usmani </td>
                <td>Deputy Secretary ( Technical ) </td>
                <td>
                  <a href="mailto:msusmani@msbte.com">msusmani@msbte.com</a>
                </td>
                {/* <td>
                <img src="/assets/Images1/Usmani_sir_Pune.jpg" alt="Mohammad"/>
              </td> */}
              </tr>
              <tr>
                <td>2</td>
                <td>A. R. Kaigude </td>
                <td>Asstt. Secretary (T) </td>
                <td>
                  <a href="mailto:arkaigude@msbte.com">arkaigude@msbte.com</a>
                </td>
                {/* <td>
                <img src="/assets/Images1/AmreetaRKaigude_AssttSecretary.png"  alt="Kaigude" />
              </td> */}
              </tr>
              <tr>
                <td>3</td>
                <td> Rajesh M. Ingle </td>
                <td>System Analyst</td>
                <td>
                  <a href="mailto:rmingle@msbte.com">rmingle@msbte.com</a>
                </td>
                {/* <td>
                <img src="/assets/Images1/Rajesh.jpg"  alt="Rajesh"/>
              </td> */}
              </tr>
              <tr>
                <td>4</td>
                <td>Mr. Sahebrao Rautwar</td>
                <td>Assistant Secretary ( NT) </td>
                <td>
                  <a href="mailto:sirautwar@msbte.com">sirautwar@msbte.com</a>
                </td>
                {/* <td>
                  <img
                    src="/assets/Images1/Rautwar_sir_Pune.jpg"
                    alt="Sahebrao"
                  />
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Pune_region;
