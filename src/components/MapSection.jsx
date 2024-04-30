import React from 'react'
import { IoIosTime } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MapSection = () => {
  return (
    <div className='mt-4'>
        <h3 className='text-center text-xl md:text-5xl font-semibold mt-4'>Learn from the very best</h3>
        <div className='md:flex md:flex-row'>
            <div className='flex flex-col items-center justify-center md:flex-row mt-4  shadow-sm rounded-lg shadow-pink-200 py-2 px-4 md:shadow-none '>
                <diV><IoIosTime className='text-5xl md:text-7xl'/></diV>
                <diV>
                    <h4 className='text-center'>Working hours</h4>
                    <p>Monday: 7:50 am – 2:20 pm</p>
                    <p>Tuesday - Saturday: 7:50 am – 2:40 pm</p>
                </diV>
            </div>
            <div className='flex flex-col items-center justify-center md:flex-row mt-4 md:space-x-4 shadow-sm rounded-lg shadow-white py-2 px-4 md:shadow-none'>
                <diV><MdLocationOn className='text-5xl md:text-7xl'/></diV>
                <diV>
                    <h4 className='text-center'>Our Location</h4>
                    <p>RGI Campus Railmajra,Ropar</p>
                    <div className='flex flex-row space-x-4 mt-2'>
                        <FaPhoneAlt className='text-xl md:text-2xl'/>
                        <p>01881-270791</p>
                    </div>
                    <div className='flex flex-row space-x-4 mt-2'>
                        <MdEmail className='text-xl md:text-2xl'/>
                        <p>principal_ris@rgi.ac.in</p>
                    </div>
                    
                    
                </diV>
            </div>
            
        </div>


        <div></div>
    </div>
  )
}

export default MapSection