import React from 'react';
import { useTranslation } from 'react-i18next';

// Importing the 'useTranslation' hook from react-i18next for language translation

function Home() {
  // Using the 'useTranslation' hook to access translation functions
  const { t } = useTranslation();

  return (
    <div>
      {/* Display translated content */}
      <h1>{t('home.title')}</h1>
      {/* Use the 't' function to translate 'home.title' */}
      
      <p>{t('home.products')}</p>
      {/* Use the 't' function to translate 'home.products' */}
    </div>
  );
}

export default Home;


