import React from 'react'
import logo from '..//assets/rsi-logo-transparent-150x150.png'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex flex-col justify-evenly items-center text-white bg-slate-200 h-full text-2xl md:text-3xl mt-0  text-md'>
    <Link to='/'>
    <img src={logo}
    height={80}
    width={80}
    className='mb-4 mt-4'
    />
    </Link>
    <div className='grid grid-template-cols-1 place-content-evenly md:grid-cols-3 md:space-x-8 space-y-5 max-w-7xl'>
        <div className='border-1 border-gray-900 px-3 py-28 rounded-lg select-none bg-gray-700 hover:scale-110 border-none'>Admit Card</div>
        <div className='border-2 border-gray-900 px-5 py-28 rounded-lg select-none bg-gray-700 hover:scale-110  border-none'>Assignment</div>
        <div className='border-2 border-gray-900 px-5 py-28 rounded-lg select-none bg-gray-700 hover:scale-110 border-none'>Attendance</div>
        <div className='border-2 border-gray-900 px-5 py-28 rounded-lg select-none bg-gray-700 hover:scale-110 border-none'>Circular</div>
        <div className='border-2 border-gray-900 px-5 py-28 rounded-lg select-none bg-gray-700 hover:scale-110 border-none'>Fees</div>
        <div className='border-2 border-gray-900 px-5 py-28 rounded-lg select-none bg-gray-700 hover:scale-100 border-none'>My Report Card</div>
        <div className='border-2 border-gray-900 px-5 py-28 rounded-lg select-none bg-gray-700 hover:scale-110 border-none'>My Report Card</div>
        <div className='border-2 border-gray-900 px-5 py-28 rounded-lg select-none bg-gray-700 hover:scale-110 border-none'>Greviance Complaint</div>
        <div className='border-2 border-gray-900 px-5 py-28 rounded-lg select-none bg-gray-700 hover:scale-100 border-none'>School Info</div>
    </div>
        
    </div>
  )
}

export default Dashboard