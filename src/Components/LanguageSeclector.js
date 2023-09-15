import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  // Get the i18n instance from react-i18next
  const { i18n } = useTranslation();

  // State to manage the selected language
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  // Function to change the language and store it in localStorage
  const changeLanguage = (lng) => {
    return () => {
      i18n.changeLanguage(lng); // Change the language
      setSelectedLanguage(lng); // Update the selected language in state
      localStorage.setItem("language", lng); // Store the language preference in localStorage
    };
  };

  // useEffect to initialize the language
  useEffect(() => {
    // Check if there's a saved language in localStorage
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage) {
      // If a language is saved, set it as the current language and in state
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage);
    } else {
      // If there's no saved language, set the default language to English
      i18n.changeLanguage("en");
      setSelectedLanguage("en");
      localStorage.setItem("language", "en"); // Store "en" as the default language
    }
  }, [i18n]); // [i18n] as a dependency

  return (
    <div className="language-selector">
      <label htmlFor="language-select">Select Language:</label>
      <select
        id="language-select"
        onChange={(e) => changeLanguage(e.target.value)()} // Change the language when an option is selected
        value={selectedLanguage} // Set the value of the select element to the selected language
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="de">Dutch</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
