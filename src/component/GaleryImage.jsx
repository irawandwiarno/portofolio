import React from 'react';

const GalleryImage = ({ imageLinks }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {imageLinks.map(([src, name], index) => (
        <div
          key={index}
          className="flex flex-col items-center overflow-hidden rounded-xl border shadow"
        >
          <div className="relative w-full aspect-square">
            <img
              src={src}
              alt={`image-${index}`}
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
          <div className="w-full px-2 py-1 text-center text-sm font-medium text-gray-700 bg-white">
            {name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryImage;
