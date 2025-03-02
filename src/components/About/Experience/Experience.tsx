import React, { useState } from "react";

interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    description: {
        id: number;
        desc: string;
    }[];
}

const experienceDetails: Experience[] = [
    {
        role: "Software Developer",
        company: "DePronto Infotech",
        period: "July 2022 - Present",
        location: "Remote",
        description: [
            {
                id: 1,
                desc: `• Drove optimization of India's leading life insurance website, achieving a 30% reduction in page load times and 10% server load reduction through performance tuning, limiting API calls, and implementation of scalable microservices to enhance system efficiency.`,
            },
            {
                id: 2,
                desc: `• Developed and integrated secure eKYC authentication, ensuring robust data protection and regulatory compliance. Utilized JWT for data encryption and implemented secure API endpoints to safeguard sensitive user information during onboarding and application form pre-filling. This resulted in a demonstrably secure and compliant eKYC process.`,
            },
            {
                id: 3,
                desc: `• Significantly improved website load times, boosting mobile Google PageSpeed Insights scores from 55 to 85 and desktop scores from 60 to 90, through optimized front-end development utilizing ReactJS, HTML5, CSS3, and JavaScript.`,
            },
            {
                id: 4,
                desc: `• Effectively managed version control and facilitated teamwork using Git, CodeCommit, and JIRA, while also mentoring junior developers on ReactJS and best coding practices, resulting in a 25% increase in team productivity and 15% reduction in code integration issues.`,
            },
        ],
    },
    {
        role: "Research Analyst",
        company: "Arcgate Technologies LLP",
        period: "Jan 2021 - Apr 2022",
        location: "Udaipur",
        description: [
            {
                id: 1,
                desc: `• Managed and curated content for a leading food delivery platform, ensuring accuracy and a user-friendly experience for customers. Edited and optimized food item images to enhance visual appeal and ensure consistency with platform guidelines, leading to a 15% increase in click-through rates on food items.`,
            },
            {
                id: 2,
                desc: `• Ensured all content met DoorDash's platform guidelines and delivered high-quality results, contributing to a 20% reduction in content-related errors.`,
            },
        ],
    },
    {
        role: "Maintenance Engineer",
        company: "Khaitan Chemicals & Fertilizers Limited",
        period: "Jul 2019 - Dec 2019",
        location: "Nimbahera",
        description: [
            {
                id: 1,
                desc: `• As a trainee engineer, I actively assisted skilled fitters and welders in repairing critical production equipment, contributing directly to the team's success.`,
            },
            {
                id: 2,
                desc: `• This hands-on experience provided valuable insights into breakdown resolution, preventative maintenance techniques, and the importance of teamwork in a production environment.`,
            },
        ],
    },
];

const Experience: React.FC = () => {
    const [selectedExpIndex, setSelectedExpIndex] = useState(0);

    return (
        <section className="experience-section p-4 md:p-8 lg:flex-row flex-col">
            {/* Left Section */}
            <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
                <p className="text-gray-600 mb-6">
                    My Professional Journey and Achievements
                </p>
                <div className="timeline space-y-4">
                    {experienceDetails.map((exp, index) => (
                        <div
                            key={index}
                            className={`timeline-entry cursor-pointer border-l-2 border-gray-300 pl-4 relative ${index === selectedExpIndex ? "text-blue-500" : "text-gray-600"
                                }`}
                            onClick={() => setSelectedExpIndex(index)}
                        >
                            <div
                                className={`timeline-icon absolute -left-2.5 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-gray-300 ${index === selectedExpIndex ? "bg-blue-500" : ""
                                    }`}
                            ></div>
                            <div className="timeline-content">
                                <h3 className="text-lg font-medium">{exp.role}</h3>
                                <p className="text-sm text-gray-500">{exp.company}</p>
                                <span className="text-xs text-gray-400">{exp.period}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 md:pl-4 overflow-y-scroll">
                {experienceDetails[selectedExpIndex] && (
                    <div className="details-panel">
                        {experienceDetails[selectedExpIndex].description.map((item) => (
                            <p key={item.desc} className="my-2.5 py-2.5 text-white border-b border-zinc-800">
                                {item.desc}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;