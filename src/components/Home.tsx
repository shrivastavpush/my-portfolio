import React, { useState, useRef, useEffect } from "react";
import PushpendraImage from "../assets/images/Pushpendra.jpeg";

interface ContactInfoItem {
    label: string;
    variableName: string;
    value: string;
    link: string;
}

const Home: React.FC = () => {
    const [showPopup, setShowPopup] = useState<number | null>(null);

    const textFlipRef = useRef<HTMLSpanElement>(null);

    const phoneAPIurl = "https://api.whatsapp.com/send/?phone=919785691226&amp;text&amp;type=phone_number&amp;app_absent=0&text=Hello%20Pushpendra";
    const emailURL = "https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=shrivastavsumit15@gmail.com";
    const githubURL = "https://github.com/shrivastavpush";
    // const portFolio = "https://pushpendra-portfolio.netlify.app/";
    const linkedinPage = "https://www.linkedin.com/in/pushpendra-shrivastav/";

    const contactInfo: ContactInfoItem[] = [
        {
            label: "my number",
            variableName: "telephoneNum",
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
            variableName: "githubLink",
            value: "https://github.com/shrivastavpush",
            link: githubURL,
        },
        // {
        //     label: "you can also see my portfolio",
        //     variableName: "portfolio",
        //     value: "https://pushpendra-portfolio.netlify.app",
        //     link: portFolio,
        // },
        {
            label: "you can check my Linkedin Page",
            variableName: "linkedinPage",
            value: "https://www.linkedin.com/in/pushpendra-shrivastav",
            link: linkedinPage,
        },
    ];

    useEffect(() => {
        const words = {
            default: "Developer",
            hover: "Engineer"
        };

        const animateText = (targetWord: string) => {
            if (!textFlipRef.current) return;

            const currentText = textFlipRef.current.innerText;
            const targetText = targetWord;
            const maxLength = Math.max(currentText.length, targetText.length);
            let iteration = 0;

            const interval = setInterval(() => {
                if (iteration >= maxLength) {
                    clearInterval(interval);
                    textFlipRef.current!.innerText = targetText;
                    return;
                }

                let result = "";
                for (let i = 0; i < maxLength; i++) {
                    // Keep spaces as they are
                    if (targetText[i] === " " || currentText[i] === " ") {
                        result += targetText[i] || " ";
                        continue;
                    }

                    // If we've passed the current iteration, use the original letter
                    if (i >= iteration) {
                        result += currentText[i] || "";
                    } else {
                        // Otherwise use the target letter
                        result += targetText[i] || "";
                    }
                }

                textFlipRef.current!.innerText = result;
                iteration += 1;
            }, 50);
        };

        const handleMouseEnter = () => {
            if (textFlipRef.current) {
                animateText(words.hover);
            }
        };

        const handleMouseLeave = () => {
            if (textFlipRef.current) {
                animateText(words.default);
            }
        };

        const element = textFlipRef.current;
        if (element) {
            // Set initial text
            element.innerText = words.default;
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (element) {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <section className="section h-screen w-full flex flex-col justify-center relative overflow-hidden py-6 px-3 sm:py-8 sm:px-4 md:py-12" id="homeSection">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#011627] to-[#0a2540] z-0"></div>
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>

            <div className="container mx-auto relative z-10 max-w-6xl h-full flex items-center">
                <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:gap-8 w-full">
                    {/* Profile picture - Moved to top on mobile */}
                    <div className="w-full md:hidden flex justify-center mb-4">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                            <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-full bg-gradient-to-br from-[#011627]/50 to-[#1E2D3D]/50 flex items-center justify-center backdrop-blur-sm">
                                    <img src={PushpendraImage} alt="Pushpendra Shrivastav" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 backdrop-blur-md bg-[#fea55f]/90 text-[#011627] px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg font-mono text-xs shadow-lg border border-[#fea55f] hover:bg-[#fea55f] transition-colors duration-300">
                                Available for hire
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500/30 backdrop-blur-sm border border-blue-500/20 animate-bounce-slow"></div>
                            <div className="absolute -bottom-6 left-10 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-purple-500/30 backdrop-blur-sm border border-purple-500/20 animate-float"></div>
                            <div className="absolute top-10 -right-6 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-pink-500/30 backdrop-blur-sm border border-pink-500/20 animate-pulse"></div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 sm:gap-6 md:gap-8">
                        {/* Left side - Text content */}
                        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
                            <div className="backdrop-blur-lg bg-white/5 p-4 sm:p-5 md:p-8 rounded-xl border border-white/10 shadow-xl">
                                <h1 className="text-xl sm:text-2xl lg:text-4xl text-[#fea55f] mb-1 sm:mb-2">Hi all. I am</h1>
                                <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-2 sm:mb-4 text-gray-300 font-semibold">Pushpendra Shrivastav</h2>
                                <p className="text-base sm:text-lg lg:text-2xl mb-2 sm:mb-4 md:mb-6 text-blue-500">
                                    &gt; Front-end&nbsp;
                                    <span ref={textFlipRef} className="text-blue-400 font-medium"> Developer</span>
                                </p>
                            </div>

                            <div className="backdrop-blur-lg bg-white/5 p-4 sm:p-5 md:p-8 rounded-xl border border-white/10 shadow-xl">
                                <h3 className="text-base sm:text-lg md:text-xl text-[#fea55f] mb-3 sm:mb-4">// contact_info</h3>
                                <div className="space-y-3 sm:space-y-4 max-h-[25vh] md:max-h-none overflow-auto md:overflow-visible pr-1">
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className="group transition-all duration-300 hover:translate-x-1">
                                            <div className="text-gray-400 text-xs">// {item.label}</div>
                                            <div className="relative flex items-center flex-wrap">
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
                                                    href={item.link}
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
                            </div>
                        </div>

                        {/* Right side - Profile picture (hidden on mobile, shown on larger screens) */}
                        <div className="hidden md:flex md:w-1/2 justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300">
                                    <div className="w-full h-full bg-gradient-to-br from-[#011627]/50 to-[#1E2D3D]/50 flex items-center justify-center backdrop-blur-sm">
                                        <img src={PushpendraImage} alt="Pushpendra Shrivastav" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 backdrop-blur-md bg-[#fea55f]/90 text-[#011627] px-4 py-2 rounded-lg font-mono text-sm shadow-lg border border-[#fea55f] hover:bg-[#fea55f] transition-colors duration-300">
                                    Available for hire
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-500/30 backdrop-blur-sm border border-blue-500/20 animate-bounce-slow"></div>
                                <div className="absolute -bottom-6 left-10 w-8 h-8 rounded-full bg-purple-500/30 backdrop-blur-sm border border-purple-500/20 animate-float"></div>
                                <div className="absolute top-10 -right-6 w-10 h-10 rounded-full bg-pink-500/30 backdrop-blur-sm border border-pink-500/20 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;