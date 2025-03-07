import React from "react";
import PushpendraImage from "../../assets/images/Pushpendra.jpeg";

const ImageDesk: React.FC = () => {
    return (
        <div className="hidden md:flex md:w-1/2 justify-center">
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-[#fea55f]/20 rounded-full blur-md"></div>
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-[#fea55f]/50">
                    <img src={PushpendraImage} alt="Pushpendra Shrivastav" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#fea55f] text-[#011627] px-4 py-2 rounded-lg font-mono text-sm shadow-lg">
                    Looking for work
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500/50"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#fea55f]/50"></div>
            </div>
        </div>
    )
}

export default ImageDesk
