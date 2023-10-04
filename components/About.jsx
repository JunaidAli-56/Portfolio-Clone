import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum odio optio possimus dicta architecto delectus aliquid obcaecati soluta, qui quis, autem perferendis? Deleniti, cum quasi rerum facilis consequatur repellat.</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum odio optio possimus dicta architecto delectus aliquid obcaecati soluta, qui quis, autem perferendis? Deleniti, cum quasi rerum facilis consequatur repellat.</p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out my latest projects</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 eae-in duration-300'>
                    <img className='rounded-xl' src='/assets/personal.png' alt='/'/>
                </div>
            </div>
        </div>
    )
}

export default About