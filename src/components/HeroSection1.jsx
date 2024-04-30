import React from 'react'
import dance from '../assets/MG_5369-scaled.jpg'
// import ReactTyped from "react-typed";
import header from '../assets/header-img.svg'

const HeroSection1 = () => {
  return (
   <div className='flex flex-col mt-7 leading-8 text-center md:flex md:flex-row md:justify-around  
   md:max-w-3xl md:space-x-8'>


        {/* image section  */}
            <div>
                <img src={header} alt='school images'
                    loading='lazy'
                    className='  rounded-lg  scale-75 z-0 animate-pulse transition-all translate-y-8 md:h-[780px] md:w-[780px]'
                />
            </div>
        
        {/* paragraph section  */}
            <div className='flex flex-col border-2 border-gray-700 p-4 rounded-lg  '>
                <h2 className='text-lg font-extrabold text-center'>News and Events</h2>
                <p>Workkshop on Positive Parenting at RTS on 6 April , 2024</p>
                <p>Beginning of Session 2024-25 from 4th April , 2024</p>
                <p>SA-2 examination on 2nd March , 2024</p>
                <p>Republic day celebration at RIS</p>
                <p>CBSE workshop for teachers to be held on 9th Jan , 2024</p>
                <p>Free medical camp organised at Rayat Inno Kids , Ghanauli on 15th december , 2023 for children below 6 years of age</p>
                <p>Annual Sports Meet 2023</p>
            </div>
   </div>
  )
}

export default HeroSection1