import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast"
import { createContext } from "react";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY || "$";
    const navigate = useNavigate()

    const { user } = useUser()
    const { getToken } = useAuth()

    const [isOwner, setIsOwner] = useState(false)
    const [showHotelReg, setShowHotelReg] = useState(false)
    const [searchedCities, setSearchedCities] = useState(false)


    const fetchUser = async () => {
        try {
           const {data}= await axios.get('api/user', {
                     headers: { Authorization: `Bearer ${await getToken()}` }
             });
            if (data.success) {
                setIsOwner(data.role === "hotelOwner");
            } else {
                setTimeout(() => {
                    fetchUser()
                }, 5000)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

useEffect(()=>{
    if(user) {
        fetchUser();
    }
},[user])

    const value = {
        currency, navigate, user, getToken, axios,
        isOwner, setIsOwner, showHotelReg, setShowHotelReg,
        searchedCities, setSearchedCities


    }

    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)