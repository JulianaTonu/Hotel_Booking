import Room from "../models/Room";

const checkAvailability =async ({checkInDate, checkOutDate, room})=>{
    try {
        const bookings =await Booking.find({
            room,
            checkInDate:{$lte: checkOutDate},
            checkOutDate:{$gte: checkInDate}
        });
        const isAvailable = bookings.length === 0;
        return isAvailable;
    } catch (error) {
        console.error(error.message)
    }
}

// API to check availability of room 
//POST /api/bookings/check-availability

export const checkAvailabilityAPI =async (req, res)=>{
    try {
        const {room, checkInDate, checkOutDate} =req.body;
        const isAvailable =await checkAvailability({ checkInDate, checkOutDate, room})
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

//API to create a new booking
//Post /api/bookings/book

export const createBooking = async(req,res)=>{
    try {
        const {room, checkInDate,checkOutDate,guests}=req.body;
        const user =req.user._id;

        //Before Booking check availability
        const isAvailable = await checkAvailability({
            checkInDate,
            checkOutDate,
            room
        });

        if(isAvailable){
            return res.json({success:false, message:"Room is not available"})
        }

    // Get total price from Room
    const roomData =await Room.findById(room).populate("hotel");
    let totalPrice =roomPrice =roomData.pricePerNight;

//calculate totalPrice based on nights

const checkIn =new Date(checkInDate)
const checkOut =new Date(checkOutDate)
const timeDiff = checkOut.getTime()- checkIn.getTime();

    } catch (error) {
        
    }
}