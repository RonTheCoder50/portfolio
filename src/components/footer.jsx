import { RiTwitterXLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

export default function FooterSection({ theme }) {
    return (
        <section className="relative flex flex-col gap-2 w-full"> 
            <section id="social" className="w-full h-full flex flex-col sm:flex-row items-center justify-center gap-10 lg:gap-20 border-t-2 rounded-t-3xl border-gray-400 px-3 py-5 md:py-18 z-50">
                <FootBox 
                    icon={RiTwitterXLine} 
                    value={'Twitter'} 
                    color={'#87B7FA'}
                    link={'https://x.com/Inosukeei_coder'}
                />

                <FootBox  
                    icon={FaGithub} 
                    value={'Github'} 
                    color={'#F75939'}
                    link={'https://github.com/RonTheCoder50'}
                />

                <span style={{fontFamily: 'poppins, sans-serif'}} className="flex items-center gap-2 text-base md:text-lg tracking-wide font-normal group">
                    <FaRegFileAlt color="#3BACB8"/>
                    <a  href="/resume_1.pdf" 
                        download={'/resume_1.pdf'}
                        className="group-hover:underline underline-offset-2 cursor-pointer text-white/80">
                        Resume
                    </a>
                </span>
            </section>

            <video src="/inosuke_vid.mp4" autoPlay loop playsInline muted 
            className={`absolute rounded-t-3xl w-full h-full z-0 object-cover ${theme === 'light' ? 'opacity-75' : 'opacity-50'}`}></video>
        </section>
    );
}

function FootBox({ icon: Icon, value, color, link }) {
    return (
        <div style={{fontFamily: 'poppins, sans-serif'}} className="flex items-center gap-2 text-base md:text-lg lg:text-xl tracking-wide font-normal group">
            <Icon size={22} color={color}/>
            <span onClick={() => window.location.href=link} className="group-hover:underline underline-offset-2 cursor-pointer text-white/80">
                {value}
            </span>
        </div>
    );
}