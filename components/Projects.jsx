import React from 'react'
import ProjectImage from '../public/assets/wal1.jpg'
import ProjectItem from './ProjectItem'
const Projects = () => {
    return (
        <div className='w-full'>
            <div id='projects' className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem
                        title='Fitpit'
                        backgroundImage={ProjectImage}
                        projectUrl='/fitpit'
                        language='React Native'
                    />
                    <ProjectItem
                        title='Furn'
                        backgroundImage={ProjectImage}
                        projectUrl='/furn'
                        language='React Js'
                    />

                </div>
            </div>
        </div>
    )
}

export default Projects