

const Education = () => {
    return (
        <div className="p-8 h-[83vh]">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Education</h1>
                <p className="mt-2 text-gray-600">Academic background and certifications</p>
            </div>

            <div className="space-y-6">
                {[
                    {
                        degree: "Bachelor of Science in Computer Science",
                        school: "University of Technology",
                        year: "2018 - 2022",
                        description: "Focused on software engineering and web technologies"
                    },
                    {
                        degree: "Full Stack Web Development",
                        school: "Tech Bootcamp",
                        year: "2023",
                        description: "Intensive program covering modern web development stack"
                    }
                ].map((edu, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                                <p className="text-gray-600 mt-1">{edu.school}</p>
                            </div>
                            <span className="text-sm text-gray-500">{edu.year}</span>
                        </div>
                        <p className="mt-4 text-gray-600">{edu.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education