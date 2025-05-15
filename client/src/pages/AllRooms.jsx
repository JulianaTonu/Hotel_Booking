import React, { useState } from 'react';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';

const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="checkbox" checked={selected} 
            onChange={(e)=>onChange(e.target.checked, label)}
             />

             <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="radio" name='sortOption' checked={selected} 
            onChange={()=>onChange(label)}
             />
             <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const AllRooms = () => {

    const [openFilters, setOpenFilters] = useState(false)
    const navigate = useNavigate()

    const roomTypes = [
        "Single Bed",
        "Family Suite",
        "Double Bed",
        "Luxury Room"
    ];

    const priceRanges = [
        "0 to 500",
        "500 to 1000",
        "1000 to 2000 ",
        "2000 to 3000 "
    ];
    const sortOptions = [
        "Price Low to High",
        "Price high to Low",
        "Newest First",
    ];

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
                        <div key={room._id} className='md:flex md:justify-center px-2  gap-3 my-6'>
                            <img onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }} src={room.images[0]} alt="hotel-img"
                                className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover
                            cursor-pointer'
                            />
                            <div className='md:w-1/2 flex flex-col gap-2'>
                                <p className='text-gray-500 mt-2'>{room.hotel.city}</p>
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
                                <div className='flex items-center mt-3 mb-4 gap-4'>
                                    {room.amenities.map((item, index) => (
                                        <div key={index} className='flex items-center gap-2 px-2 py-2 rounded-lg bg-[#ebebed] '>
                                            <img src={facilityIcons[item]} alt={item} className='w-4 h-4' />
                                            <p className='text-xs'>{item}</p>
                                        </div>
                                    ))}

                                </div>
                                {/* Room Price per night / */}
                                <p className='text-xl font-medium text-gray-700'>${room.pricePerNight}/ night</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* {filters } */}
            <div className='bg-white w-80 border border-gray-800 text-gray-600 max-lg:mb-8 sm:ml-6 md:ml-0 min-lg:mt-16'>
                <div className='flex justify-between px-4 py-2'>
                    <p className='text-base font-medium'>FILTERS</p>
                    <div className='text-xs cursor-pointer'>
                        <span onClick={() => setOpenFilters(!openFilters)}
                            className='lg:hidden'>
                            {openFilters ? 'HIDE' : 'SHOW'}
                        </span>
                        <span className='hidden lg:block'>CLEAR</span>

                    </div>
                </div>

                <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'}
                overflow-hidden transition-all duration-700`}>
                    
                    <div className='px-5 pt-5'>
                        <p className='font-medium text-gray-800 pb-2'>Popular filters</p>
                        {roomTypes.map((room, index)=>(
                            <CheckBox key={index} label={room}/>
                        ))}
                    </div>

                    <div className='px-5 pt-5'>
                        <p className='font-medium text-gray-800 pb-2'>Price Ranges </p>
                        {priceRanges.map((range, index)=>(
                            <RadioButton key={index} label={`$ ${range}`}/>
                        ))}
                    </div>

                        <div className='px-5 pt-5 mb-2'>
                        <p className='font-medium text-gray-800 pb-2'>Sort By</p>
                        {sortOptions.map((room, index)=>(
                            <RadioButton key={index} label={room}/>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AllRooms;