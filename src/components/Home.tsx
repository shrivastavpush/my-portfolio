import { useState } from "react"


const Home = () => {

    const [showPopup, setShowPopup] = useState<Number | null>(null)

    const phoneAPIurl: string = `https://api.whatsapp.com/send/?phone=919785691226&amp;text&amp;type=phone_number&amp;app_absent=0`
    const emailURL: string = "https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=shrivastavsumit15@gmail.com"
    const githubURL: string = "https://github.com/shrivastavsumit"
    const portFolio: string = "https://pushpendra-portfolio.netlify.app/"
    const linkedinPage: string = "https://www.linkedin.com/in/pushpendra-shrivastav/"

    interface ContactInfoItem {
        label: string;
        variableName: string;
        value: string;
        link: string;
    }

    const contactInfo: ContactInfoItem[] = [
        {
            label: "my number",
            variableName: "telephoneNum",
            value: `"+91 97856-XXXXX"`,
            link: phoneAPIurl,
        },
        {
            label: "my e-mail",
            variableName: "email",
            value: `"shrivastavsumit15@gmail.com"`,
            link: emailURL,
        },
        {
            label: "you can also see it on my Github page",
            variableName: "githubLink",
            value: `"https://github.com/shrivastavsumit"`,
            link: githubURL,
        },
        {
            label: "you can also see my portfolio",
            variableName: "portfolio",
            value: `"https://pushpendra-portfolio.netlify.app"`,
            link: portFolio,
        },
        {
            label: "you can check my Linkedin Page",
            variableName: "linkedinPage",
            value: `"https://www.linkedin.com/in/pushpendra-shrivastav"`,
            link: linkedinPage,
        },
    ];

    return (
        <section className="flex items-center justify-center w-full h-[89.7vh] lg:h-[89vh] bg-gray-800">
            <div className="text-left mx-auto px-4 lg:px-0">
                <h1 className="text-3xl lg:text-4xl text-[#fea55f] mb-2 lg:mb-4 ">Hi all. I am</h1>
                <h2 className="text-4xl lg:text-5xl mb-4 lg:mb-5 text-white font-semibold">Pushpendra Shrivastav</h2>
                <p className="text-xl lg:text-2xl mb-8 text-blue-700">&gt; Front-end developer</p>

                {contactInfo.map((item, index) => (
                    <div key={index} className="mb-4">
                        <div className="text-gray-400">// {item.label}</div>
                        <div className="mb-2 relative">
                            <span className="text-blue-700">const </span>
                            <span className="text-emerald-400"
                                onMouseEnter={() => setShowPopup(index)}
                                onMouseLeave={() => setShowPopup(null)
                                }>{item.variableName}</span>

                            {showPopup === index && <span className="absolute text-white bottom-5 left-13 bg-black rounded p-1">(property) <span className="text-emerald-400">ContactInfoItem.label:</span> <span className="text-[#fea55f]">String</span></span>}
                            <span className="text-gray-400"> = </span>
                            <a className="text-red-700" href={item.link} target="_blank">{item.value}</a>
                            <span className="text-gray-400">;</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home