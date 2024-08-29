import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Components/Admin";
import Committees from "../Components/Menupages/Committee";
import GoverningBoard from "../Components/Menupages/GoverningBoard";
import GoverningCouncil from "../Components/Menupages/GoverningCouncil";
import MsbaeAct from "../Components/Menupages/MsbaeAct";
import MsbaeOfficers from "../Components/Menupages/MsbaeOfficers";
import OrganizationalStructure from "../Components/Menupages/OrganizationalStructure";
import Vision from "../Components/Menupages/Vision";
import About from "../Components/Menupages/about";
import Admission from "../Components/Menupages/admission";
import Affilation from "../Components/Menupages/affilation";
import Contact from "../Components/Menupages/contact";
import Examination from "../Components/Menupages/examination";
import Institute from "../Components/Menupages/institute";
import SiteMap from "../Components/SiteMap";
import WithoutNav from "../Components/WithoutNav";
import Main from "./Main";
import News from "./news";

function Content() {
  // path==="/"?console.log("home"):console.log("nothome")
  return (
    <>
      <main
        id="imageMainHomePage"
        className="post"
        // style={{ backgroundImage: "url(/assets/Images1/Campus_1.png)" }}
      >
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/affilation" element={<Affilation />} />
            <Route path="/institute" element={<Institute />} />
            <Route path="/examination" element={<Examination />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="/vision" element={<Vision />} />
            <Route
              path="/organizationalStructure"
              element={<OrganizationalStructure />}
            />
            <Route path="/governingCouncil" element={<GoverningCouncil />} />
            <Route path="/governingBoard" element={<GoverningBoard />} />
            <Route path="/msbaeOfficers" element={<MsbaeOfficers />} />
            <Route path="/msbaeAct" element={<MsbaeAct />} />
            <Route path="/committees" element={<Committees />} />

            <Route element={<WithoutNav />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        </div>
      </main>
    </>
  );
}

export default Content;
