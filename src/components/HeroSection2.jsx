import React from 'react'
import Button from './Button'

const HeroSection2 = (props) => {
  return (
        <div>
        <div className='flex flex-col items-center  mt-4 md:flex-row md:items-center md:justify-evenly space-y-4'>

            <div className='border-2 border-gray-600 p-2 rounded-full hover:bg-white hover:text-black'>
            <Button value={'School Gallery'}/>
            </div>
            <div className='border-2 border-gray-600 p-2 rounded-full hover:bg-white hover:text-black'>
            <Button value= {'Circulars'} />
            </div>
            </div>
            <div className='flex '>
            <p className='font-thin mt-4 p-2'>RIS organises many events where students can participate. These events help the students to discover and showcase their talents. With the proper planning teachers plan such creative activities that strengthen the school community. School events help a 'Sense of Community' . In this section everyone can watch the different activities or events which are conducted in the school.</p>
            </div>

            <div className='border-2 border-gray-800 rounded-lg p-2 leading-7 bg-gray-900  shadow-lg shadow-white mt-5 '>
                <h3 className='text-xl mt-2 font-extrabold mb-4 md:text-center md:text-3xl'>What Makes us the Best in City</h3>
                <p className='p-4'>The school possesses all the infrastructure and facilities necessary for a modem academic institution. Apart from the concrete, the school also has lush green environs. This school is a platform for total growth and development of the young entrants from nure ery onwards. Thus with this step we look for hustle free future</p>
                <div className='border-2 border-gray-600 hover:bg-black px-3 py-2 rounded-lg h-15 w-56 md:ml-72'>
                <Button value={'Get your Free Counselling'}/>
                </div>


            </div>
        </div>
  )
}

export default HeroSection2