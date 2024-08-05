import React from "react";

class GoogleTranslator extends React.Component {
  componentDidMount() {
    // Check if Google Translate is already loaded. If so, don't load again.
    if (window.google) return;

    // Create and append the script to load Google Translate
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          // includedLanguages: "en,mr,bn,hi,ta,te",
          includedLanguages: "en,mr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }

  render() {
    return <div id="google_translate_element"></div>;
  }
}

export default GoogleTranslator;
