import React from "react";

function Nagpur_region() {
  return (
    <div>
      <div className="card mb-3 borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader linearimg">
          <h1 className="fontForHeader">Nagpur Region</h1>
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
                <td> Mrs. Kanchan S. Mankar </td>
                <td>Dy. Secretary(T) </td>
                <td>
                  <a href="mailto:ksmankar@msbte.com">ksmankar@msbte.com</a>
                </td>
                {/* <td>
                  <img
                    src="/assets/Images1/Dy.Secretary(T)_Nagpur.jpg"
                    alt="Kanchan"
                  />
                </td> */}
              </tr>
              <tr>
                <td>2</td>
                <td>Mr. Dilipkumar H. Lilhare </td>
                <td>Assistant Secretary(T) </td>
                <td>
                  <a href="mailto:dhlilhare@msbte.com">dhlilhare@msbte.com</a>
                </td>
                {/* <td>
                  <img
                    src="/assets/Images1/Assistant_Secretary(T)_Nagpur.jpg"
                    alt="Dilipkumar"
                  />
                </td> */}
              </tr>
              <tr>
                <td>3</td>
                <td> Mrs. Vaishali A. Raje </td>
                <td> System Analyst</td>
                <td>
                  <a href="mailto:varaje@msbte.com">varaje@msbte.com</a>
                </td>
                {/* <td>
                  <img
                    src="/assets/Images1/System_Analyst_Nagpur.jpg"
                    alt="Vaishali"
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

export default Nagpur_region;
