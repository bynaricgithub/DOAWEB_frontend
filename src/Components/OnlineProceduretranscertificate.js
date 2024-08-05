import React from "react";
import { Link } from "react-router-dom";

function OnlineProceduretranscertificate() {
  return (
    <>
      <div className="card mb-3  borderforcard paddingAboutMsbte OnlineProceduret p-4">
        <div className="card-headers">
          <h3>Online Procedure for Transcript Certificate</h3>
          <button className="back-btn">
            {" "}
            <Link to={{ pathname: "/transcriptCertificate" }}>Back</Link>
          </button>
        </div>
        <br />
        <p>
          Application for Transcript certificate is available on
          www.msbte.org.in website &gt; Student &gt; Transcript &gt; apply &gt;
          <a
            href="https://aaplesarkar.mahaonline.gov.in/en/"
            target="_blank"
            rel="noopener"
          >
            www.aaplesarkar. mahaonline.gov.in
          </a>
          .
        </p>
        <strong>OR</strong>
        <p>
          <a
            href="hhttps://aaplesarkar.mahaonline.gov.in/en/"
            target="_blank"
            rel="noopener"
          >
            www.aaplesarkar.mahaonline.gov.in
          </a>
          New User Registration &gt; Select 'Option 2' &gt; Fill the form for
          Registration
        </p>

        <h6>Required documents for Transcript Certificate:</h6>

        <ol>
          <li>Diploma Mark sheets of all years/Semester</li>
          <li>
            Provisional /Final Board Certificate. (Provisional certificate is
            valid only for 6 months)
          </li>
          <li>
            Leaving certificate or any Date of Birth Proof for WES form. Also
            mention the number of Transcript certificates required.
          </li>
        </ol>

        <h6>Fee for transcript certificate is as follows,</h6>

        <p>For the first transcript - Rs 800/- Rs 400/- </p>
        <p>for each next copy. </p>
        <p> + Postal charges Rs 50 /- per transcript.</p>
        <p> A payment gateway is available over there.</p>
        <p>
          {" "}
          Mention postal address in India only. Or any relative can collect it
          from the board, only if you give him an authority letter with a Xerox
          of photo ID of a person who is coming here to collect a transcript.
        </p>

        <h6>
          MSBTE does not send Transcripts (soft copy / hard copy) out of India
          to concerned universities.
        </h6>
        <p>
          Time duration of the Transcript is 21 working days.Transcript document
          does not contain mark sheets or Diploma certificate, it contains
          Transcript Certificate, in which name of the student as per
          certificate is mentioned, total marks of final year or last two
          semesters total marks will be mentioned &amp; Teaching Examination
          schemes of the course. Therefore if you need it (subject wise marks as
          per mark sheets) please do the authentication process.
        </p>
        <h6>
          For Authentication &amp; duplicate mark sheet you need to contact :
          <b>
            <a href="mailto:umhire@msbte.com">umhire@msbte.com</a>&nbsp;or 022-
            62542187
          </b>
        </h6>
        <p>
          Transcript &amp; authentication both are different processes and are
          done from different sections. If you want to enclose an authentication
          envelope with Transcript, then you have to personally submit the
          authentication envelope to the concern section. It should be informed
          to the transcript section at the time of the Transcript application.
        </p>

        <h6>
          There is no provision to send electronic Transcript, via MSBTE
          verified email address.
        </h6>
        <p>
          MSBTE does not send Transcripts out of India to concerned
          universities. If you are in need to send it directly from MSBTE to
          your concerned university, then you can do it as follows. You can
          authorise your relative or friend to collect a transcript from the
          MSBTE office. We will provide him / her nearby post office address,
          from where it can be sent to the concerned university. The sender's
          name is already printed on the envelope i.e. MSBTE. So it will be as
          good as sent by MSBTE. Whenever such problems arise, we suggest the
          above solution to the student.
        </p>

        <p>
          For Transcript Certificate, you can contact:&nbsp;
          <a href="mailto:desk50transcript@msbte.com">
            desk50transcript@msbte.com&nbsp; OR 022- 62542158
          </a>
        </p>
      </div>
    </>
  );
}

export default OnlineProceduretranscertificate;
