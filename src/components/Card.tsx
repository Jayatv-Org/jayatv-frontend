import React from 'react';
import Image from 'next/image'; // Import the 'Image' component from the appropriate library

interface CardProps {
  title: string;
  description: string;
  imageUrl:string;
}


const Card: React.FC<CardProps> = ({ title, description,imageUrl }) => {
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
        {imageUrl && (
        <div className="mb-4">
          <Image
            src={imageUrl}
            alt={title}
            width={500} // Set a width according to your design needs
            height={300} // Set a height according to your design needs
            className="rounded-lg"
            objectFit="cover" // Ensures the image covers the area
          />
        </div>
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>

    </div>
  );
};

export default Card;