"use server"
export const getForecastWeather = async({
        lat,
        lon,
    }:{
        lat:string,
        lon:string
    }) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40&units=metric&appid=${process.env.NEXT_APP_API_KEY}`);
        if(!res.ok){
            throw new Error("Failt to fetch weather forecast")
        };
        return res.json();
}
