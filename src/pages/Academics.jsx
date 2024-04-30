// Academics.js

import React from 'react';

const Academics = () => {
  return (
    <div className="bg-gray-900 text-gray-200 py-8 h-[100vh]" >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Academics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h2 className="text-xl font-bold mb-4">Primary School</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque libero a purus feugiat convallis. Fusce posuere justo id eros iaculis vulputate.</p>
            <ul className="mt-4">
              <li className="flex items-center text-gray-300">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Curriculum: CBSE
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Classes: 1 to 5
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Subjects: English, Mathematics, Science, Social Studies, etc.
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h2 className="text-xl font-bold mb-4">High School</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque libero a purus feugiat convallis. Fusce posuere justo id eros iaculis vulputate.</p>
            <ul className="mt-4">
              <li className="flex items-center text-gray-300">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Curriculum: CBSE
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Classes: 6 to 10
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Subjects: English, Mathematics, Science, Social Studies, etc.
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h2 className="text-xl font-bold mb-4">Senior Secondary School</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque libero a purus feugiat convallis. Fusce posuere justo id eros iaculis vulputate.</p>
            <ul className="mt-4">
              <li className="flex items-center text-gray-300">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Curriculum: CBSE
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Classes: 11 and 12
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                Streams: Science (PCM, PCB), Commerce, Humanities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
