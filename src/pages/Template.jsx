import React from 'react'
// import Signup from '../pages/Signup'
// import frameImage from '../assets/frame.png'
// import SignupForm from './SignupForm'
import LoginForm from '../components/LoginForm'
import {FcGoogle} from "react-icons/fc"

const Template = ({title , desc1 , desc2  ,image ,formtype ,setIsLoggedIn}) => {
    // console.log("ye rha mera form type");
    // console.log(formtype);
  return (
    <div className='flex flex-col items-center md:flex-row max-w-[11/12] md:justify-around py-4  md:gap-x-12 gap-y-8  justify-between h-full bg-black '>
    
        <div className='px-16 flex flex-col  mt-8'>
        
        

                <h1
                className='text-white font-semibold text-[1.875rem] leading-[2.375rem] '>{title}</h1>
                <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='text-gray-400'>{desc1}</span><br></br>
                    <span className='text-blue-400 italic'>{desc2}</span>
                </p>
                {formtype==="signup" ?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
                
        
        <div className='justify-between flex w-full items-center my-4 gap-x-2 '>
        <div className='w-full h-[1px] bg-gray-400'></div>
        <div className='text-gray-500'>OR</div>
        <div className='w-full h-[1px] bg-gray-400'></div>
        </div>
       
        <button className='w-full flex justify-center items-center rounded-lg font-medium text-white border border-gray-500 px-[12px] py-[8px] gap-x-2 mt-6'>
        <FcGoogle/>
           <p> Sign in with Google </p>
        </button>
        </div>

       
    </div>
  )
}

export default Template