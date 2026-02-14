import NavBarComponent from './components/navbar';
import AboutSection from './components/about';
import FooterSection from './components/footer';
import './App.css';
import { SkillSection, ProjectSection, HeroSection } from './components/herosection';
import { useState } from 'react';
import ThemeComponent from './components/Theme';

export default function App() {
  return <ManageComponents />
}

function ManageComponents() {
  const [theme, setTheme] = useState('light');
  const [isToggle, setIsToggle] = useState(false);
  

  function handleTheme() {
    setTheme(theme.trim() === 'dark' ? 'light' : 'dark');
  }

  function handleSideToggle() {
    setIsToggle(!isToggle);
  }

  let themeClass = (theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white/85');
  return (
    <section 
      onClick={
        () => { 
          setIsToggle(false);
        }
      } 
      className={`w-full min-h-screen flex flex-col gap-8 relative
     ${themeClass}`}
     >

      <NavBarComponent 
        theme={themeClass} 
        isDark={theme === 'light' ? false : true} 
        sideToggle={isToggle}
        handleSideToggle={handleSideToggle}
      />

      <ThemeComponent 
        theme={theme} 
        onClick={handleTheme}
      />
      
      <section className={`w-full flex flex-col items-center mt-0 sm:mt-0 gap-20 p-2`}> 
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <AboutSection theme={theme}/>
        <FooterSection theme={theme} />
      </section>
    </section>
  );
}

