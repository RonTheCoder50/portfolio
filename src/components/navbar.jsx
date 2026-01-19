export default function NavBarComponent({ theme }) {
    return (
        <ul className={`w-full p-6 flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16 items-center text-base sm:text-2xl font-medium tracking-wide relative border-b border-gray-400 ${theme}`}
        style={{fontFamily: "Bebas Neue, sans-serif"}}>
            <ListComponent value={'</'} theme={theme} link={'#'}/>
            <ListComponent value={'About'} link={'#about'} theme={theme}/>
            <ListComponent value={'Projects'} link={'#projects'} theme={theme}/>
            <ListComponent value={'Github'} link={'https://github.com/RonTheCoder50'} theme={theme}/>
            <ListComponent value={'Skills'} link={'#skills'} theme={theme}/>
            <ListComponent value={'Social'} link={'#social'} theme={theme}/>
            <ListComponent value={'/>'} link={'#'}/>
        </ul>
    );
}

function ListComponent({ value, link, theme }) {
    let color;
    if(theme === 'light') {
        color = 'bg-sky-100';
    } else {
        color ='bg-gray-600';
    }

    return (
        <li onClick={() => window.location.href = link} className={`hover:${color} py-1 px-2 cursor-pointer rounded-md transition-all delay-75 duration-150 ease-in-out`}>
            {value}
        </li>
    );
}