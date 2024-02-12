"use server"
export const getCurrentWeather = async({ 
        lat,
        lon,
    }:{
        lat:string,
        lon:string
    }) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.NEXT_APP_API_KEY}`);
        if(!res.ok){
            throw new Error("Error fetching current weather")
        }
        return res.json();
}