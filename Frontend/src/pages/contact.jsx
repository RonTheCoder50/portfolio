import { useEffect, useState } from "react";
import { UserRoundSearch } from "lucide-react";
import axios from "axios";

export default function ContactSection({ theme }) {
    const [info, setInfo] = useState({ 
        name: '',
        email: '',
        message: ''
    });

    const [loading, setIsLoading] = useState(false);

    function handleInfo(e) {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        }); 
    }

    async function handleMsgApiCall() {
        alert('temporary in process, due to backend deployment!');
        return;

        try {
            setIsLoading(true);
            const response = await axios.post("http://localhost:8080/contact", info);

            alert(response?.data, ' ✅');
            setInfo({name: '', email: '', message: ''});
        } catch(err) {
            setIsLoading(false);

            console.log(err.response?.data);
            alert(
                err.response?.data?.message || "Something went wrong"
            );
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section 
            id={'contact'}
            className={`
                w-full
                max-w-[95%]
                sm:max-w-[75%] 
                mx-auto 
                my-6 
                rounded-2xl 
                border 
                ${theme === 'light' 
                    ? 'border-gray-200 bg-white' 
                    : 'border-gray-600 bg-gray-900'}
                p-5 
                shadow-sm 
                flex 
                flex-col 
                gap-5
            `}
        >
            
            <div className="flex items-center gap-3 border-b pb-3">
                <div className="p-2 rounded-full bg-sky-100 text-sky-600">
                    <UserRoundSearch size={18} />
                </div>

                <div>
                    <h2 className={`
                            text-xl 
                            font-semibold 
                            tracking-wide 
                            ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'}
                        `}
                    >
                        Contact Me
                    </h2>

                    <p className="text-sm text-gray-500">
                        Feel free to send a message anytime.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <ContactInput
                    name={"name"}
                    label={"Name"}
                    value={info.name}
                    onChange={handleInfo}
                    placeholder={"Enter your name"}
                    theme={theme}
                />

                <ContactInput
                    name={"email"}
                    label={"Email"}
                    value={info.email}
                    onChange={handleInfo}
                    placeholder={"Enter your email"}
                    theme={theme}
                />

                <label className="w-full flex flex-col gap-2">
                    <span className={`
                            text-sm
                            font-medium 
                            ${theme === 'light' 
                                ? 'text-gray-700' 
                                : 'text-gray-300/90'
                            }
                        `}
                    >
                        Message
                    </span>

                    <textarea
                        onChange={handleInfo}
                        name="message"
                        value={info.message}
                        placeholder="Write your message here..."
                        className={`
                            min-h-[130px]
                            w-full
                            rounded-lg
                            border
                            ${theme === 'light' 
                                ? 'border-gray-300 bg-white'
                                : 'border-gray-600 bg-gray-800'
                            }
                            px-3
                            py-2.5
                            text-sm
                            placeholder:text-gray-400
                            focus:outline-none
                            focus:ring-2
                            focus:ring-sky-500
                            focus:border-sky-500
                            transition
                            resize-none
                        `}
                    />
                </label>

                <button
                    disabled={loading}
                    className="
                        w-full
                        rounded-lg
                        bg-pink-700
                        py-2.5
                        text-sm
                        font-medium
                        text-white
                        transition
                        hover:bg-pink-800
                        active:scale-[0.99]
                    "
                    onClick={() => handleMsgApiCall()}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        </section>
    )
}

function ContactInput({ label, name, value, onChange, placeholder, theme }) {
    return (
        <label className="w-full flex flex-col gap-2">
            <span className={`
                    text-sm 
                    font-medium 
                    ${theme === 'light' 
                        ? 'text-gray-700' 
                        : 'text-gray-300/90'
                    }
                `}
            >
                {label}
            </span>

            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
                    h-11
                    w-full
                    rounded-lg
                    border
                    ${theme === 'light' 
                        ? 'border-gray-300 bg-white' 
                        : 'border-gray-700 bg-gray-800'}
                    
                    px-3
                    text-sm
                    placeholder:text-gray-400
                    focus:outline-none
                    focus:ring-2
                    focus:ring-pink-500
                    focus:border-pink-500
                    transition
                `}
            />
        </label>
    );
}