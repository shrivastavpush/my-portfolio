import React, { useEffect, useRef } from 'react';
import { NavLink, useRouteError } from 'react-router-dom';
import { BiErrorAlt } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';
import { RouteErrorWithMessage } from '../components/Types';

const NotFoundPage: React.FC = () => {
    const error = useRouteError() as RouteErrorWithMessage;
    const textFlipRef = useRef<HTMLSpanElement>(null);
    let errorMessage = "Oh no! Looks like the url is not available";

    if (error && error.message) {
        errorMessage = error.message || errorMessage;
    }

    useEffect(() => {
        const words = {
            default: "404_not_found",
            hover: "page_missing"
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
                    if (targetText[i] === "_" || currentText[i] === "_") {
                        result += targetText[i] || "_";
                        continue;
                    }

                    if (i >= iteration) {
                        result += currentText[i] || "";
                    } else {
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
        <section className="section h-screen w-full flex flex-col justify-center relative overflow-hidden py-6 px-3 sm:py-8 sm:px-4 md:py-12">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#011627] to-[#0a2540] z-0"></div>
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>

            <div className="container mx-auto relative z-10 max-w-3xl flex flex-col items-center justify-center">
                <div className="backdrop-blur-lg bg-white/5 px-4 sm:px-6 py-6 sm:py-8 rounded-xl border border-white/10 shadow-xl w-full max-w-2xl">
                    <div className="flex items-center justify-center mb-6">
                        <BiErrorAlt className="text-5xl sm:text-6xl text-[#fea55f] mr-4" />
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-semibold">
                            <span className="text-[#fea55f]">&gt;</span> <span ref={textFlipRef} className="text-blue-400 font-medium">404_not_found</span>
                        </h1>
                    </div>

                    <div className="mb-8">
                        <div className="text-gray-400 text-xs mb-1">// error_message</div>
                        <div className="relative flex flex-wrap items-center py-2">
                            <span className="text-blue-500 mr-1 text-xs sm:text-sm md:text-base">const</span>
                            <span className="text-emerald-400 mr-1 text-xs sm:text-sm md:text-base">errorMessage</span>
                            <span className="text-gray-400 mr-1 text-xs sm:text-sm md:text-base">=</span>
                            <span className="text-red-500 text-xs sm:text-sm md:text-base break-all">{`"${errorMessage}"`}</span>
                            <span className="text-gray-400 text-xs sm:text-sm md:text-base">;</span>
                        </div>
                    </div>

                    <NavLink
                        to="/"
                        className="group flex items-center justify-center backdrop-blur-md bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-lg py-3 px-5 transition-all duration-300 hover:text-[#fea55f] hover:border-[#fea55f]/50"
                        aria-label="Back to home"
                    >
                        <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="font-mono">return_to_home()</span>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;