import React from 'react'
import { MdArrowDownward } from "react-icons/md";

const Help = () => {
  return (
    <div className='mt-6 bg-red-100 p-2 text-gray-600 rounded-lg relative animate-pulse'>
        <p className=' justify-center items-center'>Need help? Call the Microsoft showcase school 24/7 at 62800-86537</p>
        <div className='text-2xl mt-4 md:text-5xl text-center flex justify-center items-center  left-28 animate-bounce top-16'>
            <MdArrowDownward/>
        </div>
    </div>
  )
}

export default Help