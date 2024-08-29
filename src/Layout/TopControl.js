import React from "react";
import GoogleTranslator from "./GoogleTranslator";
import ThemeAndFontChanger from "./ThemeAndFontChanger";

function TopControl({ switchTheme }) {
  // Function to handle smooth scrolling to the main content
  const scrollToMainContent = (e) => {
    e.preventDefault(); // Prevent default anchor click behavior

    const mainContent = document.getElementById("imageMainHomePage");
    const offset = 75; // Space you want to leave from the top
    const yCoordinate =
      mainContent.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: yCoordinate,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="topBack">
      <div className="container d-flex justify-content-between align-items-center">
        <ul>
          <li>
            <span style={{ fontFamily: "shivaji" }}> महाराष्ट्र शासन </span>
            <br />
            Government of Maharashtra
          </li>

          <li>
            <span style={{ fontFamily: "shivaji" }}>
              {" "}
              उच्च व तंत्रशिक्षण विभाग{" "}
            </span>
            <br />
            Higher & Technical Education Department
          </li>

          <li>
            <a href="#main-content" onClick={scrollToMainContent}>
              Skip to main content
            </a>
          </li>
          <li>
            <a href="/screenreader">
              <i className="fa fa-volume-up" title="Screen Reader Access"></i>
            </a>
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
