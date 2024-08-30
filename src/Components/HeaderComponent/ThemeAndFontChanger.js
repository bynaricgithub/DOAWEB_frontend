import React from "react";

function ThemeAndFontChanger({ switchTheme }) {
  const fontSizeIncrement = 2; // Fixed increment value for font size changes

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

  return (
    <>
      <li>
        <div className="d-flex align-items-center">
          <div className="theme-controls d-flex justify-content-center">
            <img
              src="/assets/Images1/black.png"
              onClick={() => switchTheme("dark-theme")}
              alt="Dark Theme"
              className="img-fluid themeColor mx-1"
              title="Dark Theme"
            />
            <img
              src="/assets/Images1/brown.png"
              onClick={() => switchTheme("light-theme")}
              alt="Light Theme"
              className="img-fluid themeColor mx-1"
              title="Light Theme"
            />
            <img
              src="/assets/Images1/blue.png"
              onClick={() => switchTheme("blue-theme")}
              alt="Blue Theme"
              className="img-fluid themeColor mx-1"
              title="Blue Theme"
            />
          </div>
        </div>
      </li>
      <li>
        <div className="d-flex align-items-center">
          <div className="theme-controls d-flex  justify-content-center">
            <img
              src="/assets/Images1/pluss.png"
              onClick={() => resizeText(fontSizeIncrement)}
              alt="Increase Font Size"
              className="img-fluid zoom mx-1"
              title="Increase Font Size"
            />
            <img
              src="/assets/Images1/equal.png"
              onClick={resetFontSize}
              alt="Reset Font Size"
              className="img-fluid zoom mx-1"
              title="Reset Font Size"
            />
            <img
              src="/assets/Images1/minus.png"
              onClick={() => resizeText(-fontSizeIncrement)}
              alt="Decrease Font Size"
              className="img-fluid zoom mx-1"
              title="Decrease Font Size"
            />
          </div>
        </div>
      </li>
    </>
  );
}

export default ThemeAndFontChanger;
