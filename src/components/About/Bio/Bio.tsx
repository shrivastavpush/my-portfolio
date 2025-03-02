import Skills from "./Skills";
import TechStack from "./TechStack";

const Bio = () => {
    return (
        <>
            <section className="flex h-[89vh] w-screen bg-[#011627]">
                <Skills />
                <TechStack />
            </section>
        </>
    );
};

export default Bio;