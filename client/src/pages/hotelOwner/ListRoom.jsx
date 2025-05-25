import React, { useState } from 'react';
import { roomsDummyData } from '../../assets/assets';
import Title from '../../components/Title';

const ListRoom = () => {

    const [rooms, setRooms] = useState(roomsDummyData)
    return (
        <div>
            <Title align='left' font='outfit' title='Room Listings'
                subTitle='View, edit, or manage all listed rooms.keep the information up-to-date to provide the best experience for users.'
            />

            <p className='text-gray-500'>All Rooms</p>
            <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'>
                <table className='w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='py-3 px-4 text-gray-800 font-medium'> Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Facility</th>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Price / night </th>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rooms.map((item, index)=>(
                                <tr key={index}>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                        {item.roomType}
                                    </td>

                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                                        {item.amenities.join(',')}
                                    </td>

                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                        {item.pricePerNight}
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListRoom;