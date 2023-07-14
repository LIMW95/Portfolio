import React from 'react'
import API from '../assets/images/API.png'
import CSS from '../assets/images/CSS.png'
import Docker from '../assets/images/Docker.png'
import Firebase from '../assets/images/Firebase.png'
import GitHUB from '../assets/images/GitHUB.png'
import JavaScript from '../assets/images/JavaScript.png'
import Mongo from '../assets/images/Mongo.png'
import SQL from '../assets/images/mySQL.png'
import Node from '../assets/images/Node.png'
import PHP from '../assets/images/Php.png'
import ReactLogs from '../assets/images/React.png'
import HTML from '../assets/images/HTML.png'
import Java from '../assets/images/JAVA.png'
import Dotnet from '../assets/images/dotnet.png'

const Expertise = () => {
  return (
    <div name='expertise' className='w-full h-auto text-gray-400 bg-[#162447]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Expertise</p>
                <p className='py-4'>With a wealth of experience in various technologies, I bring a diverse skill set to the table. Here are some of the key technologies I've worked with:</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={HTML} alt='HTML' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={CSS} alt='HTML' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={JavaScript} alt='HTML' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={Dotnet} alt='HTML' />
                    <p className='my-4'>VB.NET</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={Node} alt='HTML' />
                    <p className='my-4'>Node.JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={Java} alt='HTML' />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={PHP} alt='HTML' />
                    <p className='my-4'>PHP</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={ReactLogs} alt='HTML' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={Mongo} alt='HTML' />
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={SQL} alt='HTML' />
                    <p className='my-4'>mySQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={Firebase} alt='HTML' />
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={GitHUB} alt='HTML' />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={Docker} alt='HTML' />
                    <p className='my-4'>Docker</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={API} alt='HTML' />
                    <p className='my-4'>WebServices(API)</p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Expertise