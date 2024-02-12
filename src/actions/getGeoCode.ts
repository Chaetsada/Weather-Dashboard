"use server"
export const getGeoCode = async(location:string) =>{
    const API_KEY = process.env.NEXT_APP_API_KEY
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`);
    const data = await res.json();
    if(!res.ok){
        throw new Error("Failed to get Geocode");
    }
    return data[0]; 
}