"use client"
import Image from 'next/image'
import React from 'react'
import ProjectImage from '../../public/assets/wal1.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
const fitpit = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-white/40' />
        <Image className='absolute z-[-1]' layout='fill' objectFit='cover' src={ProjectImage} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] p-2 text-white'>
          <h2 className='py-2'>FitPit</h2>
          <h4>React Native / Node Js / MongoDB</h4>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ab iusto voluptates at aperiam deleniti facilis tempore, officiis placeat nisi. Ullam molestias repellat harum reprehenderit, sapiente eos veritatis distinctio quas similique tempore facere eveniet laborum blanditiis perferendis quasi officia, itaque ex dolores nostrum voluptates nihil aperiam odit repudiandae? Aperiam non hic dolores obcaecati, ut ab.</p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React Native</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React Native</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React Native</p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
        <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default fitpit