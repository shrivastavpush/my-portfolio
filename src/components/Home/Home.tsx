import React from "react";
import ContactInfo from "./ContactInfo";
import ImageMob from "./ImageMob";
import ImageDesk from "./ImageDesk";
import DetailsInfo from "./DetailsInfo";
import HomeDecor from "./HomeDecor";

const Home: React.FC = () => {
    return (
        <section className="section h-screen w-full flex flex-col justify-center py-6 px-3 relative overflow-hidden" id="homeSection">
            <HomeDecor />
            <div className="container mx-auto max-w-6xl h-full flex items-center relative z-10">
                <div className="flex flex-col items-center justify-between gap-4 w-full">
                    <ImageMob />
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                        <div className="w-full md:w-1/2 space-y-4">
                            <DetailsInfo />
                            <ContactInfo />
                        </div>
                        <ImageDesk />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;