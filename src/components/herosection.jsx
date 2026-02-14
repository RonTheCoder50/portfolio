import { 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaGithub, 
    FaJava, 
} from 'react-icons/fa'

import { SiTailwindcss } from "react-icons/si";
import { CgDebug } from "react-icons/cg";

export function HeroSection() {
    return (
        <div className="w-full flex flex-col sm:flex-row justify-around gap-12 lg:justify-center lg:gap-36 items-center p-2 my-4">
            <img 
                src="/img_1.jpeg"
                alt="Insouke_image"
                className="w-50 h-50 md:w-64 md:h-64 rounded-full object-cover opacity-95 border border-blue-400 shadow-xl/30 shadow-sky-300 p-1 hover:shadow-xl/50"
            />

            <div 
                style={{fontFamily: "Bebas Neue, sans-serif"}} 
                className="flex flex-col gap-2 tracking-wide font-['Poppins']"
            >
                <p className="text-2xl lg:text-5xl font-semibold">
                    Hello, I'M Ron 👋
                </p>

                <div className='flex items-center gap-3'>
                    <p className="tracking-wider text-balance sm:text-lg md:text-xl text-gray-600 font-light underline underline-offset-2">
                        Frontend/Software Developer! 
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
                <Box icon={CgDebug} value={'Debugging'} color={'#416594'}/>
                {/* <Box /> */}
            </div>
        </section>
    );
}

function Box({ icon: Icon, value, color }) {
    return (
        <div className="flex justify-center items-center gap-2 sm:gap-4 tracking-wide py-2 px-3 border border-sky-300 font-medium hover:shadow-xl/10 shadow-sky-200 hover:rounded-sm hover:border-sky-500 transition-all delay-75 duration-100 ease-linear overflow-hidden">
            <Icon size={20} color={color}/>
            <span className='text-xs sm:text-base'>{ value }</span>
        </div>
    );
}

export function ProjectSection() {
    return (
        <section
            style={{fontFamily: "Poppins, sans-serif"}} 
            className='flex flex-col justify-start gap-4 p-2'>
            <p id='projects' className="text-xl md:text-3xl font-medium tracking-wide underline underline-offset-2 decoration-gray-400 p-2">
                Projects
            </p>

            <div className='flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 items-stretch '>
                <CardComponent 
                    src={'https://static.vecteezy.com/system/resources/previews/005/051/924/original/ecommerce-website-online-store-concept-vector.jpg'} 
                    title={'E-Commerce Site'} 
                    text={'An E-Commerce site that built using only frontend tech! \n but it supports | Cart, Products by Category, Dumy Payment, Product Card, etc.. | '}
                    info={'Html, Css, Js, TailwinCss, Api'}
                    url={'https://github.com/RonTheCoder50/JsProjects/tree/main/e-commerce_site'}
                    live={'https://ecommerce-site-smoky.vercel.app/'}
                />

                <CardComponent 
                    src={'https://tse3.mm.bing.net/th/id/OIP.6wgNxwxNvvyv8-dWXGzgLQHaFR?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3'}
                    title={'Advanced Weather App'}
                    text={'Weather App that fetches weather data by user input, & provides forecast & history weather data also, dark mode, error handling, etc.'}
                    info={'React, TailwindCss, WeatherAPI, npm'}
                    url={'https://github.com/RonTheCoder50/react_projects/tree/main/weatherApp'}
                    live={'https://weather-app-opal-kappa-13.vercel.app/'}
                />

                <CardComponent 
                    src={'https://img.freepik.com/premium-photo/calculator-buttons-modern-line-icon-vector-line-art_487986-28674.jpg'}
                    title={'React Calculator App'}
                    text={'Calculator App with react logic & statemanagement & Tailwindcss Awesome smooth & clear UI'}
                    info={'React, TailwindCss, npm'}
                    url={'https://github.com/RonTheCoder50/react_projects/tree/main/calculatorApp'}
                    live={'https://calculator-beta-sepia-tkh4cq9owm.vercel.app/'}
                />
            </div>
        </section>
    );
}

function CardComponent({ src, title, text, info, url, live }) {
    return (
        <div className='w-[330px] h-128 border-2 border-gray-600 rounded-md flex flex-col justify-between gap-1.5 p-2 hover:shadow-lg shadow-sky-300 transition-all delay-75 duration-150 ease-linear group'>
            <img src={src}  className='w-full h-48 object-cover 
            group-hover:scale-101'/>

            <hr className='w-full border-gray-400'/>

            <div className='flex flex-col gap-2 '> 
                <p className='text-lg lg:text-xl tracking-wide font-medium p-2'>
                    {title}
                </p>

                <p className='text-sm tracking-normal text-gray-600 font-normal p-2'>
                    <b>About</b> - {text}
                </p>

                <p className='text-sm tracking-normal font-normal text-gray-600 p-2'>
                    <b>Tech Stack</b> - {info}
                </p>
            </div>

            <div className='flex justify-center items-center gap-4'>
                <div className='w-30 flex justify-center items-center gap-2 border rounded-sm p-1.5 my-1.5'>
                    <FaGithub size={21} color='#e34c26'/>
                    <a href={url}
                    className='text-base tracking-wide font-medium text-gray-600 hover:underline underline-offset-1 decoration-sky-500 hover:text-gray-500 hover:translate-x-0.5 transition-all delay-75 duration-200 ease-linear'>
                        GitHub
                    </a>
                </div>

                <div className='w-30 flex justify-center items-center gap-4 border rounded-sm p-1.5 my-1.5'>
                    <span className='w-1 h-1 bg-sky-500 rounded-full mt-0.5 animate-ping'></span>
                    <a href={live}
                    className='text-base tracking-wider font-medium text-gray-600 hover:underline underline-offset-1 decoration-sky-500 hover:text-gray-500 hover:translate-x-0.5 transition-all delay-75 duration-200 ease-linear cursor-pointer'>
                        Live
                    </a>
                </div>
            </div>

        </div>
    );
}
