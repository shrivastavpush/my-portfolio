import Skills from "./Skills";
import TechStack from "./TechStack";

const Bio = () => {
    return (
        <>
            <div className="flex h-[89vh] w-screen bg-[#011627]">
                <Skills />
                <TechStack />
            </div>
        </>
    );
};

export default Bio;