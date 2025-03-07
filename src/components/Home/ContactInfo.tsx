import React, { useState, useEffect } from 'react'

interface ContactInfoItem {
    label: string;
    variableName: string;
    value: string;
    link: string;
}

const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || '';
const phoneAPIurl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&amp;text&amp;type=phone_number&amp;app_absent=0&text=Hello%20Pushpendra`;
const phoneDirectCall = `tel:+${phoneNumber}`;
const emailURL = "https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=shrivastavsumit15@gmail.com";
const githubURL = "https://github.com/shrivastavpush";
const portFolio = "https://pushpendra-shrivastav.vercel.app/";
const linkedin = "https://www.linkedin.com/in/pushpendra-shrivastav/";

const contactInfo: ContactInfoItem[] = [
    {
        label: "my number",
        variableName: "mobile",
        value: "+91 97856-XXXXX",
        link: phoneAPIurl,
    },
    {
        label: "my e-mail",
        variableName: "email",
        value: "shrivastavsumit15@gmail.com",
        link: emailURL,
    },
    {
        label: "you can also check out my Github page",
        variableName: "github",
        value: "github.com/shrivastavpush",
        link: githubURL,
    },
    {
        label: "you can also see my portfolio",
        variableName: "portfolio",
        value: "pushpendra-shrivastav.vercel.app",
        link: portFolio,
    },
    {
        label: "you can check my Linkedin Page",
        variableName: "linkedin",
        value: "linkedin.com/in/pushpendra-shrivastav",
        link: linkedin,
    },
];

const ContactInfo: React.FC = () => {
    const [showPopup, setShowPopup] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <div className="space-y-3 sm:space-y-4 pr-1 h-max">
            {contactInfo.map((item, index) => (
                <div key={index} className="group">
                    <div className="text-gray-400 text-xs">// {item.label}</div>
                    <div className="relative items-center flex-wrap transition-all duration-300 hover:translate-x-1 inline-flex">
                        <span className="text-blue-500 mr-1 text-sm sm:text-base">const</span>
                        <span
                            className="text-emerald-400 mr-1 cursor-pointer relative text-sm sm:text-base"
                            onMouseEnter={() => setShowPopup(index)}
                            onMouseLeave={() => setShowPopup(null)}
                        >
                            {item.variableName}
                            {showPopup === index && (
                                <span className="absolute text-white -top-10 left-0 bg-black/80 backdrop-blur-sm rounded-md p-1.5 text-xs whitespace-nowrap z-10 shadow-lg">
                                    (property) <span className="text-emerald-400">ContactInfoItem.label:</span>{" "}
                                    <span className="text-[#fea55f]">string</span>
                                </span>
                            )}
                        </span>
                        <span className="text-gray-400 mr-1 text-sm sm:text-base">=</span>
                        <a
                            className="text-red-500 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm break-all"
                            href={index === 0 && isMobile ? phoneDirectCall : item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.value}
                        </a>
                        <span className="text-gray-400 text-sm sm:text-base">;</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactInfo
