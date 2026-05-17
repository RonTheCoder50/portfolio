import NavBarComponent from './pages/navbar';
import AboutSection from './pages/about';
import FooterSection from './pages/footer';
import './App.css';
import { SkillSection, ProjectSection, HeroSection } from './pages/herosection';
import { useState } from 'react';
import ThemeComponent from './pages/Theme';
import ContactSection from './pages/contact';

export default function App() {
  return <ManageComponents />
}

function ManageComponents() {
  const [theme, setTheme] = useState('dark');
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
        <HeroSection/>
        <SkillSection />
        <ProjectSection theme={theme}/>
        {/* <AboutSection theme={theme}/> */}
        <ContactSection theme={theme} />
        <FooterSection theme={theme} />
      </section>
    </section>
  );
}

