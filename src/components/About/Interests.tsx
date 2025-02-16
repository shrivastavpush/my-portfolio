const Interests = () => {
    return (
        <div className="p-8 h-[83vh]">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Interests</h1>
                <p className="mt-2 text-gray-600">What drives and excites me</p>
            </div>

            <div className="grid gap-6">
                {[
                    {
                        title: "Web Development",
                        description: "Building modern web applications with React and TypeScript"
                    },
                    {
                        title: "Open Source",
                        description: "Contributing to and maintaining open source projects"
                    },
                    {
                        title: "UI/UX Design",
                        description: "Creating intuitive and beautiful user interfaces"
                    }
                ].map((interest, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900">{interest.title}</h3>
                        <p className="mt-2 text-gray-600">{interest.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interests;