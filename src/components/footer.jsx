import { RiTwitterXLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

export default function FooterSection() {
    return (
        <section id="social" className="w-full flex flex-col sm:flex-row items-center justify-center gap-10 lg:gap-20 border-t-2 rounded-full border-gray-400 px-3 py-5">
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

            <FootBox 
                icon={FaRegFileAlt} 
                value={'Resume'} 
                color={'#3BACB8'}
                link={'#'}
            />

            <FootBox 
                icon={FaWhatsapp} 
                value={'Whatsapp'} 
                color={'#26BF5A'}
                link={'#'}
            />
        </section>
    );
}

function FootBox({ icon: Icon, value, color, link }) {
    return (
        <div style={{fontFamily: 'poppins, sans-serif'}} className="flex items-center gap-2 text-base md:text-lg lg:text-xl tracking-wide font-normal group">
            <Icon size={22} color={color}/>
            <span onClick={() => window.location.href=link} className="group-hover:underline underline-offset-2 cursor-pointer">
                {value}
            </span>
        </div>
    );
}