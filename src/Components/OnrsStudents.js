import React from "react";

function OnrsStudents() {
  return (
    <>
      <div className="row ">
        <div className="col-sm-12">
          <div className="card mb-3  borderforcard paddingAboutMsbte">
            <div className="card-header backgroundColorCardHeader">
              <h1 className="fontForHeader">ONRS STUDENTS</h1>
            </div>
            <div className="row g-0">
              <div className="card-body removePadding">
                <div className="row p-2">
                  <p>
                    <a
                      href="/assets/file/Equivalent_subject_A_Master1.xls"
                      target="_blank"
                      rel="noreferrer"
                      className="link-primary"
                      // data-bs-toggle="modal"
                      // data-bs-target="#myModalonrsstudent"
                    >
                      EQUIVALANCE OF SUBJECTS IN 'O','N','R','S','T' MASTERS TO
                      SUBJECTS IN 'A' MASTER. (English) (3 mb)(xlsx file)
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnrsStudents;
