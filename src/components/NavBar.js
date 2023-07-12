import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/images/wl2.png'


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#162447] text-white'>
        <div>
            <img src={Logo} alt="logo" style={{width: '75px'}}/>
        </div>

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Expertise</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/>: <FaTimes/>}
        </div>
        

        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#162447] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Expertise</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Contact</li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="/">
                        Facebook
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="/">
                        Facebook
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="/">
                        Facebook
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="/">
                        Facebook
                    </a>
                </li>


            </ul>
            
        </div>
    </div>
  )
}

export default NavBar