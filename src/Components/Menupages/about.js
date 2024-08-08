import React from "react";
// import NewMap from "./MapNew";

function About() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card mb-3 borderforcard paddingAboutMsbte">
            <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">About Us</h1>
            </div>
            <div className="row g-0">
              <div className="card-body removePadding row">
                <div className="col-lg-12 col-sm-12">
                    <div className="pdfDiv">
                  <iframe
                    src={"/assets/file/affiliation.pdf"}
                    style={{ width: "100%", height: "100%" }}
                    title="PDF"
                  />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
