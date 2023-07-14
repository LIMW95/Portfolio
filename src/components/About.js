import React from 'react';
import Sit from '../assets/images/Sit.png';
import '../assets/css/about.css'; // Import the CSS file

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#162447] text-gray-300 relative'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 relative'>
          <div className='sm:text-right pb-8 pl-4 z-[15]'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div className='absolute left-0 top-36 transform -translate-y-1/2 -translate-x-1/2 md:w-[40%] sm:-[20%] z-[10]'>
            <img src={Sit} alt='face' className='w-full h-auto'/>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 relative z-[15]'>
          <div className='sm:text-right text-4xl font-bold'>
          <p className='intersecting-text'>Hi. I'm Wilson Lim, nice to meet you. Please take a look around.</p>
          </div>
          <div>
          <p className='intersecting-text'>I have a strong passion for developing exceptional software solutions that enhance the lives of individuals and businesses. My expertise lies in creating custom software for a diverse range of clients, from small businesses to large enterprise corporations. Imagine having a software expert readily available to cater to your needs and provide innovative solutions. How could this level of expertise and accessibility transform your business or personal endeavors?</p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
