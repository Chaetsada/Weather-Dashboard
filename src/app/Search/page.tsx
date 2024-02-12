
//Conponents
import MainDisplay from "@/components/MainDisplay";
import ForecastDisplay from "@/components/ForecastDisplay";
import Header from "@/components/Header"
//config file

//server action
import { getForecastWeather } from "@/actions/getForecastWeather";
import { getCurrentWeather } from "@/actions/getCurrentWeather";
//type
import { HourlyForecastResponse, currentWeatherData } from "@/libs/type";

interface searchParamsProps {
  lat: string
  lon: string
}

export default async function SearchPage({ searchParams }:{searchParams:searchParamsProps}) {
    const { lat , lon } = searchParams;
    
    const CurrentWeatherRequest:currentWeatherData = await getCurrentWeather({ lat,lon });
    const ForecastWeatherRequest:HourlyForecastResponse  = await getForecastWeather({ lat,lon });

  return (  
    <div className="min-h-screen">
      <div className="md:container h-fit md:h-screen mx-auto md:py-14">
        <main className="w-full h-full border rounded-2xl flex flex-col gap-5 p-5">
          <Header/>
          <div className="w-full h-full flex flex-col md:flex-row gap-5">
            <MainDisplay data={CurrentWeatherRequest} />
            <div className='flex-1 h-full'>
              <ForecastDisplay data={ForecastWeatherRequest}/>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

