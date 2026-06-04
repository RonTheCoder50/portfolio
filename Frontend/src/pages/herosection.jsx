import { 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaGithub, 
    FaJava
} from 'react-icons/fa'

import { BsFiletypeSql } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { SiTailwindcss, SiSpringboot } from "react-icons/si";
import { CgDebug } from "react-icons/cg";
import { useState } from 'react';

export function HeroSection() {
    return (
        <div className="w-full flex flex-col sm:flex-row justify-around gap-12 lg:justify-center lg:gap-36 items-center p-2 my-4">
            <img 
                src="/img_1.jpeg"
                alt="Insouke_image"
                className="w-50 h-50 md:w-64 md:h-64 rounded-full object-cover opacity-95 border border-blue-400 shadow-xl/10 shadow-sky-300 p-1 hover:shadow-md"
            />

            <div 
                style={{fontFamily: "Bebas Neue, sans-serif"}} 
                className="flex flex-col gap-2 tracking-wide font-['Poppins']"
            >
                <p className="text-2xl lg:text-5xl font-semibold">
                    Hello, I'M ROHAN 👋
                </p>

                <div className='flex items-center gap-3'>
                    <p className="tracking-wider text-balance sm:text-lg md:text-xl text-gray-500 font-light underline underline-offset-2">
                        Java FullStack Developer!
                    </p>

                    <p className='text-base md:text-xl flex flex-row-reverse items-center gap-1.5'>
                        <span className='animate-pulse'>(Open To Work) </span>
                        <span className='h-1 w-1 rounded-full bg-sky-600 mb-1 animate-ping'></span>
                    </p>

                </div>

                <p  style={{fontFamily: "Poppins, sans-serif"}}
                    className="text-sm lg:text-base tracking-normal opacity-90 font-medium mt-2 leading-6"
                >
                    I'm a 3rd Year Cs Student, Currently Pursuing my Bachlor's of computer science <br/> degree from Mumbai University! Passionate about Learning,
                    <span> software development </span> <br/> & <span> problem solving. </span>
                </p>
            </div>
        </div>
    );
}

export function SkillSection() {
    return (
        <section style={{fontFamily: "Poppins, sans-serif"}} 
        className="flex flex-col gap-7 p-6">
            <p id='skills' className="text-xl md:text-3xl font-medium tracking-wide underline underline-offset-2 decoration-gray-400 p-2">
                Skills
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                <Box icon={FaHtml5} value={'HTML'} color={"#e34c26"}/>
                <Box icon={FaCss3} value={'CSS'} color={"#264de4"}/>
                <Box icon={FaJs} value={'JS'} color={"#f0db4f"}/>
                <Box icon={FaReact} value={'REACT'} color={"#61dbfb"}/>
                <Box icon={SiTailwindcss} value={'TailwindCSS'} color={'#74ABF2'}/>
                <Box icon={FaGithub} value={'GitHub'} color={'#e34c26'}/>
                <Box icon={FaJava} value={'JAVA'} color={'#E04A4A'}/>
                {/* <Box icon={CgDebug} value={'Debugging'} color={'#416594'}/> */}
                <Box icon={BsFiletypeSql} value={"SQL"}  color={'dark-blue'}/>
                <Box icon={GrMysql} value={"MySQL"} color={'#109EAD'}/>
                <Box icon={SiSpringboot} value={"Spring Boot"} color={'#00b300'}/>
            </div>
        </section>
    );
}

function Box({ icon: Icon, value, color }) {
    return (
        <div className="flex justify-start items-center gap-2 sm:gap-4 tracking-wide py-2 px-3 border border-sky-300 font-medium hover:shadow-xl/10 shadow-sky-200 hover:rounded-sm hover:border-sky-500 transition-all delay-75 duration-100 ease-linear overflow-hidden">
            <Icon size={20} color={color}/>
            <span className='text-xs sm:text-base'>{ value }</span>
        </div>
    );
}
 

 