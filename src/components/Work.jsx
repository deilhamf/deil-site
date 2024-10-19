/**
 * @copyright 2024 deil
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/projects/1.png',
    title: 'SIN Indonesia',
    tags: ['Laravel'],
    projectLink: 'https://www.sinindonesia.com/'
  },
  {
    imgSrc: '/images/projects/2.png',
    title: 'Griya Balaraja Property',
    tags: ['Laravel'],
    projectLink: ''
  },
  {
    imgSrc: '/images/projects/3.png',
    title: 'School Classmeeting Web',
    tags: ['Codeigniter'],
    projectLink: ''
  },
  {
    imgSrc: '/images/projects/4.png',
    title: 'Datasoft IT Consultant',
    tags: ['Laravel'],
    projectLink: ''
  },
  {
    imgSrc: '/images/projects/5.png',
    title: 'Agriculture Web',
    tags: ['Laravel'],
    projectLink: 'https://github.com/deilhamf/farmsimulator.id'
  },
  {
    imgSrc: '/images/projects/6.png',
    title: 'Fruityduty Grocery Web',
    tags: ['Laravel'],
    projectLink: ''
  },
  {
    imgSrc: '/images/projects/7.png',
    title: 'Luxurious Perfume Store Web',
    tags: ['Laravel'],
    projectLink: ''
  },
  {
    imgSrc: '/images/projects/8.png',
    title: 'Tech Canvas IT Consultant',
    tags: ['Laravel'],
    projectLink: ''
  },
  {
    imgSrc: '/images/projects/9.png',
    title: 'Travacations Travel Web',
    tags: ['Laravel'],
    projectLink: 'https://github.com/deilhamf/travacations.id'
  },
  {
    imgSrc: '/images/projects/10.png',
    title: 'MyVilla Web',
    tags: ['Laravel'],
    projectLink: ''
  },
  {
    imgSrc: '/images/projects/11.png',
    title: 'Sefruit Convenience Store Web',
    tags: ['Laravel'],
    projectLink: 'https://github.com/deilhamf/website-sefruit'
  },
  {
    imgSrc: '/images/projects/12.png',
    title: 'Calcwiz Online Calculator',
    tags: ['PHP', 'JS', 'TailwindCSS'],
    projectLink: 'https://calcwiz.vercel.app/'
  },
  {
    imgSrc: '/images/projects/13.png',
    title: 'Voiceify Text to Speech Converter',
    tags: ['HTML', 'CSS', 'JS'],
    projectLink: 'https://voiceify.vercel.app/'
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">
        
        <h2 className="headline-2 mb-8 reveal-up">
          My Projects Highlight
        </h2>
      
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work
