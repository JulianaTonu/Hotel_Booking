import Hotel from "../models/Hotel";
import roomRouter from "../routes/roomRoutes";

// API to create a new room for hotel
export const createRoom = async (res, req) => {
    try {
        const { roomType, pricePerNight, amenities } = req.body;
        const hotel = await Hotel.findOne({ owner: req.auth.userId })

        if (!hotel)
            return res.json({ success: false, message: "No Hotel Found" })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

// API to get all rooms
export const getRooms = async (res, req) => {
    try {
        const rooms = await roomRouter.find({ isAvailable: true }).populate({
            path: 'hotel',
            popular: {
                path: 'owner',
                select: 'image'
            }
        }).sort({ createdAt: -1 })
        res.json({ success: true, rooms });
    } catch (error) {
        res.json({ success: true, rooms })
    }
}


// API to get all rooms for specific hotel
export const getOwnerRooms = async (res, req) => {

}


// API to toggle availability of a room
export const toggleRoomAvailability = async (res, req) => {

}