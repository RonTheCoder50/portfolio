// import { useState } from "react";

export default function NavBarComponent({ theme, isDark, sideToggle, handleSideToggle }) {
    let sideBar = "";
    if(sideToggle) {
        sideBar = "left-2";
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
                className={`absolute top-16 w-full max-w-38 flex flex-col justify-around items-start p-2 gap-2 bg-white/30 z-50 transition-all delay-75 duration-500 ease-in-out shadow-lg 
                ${sideBar} 
                ${sideToggle ? 'bg-white/35' : 'bg-gray-400'}`}
                >
                    <ListComponent 
                        value={'About'} 
                        link={'#about'} 
                        theme={isDark} 
                        size={'w-full'}
                    />

                    <ListComponent 
                        value={'Projects'} 
                        link={'#projects'} 
                        theme={isDark} 
                        size={'w-full'}
                    />

                    <ListComponent 
                        value={'Github'} 
                        link={'https://github.com/RonTheCoder50'} 
                        theme={isDark} 
                        size={'w-full'}
                    />

                    <ListComponent 
                        value={'Skills'} 
                        link={'#skills'} 
                        theme={isDark} 
                        size={'w-full'}
                    />

                    <ListComponent 
                        value={'Social'} 
                        link={'#social'} 
                        theme={isDark} 
                        size={'w-full'}
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
                <ListComponent value={'/>'} link={'#'} theme={isDark}/>
            </ul>
        </>
    );
}

function ListComponent({ value, link, theme, size }) {
    return (
        <li onClick={() => window.location.href = link} className={`${theme ? 'hover:bg-gray-500' : 'hover:bg-sky-50'} py-1 px-2 cursor-pointer rounded-md hover:underline decoration-sky-500 transition-all delay-75 duration-150 ease-in-out text-shadow-sm text-shadow-sky-700 ${size}`}>
            {value}
        </li>
    );
}