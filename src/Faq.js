import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Faq() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="row ">
        <div className="col-sm-12">
          <div className="card removerborderRadius">
            <div className="card-header backgroundColorCardHeader linearimg">
              <h1 className="fontForHeader"> FREQUENTLY ASKED QUESTION</h1>
            </div>

            <ul>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  I have to apply for Duplicate Copies of Mark sheet/s and/or
                  Diploma Certificate and/or verification of mark sheet/s,
                  Diploma Certificate, How to apply?
                </h6>

                <span>
                  &gt; &nbsp;Visit Link:
                  <a
                    className="linkcolor paddinfForClick"
                    href="#"
                    aria-disabled="true"
                    onClick={() => {
                      handleShow();
                      setFile("/assets/file/Authentication_Verification.pdf");
                    }}
                  >
                    http://msbte.ac.in (English) (36 kb) pdf where the
                    prescribed form and fees and documents required are given.
                  </a>
                </span>
              </li>
              <br />

              <li className="p-1 listRemoveborder">
                <h6> Where can I get the copy of examination regulations?</h6>

                <span>
                  &gt; &nbsp;Visit Link:
                  <a
                    className="linkcolor paddinfForClick"
                    href="#"
                    aria-disabled="true"
                    onClick={() => {
                      handleShow();
                      setFile("/assets/file/Authentication_Verification.pdf");
                    }}
                  >
                    http://msbte.ac.in (English) (36 kb)
                  </a>
                </span>
              </li>
              <br />

              <li className="p-1 listRemoveborder">
                <h6> Where can I get the copy of examination regulations?</h6>

                <p>
                  &gt; &nbsp;Visit Link:&nbsp;
                  <a
                    className="linkcolor paddinfForClick"
                    href="#"
                    aria-disabled="true"
                    onClick={() => {
                      handleShow();
                      setFile(
                        "/assets/file/MSBTEExamRegulations2018_050920181614.pdf"
                      );
                    }}
                  >
                    Open PDF Link
                  </a>
                </p>
              </li>
              <br />

              <li className="p-1 listRemoveborder">
                <h6>
                  Status of my result is RHR/+RHR, what should I do to get the
                  result?
                </h6>

                <span>
                  &gt; &nbsp;Contact your Institute. Your result status is as
                  above either
                </span>
                <ul>
                  <li>
                    for want of some information regarding your enrolment no.,
                    seat no. , marks of continuous assessment, practical or term
                    work marks or marks in theory paper/s
                  </li>
                  <br />
                  <li>Or there may be some enquiry pending against you. </li>
                  <br />
                  <li>Or you may not be eligible to appear for examination.</li>
                  <br />
                </ul>
              </li>
              <br />

              <li className="p-1 listRemoveborder">
                <h6>
                  Status of my result is WFLS/WFLY, what should I do to get the
                  result?
                </h6>

                <span>
                  &gt; &nbsp;It means you are passed in final semester/year, but
                  your lower semester/s or year/s may be pending. If you have
                  passed all previous semesters/years, contact Institute with
                  mark sheets and submit application on plain paper to declare
                  your result of final semester/s or year/s ( as applicable).
                </span>
              </li>
              <br />

              <li className="p-1 listRemoveborder">
                <h6>
                  I have passed Diploma, when can I get Diploma Certificate?
                </h6>

                <span>
                  &gt; &nbsp;Diploma Certificates are issued after completion of
                  process of reassessment, the information of the students whose
                  certificates are issued to Institute through Regional Offices,
                  is displayed on web site. Till then provisional certificates
                  are hold good.
                </span>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  I want a photocopy of my answer books, how can I get it?
                </h6>

                <span>
                  &gt; &nbsp;After result is declared, the schedule for applying
                  for obtaining Photocopy of assessed answer book/s is declared
                  on web site. You have to apply within schedule only. Online
                  application process has been developed. You can obtain
                  photocopies of maximum two theory subjects only.
                </span>
              </li>
              <br />

              <li className="p-1 listRemoveborder">
                <h6> How can I apply for reassessment?</h6>

                <span>
                  &gt; &nbsp;After result is declared, the schedule for applying
                  for reassessment is displayed on web site. You have to apply
                  within the schedule only. You can apply for reassessment of
                  maximum.TWO theory subjects only of which photocopies have
                  been obtained.
                </span>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  Where can I get the notification regarding procedure and fees
                  of obtaining PHOTOCOPY of answer books and applying for
                  REASSESSMENT?
                </h6>

                <p>
                  &gt; &nbsp;Visit Website:&nbsp;
                  <a
                    className="linkcolor"
                    href=" https://online.msbte.co.in/msbte23/index.php"
                  >
                    Open Link
                  </a>
                </p>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  What name shall be printed on my mark sheet and Certificate?
                </h6>

                <span>
                  &gt; You may be admitted to any Diploma Course at any level.
                  Your exact name appearing in SSC certificate shall exactly
                  appear in your mark sheet and Certificate.
                </span>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  I am married; I want to change my name in mark sheet and
                  certificate?
                </h6>

                <span>
                  &gt; If you are married after the last examination of Diploma,
                  no change in name shall be made. If you are married during
                  course of your studies and apply immediately, the new name
                  shall appear on backside of mark sheets and certificate duly
                  signed by the authority.
                </span>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  My result status at first semester is “Fail”, am I eligible
                  for admission to second semester?
                </h6>

                <span>
                  &gt; The eligible students studying in All ODD semesters i.e.
                  First, Third and fifth are allowed to continue in
                  corresponding EVEN semesters i.e. second. Fourth and sixth
                  provided they are eligible as per regulation RG4D irrespective
                  of status of result whether Passed, ATKT or Failed.
                </span>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  My result status at second semester is “Fail”, am I eligible
                  for admission to Third semester?
                </h6>

                <span>
                  &gt; Result status in the mark sheet of E schemes is
                  independent status of that particular semester. Eligibility
                  for next odd semester i.e. Third here is dependent on combined
                  count of failure subjects in both semesters first and second.
                  Number of failure subjects allowed to avail the facility of
                  ATKT( to be eligible to next semester) is printed on mark
                  sheet. If you are failed in equal to or not more than total
                  allowable count of failure subjects together in BOTH
                  semesters, you are eligible to admission to Third semester.
                </span>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  My result status of Fourth semester is Fail Lsp? Am I eligible
                  for admission to Fifth semester?
                </h6>

                <span>
                  &gt; Lsp means your lower semester is pending, means you are
                  failed in one or more subject/s in either first or second or
                  both semesters. You are then not eligible to admission for
                  fifth semester irrespective of your result status at fourth
                  semester as fail or pass or ATKT. If you are passed in both
                  semesters first and second, get your result status corrected,
                  removing Lsp remark, contacting your Institute. Mistakenly if
                  Lspremark do not appear on mark sheet of fourth semester but
                  you are failed as above in first and/ or second semester, you
                  are not eligible to admission to fifth semester, again contact
                  your Institute to get the remark. In case your result status
                  at Fourth semester is “Fail or Pass or ATKT”, (without any
                  suffix like Lsp), eligibility for admission to fifth semester
                  should be checked counting failure subjects together in Third
                  and Fourth Semester both to avail benefit of ATKT.
                </span>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  My result status at Sixth Semester i. e. final semester is
                  WFLS/WFLY, Can I get mark sheet?
                </h6>

                <span>
                  &gt; WFLY/WFLS means your result of final semester/year is
                  withhold as you are not passed in either lower semester/s,
                  year. You can see marks in gazette of Institute but cannot get
                  the mark sheet.
                </span>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  My result status is RHR/WFLY/WFLS, can I apply for
                  verification, photocopy and reassessment?
                </h6>

                <span>
                  &gt; Yes, normally marks are printed in Institute’s gazette,
                  referring which you can certainly apply. Rather you have to
                  apply if you so desire because you shall not get any extension
                  for the reason that you are not receipt of your result/mark
                  sheet. However if theory marks of any subject are not printed
                  in Gazette, get your marks from Board applying through
                  Institute only within the schedule given for application for
                  verification, photocopy and reassessment.
                </span>
              </li>
              <br />

              <li className="p-1 listRemoveborder">
                <h6>What is the rule of ATKT?</h6>

                <span>
                  &gt; If a student fails in not more than 1/3 (ONE THIRD)
                  subjects, his result status is ATKT. These subjects are
                  passing heads, for which minimum passing marks are to be
                  obtained. Sessional is not passing head, as there is no
                  condition of minimum marks to be obtained to pass. ( Minimum
                  marks are “00”). Thus if there are seven subjects to pass,
                  maximum number of failure subjects allowed to avail ATKT
                  status is 7/3=2. Means a student should pass in FIVE subjects
                  minimum.( Refer Examination regulation RG-2D).
                </span>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  I failed in Physics theory and practical too? Are these two
                  subjects to count for ATKT?
                </h6>

                <span>
                  &gt; No. One Subject means either theory or practical or oral
                  separately, if failure is only in one head, OR taken together
                  ,if failure is in more than one head of the same subject.
                  Means, if one fails in Physics theory and practical both, it
                  is only one subject OR one fails only in practical and passes
                  in theory, still it is one subject.
                </span>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>
                  What is the rule of awarding class for Diploma in engineering?
                </h6>

                <span>
                  &gt; Normally, class for Diploma is awarded on the aggregate
                  marks obtained at pre final and final semester both taken
                  together, i.e. For three years Di[ploma Course , class is
                  awarded on the aggregate marks obtained at 5th semester and
                  6th semester taken together, irrespective of the class awarded
                  at individual semester.
                </span>
              </li>
              <br />
              <li className="p-1 listRemoveborder">
                <h6>When can I apply for Improvement of class?</h6>

                <span>
                  &gt; You can apply for Improvement of class only when you pass
                  all semesters fully. You can apply and appear within one year
                  i.e. in immediate next two examinations, for which you have to
                  apply and obtain permission from Regional Office of MSBTE.
                </span>
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        contentClassName="modal-pdf-content"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body closeButton>
          <iframe title="myFrame" className="w-100 h-100" src={file}></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Faq;
