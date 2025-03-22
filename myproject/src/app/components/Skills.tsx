import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs 
} from 'react-icons/fa';

import { 
  SiTypescript, 
  SiNextdotjs, 
  SiMysql, 
  SiPrisma 
} from 'react-icons/si';

import { 
  BiLogoJavascript 
} from 'react-icons/bi';

import { 
  RiTailwindCssFill 
} from 'react-icons/ri';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: <FaReact size={50} />
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={50} />
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs size={50} />
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={50} />
  },
  {
    name: 'MySQL',
    icon: <SiMysql size={50} />
  },
  {
    name: 'Prisma.js',
    icon: <SiPrisma size={50} />
  },
  {
    name: 'JavaScript',
    icon: <BiLogoJavascript size={50} />
  },
  {
    name: 'HTML',
    icon: <FaHtml5 size={50} />
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt size={50} />
  },
  {
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill size={50} />
  }
];

const Skills = () => {
  return (
    <div className="mt-3 lg:mt-16">
      <div className="px-5 lg:px-28">
        <h2 className="text-2xl lg:text-4xl text-center">
          My
          <span className="font-extrabold"> Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills