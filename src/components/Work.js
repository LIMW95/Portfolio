import React from 'react';
import Compt from '../assets/images/comptia.png';
import Forti from '../assets/images/foritnetnse.png';
import Mern from '../assets/images/MERN.png';
import '../assets/css/about.css';

const Work = () => {
  return (
    <div name='trainings' className='w-full h-auto text-gray-400 bg-[#162447]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Trainings</p>
          <p className='py-4'>
            Elevate your skills with the trainings I've undertaken! I believe in continuous learning and have completed a range of professional certifications and courses to stay at the forefront of the industry.
          </p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-3 text-center py-4'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 backdrop'>
            <img className='w-24 mx-auto' src={Compt} alt='HTML' />
            <p className='my-4 text-fuchsia-900'>CompTIA A+</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 backdrop'>
            <img className='w-24 mx-auto' src={Forti} alt='HTML' />
            <p className='my-4 text-fuchsia-900'>Fortinet</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 backdrop'>
            <img className='w-24 mx-auto' src={Mern} alt='HTML' />
            <p className='my-4 text-fuchsia-900'>MERN Stack</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
