//Conponents
import MainDisplay from "@/components/MainDisplay";
import ForecastDisplay from "@/components/ForecastDisplay";
import Header from "@/components/Header"
//config file
import { DEFAULT_LOCATION } from '@/libs/config';
//server action
import { getCurrentWeather } from "@/actions/getCurrentWeather";
import { getForecastWeather } from "@/actions/getForecastWeather";

import { HourlyForecastResponse, currentWeatherData } from "@/libs/type";




export default async function Home() {
  const { lat, lon } = DEFAULT_LOCATION.coord;


  const CurrentWeatherRequest: currentWeatherData = await getCurrentWeather({ lat, lon })
  const ForecastWeatherRequest: HourlyForecastResponse = await getForecastWeather({ lat, lon });



  return (
    <div className="min-h-screen">
      <div className="h-fit md:h-screen md:container flex flex-col justify-center gap-3 p-5">
        <Header />
        <div className="flex flex-col md:flex-row gap-3">
          <MainDisplay data={CurrentWeatherRequest} />
          <ForecastDisplay data={ForecastWeatherRequest} />
        </div>
      </div>
    </div>

  )
}


