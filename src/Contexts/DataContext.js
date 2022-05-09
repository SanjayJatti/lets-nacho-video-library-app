import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [ videos, setVideos ] = useState([]);
    useEffect(()=>{
        const getVideos = async()=>{
            try{
                const response = await axios.get("/api/videos");
                setVideos(response.data.videos);
            }
            catch(error){
                console.log(error)
            }
        }
        getVideos()
    }, [])
    return(
       <DataContext.Provider value={{videos, setVideos}}>
           {children}
       </DataContext.Provider>
    )
}

const useData = ()=>useContext(DataContext);

export { DataProvider, useData } 