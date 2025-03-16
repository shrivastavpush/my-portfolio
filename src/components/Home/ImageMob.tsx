import React from "react";
import PushpendraImage from "../../assets/images/Pushpendra.webp";

const ImageMob: React.FC = () => {
    return (
        <div className="w-full md:hidden flex justify-center mb-4">
            <div className="relative">
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-[#fea55f]/50">
                    <img src={PushpendraImage} alt="Pushpendra Shrivastav" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#fea55f] text-[#011627] px-2 py-0.5 rounded-lg font-mono text-xs shadow-lg">
                    Looking for work
                </div>
            </div>
        </div>
    )
}

export default ImageMob
