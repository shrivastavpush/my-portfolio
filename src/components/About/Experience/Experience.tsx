
const Experience = () => {
    return (
        <div className="p-8 h-[83vh]">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Experience</h1>
                <p className="mt-2 text-gray-600">Professional journey and achievements</p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        role: "Senior Frontend Developer",
                        company: "Tech Solutions Inc.",
                        period: "2022 - Present",
                        description: "Leading the frontend development team, implementing modern web applications using React and TypeScript."
                    },
                    {
                        role: "Web Developer",
                        company: "Digital Agency",
                        period: "2020 - 2022",
                        description: "Developed responsive websites and web applications for various clients using modern web technologies."
                    }
                ].map((exp, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                                <p className="text-gray-600 mt-1">{exp.company}</p>
                            </div>
                            <span className="text-sm text-gray-500">{exp.period}</span>
                        </div>
                        <p className="mt-4 text-gray-600">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience