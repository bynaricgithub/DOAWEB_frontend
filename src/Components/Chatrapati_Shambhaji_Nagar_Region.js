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
                <th>Officers Image</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td> Smt. Arati Shravasti</td>
                <td>Deputy Secretary (Art), MSBAE</td>
                <td className="text-center">
                <a href="mailto:aaratishravasti79@gmail.com">aaratishravasti79@gmail.com</a>
                </td>
                <td className="text-center">
                <img src="/assets/Images1/Artimam.jpeg" alt="Artimam" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Aurangabad_Region;
