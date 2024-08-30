import React, { useEffect, useState } from "react";

function ScreenReader() {
  const [isScreenReaderActive, setIsScreenReaderActive] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);

  // Fetch and set the desired voice
  const getVoice = () => {
    const voices = speechSynthesis.getVoices();

    // Try to find an Indian English or Marathi female voice
    const femaleVoice = voices.find(
      (voice) =>
        (voice.lang === "en-IN" || voice.lang === "mr-IN") &&
        voice.name.toLowerCase().includes("female")
    );

    // Fallback to any female voice
    const fallbackFemaleVoice = voices.find((voice) =>
      voice.name.toLowerCase().includes("female")
    );

    // Fallback to any available voice
    const defaultVoice = voices[0];

    // Set the voice: prioritize Indian female voice, then any female voice, and finally any voice
    setVoice(femaleVoice || fallbackFemaleVoice || defaultVoice);
  };

  useEffect(() => {
    // Load the voices and set the desired one
    speechSynthesis.onvoiceschanged = () => {
      getVoice();
    };
    getVoice();

    window.addEventListener("beforeunload", stopScreenReader);
    return () => {
      window.removeEventListener("beforeunload", stopScreenReader);
      stopScreenReader();
    };
  }, []);

  // Remove elements by tag name, class name, or ID
  const removeUnwantedElements = (
    element,
    tagsToExclude = [],
    classesToExclude = [],
    idsToExclude = []
  ) => {
    tagsToExclude.forEach((tag) => {
      const elements = element.getElementsByTagName(tag);
      Array.from(elements).forEach((el) => el.remove());
    });

    classesToExclude.forEach((className) => {
      const elements = element.getElementsByClassName(className);
      Array.from(elements).forEach((el) => el.remove());
    });

    idsToExclude.forEach((id) => {
      const elementById = element.querySelector(`#${id}`);
      if (elementById) {
        elementById.remove();
      }
    });
  };

  const startScreenReader = () => {
    const appElement = document.querySelector(".App");
    if (!appElement) {
      console.error("Element with class 'App' not found.");
      return;
    }

    // Clone the .App element and all its children to avoid altering the original DOM
    const clonedAppElement = appElement.cloneNode(true);

    // Specify tags, classes, and IDs to exclude
    const tagsToExclude = ["iframe"];
    const classesToExclude = [
      "carousel",
      "slider",
      "dropdown-menu",
      "latest-update",
      "noRead",
    ];
    const idsToExclude = ["topBack"];

    // Remove unwanted elements from the cloned content
    removeUnwantedElements(
      clonedAppElement,
      tagsToExclude,
      classesToExclude,
      idsToExclude
    );

    let textToRead = clonedAppElement.textContent || clonedAppElement.innerText;

    if (!textToRead.trim()) {
      console.error("No readable text found in the '.App' element.");
      return;
    }

    const utteranceInstance = new SpeechSynthesisUtterance(textToRead);

    utteranceInstance.voice = voice;
    utteranceInstance.rate = 0.9; // Adjust the rate for a more natural pace
    utteranceInstance.pitch = 1; // Keep pitch neutral

    utteranceInstance.onend = () => {
      setIsScreenReaderActive(false);
      setUtterance(null);
    };

    utteranceInstance.onerror = (event) => {
      console.error("SpeechSynthesis error", event);
      setIsScreenReaderActive(false);
      setUtterance(null);
    };

    speechSynthesis.cancel(); // Stop any ongoing speech to prevent overlap
    speechSynthesis.speak(utteranceInstance);
    setUtterance(utteranceInstance);
    setIsScreenReaderActive(true);
  };

  const handleScreenReaderToggle = () => {
    if (isScreenReaderActive) {
      stopScreenReader();
    } else {
      startScreenReader();
    }
  };

  const stopScreenReader = () => {
    if (speechSynthesis.speaking || speechSynthesis.paused) {
      speechSynthesis.cancel(); // Stop the screen reader completely
      setIsScreenReaderActive(false);
      setUtterance(null);
    }
  };

  return (
    <a href="#" onClick={handleScreenReaderToggle}>
      <i
        className={`fa fa-volume-${isScreenReaderActive ? "off" : "up"}`}
        title={`Screen Reader ${isScreenReaderActive ? "Pause" : "Access"}`}
      ></i>
    </a>
  );
}

export default ScreenReader;
