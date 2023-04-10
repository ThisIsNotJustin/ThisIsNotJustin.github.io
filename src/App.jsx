import React, { useEffect, useState } from 'react';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import { moon, sun } from './components/Header';
import Intro from './components/Intro';

export const theme = {};

export const toggleTheme = {};

function App() {
  const [theme, setTheme] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme === 'dark') {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  }, [theme]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowPortfolio(true);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          {showIntro && <Intro onComplete={handleIntroComplete} />}
          {showPortfolio && (
            <>
              <Header theme={theme} toggleTheme={toggleTheme} sun={sun} moon={moon} />
              <Bio />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
