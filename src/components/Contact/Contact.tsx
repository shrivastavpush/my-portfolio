import React, { useState, useEffect } from "react";
import { useForm, RegisterOptions } from "react-hook-form";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiTag, FiCode, FiCheckCircle } from "react-icons/fi";
import ContactDecor from "./ContactDecor";
import { FormData } from "../Types";

const nameOptions: RegisterOptions<FormData, "name"> = {
    required: { value: true, message: "Name required" },
    minLength: { value: 5, message: "Name must be at least 5 characters" },
    maxLength: { value: 20, message: "Name must be less than 20 characters" },
};

const emailOptions: RegisterOptions<FormData, "email"> = {
    required: { value: true, message: "Email required" },
    pattern: {
        value: /^[A-Z0-9._%+-]{4,}@[A-Z0-9.-]{4,}\.[A-Z]{2,}$/i,
        message: "Please enter a valid email address",
    },
};

const subjectOptions: RegisterOptions<FormData, "subject"> = {
    required: { value: true, message: "Subject required" },
    minLength: { value: 5, message: "Subject must be at least 5 characters" },
    maxLength: { value: 30, message: "Subject must be less than 30 characters" },
};

const messageOptions: RegisterOptions<FormData, "message"> = {
    required: { value: true, message: "Message required" },
    maxLength: { value: 300, message: "Message must be less than 300 characters" },
};

const Contact: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [typingEffect, setTypingEffect] = useState("");
    const welcomeText = "Drop me a message!";
    const [charIndex, setCharIndex] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
    } = useForm<FormData>();

    // Typing effect for welcome message
    useEffect(() => {
        if (charIndex < welcomeText.length) {
            const timer = setTimeout(() => {
                setTypingEffect(prev => prev + welcomeText.charAt(charIndex));
                setCharIndex(charIndex + 1);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [charIndex]);

    // Form submission with simulated API call
    const onSubmit = async (data: FormData) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("Form submitted:", data);
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                reset();
            }, 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <section className="section bg-[#011627] h-screen flex items-center justify-center py-8 relative overflow-hidden">

            <ContactDecor />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative ">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-[#011627]/80 backdrop-blur-lg rounded-xl shadow-[0_0_25px_rgba(49,196,141,0.2)] p-4 sm:p-6 border border-emerald-900/50 relative">
                        {/* Top border gradient */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-[#fea55f] to-blue-500 rounded-t-xl"></div>

                        <div className="mb-4 text-center">
                            <div className="inline-flex items-center justify-center mb-2">
                                <FiCode className="text-[#fea55f] text-xl mr-2" />
                                <h2 className="text-2xl font-bold text-emerald-400 relative inline-block font-fira-code">
                                    <span className="relative z-10">
                                        <span className="typing-cursor">{typingEffect}</span>
                                    </span>
                                </h2>
                                <FiCode className="text-[#fea55f] text-xl ml-2" />
                            </div>
                        </div>

                        {isSubmitted ? (
                            <div className="text-center py-8 px-6 bg-emerald-900/20 rounded-lg border border-emerald-800/50 animate-pulse">
                                <div className="inline-block p-4 rounded-full bg-emerald-900/30 text-emerald-400 text-3xl mb-4">
                                    <FiCheckCircle className="animate-pulse" />
                                </div>
                                <h3 className="text-xl font-bold text-emerald-300 mb-2 font-fira-code">Message Sent!</h3>
                                <p className="text-emerald-100 opacity-80 font-fira-code">Thanks for reaching out. I'll get back to you soon!</p>
                                <div className="mt-6 text-xs text-emerald-500 font-mono">
                                    // response.status = 200
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-fira-code">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="group relative">
                                        <label htmlFor="name" className="flex text-emerald-400 text-xs mb-1 items-center font-fira-code">
                                            <span className="text-emerald-500 mr-2">&gt;</span>
                                            <FiUser className="mr-1" />
                                            name:
                                        </label>
                                        <div className="relative">
                                            <input
                                                placeholder="Enter your name"
                                                type="text"
                                                id="name"
                                                {...register("name", nameOptions)}
                                                className={`w-full bg-[#01111d] border-2 rounded-md py-1.5 px-3 text-emerald-100 placeholder-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all duration-300 font-fira-code ${errors.name ? "border-red-500 focus:ring-red-500" : "border-emerald-900/50"}`}
                                            />
                                        </div>
                                        {errors.name && <p className="text-red-400 text-xs mt-1 h-4 font-fira-code">{errors.name.message}</p>}
                                    </div>

                                    <div className="group relative">
                                        <label htmlFor="email" className="flex text-emerald-400 text-xs mb-1 items-center font-fira-code">
                                            <span className="text-emerald-500 mr-2">&gt;</span>
                                            <FiMail className="mr-1" />
                                            email:
                                        </label>
                                        <div className="relative">
                                            <input
                                                placeholder="Enter your email"
                                                type="email"
                                                id="email"
                                                {...register("email", emailOptions)}
                                                className={`w-full bg-[#01111d] border-2 rounded-md py-1.5 px-3 text-emerald-100 placeholder-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all duration-300 font-fira-code ${errors.email ? "border-red-500 focus:ring-red-500" : "border-emerald-900/50"}`}
                                            />
                                        </div>
                                        {errors.email && <p className="text-red-400 text-xs mt-1 h-4 font-fira-code">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="group relative">
                                    <label htmlFor="subject" className="flex text-emerald-400 text-xs mb-1 items-center font-fira-code">
                                        <span className="text-emerald-500 mr-2">&gt;</span>
                                        <FiTag className="mr-1" />
                                        subject:
                                    </label>
                                    <div className="relative">
                                        <input
                                            placeholder="Reason for contact"
                                            type="text"
                                            id="subject"
                                            {...register("subject", subjectOptions)}
                                            className={`w-full bg-[#01111d] border-2 rounded-md py-1.5 px-3 text-emerald-100 placeholder-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all duration-300 font-fira-code ${errors.subject ? "border-red-500 focus:ring-red-500" : "border-emerald-900/50"}`}
                                        />
                                    </div>
                                    {errors.subject && <p className="text-red-400 text-xs mt-1 h-4 font-fira-code">{errors.subject.message}</p>}
                                </div>

                                <div className="group relative">
                                    <label htmlFor="message" className="flex text-emerald-400 text-xs mb-1 items-center font-fira-code">
                                        <span className="text-emerald-500 mr-2">&gt;</span>
                                        <FiMessageSquare className="mr-1" />
                                        message:
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            placeholder="Type the message..."
                                            id="message"
                                            {...register("message", messageOptions)}
                                            className={`w-full bg-[#01111d] border-2 rounded-md py-1.5 px-3 text-emerald-100 placeholder-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all duration-300 h-24 resize-none font-fira-code ${errors.message ? "border-red-500 focus:ring-red-500" : "border-emerald-900/50"}`}
                                        ></textarea>
                                    </div>
                                    {errors.message && <p className="text-red-400 text-xs mt-1 h-4 font-fira-code">{errors.message.message}</p>}
                                    <div className="flex justify-between items-center mt-1">
                                        <div className="text-xs text-emerald-700 font-fira-code">
                                            // Press enter to start a new line
                                        </div>
                                        <div className="text-xs text-[#fea55f] font-fira-code">
                                            {watch("message")?.length || 0}/300
                                        </div>
                                    </div>
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-black font-fira-code py-2 px-4 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden shadow-lg shadow-emerald-900/20"
                                >
                                    <span className="relative z-10 font-bold">
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center cursor-pointer">
                                                <FiSend className="mr-2" /> send_message()
                                            </span>
                                        )}
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-full bg-[#fea55f] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0 opacity-30"></span>
                                </button>
                            </form>
                        )}

                        {/* Bottom corner decoration */}
                        <div className="absolute -bottom-1 -right-1 w-12 h-12 border-r-2 border-b-2 border-[#fea55f]/30 rounded-br-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;