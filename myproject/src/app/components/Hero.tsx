import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Hero = () => {
  return (
    <div id="hero">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">
        <div className="lg:w-[45%]">
          <div className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap">
            <h2>Hello, I am João Victor</h2>
            <h2>
              <span className="font-extrabold">Full Stack</span>
              <span className="text-border"> Developer</span>
            </h2>
            <h2>
              Based In
              <span className="font-extrabold"> Brazil.</span>
            </h2>
          </div>
          <p className="text-[#71717A] text-sm lg:text-base mt-5">
          I am João Victor, a frontend developer passionate about creating dynamic and user-friendly web applications. With a solid background in full-stack development, I focus on using technologies like React and Tailwind CSS to build smooth and intuitive user experiences. Always eager to learn and grow, I am driven by the belief that technology can create meaningful change and add value to businesses and users.
          </p>
          <div className="flex items-center gap-x-5 mt-10 lg:mt-14">
            <a href="" className="bg-white p-2 lg:p-3 rounded border-2 border-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 hover:ring-4 hover:ring-offset-2 hover:ring-black">
              <MdEmail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/joaovictordev2005/" className="bg-white p-2 lg:p-3 rounded border-2 border-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 hover:ring-4 hover:ring-offset-2 hover:ring-black" target='_blank'>
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/joaodev2005" className="bg-white p-2 lg:p-3 rounded border-2 border-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 hover:ring-4 hover:ring-offset-2 hover:ring-black" target='_blank'>
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className='lg:w-[55%] w-full'>
          <h2>image</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero