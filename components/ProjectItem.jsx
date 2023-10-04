import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ title, backgroundImage, language, projectUrl }) => {
    return (
        <div className='relative flex justify-center 
        items-center h-auto w-full shadow-xl shadow-gray-400 
        rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImage} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%]  
                translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-widest text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{language}</p>
                <Link href={projectUrl}>
                    <p className='bg-white text-center p-2 
                    rounded-lg text-gray-700  text-lg cursor-pointer'>
                        More Info
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem