import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center lg:pt-40 sm:pt-40'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase tracking-widest text-sm text-gray-600'>Let's build something legendary together</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-[#5651e5]'>Junaid</span>
                    </h1>
                    <h1 className='py-4 text-gray-700'>
                        A Front-End Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[60%] m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum eius nam laboriosam ad. Repellendus odio unde, atque iusto dolores nostrum architecto quibusdam quis officia repudiandae debitis fuga molestias! Atque quia veritatis quo sint amet reiciendis, rerum, ipsam ab sequi exercitation.....</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://www.linkedin.com/in/junaid-ali-54cb'>
                                <FaLinkedinIn />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://github.com/JunaidAli-56'>
                                <FaGithub />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://mail.google.com'>
                                <AiOutlineMail />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main