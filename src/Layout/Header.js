import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LatestUpdates from "../Components/HeaderComponent/LatestUpdates";
import TopControl from "../Components/HeaderComponent/TopControl";
import TopMenu from "../Components/HeaderComponent/TopMenu";
import { s3 } from "../utils/Helper";

function Header() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const headerRef = useRef(null);

    const switchTheme = (theme) => {
        if (theme === "default") {
            document.documentElement.className = "";
            localStorage.setItem("theme", "default");
        } else {
            document.documentElement.className = theme;
            localStorage.setItem("theme", theme);
        }
    };

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

        // Apply the saved theme from localStorage when the component mounts
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            switchTheme(savedTheme);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div id="headerfix" ref={headerRef}>
                <TopControl switchTheme={switchTheme} />
            </div>

            <div className="fixed-header">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-8 col-lg-6 col-sm-12 logoImg">
                            <a href="/" className="my-2">
                                <img
                                    src={s3 + "/Images1/DOA-logo.png"}
                                    className="img-fluid"
                                    alt="Logo"
                                />
                                <h3 className="notranslate">
                                    महाराष्ट्र राज्य कला शिक्षण मंडळ, मुंबई
                                    <br />
                                    <small className="noRead">
                                        Maharashtra State Board of Art Education, Mumbai
                                    </small>
                                </h3>
                            </a>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-12 d-xs-none">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-4 d-flex twologo logoImg3">
                                    <img
                                        src={s3 + "/Images1/image.png"}
                                        className="mx-auto"
                                        alt="Logo"
                                    />
                                </div>
                                <div className="col-lg-8 col-sm-8 col-8">
                                    <div className="lastDiv">
                                        <div className="pt-3 pb-2 Positionlanguage">
                                            <div className="search d-flex mt-2 m-hide">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search..."
                                                    onChange={(e) => setQuery(e.target.value)}
                                                    onKeyPress={(event) => {
                                                        if (event.key === "Enter") {
                                                            navigate(`/search?query=${query}`);
                                                        }
                                                    }}
                                                />
                                                <i
                                                    className="fa fa-search fa-flip-horizontal serachbarbackground"
                                                    aria-hidden="true"
                                                    onClick={() => navigate(`/search?query=${query}`)}
                                                ></i>
                                            </div>
                                            {/* <div className="social-media d-flex paddingSocialMedia">
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
                                                                alt="Facebook"
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
                                                                alt="Twitter"
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
                                                                alt="Instagram"
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
                                                                alt="YouTube"
                                                            />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TopMenu />
                <LatestUpdates />
            </div>
        </>
    );
}

export default Header;
