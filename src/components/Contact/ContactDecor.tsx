import React from 'react'

const ContactDecor: React.FC = () => {
    return (
        <>
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-emerald-500 opacity-10 blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#fea55f] opacity-10 blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-500 opacity-10 blur-xl animate-pulse"></div>

            {/* Code-like decorative elements */}
            <div className="absolute top-10 right-10 text-emerald-500 opacity-20 font-mono text-xs">
                &lt;contact&gt;<br />
                &nbsp;&nbsp;connect()<br />
                &lt;/contact&gt;
            </div>
            <div className="absolute bottom-10 left-10 text-emerald-500 opacity-20 font-mono text-xs">
                const message = await send();<br />
                return response.success;
            </div>

        </>
    )
}

export default ContactDecor
