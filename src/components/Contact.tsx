import { useForm } from "react-hook-form";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset, } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        // Handling form submission here (e.g., send email)
        console.log(data);

        // Clearing the form after submission
        reset();
    };

    return (
        <div className="flex items-center justify-center w-full h-[89.7vh] lg:h-[89.5vh] bg-gray-800">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[75%] lg:w-[60%] m-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-emerald-400 font-bold mb-2">
                        Name
                    </label>
                    <input
                        placeholder="Enter your name"
                        type="text"
                        id="name"
                        {...register('name',
                            {
                                required: { value: true, message: "Oops! Looks like you skipped the name field. Try again, you got this!" },
                                minLength: { value: 5, message: "Almost there! Just a few more letters for your name. You can do it!" },
                                maxLength: { value: 20, message: "That's a magnificent name, but it's a tad too long. 20 characters max, please. You're still awesome!" }
                            })}
                        className={`border rounded w-full py-2 px-3 text-[#fea55f] ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-emerald-400 font-bold mb-2">
                        Email
                    </label>
                    <input
                        placeholder="Enter your email"
                        type="email"
                        id="email"
                        {...register('email', {
                            required: { value: true, message: "Don't forget your email! (We all make typos sometimes.)" },
                            pattern: { value: /^[A-Z0-9._%+-]{4,}@[A-Z0-9.-]{4,}\.[A-Z]{2,}$/i, message: "Email address, please! Double-check for typos. (We've all been there.)" }
                        })}
                        className={`border rounded w-full py-2 px-3 text-[#fea55f] ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block text-emerald-400 font-bold mb-2">
                        Reason to connect
                    </label>
                    <input
                        placeholder="Reason for contact"
                        type="text"
                        id="subject"
                        {...register('subject',
                            {
                                required: { value: true, message: "Subject line, please! What's the gist of your message?" },
                                minLength: { value: 5, message: "Almost there! Just a few more characters for the subject line. You got this!" },
                                maxLength: { value: 30, message: "That's a great title, but it's a bit too long for the subject. 30 characters max, please." }
                            })}
                        className={`border rounded w-full py-2 px-3 text-[#fea55f] ${errors.subject ? 'border-red-500' : ''}`}
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block text-emerald-400 font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        placeholder="Type the message..."
                        id="message"
                        {...register('message',
                            {
                                required: { value: true, message: "Message time! Tell me everything! (Or at least the important stuff.)" },
                                maxLength: { value: 300, message: "That's a long story! Can you summarize it in 300 characters or less? I'm dying to know!" }
                            })}
                        className={`border rounded w-full py-2 px-3 text-[#fea55f] h-32 ${errors.message ? 'border-red-500' : ''}`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-emerald-400 text-black hover:bg-[#fea55f] hover:text-white font-bold py-2 px-4 rounded cursor-pointer transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact