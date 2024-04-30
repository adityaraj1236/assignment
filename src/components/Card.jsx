import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import Navbar from './Navbar';


const Card = (props) => {
    let review = props.review;
  return (
    <>
    <Navbar/>
    <div className='flex flex-col md:relative'>
    
    
      
      
      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>


      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>

      <div  className='text-violet-400 mx-auto mt-5'>
        <FaQuoteRight/>
      </div>
    <div></div>
    </div>
    </>
  )
}

export default Card
