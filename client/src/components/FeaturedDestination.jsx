import React from 'react';
import { roomsDummyData } from '../assets/assets';
import HotelCard from './HotelCard';
import Title from './Title';
import { useNavigate } from 'react-router-dom';

const FeaturedDestination = () => {
const navigate =useNavigate()

    return (
        <div className='flex flex-col items-center justify-center gap-6 my-20'>

            <Title title={"Featured Destination"} subTitle={"Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experience"} />

            <div className='flex flex-wrap items-center justify-center gap-6 my-8'>
                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <HotelCard
                        key={room._id}
                        room={room}
                        index={index} />
                ))}
            </div>
            <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='px-4 py-2 text-sm font-medium border border-gray-300 hover:border-gray-500 transition-all cursor-pointer'>View All Destinations</button>
        </div>
    );
};

export default FeaturedDestination;