import React from "react";

function Disclaimer() {
  return (
    <>
      <div className="card mb-3  borderforcard paddingTopxl">
        <div className="card-header backgroundColorCardHeader">
          <h1 className="fontForHeader">DISCLAIMER</h1>
        </div>
        <div className="row g-0">
          <div className="card-body removePadding">
            <div className="row p-4">
              <ul>
                <li>
                  All viewers may please note that the official website of MSBTE
                  is as follows:
                </li>
                <li>
                  <a href="http://msbte.ac.in">http://www.msbte.ac.in</a>
                </li>

                <li>
                  It is noticed that fake websites are misrepresenting and
                  misleading the candidates by putting up look-alike web pages.
                  Organizing Committee, MSBTE shall not be responsible in any
                  way if any loss or damage is caused to them by such fake
                  websites. Website related with Technical education as a
                  service to the public.
                </li>
                <li>
                  Although utmost care has been taken to keep data updated on
                  the basis of information from various Institutes, Maharashtra
                  State Board of Technical Education is not responsible and
                  disclaims all liability for damages of any kind arising out of
                  use, reference to, or reliance on any information contained
                  within the site. The Information within the site is
                  periodically updated.
                </li>
                <li>
                  MSBTE shall not be held responsible for any loss or legal
                  implications on account of flaws in the information/database.
                </li>
                <li>
                  Websites{" "}
                  <a class="ext" href="http://www.msbte.ac.in/" target="_blank">
                    http://www.msbte.ac.in
                  </a>{" "}
                  may include links providing direct access to other Internet
                  resources, including Web sites, MSBTE is not responsible for
                  the accuracy or content of information contained in these
                  sites.
                </li>
                <li>
                  The content in all language is simultaneously updated,
                  irrespective of language constraint default language is
                  displayed where such content is not translated.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Disclaimer;
