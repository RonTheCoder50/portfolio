import NavBarComponent from './components/navbar';
import AboutSection from './components/about';
import FooterSection from './components/footer';
import './App.css';
import { SkillSection, ProjectSection, HeroSection } from './components/herosection';
import { useState } from 'react';

export default function App() {
  return <ManageComponents />
}

function ManageComponents() {
  const [theme, setTheme] = useState('light');
  function handleTheme() {
    setTheme(theme.trim() === 'dark' ? 'light' : 'dark');
  }

  let themeClass = (theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white/85');
  return (
    <section className={`w-full min-h-screen flex flex-col gap-8 items-center p-2 relative
     ${themeClass}`}>
      <NavBarComponent theme={themeClass} isDark={theme === 'light' ? false : true}/>
      <ThemeComponent theme={theme} onClick={handleTheme}/>
      
      <section className={`w-full flex flex-col items-center gap-20 p-2`}> 
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <AboutSection theme={theme}/>
        <FooterSection />
      </section>
    </section>
  );
}

function ThemeComponent({ theme, onClick }) {
  // const [theme, setTheme] = useState('light');

  let content;
  if(theme.trim().toLowerCase() === 'light') {
    content = <svg onClick={() => onClick()}
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
    className="size-8 md:size-8.5 fixed right-3 lg:right-16 top-40 lg:top-32 hover:bg-black/20 rounded-full p-1 rotate-6 text-sky-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  } else {
    content = <svg onClick={() => onClick()}
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
    className="size-8 md:size-8.5 fixed right-3 lg:right-16 top-40 lg:top-32 hover:bg-gray-600 rounded-full p-1 rotate-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
  }

  return content;
}