import React from "react";
import GoogleTranslator from "./GoogleTranslator";
import ScreenReader from "./ScreenReader";
import ThemeAndFontChanger from "./ThemeAndFontChanger";

function TopControl({ switchTheme }) {
  const scrollToMainContent = (e) => {
    e.preventDefault();

    const mainContent = document.getElementById("imageMainHomePage");
    const offset = 65;
    const yCoordinate =
      mainContent.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: yCoordinate,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="topBack">
      <div className="container justify-content-between align-items-center">
        <ul>
          <li>
            <span style={{ fontFamily: "shivaji" }}> महाराष्ट्र शासन </span>
            <br />
            Government of Maharashtra
          </li>

          {/* <li>
            <span style={{ fontFamily: "shivaji" }}>
              {" "}
              उच्च व तंत्रशिक्षण विभाग{" "}
            </span>
            <br />
            Higher & Technical Education Department
          </li> */}
        </ul>
        <ul>
          <li>
            <a href="#main-content" onClick={scrollToMainContent}>
              Skip to main content
            </a>
          </li>

          <li>
            <ScreenReader />
          </li>

          <li>
            <a href="/sitemap">
              <i className="fa fa-sitemap" title="Sitemap"></i>
            </a>
          </li>

          <ThemeAndFontChanger switchTheme={switchTheme} />
          <li>
            <GoogleTranslator />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopControl;
