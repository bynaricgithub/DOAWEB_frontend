import React from "react";

function Mumbai_Region() {
  return (
    <div>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader linearimg">
          <h1 className="fontForHeader">Mumbai Region</h1>
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
                  <img src="/assets/Images1/DirectorMSBAE.png" alt="Kanchan" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td> Smt. Arati Shravasti</td>
                <td>Deputy Secretary (Art), MSBAE</td>
                <td className="text-center">
                  <a href="">-</a>
                </td>
                <td className="text-center">
                  -
                  {/* <img src="" alt="Kanchan" /> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Mumbai_Region;
