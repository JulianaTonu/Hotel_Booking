import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useContext, useEffect, useState, createContext } from "react";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY || "$";
    const navigate = useNavigate();

    const { user } = useUser();
    const { getToken } = useAuth();

    const [isOwner, setIsOwner] = useState(false);
    const [showHotelReg, setShowHotelReg] = useState(false);
    const [searchedCities, setSearchedCities] = useState(false);

    const fetchUser = async (retryCount = 0) => {
        try {
            const token = await getToken();
            const { data } = await axios.get("api/user", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (data.success) {
                setIsOwner(data.role === "hotelOwner");
            } else if (retryCount < 3) {
                setTimeout(() => fetchUser(retryCount + 1), 5000);
            } else {
                toast.error("Failed to fetch user info after multiple attempts.");
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong while fetching user.");
        }
    };

    useEffect(() => {
        let isMounted = true;
        if (user && isMounted) {
            fetchUser();
        }
        return () => {
            isMounted = false;
        };
    }, [user]);

    const value = {
        currency,
        navigate,
        user,
        getToken,
        axios,
        isOwner,
        setIsOwner,
        showHotelReg,
        setShowHotelReg,
        searchedCities,
        setSearchedCities,
        
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
