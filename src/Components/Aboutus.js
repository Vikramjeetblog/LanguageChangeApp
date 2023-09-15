import React from 'react';
import { useTranslation } from 'react-i18next';

// Importing the 'useTranslation' hook from react-i18next for language translation

function AboutUs() {
  // Using the 'useTranslation' hook to access translation functions
  const { t } = useTranslation();

  return (
    <div>
      {/* Display translated content */}
      <h1>{t('about.title')}</h1>
      {/* Using the 't' function to translate 'about.title' */}
      
      <p>{t('about.description')}</p>
      {/* Using the 't' function to translate 'about.description' */}
    </div>
  );
}

export default AboutUs;
