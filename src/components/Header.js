import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useTypewriter } from 'react-simple-typewriter';

const Header = () => {
  const  [text] = useTypewriter({
    words: ['Full Stack Developer', 'Front End', 'Back End', 'Systems Analyst', 'Security Specialist'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div name='home' className='w-full h-screen bg-[#162447]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 mt-16'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          WILSON LIM
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a <span className='text-pink-600 '>{text}</span>
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          As a skilled full-stack developer, I thrive on crafting remarkable digital experiences that leave a
          lasting impression. From coding to designing, I bring a comprehensive skill set to the table. Right
          now, my main focus revolves around developing top-notch responsive web and mobile applications. Join
          me on this exciting journey as we bring your digital vision to life in the most innovative and
          captivating way possible. Let's build something extraordinary together!🎩✨
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
