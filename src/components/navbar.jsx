export default function NavBarComponent({ theme, isDark }) {
    console.log(isDark);
    return (
        <ul className={`w-full p-6 flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16 items-center text-base sm:text-2xl font-medium tracking-wide relative border-b border-gray-400 ${theme}`}
        style={{fontFamily: "Bebas Neue, sans-serif"}}>
            <ListComponent value={'</'} link={'#'} theme={isDark}/>
            <ListComponent value={'About'} link={'#about'} theme={isDark}/>
            <ListComponent value={'Projects'} link={'#projects'} theme={isDark}/>
            <ListComponent value={'Github'} link={'https://github.com/RonTheCoder50'} theme={isDark}/>
            <ListComponent value={'Skills'} link={'#skills'} theme={isDark}/>
            <ListComponent value={'Social'} link={'#social'} theme={isDark}/>
            <ListComponent value={'/>'} link={'#'} theme={isDark}/>
        </ul>
    );
}

function ListComponent({ value, link, theme }) {
    return (
        <li onClick={() => window.location.href = link} className={`${theme ? 'hover:bg-gray-600' : 'hover:bg-sky-100'} py-1 px-2 cursor-pointer rounded-md hover:underline decoration-sky-600 transition-all delay-75 duration-150 ease-in-out`}>
            {value}
        </li>
    );
}