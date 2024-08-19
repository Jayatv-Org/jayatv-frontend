'use client'
import React from 'react';
import Card from './Card';



interface CardListProps {
  data: {
    Id: number;
    Title: string;
    Description: string;
    ImageUrl: string; // Add this line
  }[];
}

const CardList: React.FC<CardListProps> = ({ data}) => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map(item => (
        <Card
          key={item.Id}
          title={item.Title}
          description={item.Description}
          imageUrl={item.ImageUrl}
        />
      ))}
      
    </div>
    
  );
};

export default CardList;