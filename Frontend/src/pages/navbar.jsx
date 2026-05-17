// import { useState } from "react";
import {
    Info,
    AppWindowMac,
    Binoculars,
    Award,
    Activity
} from 'lucide-react';

export default function NavBarComponent({ theme, isDark, sideToggle, handleSideToggle }) {
    let sideBar = "";
    if(sideToggle) {
        sideBar = "left-0";
    } else {
        sideBar = "right-[100%]";
    }
    
    return (
        <>
            <svg 
                onClick={(e) => {
                    e.stopPropagation(); 
                    handleSideToggle();
                }} 
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute size-6 top-8 left-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
                
            {sideToggle &&
                <ul onClick={() => handleSideToggle()} 
                className={
                    `absolute w-full min-h-screen flex flex-col items-start p-1 gap-6 z-50 transition-all delay-75 duration-500 ease-in-out shadow-lg 
                    ${sideBar} 
                    ${isDark ? 'bg-black/90' : 'bg-gray-300'}
                `}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x ml-[95%] mt-3"> <path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>

                    <ListComponent 
                        value={'About'} 
                        link={'#about'} 
                        theme={isDark} 
                        size={'w-full'}
                        icon={<Info size={18} />}
                    />

                    <ListComponent 
                        value={'Projects'} 
                        link={'#projects'} 
                        theme={isDark} 
                        size={'w-full'}
                        icon={<AppWindowMac size={18} />}
                    />

                    <ListComponent 
                        value={'Github'} 
                        link={'https://github.com/RonTheCoder50'} 
                        theme={isDark} 
                        size={'w-full'}
                        icon={<Binoculars size={18} />}
                    />

                    <ListComponent 
                        value={'Skills'} 
                        link={'#skills'} 
                        theme={isDark} 
                        size={'w-full'}
                        icon={<Award size={18} />}
                    />

                    <ListComponent 
                        value={'Social'} 
                        link={'#social'} 
                        theme={isDark} 
                        size={'w-full'}
                        icon={<Activity size={18} />}
                    />
                </ul>
            }

            <ul className={`hidden sm:flex w-full p-6 flex-wrap justify-center gap-6 md:gap-12 lg:gap-16 items-center text-base sm:text-2xl font-medium tracking-wide relative border-b border-gray-400 ${theme}`}
            style={{fontFamily: "Bebas Neue, sans-serif"}}>
                <ListComponent value={'</'} link={'#'} theme={isDark}/>
                <ListComponent value={'About'} link={'#about'} theme={isDark}/>
                <ListComponent value={'Projects'} link={'#projects'} theme={isDark}/>
                <ListComponent value={'Github'} link={'https://github.com/RonTheCoder50'} theme={isDark}/>
                <ListComponent value={'Skills'} link={'#skills'} theme={isDark}/>
                <ListComponent value={'Social'} link={'#social'} theme={isDark}/>
                <ListComponent value={'DM'} link={'#contact'} theme={isDark}/>
                <ListComponent value={'/>'} link={'#'} theme={isDark}/>
            </ul>
        </>
    );
}

function ListComponent({ value, link, theme, size, icon }) {
    return (
        <li onClick={() => window.location.href = link} className={`
            ${theme ? 'hover:bg-white/20' : 'hover:bg-sky-50'} 
            cursor-pointer 
            rounded-md
            transition-all
            delay-75
            duration-150 
            ease-in-out
            text-shadow-sm 
            text-shadow-sky-700 
            ${size} 
            mt-2 py-2 px-2 pl-7 md:pl-0
            flex items-center gap-3
        `}>
            <span className='mt-0.5'>
                {icon}
            </span>
            {value}
        </li>
    );
}