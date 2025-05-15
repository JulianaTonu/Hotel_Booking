import React from 'react';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';

const AllRooms = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 md:px-16
         lg:px-24 xl:px-32'>
            <div>
                <div>
                    <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
                    <p className='text-sm md:text-base text-gray-500/90
                    mt-2 max-w-174'>
                        Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
                </div>
                <div className=''>
                    {roomsDummyData.map((room) => (
                        <div key={room._id} className='flex gap-3 my-6'>
                            <img onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }} src={room.images[0]} alt="hotel-img"
                                className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover
                            cursor-pointer'
                            />
                            <div className='md:w-1/2 flex flex-col gap-2'>
                                <p className='text-gray-500'>{room.hotel.city}</p>
                                <p>{room.hotel.name}</p>
                                <div className='flex items-center'>
                                    <StarRating />
                                    <p className='ml-2'>200+ reviews</p>
                                </div>


                                <div className='flex items-center'>
                                    <img src={assets.locationIcon} alt="" />
                                    <p className='text-gray-500 pl-0.5'>{room.hotel.address}</p>
                                </div>
                                {/* {Room Amenities } */}
                                <div className='flex items-center mt-3 mb-6 gap-4'>
                                    {room.amenities.map((item, index) => (
                                        <div key={index} className='flex items-center gap-2 px-2 py-2 rounded-lg bg-[#ebebed] '>
                                            <img src={facilityIcons[item]} alt={item} className='w-4 h-4' />
                                            <p className='text-xs'>{item}</p>
                                        </div>
                                    ))}

                                </div>
                                {/* Room Price per night / */}
                                <p className='text-xl font-medium text-gray-700'>${room.pricePerNight}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default AllRooms;