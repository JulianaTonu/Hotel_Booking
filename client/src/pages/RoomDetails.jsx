import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [])



    return room && (
        <div className='py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32'>
            {/* {Room Details } */}
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2 '>
                <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}
                    <span className='font-inter text-sm'> ({room.roomType})</span>
                </h1>
                <p className='bg-orange-500 rounded-full py-2 px-4 text-white text-xs'>20 % OFF</p>
            </div>
            {/* {Room Rating } */}
            <div className='flex items-center '>
                <StarRating />
                <p className='pl-2'>200+ reviews</p>
            </div>
            {/* {hotel address } */}
            <div className='flex text-gray-500 py-2'>
                <img src={assets.locationIcon} alt="" />
                <p className='font-inter text-sm pl-1'>{room.address}</p>
            </div>

            {/* {Room Image } */}
            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt="Room Image"
                        className='w-full rounded-xl shadow-lg object-cover'
                    />
                </div>
                <div className='grid grid-cols-2 gap-2 lg:w-1/2 w-full'>
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img onClick={() => setMainImage(image)}
                            key={index} src={image} alt="Room Image"
                            className={`w-full rounded-xl shadow-md object-cover cursor-pointer
                             ${mainImage === image && 'outline-3 outline-orange-500'}`}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
