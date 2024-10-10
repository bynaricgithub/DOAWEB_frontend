import React from "react";
import { s3 } from "../../utils/Helper";

function OrganizationalStructure() {
    return (
        <>
            {/* <div class="card mb-3  borderforcard paddingTopxl">
        <div class="card-header backgroundColorCardHeader">
          <p class="fontForHeader">ORGANIZATIONAL STRUCTURE</p>
        </div>
        <div class="row g-0">
          <div class="card-body removePadding">
            <div className="row">
              <div className="col-xl-12 col-sm-12 text-center py-3">
                <img
                  src="/assets/Images1/org_struct.png"
                  class="p-2 img-fluid"
                  alt="logo"
                />
              </div>
              <div className="col-xl-4 col-sm-12">
                <div class="card mb-2  borderforcard paddingTopxl">
                  <div class="card-header backgroundColorCardHeader">
                    <Link class="fontForHeader d-block" to="/governingCouncil">
                      Governing Council
                    </Link>
                  </div>
                </div>
                <div class="card mb-2  borderforcard paddingTopxl">
                  <div class="card-header backgroundColorCardHeader">
                    <Link class="fontForHeader d-block" to="/governingBoard">
                      Board
                    </Link>
                  </div>
                </div>
                <div class="card mb-2  borderforcard paddingTopxl">
                  <div class="card-header backgroundColorCardHeader">
                    <p class="fontForHeader">MSBTE</p>
                  </div>
                  <div class="row g-0">
                    <div class="card-body removePadding">
                      <ul>
                        <li>
                          <Link to="/chatrapati_shambhaji_nagar_region">ROBTE Chatrapati Shambhaji Nagar</Link>
                        </li>
                        <li>
                          <Link to="/mumbai_region">Mumbai Region</Link>
                        </li>
                        <li>
                          <Link to="/nagpur_region">ROBTE Nagpur</Link>
                        </li>
                        <li>
                          <Link to="/pune_region">ROBTE Pune</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card my-4  paddingTopxl">
                  <div class="card-header backgroundColorCardHeader">
                    <p class="fontForHeader"><b>Organization Chart</b></p>
                  </div>
                </div>

                <div class="card mb-2  borderforcard paddingTopxl">
                  <div class="card-header backgroundColorCardHeader">
                    <Link class="fontForHeader d-block" to="/">
                      Director
                    </Link>
                  </div>
                </div>

                <div class="card mb-2  borderforcard paddingTopxl">
                  <div class="card-header backgroundColorCardHeader">
                    <p class="fontForHeader">Secretary</p>
                  </div>
                  <div class="row g-0">
                    <div class="card-body removePadding">
                      <ul>
                        <li>
                          <p>Examination Cell</p>
                          <ul>
                            <li>
                              <Link to="/">Exam Management</Link>
                            </li>
                            <li>
                              <Link to="/">Question Paper Section</Link>
                            </li>
                            <li>
                              <Link to="/">Result Section</Link>
                            </li>
                            <li>
                              <Link to="/">Record Section</Link>
                            </li>
                            <li>
                              <Link to="/">Legal Matters</Link>
                            </li>
                            <li>
                              <Link to="/">Question Banks</Link>
                            </li>
                            <li>
                              <Link to="/">Online Exam</Link>
                            </li>
                            <li>
                              <Link to="/">Scholarships</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="pt-2">
                          <Link to="/">Resource Co-ordination</Link>
                        </li>
                        <li>
                          <Link to="/">HRD</Link>
                        </li>
                        <li>
                          <Link to="/">Accounts</Link>
                        </li>
                        <li className="pt-2">
                          <p>CDC Section</p>
                          <ul>
                            <li>
                              <Link to="/">Curriculum Reision</Link>
                            </li>
                            <li>
                              <Link to="/">Development of New Curriculum</Link>
                            </li>
                            <li>
                              <Link to="/">Academic Monitoring</Link>
                            </li>
                            <li>
                              <Link to="/">Learning Resource Development</Link>
                            </li>
                            <li>
                              <Link to="/">Equivalence</Link>
                            </li>
                            <li>
                              <Link to="/">E-Learning</Link>
                            </li>
                            <li>
                              <Link to="/">Technical Competitions</Link>
                            </li>
                            <li>
                              <Link to="/">Career Fairs</Link>
                            </li>
                            
                            <li>
                              <Link to="/">Eligibility</Link>
                            </li>
                            
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

            <div class="card mb-3  borderforcard paddingTopxl">
                <div class="card-header backgroundColorCardHeader">
                    <p class="fontForHeader">ORGANIZATIONAL STRUCTURE</p>
                </div>
                <div class="row g-0">
                    <div class="card-body removePadding">
                        <div className="row">
                            <div className="col-xl-12 col-sm-12 text-center py-3">
                                <img
                                    src={s3 + "/Images1/ORG_Chart.jpg"}
                                    className="p-0 img-fluid"
                                    alt="Org Chart"
                                    useMap="#org_chart"
                                />
                                <map name="org_chart">
                                    <area
                                        target="_blank"
                                        alt="Governing Council"
                                        title="Governing Council"
                                        href="/governingCouncil"
                                        coords="480,164,63"
                                        shape="circle"
                                    />
                                    <area
                                        target="_blank"
                                        alt="Governing Board"
                                        title="Governing Board"
                                        href="/governingBoard"
                                        coords="482,260,421,304,444,375,516,373,538,305,482,262,420,304"
                                        shape="poly"
                                    />
                                    <area
                                        target="_blank"
                                        alt="MSBAE Mumbai"
                                        title="MSBAE Mumbai"
                                        href="/mumbai_region"
                                        coords="61,544,304,622"
                                        shape="rect"
                                    />
                                    <area
                                        target="_blank"
                                        alt="MSBAE nagpur"
                                        title="MSBAE nagpur"
                                        href="/nagpur_region"
                                        coords="361,544,596,620"
                                        shape="rect"
                                    />
                                    <area
                                        target="_blank"
                                        alt="MSBAE Chatrapati Sambhaji NAgar"
                                        title="MSBAE Chatrapati Sambhaji NAgar"
                                        href="/chatrapati_shambhaji_nagar_region"
                                        coords="652,545,903,623"
                                        shape="rect"
                                    />
                                </map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="card mb-3  borderforcard paddingTopxl">
        <div class="card-header backgroundColorCardHeader">
          <p class="fontForHeader">FUNCTIONING OF MSBTE</p>
        </div>
        <div class="row g-0">
          <div class="card-body removePadding">
            <div className="row">
              <div className="col-xl-12 col-sm-12 text-center py-3">
                <img
                  src="/assets/Images1/Functioning_of_MSBTE.png"
                  class="p-0 img-fluid"
                  alt="Functioning of MSBTE"
                  useMap="#functionMsbte"
                />
                <map name="functionMsbte">
                  <area href="" coords="369,77,593,121" shape="rect" />
                  <area href="" coords="359,168,602,224" shape="rect" />
                  <area href="" coords="37,276,240,347" shape="rect" />
                  <area href="" coords="264,280,468,348" shape="rect" />
                  <area href="" coords="491,279,696,347" shape="rect" />
                  <area href="" coords="717,281,923,346" shape="rect" />
                  <area href="" coords="65,401,233,432" shape="rect" />
                  <area href="" coords="63,436,235,464" shape="rect" />
                  <area href="" coords="65,468,236,498" shape="rect" />
                  <area href="" coords="66,500,235,527" shape="rect" />
                  <area href="" coords="65,530,235,558" shape="rect" />
                  <area href="" coords="66,559,235,589" shape="rect" />
                  <area href="" coords="311,403,499,464" shape="rect" />
                  <area href="" coords="311,467,499,496" shape="rect" />
                  <area href="" coords="312,500,499,528" shape="rect" />
                  <area href="" coords="312,531,499,588" shape="rect" />
                  <area href="" coords="639,403,910,433" shape="rect" />
                  <area href="" coords="639,435,909,489" shape="rect" />
                  <area href="" coords="643,492,908,526" shape="rect" />
                  <area href="" coords="644,529,907,557" shape="rect" />
                  <area href="" coords="645,559,907,591" shape="rect" />
                  <area href="" coords="646,592,905,623" shape="rect" />
                </map>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        </>
    );
}

export default OrganizationalStructure;
