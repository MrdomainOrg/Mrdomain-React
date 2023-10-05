import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PublicArea from './views/public-area/public-area';

const CACHE_KEY = 'mrdomainLanguage'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [translations, setTranslations] = useState<Array<any>>([])
  return (
    <PublicArea />
  );
}

export default App;
