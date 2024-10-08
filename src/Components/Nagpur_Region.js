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
                <th>Officers Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> Shri. Vinod R. Dandge</td>
                <td>Director MSBAE</td>
                <td className="text-center">
                  <a href="mailto:sample@msbte.com">sample@msbte.com</a>
                </td>
                <td className="text-center">
                  <img src="/assets/Images1/DirectorMSBAE.png" alt="DirectorMSBAE" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Shri. Sandeep Dongre</td>
                <td>Secretary, MSBAE</td>
                <td className="text-center">
                  <a href="mailto:dongaresanny@gmail.com">dongaresanny@gmail.com</a>
                </td>
                <td className="text-center">
                  <img src="/assets/Images1/SandeepDongresir.jpeg" alt="SandeepDongresir" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Nagpur_region;
