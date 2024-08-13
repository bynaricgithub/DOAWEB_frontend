import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Components/Admin";
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
        <div className="container" id="paddingForContainer">
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
