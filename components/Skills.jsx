import Image from 'next/image'
import React from 'react'

const skills = [
    {
        id: 1,
        title: 'Html',
        img: '/assets/react.png'

    },
    {
        id: 2,
        title: 'Css',
        img: '/assets/react.png'

    },
    {
        id: 3,
        title: 'Sass',
        img: '/assets/react.png'

    },
    {
        id: 4,
        title: 'Bootstrap',
        img: '/assets/react.png'

    },
    {
        id: 5,
        title: 'JavaScript',
        img: '/assets/react.png'

    },
    {
        id: 6,
        title: 'React',
        img: '/assets/react.png'

    },
    {
        id: 7,
        title: 'React Native',
        img: '/assets/react.png'

    },
    {
        id: 8,
        title: 'Figma',
        img: '/assets/react.png'

    },
]
const Skills = () => {
    return (
        <div id='skills'
            className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    {skills.map((e) => {
                        return (
                            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' key={e.id}>
                                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                    <div className='m-auto'>
                                        <Image src={e.img} alt='/' width={64} height={64} />
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <h3>{e.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Skills