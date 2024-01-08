import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import logo from "../public/assets/logo.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav); 
    };

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src={logo} alt="themrdee" width='125' height='50' />
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Home
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            About
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Skills
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Projects
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            Contact
                        </li>
                    </Link>
                </ul>
                <div onClick={toggleNav} className='md:hidden cursor-pointer hover:scale-110 duration-300 ease-in'>
                    <AiOutlineMenu size={20} />
                </div>
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div 
                className={nav  
                            ?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            :'fixed left-[-100%] top-0 p-10 ease-in duration-500' }
            >
                <div>
                    <div className='flex items-center justify-between'>
                        <Image src={logo} alt='themrdee' width='87' height='35' />
                        <div onClick={toggleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's create great things together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#004aad] font-bold'>Let's work together</p>
                        <div className='flex justify-between items-center w-full sm:w-[80%] my-4'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105'>
                                <BsPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar