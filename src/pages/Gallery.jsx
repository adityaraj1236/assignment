// Gallery.js

import React from 'react';
import image1 from '../assets/1653495405267-1.jpg'

const Gallery = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">School Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <GalleryItem
            imageUrl="https://via.placeholder.com/500"
            title="Gallery Item 1"
          />
          <GalleryItem
            imageUrl="https://via.placeholder.com/500"
            title="Gallery Item 2"
          />
          <GalleryItem
            imageUrl="https://via.placeholder.com/500"
            title="Gallery Item 3"
          />
          {/* Add more GalleryItem components for additional gallery items */}
        </div>
      </div>
    </div>
  );
};

const GalleryItem = ({ imageUrl, title }) => {
  return (
    <div className="bg-white rounded overflow-hidden shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none">
          View More
        </button>
      </div>
    </div>
  );
};

export default Gallery;
