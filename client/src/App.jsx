
import { useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const isOwnerPath = useLocation().pathname.includes('owner');
  return (
    <div>
      <h1 className='text-red-600'>Hotel Booking</h1>
      {!isOwnerPath && <Navbar />}
    </div>
  )
}

export default App
