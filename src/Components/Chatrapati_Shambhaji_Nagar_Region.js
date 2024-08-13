import React from "react";

function Aurangabad_Region() {
  return (
    <div>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader linearimg">
          <h1 className="fontForHeader">Chatrapati Shambhajinagar Region</h1>
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
                <td>Shri. Akshay D. Joshi </td>
                <td>Dy. Secretary(T) </td>
                <td>
                  <a href="mailto:adjoshi@msbte.com">adjoshi@msbte.com</a>
                </td>
                {/* <td>
                  <img src="/assets/Images1/Dy.Secretar.jpg" alt="Akshay" />
                </td> */}
              </tr>
              <tr>
                <td>2</td>
                <td>Shri. P. S. Solanki </td>
                <td>Assistant Secretary(T) </td>
                <td>
                  <a href="mailto:pssolanki@msbte.com">pssolanki@msbte.com</a>
                </td>
                {/* <td>
                  <img
                    src="/assets/Images1/Asst.Dy.Sec.(T)_Aurangabad.jpg"
                    alt="Solanki"
                  />
                </td> */}
              </tr>
              <tr>
                <td>3</td>
                <td> Shri. Jagdish G. Ahirrao </td>
                <td> System Analyst</td>
                <td>
                  <a href="mailto:jgahirrao@msbte.com">jgahirrao@msbte.com</a>
                </td>
                {/* <td>
                  <img
                    src="/assets/Images1/System_Analsyt_Aurangabad.jpg"
                    alt="Jagdish"
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

export default Aurangabad_Region;
