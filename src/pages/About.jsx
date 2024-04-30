

// AboutUs.js

import React from 'react';
import principle from '../assets/MG_7124-2-scaled.jpg'

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center">
            <img
              src="/principal.jpg" // Replace with your principal's image URL
              alt="Principal"
              className="rounded-full h-48 w-48 mb-4 animate-pulse"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Principal's Desk</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget magna id purus gravida consequat.
                Nullam dignissim justo vel magna vehicula, a facilisis velit lacinia. Donec vel eros quis orci tincidunt
                consectetur. Proin id placerat justo.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={principle} // Replace with your school's image URL
              alt="School Building"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
