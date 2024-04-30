import React from 'react'
import MsImage from  '../assets/Microsoft-showcase-and-British-council-q2dyr8m2gyqvzirp2eldvov24s620u8r384t8y8hgo.png'
const Footer = () => {
  return (
    <div className='mt-6 text-slate-200 p-4 '>
        <div>
            <div className='md:flex md:items-center md:justify-center'>
            <img src={MsImage}/>
            </div>
            <div className='mt-4 p-2'>Our duty is to encourage everyone in their struggle to live up their own highest ideal and strive at the same. Rayat International School is a Co-educational Day Boarding English Medium, CBSE Affiliated school.</div>
        </div>



        <div className='flex flex-col mt-5 items-center md:space-x-4 md:justify-center md:flex-row mb-4'>
            <div>Academics</div>
            <div>Student's Life</div>
            <div>Contact</div>
            <div>About</div>
        </div>

        <hr/>
        <div className='flex items-center text-xs justify-center md:text-sm mt-2'> © 2024 All rights reserved</div>
       
    </div>
  )
}

export default Footer