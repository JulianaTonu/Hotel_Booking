import Hotel from "../models/Hotel";

// API to create a new room for hotel
export const createRoom = async (res,req)=>{
    try {
        const {roomType, pricePerNight, amenities} =req.body;
        const hotel =await Hotel.findOne({owner:req.auth.userId})

        if(!hotel)
            return res.json({success:false, message:"No Hotel Found"})
    } catch (error) {
        
    }
}

// API to get all roooms
export const getRooms = async (res,req)=>{

}


// API to get all roooms for specific hotel
export const getOwnerRooms = async (res,req)=>{
    
}


// API to toggle availability of a room
export const toggleRoomAvailability= async (res,req)=>{

}