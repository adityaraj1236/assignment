import React from 'react'
import Card from '../components/Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';
import Data from '../components/FacultyData'
import Faculties from '../components/FacultyData';
import Navbar from '../components/Navbar';


const Faculty = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(Faculties.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >=Faculties.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }

    

  return (
    <div className=' md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
    {/* <Navbar/> */}

        <Card review = {Faculties[index]}></Card>
     

      <div className='flex text-3xl mt-10  gap-3 text-violet-400 font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-violet-500 '>
            <FiChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-violet-500 '>
            <FiChevronRight/>
        </button>
      </div>

    </div>
  )
}

export default Faculty
