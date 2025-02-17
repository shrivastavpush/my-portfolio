const Bio = () => {
    return (
        <div className="p-8 h-[83vh]">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Bio</h1>
                <p className="mt-2 text-gray-600">Get to know me better</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                    <div className="prose max-w-none">
                        <p className="text-gray-600 leading-relaxed">
                            Hi there! I'm a passionate developer with a love for creating beautiful and functional web applications.
                            I believe in writing clean, maintainable code and creating intuitive user experiences.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                            or sharing my knowledge with the developer community through blog posts and tutorials.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;