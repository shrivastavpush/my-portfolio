import React, { useState, useEffect } from "react";
import { useForm, RegisterOptions } from "react-hook-form";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiTag } from "react-icons/fi";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const nameOptions: RegisterOptions<FormData, "name"> = {
    required: { value: true, message: "Oops! Looks like you skipped the name field. Try again, you got this!" },
    minLength: { value: 5, message: "Almost there! Just a few more letters for your name. You can do it!" },
    maxLength: { value: 20, message: "That's a magnificent name, but it's a tad too long. 20 characters max, please. You're still awesome!" },
};

const emailOptions: RegisterOptions<FormData, "email"> = {
    required: { value: true, message: "Don't forget your email! (We all make typos sometimes.)" },
    pattern: {
        value: /^[A-Z0-9._%+-]{4,}@[A-Z0-9.-]{4,}\.[A-Z]{2,}$/i,
        message: "Email address, please! Double-check for typos. (We've all been there.)",
    },
};

const subjectOptions: RegisterOptions<FormData, "subject"> = {
    required: { value: true, message: "Subject line, please! What's the gist of your message?" },
    minLength: { value: 5, message: "Almost there! Just a few more characters for the subject line. You got this!" },
    maxLength: { value: 30, message: "That's a great title, but it's a bit too long for the subject. 30 characters max, please." },
};

const messageOptions: RegisterOptions<FormData, "message"> = {
    required: { value: true, message: "Message time! Tell me everything! (Or at least the important stuff.)" },
    maxLength: { value: 300, message: "That's a long story! Can you summarize it in 300 characters or less? I'm dying to know!" },
};

const Contact: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [typingEffect, setTypingEffect] = useState("");
    const welcomeText = "// Ready to connect? Drop me a message!";
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
        <section className="section bg-[#011627] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-emerald-500 opacity-10 blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-blue-500 opacity-10 blur-xl"></div>

            {/* Code-like decorative elements */}
            <div className="absolute top-10 right-10 text-emerald-500 opacity-20 font-mono text-xs">
                &lt;contact&gt;<br />
                &nbsp;&nbsp;connect()<br />
                &lt;/contact&gt;
            </div>
            <div className="absolute bottom-10 left-10 text-emerald-500 opacity-20 font-mono text-xs">
                const message = await send();<br />
                return response.success;
            </div>

            <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 z-10 relative">
                <div className="bg-[#011627] backdrop-blur-lg rounded-xl shadow-[0_0_15px_rgba(49,196,141,0.15)] p-6 sm:p-8 border border-emerald-900">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-emerald-400 relative inline-block font-['Fira_Code']">
                            <span className="relative z-10">
                                <span className="typing-cursor">{typingEffect}</span>
                            </span>
                        </h2>
                    </div>

                    {isSubmitted ? (
                        <div className="text-center py-8 px-6 bg-emerald-900 bg-opacity-20 rounded-lg border border-emerald-800 animate-pulse">
                            <div className="inline-block p-3 rounded-full bg-emerald-900 bg-opacity-30 text-emerald-400 text-2xl mb-4">✓</div>
                            <h3 className="text-xl font-bold text-emerald-300 mb-2 font-['Fira_Code']">Message Sent!</h3>
                            <p className="text-emerald-100 opacity-80 font-['Fira_Code']">Thanks for reaching out. I'll get back to you soon!</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-['Fira_Code']">
                            <div className="group relative">
                                <label htmlFor="name" className="flex text-emerald-400 text-xs mb-2 items-center font-['Fira_Code']">
                                    <span className="text-emerald-500 mr-2">&gt;</span>
                                    <FiUser className="mr-1" />
                                    name:
                                </label>
                                <input
                                    placeholder="Enter your name"
                                    type="text"
                                    id="name"
                                    {...register("name", nameOptions)}
                                    className={`w-full bg-[#01111d] border-2 rounded-md py-2 px-3 text-emerald-100 placeholder-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all duration-300 font-['Fira_Code'] ${errors.name ? "border-red-500 focus:ring-red-500" : "border-emerald-900"}`}
                                />
                                {errors.name && <p className="text-red-400 text-xs mt-2 font-['Fira_Code']">{errors.name.message}</p>}
                            </div>

                            <div className="group relative">
                                <label htmlFor="email" className="flex text-emerald-400 text-xs mb-2 items-center font-['Fira_Code']">
                                    <span className="text-emerald-500 mr-2">&gt;</span>
                                    <FiMail className="mr-1" />
                                    email:
                                </label>
                                <input
                                    placeholder="Enter your email"
                                    type="email"
                                    id="email"
                                    {...register("email", emailOptions)}
                                    className={`w-full bg-[#01111d] border-2 rounded-md py-2 px-3 text-emerald-100 placeholder-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all duration-300 font-['Fira_Code'] ${errors.email ? "border-red-500 focus:ring-red-500" : "border-emerald-900"}`}
                                />
                                {errors.email && <p className="text-red-400 text-xs mt-2 font-['Fira_Code']">{errors.email.message}</p>}
                            </div>

                            <div className="group relative">
                                <label htmlFor="subject" className="flex text-emerald-400 text-xs mb-2 items-center font-['Fira_Code']">
                                    <span className="text-emerald-500 mr-2">&gt;</span>
                                    <FiTag className="mr-1" />
                                    subject:
                                </label>
                                <input
                                    placeholder="Reason for contact"
                                    type="text"
                                    id="subject"
                                    {...register("subject", subjectOptions)}
                                    className={`w-full bg-[#01111d] border-2 rounded-md py-2 px-3 text-emerald-100 placeholder-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all duration-300 font-['Fira_Code'] ${errors.subject ? "border-red-500 focus:ring-red-500" : "border-emerald-900"}`}
                                />
                                {errors.subject && <p className="text-red-400 text-xs mt-2 font-['Fira_Code']">{errors.subject.message}</p>}
                            </div>

                            <div className="group relative">
                                <label htmlFor="message" className="flex text-emerald-400 text-xs mb-2 items-center font-['Fira_Code']">
                                    <span className="text-emerald-500 mr-2">&gt;</span>
                                    <FiMessageSquare className="mr-1" />
                                    message:
                                </label>
                                <textarea
                                    placeholder="Type the message..."
                                    id="message"
                                    {...register("message", messageOptions)}
                                    className={`w-full bg-[#01111d] border-2 rounded-md py-2 px-3 text-emerald-100 placeholder-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all duration-300 h-24 resize-none font-['Fira_Code'] ${errors.message ? "border-red-500 focus:ring-red-500" : "border-emerald-900"}`}
                                ></textarea>
                                {errors.message && <p className="text-red-400 text-xs mt-2 font-['Fira_Code']">{errors.message.message}</p>}
                                <div className="text-xs text-emerald-700 mt-1 text-right font-['Fira_Code']">
                                    {watch("message")?.length || 0}/300
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-emerald-600 hover:bg-emerald-500 text-black font-['Fira_Code'] py-3 px-4 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
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
                                        <span className="flex items-center justify-center">
                                            <FiSend className="mr-2" /> send_message()
                                        </span>
                                    )}
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-full bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0 opacity-30"></span>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;