/**
 * @copyright 2024 deil
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: '/images/vs-code-svgrepo-com.svg',
        label: 'VS Code',
        desc: 'Code Editor'
    },
    {
        imgSrc: '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/canva.svg',
        label: 'Canva',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/msword.svg',
        label: 'MS Word',
        desc: 'Document tool'
    },
    {
        imgSrc: '/images/excel.svg',
        label: 'MS Excel',
        desc: 'Document tool'
    },
    {
        imgSrc: '/images/powerpoint.svg',
        label: 'MS Powerpoint',
        desc: 'Slideshow tool'
    },
    {
        imgSrc: '/images/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: '/images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: '/images/xampp.svg',
        label: 'XAMPP',
        desc: 'Web Server'
    },
    {
        imgSrc: '/images/laravel.svg',
        label: 'Laravel',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/php.svg',
        label: 'PHP',
        desc: 'Back End'
    },
    {
        imgSrc: '/images/wordpress.svg',
        label: 'Wordpress',
        desc: 'Development'
    },
    {
        imgSrc: '/images/codeigniter.svg',
        label: 'Codeigniter',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/mysql.svg',
        label: 'MySQL',
        desc: 'Database'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/chatgpt.svg',
        label: 'Chat GPT',
        desc: 'AI Tools'
    },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                    Cool Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Some cool tools that I often use to work on projects, hopefully you are interested in using them too. :D
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard 
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Skill
