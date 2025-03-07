import React, { useRef, useEffect } from 'react'
import { FiDownload } from "react-icons/fi";
import Resume from "../../assets/resume-pushpendra-shrivastav.pdf";


const DetailsInfo: React.FC = () => {
    const resumeURL = Resume;
    const textFlipRef = useRef<HTMLSpanElement>(null);

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

    useEffect(() => {
        const words = {
            default: "Developer",
            hover: "Engineer"
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
        <div className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/50 to-[#fea55f]/50 rounded-t-xl"></div>
            <h1 className="text-xl sm:text-2xl text-[#fea55f] mb-1">Hi all. I am</h1>
            <h2 className="text-2xl sm:text-3xl text-gray-300 font-semibold">Pushpendra Shrivastav</h2>
            <p className="text-base sm:text-lg mb-2 text-blue-500">
                &gt; Front-end&nbsp;
                <span ref={textFlipRef} className="text-blue-400 font-medium cursor-pointer"> Developer</span>
            </p>
            <a
                href={resumeURL}
                download="Pushpendra-Shrivastav-Resume.pdf"
                className="inline-flex items-center gap-1 bg-[#fea55f] text-[#011627] font-medium py-1 px-2 rounded-md text-xs hover:bg-[#fea55f]/90 transition-colors shadow-md"
            >
                <FiDownload className="text-xs" />
                <span>Resume</span>
            </a>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 border-r-2 border-b-2 border-[#fea55f]/30 rounded-br-xl"></div>
        </div>
    )
}

export default DetailsInfo
