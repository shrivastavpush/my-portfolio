import React, { useState } from "react";

interface Education {
    degree: string,
    school: string
    year: string
    description?: string

}
const educationDetails: Education[] = [
    {
        degree: "B.Tech in Mechanical Engineering",
        school: "Rajasthan Techanical University",
        year: "2015 - 2019",
        description: "Focused on software engineering and web technologies"
    },
    {
        degree: "Full Stack Web Development",
        school: "Tech Bootcamp",
        year: "2023",
        description: "Intensive program covering modern web development stack"
    }
]

const Education: React.FC = () => {
    const [selectedEduIndex, setSelectedEduIndex] = useState(0);

    return (
        <section className="education-section">
            <div className="w-1/2 pr-4">
                {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2> */}
                <p className="text-gray-600 mb-6">My Academic Journey</p>

                <div className="timeline space-y-4">
                    {educationDetails.map((edu, index) => (
                        <div
                            key={index}
                            className={`timeline-entry cursor-pointer border-l-2 border-gray-300 pl-4 relative ${index === selectedEduIndex ? "text-blue-500" : "text-gray-600"
                                }`}
                            onClick={() => setSelectedEduIndex(index)}
                        >
                            <div
                                className={`timeline-icon absolute -left-2.5 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-gray-300 ${index === selectedEduIndex ? "bg-blue-500" : ""
                                    }`}
                            ></div>
                            <div className="timeline-content">
                                <h3 className="text-lg font-medium">{edu.degree}</h3>
                                <p className="text-sm text-gray-500">{edu.school}</p>
                                <span className="text-xs text-gray-400">{edu.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="w-1/2 pl-4">
                {educationDetails[selectedEduIndex] && (
                    <div className="details-panel">
                        <p className="text-gray-700">{educationDetails[selectedEduIndex].description}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Education