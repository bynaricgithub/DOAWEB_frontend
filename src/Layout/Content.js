import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMsbte from "../Components/AboutMsbte";
import CoreValues from "../Components/CoreValues";
import OrganizationalStructure from "../Components/OrganizationalStructure";
import QualityPolicy from "../Components/QualityPolicy";
import Vision from "../Components/Vision";
import Main from "./Main";
import GoverningBoard from "../Components/GoverningBoard";
import GoverningCouncil from "../Components/GoverningCouncil";
import OurAssociation from "../Components/OurAssociation";
import MsbteAct from "../Components/MsbteAct";
import MsbteOfficers from "../Components/MsbteOfficers";
import CareerFair from "../Components/CareerFair";
import Activities from "../Components/Activities";
import OnrsStudents from "../Components/OnrsStudents";
import TranscriptCertificate from "../Components/TranscriptCertificate";
import DuplicateCertificate from "../Components/DuplicateCertificate";
import MigrationCrtificate from "../Components/MigrationCertificate";
import EquivalenceCertificate from "../Components/EquivalenceCertificate";
import AuthenticationAndVerification from "../Components/AuthenticationAndVerification";
import HSCEquivalence from "../Components/HSCEquivalence";
import EquivalenceOtherBoard from "../Components/EquivalenceOtherBoard";
import ContactUs from "../Components/ContactUs";
import MediaCorner from "../Components/MediaCorner";
import AdminDash from "../Components/AdminDash";
import Admin from "../Components/Admin";
import WithoutNav from "../Components/WithoutNav";
import Disclaimer from "../Components/Disclaimer";
import Policie from "../Components/Policie";
import Terms_and_Condition from "../Components/Terms_and_Condition";
import Accessibility_Statement from "../Components/Accessibility_Statement";
import Help from "../Components/Help";
import Feedback from "../Components/Feedback";
import Services from "../Components/Services";
import VideoLectures from "../Components/VideoLectures";
import DirectorProfile from "../Components/DirectorProfile";
import SiteMap from "../Components/SiteMap";
import Search from "../Components/Search";
import Archive from "../Components/Archive";
import ScreenReaderAccess from "../Components/ScreenReaderAccess";
import ViewInstitutes from "../Components/ViewInstitutes";
import AllCircular from "../Components/Circulars/AllCircular";
import Faq from "../Faq";
import Online_Activities from "../Components/Online_Activities";
import Mumbai_Region from "../Components/Mumbai_Region";
import Pune_region from "../Pune_region";
import Nagpur_region from "../Components/Nagpur_region";
import Aurangabad_Region from "../Components/Chatrapati_Shambhaji_Nagar_Region";
import OnlineProceduretranscertificate from "../Components/OnlineProceduretranscertificate";
import OnlineMigrationcertificate from "../Components/OnlineMigrationcertificate";
import ImportanceOfDiploma from "../Components/ImportanceOfDiploma";

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
            <Route path="/aboutMsbte" element={<AboutMsbte />} />
            <Route path="/coreValues" element={<CoreValues />} />
            <Route path="/visionAndMission" element={<Vision />} />
            <Route path="/qualityPolicy" element={<QualityPolicy />} />
            <Route
              path="/organizationalStructure"
              element={<OrganizationalStructure />}
            />
            <Route path="/governingBoard" element={<GoverningBoard />} />
            <Route path="/governingCouncil" element={<GoverningCouncil />} />
            <Route path="/ourAssociation" element={<OurAssociation />} />
            <Route path="/msbteAct" element={<MsbteAct />} />
            <Route path="/msbteOfficers" element={<MsbteOfficers />} />
            <Route path="/mumbai_region" element={<Mumbai_Region />} />
            <Route path="/pune_region" element={<Pune_region />} />
            <Route path="/nagpur_region" element={<Nagpur_region />} />
            <Route path="/chatrapati_shambhaji_nagar_region" element={<Aurangabad_Region />} />

            <Route path="/careerFair" element={<CareerFair />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/onrsStudents" element={<OnrsStudents />} />
            <Route
              path="/transcriptCertificate"
              element={<TranscriptCertificate />}
            />
            <Route
              path="/onlinetranscriptCertificate"
              element={<OnlineProceduretranscertificate />}
            />
            <Route
              path="/OnlineMigrationcertificate"
              element={<OnlineMigrationcertificate />}
            />
            <Route
              path="/duplicateCertificate"
              element={<DuplicateCertificate />}
            />
            <Route
              path="/migrationCertificate"
              element={<MigrationCrtificate />}
            />
            <Route
              path="/equivalenceCertificate"
              element={<EquivalenceCertificate />}
            />
            <Route
              path="/authenticationAndVerification"
              element={<AuthenticationAndVerification />}
            />
            <Route
              path="/equivalenceOtherBoard"
              element={<EquivalenceOtherBoard />}
            />
            <Route path="/hscEquivalence" element={<HSCEquivalence />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/mediaCorner" element={<MediaCorner />} />
            <Route path="/admindash" element={<AdminDash />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/policie" element={<Policie />} />
            <Route
              path="/terms-and-condition"
              element={<Terms_and_Condition />}
            />
            <Route
              path="/accessibility-statement"
              element={<Accessibility_Statement />}
            />
            <Route path="/help" element={<Help />} />
            <Route path="/services" element={<Services />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/online-activities" element={<Online_Activities />} />
            <Route
              path="/screen-reader-access"
              element={<ScreenReaderAccess />}
            />

            <Route path="/msbteVideoLectures" element={<VideoLectures />} />
            <Route path="/director_profile" element={<DirectorProfile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/importantce-of-diploma" element={<ImportanceOfDiploma />} />

            <Route path="/viewInstitutes" element={<ViewInstitutes />} />
            <Route path="/all_circulars" element={<AllCircular />} />
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
