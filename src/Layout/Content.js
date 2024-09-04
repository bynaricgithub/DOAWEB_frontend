import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Components/Admin";
import Aurangabad_Region from "../Components/Chatrapati_Shambhaji_Nagar_Region";
import Committees from "../Components/Menupages/Committee";
import GoverningBoard from "../Components/Menupages/GoverningBoard";
import GoverningCouncil from "../Components/Menupages/GoverningCouncil";
import MsbaeAct from "../Components/Menupages/MsbaeAct";
import MsbaeOfficers from "../Components/Menupages/MsbaeOfficers";
import OrganizationalStructure from "../Components/Menupages/OrganizationalStructure";
import RtsAct from "../Components/Menupages/RtsAct";
import Vision from "../Components/Menupages/Vision";
import About from "../Components/Menupages/about";
import Admission from "../Components/Menupages/admission";
import Affilation from "../Components/Menupages/affilation";
import Contact from "../Components/Menupages/contact";
import Examination from "../Components/Menupages/examination";
import Institute from "../Components/Menupages/institute";
import Mumbai_Region from "../Components/Mumbai_Region";
import Nagpur_region from "../Components/Nagpur_Region";
import Search from "../Components/Search";
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
            <Route path="/search" element={<Search />} />
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
            <Route path="/rtsAct" element={<RtsAct />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/mumbai_region" element={<Mumbai_Region />} />
            <Route path="/nagpur_region" element={<Nagpur_region />} />
            <Route path="/msbaeAct" element={<MsbaeAct />} />
            <Route
              path="/chatrapati_shambhaji_nagar_region"
              element={<Aurangabad_Region />}
            />

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
