import React, { useState } from 'react';
import Title from '../components/Title';
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
    const [bookings, setBookings] = useState(userBookingsDummyData)
    return (
        <div className='my-24 md:my-2 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title title='My Bookings'
                subTitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks'
                align='left' />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b
                border-gray-300 font-medium text-base py-3'>
                    <div className='w-1/3'>Hotels</div>
                    <div className='w-1/3'>date & Timings</div>
                    <div className='w-1/3'>Payment</div>
                </div>

                {bookings.map((booking) => (
                    <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>

                        {/* Hotel Details */}
                        <div className='flex flex-col md:flex-row gap-4'>
                            <img
                                src={booking.room.images[0]}
                                alt="hotel-img"
                                className='w-full md:w-44 h-auto rounded shadow object-cover'
                            />
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <p className='font-playfair text-2xl'>
                                        {booking.hotel.name}
                                        <span className='font-inter text-sm'> ({booking.room.roomType})</span>
                                    </p>
                                    <div className='flex items-center gap-2 text-sm text-gray-600 mt-1'>
                                        <img src={assets.locationIcon} alt="locationIcon" />
                                        <span>{booking.hotel.address}</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm text-gray-600 mt-1'>
                                        <img src={assets.guestsIcon} alt="guestsIcon" />
                                        <span>Guests: {booking.hotel.guests || 'N/A'}</span>
                                    </div>
                                </div>
                                <p className='mt-2 text-base font-semibold'>Total: ${booking.totalPrice}</p>
                            </div>
                        </div>

                        {/* Date & Timing */}
                        <div className=' flex flex-row md:items-start  md:gap-12 gap-8  text-gray-600 mt-4 md:mt-0'>
                            <div className=''>
                                <p>Check-In:</p>
                            <p className='text-gray-500 text-sm'>
                                {new Date(booking.checkInDate).toDateString()}
                            </p>
                            </div>

                            <div>
                                <p> Check-Out:</p>
                            <p className='text-gray-500 text-sm'>
                                {new Date(booking.checkOutDate).toDateString()}
                            </p>
                            </div>
                        </div>

                        {/* Payment Status */}
                        <div className='p-3 items-center justify-center  gap-2 text-sm mt-4 md:mt-0'>
                           <div className='flex items-center  gap-2 '>
                             <div className={`h-2 w-2 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <p className={`${booking.isPaid ? 'text-green-600' : 'text-red-600'}`}>
                                {booking.isPaid ? 'Paid' : 'Unpaid'}
                            </p>
                           </div>
                      <div>
                          {!booking.isPaid && (
                            <button className='px-3 py-1.5 mt-4 text-xs border border-green-400
                            rounded-full hover:bg-gray-50 transition-all cursor-pointer'>
                                Pay Now
                            </button>
                        )}
                      </div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default MyBookings;