import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LatestUpdates from "../Components/LatestUpdates";
import TopMenu from "./TopMenu";
import GoogleTranslator from "./GoogleTranslator";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const [fontSizeIncrement, setFontSizeIncrement] = useState(2); // You can set the initial increment value

  const resizeText = (increment) => {
    const elements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, font, li, a, b, th, td, button i"
    );

    elements.forEach((element) => {
      let elementFontSize = parseFloat(
        window.getComputedStyle(element).fontSize
      );
      element.style.fontSize = elementFontSize + increment + "px";
    });
  };

  const resetFontSize = () => {
    const elements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, font, li, a, b, th, td, button i"
    );

    elements.forEach((element) => {
      element.style.fontSize = "";
    });
  };

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const stickyPoint = headerRef.current.offsetTop;

      if (window.pageYOffset > stickyPoint) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div className="d-flex justify-content-end translatorBar">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-7 col-sm-5">
              <a href="" target="_blank" className="text-white">
               
              </a>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-7">
              <div className=" justify-content-end d-flex">
                <div className="px-1">
                  <Link to="/screen-reader-access">
                    <img
                      src="/assets/Images1/screenreader.png"
                      alt="Screen Reader"
                      className="screenReader"
                    />
                  </Link>
                </div>
                <div className="windowzoom">
                  <div
                    className="d-flex justify-content-end marginForDivConatiner"
                    id="font-setting-buttons">
                    <div>
                      <img
                        src="/assets/Images1/black.png"
                        onClick="chngebackgroundblack()"
                        alt="change header footer colour to black"
                        className="img-fluid marginCircle FontForCircle"/>
                    </div>
                    <div>
                      <img
                        src="/assets/Images1/pink.png"
                        className="img-fluid marginCircle FontForCircle"
                        onClick="chngebackgroundpink()"
                        alt="chnage header footer colour to balck"/>
                    </div>
                    <div>
                      <img
                        src="/assets/Images1/pluss.png"
                        className="img-fluid zoom marginforzoom increase-me"
                        alt="zoomin"
                        id="zoomIn"
                        onClick={() => resizeText(fontSizeIncrement)}
                      />
                    </div>
                    <div>
                      <img
                        src="/assets/Images1/equal.png"
                        className="img-fluid zoom-init marginforzoom reset-me"
                        alt="zoomnormal"
                        id="btnzoomNormal"
                        onClick={resetFontSize}
                      />
                    </div>
                    <div>
                      <img
                        src="/assets/Images1/minus.png"
                        className="img-fluid zoom-out  marginforzoom decrease-me"
                        alt="zoomout"
                        id="zoomOut"
                        onClick={() => resizeText(-fontSizeIncrement)}
                      />
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div> */}
      <div className="fixed-header">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-8 col-lg-6 col-sm-12 logoImg">
              <a href="/" className="mt-2">
                <img
                  src="/assets/Images1/DOA-logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
                <h3 className="notranslate">
                  Maharashtra State Board<br/> of Art Education
                </h3>
              
              </a>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div className="row">
                <div className="col-lg-5 col-sm-5 col-7 d-flex twologo logoImg3">
                {/* <img
                    src="/assets/Images1/image1.png"
                    className=""
                    alt="logo3"
                  /> */}
                  <img
                    src="/assets/Images1/image.png"
                    className=""
                    alt="Logo"
                  />
                 
                </div>
                <div className="col-lg-7 col-sm-7 col-5 removePaddingicons">
                  <div className="lastDiv">
                    <div className="pt-3 pb-2 Positionlanguage">
                    <div className=" justify-content-end d-flex">
                <div className="px-1">
                  {/* <Link to="/screen-reader-access">
                    <img
                      src="/assets/Images1/screenreader.png"
                      alt="Screen Reader"
                      className="screenReader"
                    />
                  </Link> */}
                </div>
                <div className="windowzoom">
                  <div
                    className="d-flex justify-content-end marginForDivConatiner"
                    id="font-setting-buttons">
                    <div>
                      <img
                        src="/assets/Images1/black.png"
                        onClick="chngebackgroundblack()"
                        alt="change header footer colour to black"
                        className="img-fluid marginCircle FontForCircle"/>
                    </div>
                    <div>
                      <img
                        src="/assets/Images1/pink.png"
                        className="img-fluid marginCircle FontForCircle"
                        onClick="chngebackgroundpink()"
                        alt="chnage header footer colour to balck"/>
                    </div>
                    <div>
                      <img
                        src="/assets/Images1/pluss.png"
                        className="img-fluid zoom marginforzoom increase-me"
                        alt="zoomin"
                        id="zoomIn"
                        onClick={() => resizeText(fontSizeIncrement)}
                      />
                    </div>
                    <div>
                      <img
                        src="/assets/Images1/equal.png"
                        className="img-fluid zoom-init marginforzoom reset-me"
                        alt="zoomnormal"
                        id="btnzoomNormal"
                        onClick={resetFontSize}
                      />
                    </div>
                    <div>
                      <img
                        src="/assets/Images1/minus.png"
                        className="img-fluid zoom-out  marginforzoom decrease-me"
                        alt="zoomout"
                        id="zoomOut"
                        onClick={() => resizeText(-fontSizeIncrement)}
                      />
                    </div>
                  </div>
                </div>
              </div>
                       {/* <GoogleTranslator /> */}
                      <div className="search d-flex mt-2 m-hide"> 
                        <div className="pt-1">
                        <GoogleTranslator />
                        </div>
                      
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Serach..."
                          onChange={(e) => {
                            setQuery(e.target.value);
                          }}
                          onKeyPress={(event) => {
                            if (event.key === "Enter") {
                              navigate(`/search?query=${query}`);
                            }
                          }}
                        />
                        <i
                          className="fa fa-search fa-flip-horizontal serachbarbackground "
                          aria-hidden="true"
                          onClick={() => {
                            navigate(`/search?query=${query}`);
                          }}
                        ></i>
                      </div>
                      <div className="social-media d-flex paddingSocialMedia">
                        <ul className="marginUl d-flex">
                          <li>
                            <a
                              href="https://www.facebook.com/MSBTEMumbai"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="/assets/Images1/facebbok.png"
                                className="rounded-circle"
                                alt="socialM"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/Cmsbte"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="/assets/Images1/twiter.png"
                                className="rounded-circle"
                                alt="socialM"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/msbte.mumbai.official"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="/assets/Images1/insta.png"
                                className="rounded-circle"
                                alt="socialM"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/channel/UCHA-iPS6U4deuneAkNznDfg"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="/assets/Images1/Ytube.png"
                                className="rounded-circle"
                                alt="socialM"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="headerfix" ref={headerRef}>
          <TopMenu />
          <LatestUpdates />
        </div>
      </div>
    </>
  );
}

export default Header;
