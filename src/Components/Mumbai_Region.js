import React from "react";

function Mumbai_Region() {
  return (
    <div>
      <div className="card mb-3  borderforcard paddingAboutMsbte">
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
                {/* <th>Officers Image</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mr. Pramod U Wayse </td>
                <td>Dy. Secretary ( T) </td>
                <td><a href="mailto:puwayse@msbte.com">puwayse@msbte.com</a></td>
                {/* <td>
                  <img
                    src="/assets/Images1/Puwayse.png"
                    alt="Mr. Pramod U Wayse"
                  />
                </td> */}
              </tr>
              <tr>
                <td>2</td>
                <td>Mr. N. V. Matolkar</td>
                <td>Assistant Secretary (T)</td>
                <td><a href="mailto:nvmatolkar@msbte.com">nvmatolkar@msbte.com</a></td>

                {/* <td>
                  <img
                    src="/assets/Images1/Matolkar.png"
                    alt="Mr. N. V. Matolkar"
                  />
                </td> */}
              </tr>
              <tr>
                <td>3</td>
                <td>Mrs. Nisha R. Wartha</td>
                <td>System Analyst</td>
                <td><a href="mailto:nrwartha@msbte.com">nrwartha@msbte.com</a></td>

                {/* <td>
                  <img
                    src="/assets/Images1/nishaw.jpg"
                    alt="Mrs. Nisha R. Wartha"
                  />
                </td> */}
              </tr>
              <tr>
                <td>4</td>
                <td>Mr. S.M.Gaikwad </td>
                <td>Assistant Secretary ( NT) </td>
                <td><a href="mailto:smgaikwad@msbte.com">smgaikwad@msbte.com</a></td>

                {/* <td>
                  <img
                    src="/assets/Images1/Gaikwad.png"
                    alt="Mr. S.M.Gaikwad"
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

export default Mumbai_Region;
