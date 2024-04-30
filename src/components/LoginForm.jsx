import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from
"react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const[formData ,  setFormData] = useState({
        email:"" , password:""
    })
    const[showPassword  , setShowPassword]  = useState(false)
    function changeHandler(event) {
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event) {
        
        navigate('/dashboard');
    }
  return (
    <div>        
    <div className='text-white'>
        Login Form
    </div>
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-white'>
                Email Address<sup className='text-red-300'>*</sup>
            </p>
            <input
            required
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter your School Id'
            name='email'
            className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px]'
            />
        </label>

        <label className='w-full relative'>
            <p
            className='text-[0.875rem] text-white'>
                password<sup className='text-red-300'>*</sup>
            </p>
            <input
            required
            type="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            name='password'
            className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px]'
            />
            <span
            className='absolute right-3 top-[34px] cursor-pointer ' onClick={()=> setShowPassword((prev)=>!prev)}>
                {showPassword ? LoginForm(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye
                    fontSize={24} fill='#AFB2BF'
                />)}
            </span>

            <Link to='#'>
                <p className='text-xs mt-1 text-blue-400 flex flex-row-reverse '>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button
        className='bg-yellow-500 rounded-lg font-medium text-black px-[12px] py-[8px] mt-6'>
            Sign In
        </button>
    </form>
    </div>

  )
}

export default LoginForm