import React from "react";
import ContactInfo from "./ContactInfo";
import ImageMob from "./ImageMob";
import ImageDesk from "./ImageDesk";
import DetailsInfo from "./DetailsInfo";

const Home: React.FC = () => {

    return (
        <section className="section h-screen w-full flex flex-col justify-center py-6 px-3 relative overflow-hidden" id="homeSection">
            {/* Decorative code-like background elements */}
            <div className="absolute top-10 left-5 text-gray-800 text-xs md:text-sm font-mono opacity-20 select-none">
                &lt;html&gt;<br />
                &nbsp;&nbsp;&lt;head&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Pushpendra Shrivastav&lt;/title&gt;<br />
                &nbsp;&nbsp;&lt;/head&gt;<br />
                &nbsp;&nbsp;&lt;body&gt;
            </div>

            <div className="absolute bottom-10 right-5 text-gray-800 text-xs md:text-sm font-mono opacity-20 select-none">
                &nbsp;&nbsp;&lt;/body&gt;<br />
                &lt;/html&gt;
            </div>

            <div className="absolute -right-20 top-1/4 text-blue-900 text-5xl md:text-7xl font-bold opacity-10 select-none rotate-12">
                React
            </div>

            <div className="absolute -left-10 bottom-1/4 text-emerald-900 text-5xl md:text-7xl font-bold opacity-10 select-none -rotate-12">
                TypeScript
            </div>

            <div className="container mx-auto max-w-6xl h-full flex items-center relative z-10">
                <div className="flex flex-col items-center justify-between gap-4 w-full">
                    <ImageMob />

                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                        <div className="w-full md:w-1/2 space-y-4">
                            <DetailsInfo />
                            {/* <div className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm relative">
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
                            </div> */}

                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/50 to-blue-500/50 rounded-t-xl"></div>
                                <h3 className="text-base sm:text-lg text-[#fea55f] mb-3">// contact_info</h3>
                                <ContactInfo />
                                <div className="absolute -bottom-1 -right-1 w-12 h-12 border-r-2 border-b-2 border-emerald-500/30 rounded-br-xl"></div>
                            </div>
                        </div>

                        <ImageDesk />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;