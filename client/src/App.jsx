
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';

function App() {

  const isOwnerPath = useLocation().pathname.includes('owner');
  return (
    <div className="flex flex-col min-h-screen">
      {!isOwnerPath && <Navbar />}
      <div className='flex-1'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
