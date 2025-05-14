import React from 'react';
import { roomsDummyData } from '../assets/assets';
import HotelCard from './HotelCard';

const FeaturedDestination = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-6 mb-20'>
            <div className='flex flex-wrap items-center justify-center gap-6 my-20'>
                {roomsDummyData.slice(0,4).map((room, index)=>(
                    <HotelCard 
                    key={room._id}
                    room={room}
                    index={index}/>
                ))}
            </div>
            <button className='px-4 py-2 text-sm font-medium border border-gray-300 hover:border-gray-50 transition-all cursor-pointer'>View All details</button>
        </div>
    );
};

export default FeaturedDestination;