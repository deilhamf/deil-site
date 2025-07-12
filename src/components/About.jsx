/**
 * @copyright 2024 deil
 * @license Apache-2.0
 */

const aboutItems = [
    {
        label: 'Project done',
        number: 10
    },
    {
        label: 'Years of experience',
        number: 2
    }
    ];

const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Hi, I'm usually called Deil. I like to learn new things even if it's just a little bit. I am interested in computer technology and foreign languages. If you are having difficulties with your project, I am ready to help you solve it. I will make you a good and aesthetic result. Feel free to contact me, I will be a good friend for you.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{ label }</p>
                                </div>
                            ))
                        }

                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px]"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
