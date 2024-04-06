import React from 'react';
import MobPos from '../assets/images/MobPos.png';
import Web2 from '../assets/images/Web2.png';
import '../assets/css/about.css';

const Work = () => {
  const handleMobPOSClick = () => {
    // Redirect to the specified link when the card is clicked
    window.location.href = "https://www.canva.com/design/DAGBnsEGHx8/H9c-csZk-CDrvtGeKNTQHA/view?utm_content=DAGBnsEGHx8&utm_campaign=designshare&utm_medium=link&utm_source=editor#4";
  };
  const handleWebKitClick = () => {
    // Redirect to the specified link when the card is clicked
    window.location.href = "https://www.canva.com/design/DAGBn8-TYVg/g29GtUsjXc1MAcwM8MI41g/view?utm_content=DAGBn8-TYVg&utm_campaign=designshare&utm_medium=link&utm_source=editor";
  };

  return (
    <div name='work' className='w-full h-auto text-gray-400 bg-[#162447]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Works</p>
          <p className='py-4'>
            Explore the projects I've completed, showcasing my skills and expertise in various domains. From web development to mobile applications, each project represents a culmination of my dedication and commitment to delivering high-quality solutions. I take pride in my work and strive to exceed expectations with every project undertaken.
          </p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-3 text-center py-4'>
          <div className='hover:scale-110 duration-500 backdrop1' onClick={handleMobPOSClick}>
            <img className='w-24 mx-auto' src={MobPos} alt='HTML' />
            <p className='my-4 text-gray-400'>Mobile POS</p>
          </div>
          <div className='hover:scale-110 duration-500 backdrop1' onClick={handleWebKitClick}>
            <img className='w-full mx-auto' src={Web2} alt='HTML' />
            <p className='mt-28 text-gray-400'>Webkits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
