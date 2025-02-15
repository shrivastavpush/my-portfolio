
const Home = () => {

    const phoneAPIurl: string = "https://api.whatsapp.com/send/?phone=919785691226&amp;text&amp;type=phone_number&amp;app_absent=0"
    const emailURL: string = "https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=shrivastavsumit15@gmail.com"
    const githubURL: string = "https://github.com/shrivastavsumit"
    const portFolio: string = "https://pushpendra-portfolio.netlify.app/"
    const linkedinPage: string = "https://www.linkedin.com/in/pushpendra-shrivastav/"

    return (
        <section className="flex items-center justify-center w-full h-[89.7vh] lg:h-[89vh] bg-gray-800">
            <div className="text-left mx-auto px-4 lg:px-0">
                <h1 className="text-3xl lg:text-4xl text-[#fea55f] mb-2 lg:mb-4 ">Hi all. I am</h1>
                <h2 className="text-4xl lg:text-5xl mb-4 lg:mb-5 text-white font-semibold">Pushpendra Shrivastav</h2>
                <p className="text-xl lg:text-2xl mb-8 text-blue-700">&gt; Front-end developer</p>

                <div className="text-gray-400">// my number</div>
                <div className="mb-2">
                    <span className="text-blue-700">const </span>
                    <span className="text-emerald-400">telephoneNum</span>
                    <span className="text-gray-400"> = </span>
                    <a className="text-red-700" href={phoneAPIurl} target="_blank">+91 97856-XXXXX</a>
                    <span className="text-gray-400">;</span>
                </div>

                <div className="text-gray-400">// my e-mail</div>
                <div className="mb-2">
                    <span className="text-blue-700">const </span>
                    <span className="text-emerald-400">email</span>
                    <span className="text-gray-400"> = </span>
                    <a className="text-red-700" href={emailURL} target="_blank">"shrivastavsumit15@gmail.com"</a>
                    <span className="text-gray-400">;</span>
                </div>

                <div className="text-gray-400">// you can also see it on my Github page</div>
                <div className="mb-2">
                    <span className="text-blue-700">const </span>
                    <span className="text-emerald-400">githubLink</span>
                    <span className="text-gray-400"> = </span>
                    <a className="text-red-700" href={githubURL} target="_blank">"https://github.com/shrivastavsumit"</a>
                    <span className="text-gray-400">;</span>
                </div>

                {/* <div className="text-gray-400">// you can also see my project on my portfolio</div>
                <div className="mb-2">
                    <span className="text-blue-700">const </span>
                    <span className="text-emerald-400">portfolio</span>
                    <span className="text-gray-400"> = </span>
                    <a className="text-red-700" href={portFolio} target="_blank">"https://pushpendra-portfolio.netlify.app/"</a>
                    <span className="text-gray-400">;</span>
                </div> */}

                <div className="text-gray-400">// you can check my Linkedin Page</div>
                <div>
                    <span className="text-blue-700">const </span>
                    <span className="text-emerald-400">linkedinPage</span>
                    <span className="text-gray-400"> = </span>
                    <a className="text-red-700" href={linkedinPage} target="_blank">"https://www.linkedin.com/in/pushpendra-shrivastav/"</a>
                    <span className="text-gray-400">;</span>
                </div>
            </div>
        </section>
    )
}

export default Home