import Hotel from "../models/Hotel";

//API const create a new room for hotel
export const createRoom = async (req, res) => {
    try {
        const { roomType, pricePerNight, amenities } = req.body;
        const hotel = await Hotel.findOne({ owner: req.auth.userId })

        if (!hotel) return res.json({ success: false, message: "No Hotel found" })

        // upload images to cloudinary 
        const uploadImages = req.files.map(async (file) => {
            const response = await cloudinary.uploader.upload(file.path)
            return response.secure_url;
        })

        //Wait for all uploads to complete      
        const images = await Promise.all(uploadImages)

        await roomType.create({
            hotel: hotel._id,
            roomType,
            pricePerNight: +pricePerNight,
            amenities: JSON.parse(amenities),
            images,
        })
        res.json({ success: true, message: "Room created SuccessFully" })
    } catch (error) {
        res.json({ success: false, message:error.message})
    }
} 