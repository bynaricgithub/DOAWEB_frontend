import React from "react";

function Feedback() {
  return (
    <div className="card mb-3  borderforcard paddingTopxl">
      <div className="card-header backgroundColorCardHeader">
        <h1 className="fontForHeader">Feedback</h1>
      </div>
      <div className="row g-0">
        <div className="card-body removePadding p-5">
          <form className="row g-3 needs-validation" noValidate="">
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                defaultValue="Mark"
                required=""
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                defaultValue="Otto"
                required=""
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label">
                Email
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required=""
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom03" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required=""
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required=""
              />
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom05" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                required=""
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div className="col-12">
              <div class="form-outline">
                <textarea
                  class="form-control"
                  id="textAreaExample1"
                  rows="4"
                ></textarea>
                <label class="form-label" for="textAreaExample">
                  Message
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
