
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import ListRoom from './pages/hotelOwner/ListRoom';
import AddRoom from './pages/hotelOwner/AddRoom';
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext';

function App() {

  const isOwnerPath = useLocation().pathname.includes('owner');
  const {showHotelReg} =useAppContext();

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster/>
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg/>}
      {/* {false && <HotelReg />} */}
      <div className='flex-1 min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
