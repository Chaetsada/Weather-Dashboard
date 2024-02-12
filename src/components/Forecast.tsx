'use client'
import Image from 'next/image'
import React,{ useEffect,useState} from 'react'
import { Badge } from './ui/badge'
import {  convertToDate } from '@/libs/ConvertDateUtils'
import { HourlyForecastData } from '@/libs/type'

interface forcostDataProps {
  data: HourlyForecastData
}

const Forecast = ({ data }: forcostDataProps) => {
  const [imgSrc,setImgSrc] = useState('/clear.png');
  
  const formattedDate = convertToDate(data.dt_txt);
  
  useEffect(() => {

      if(data.weather[0].main == 'Clouds'){
          setImgSrc("/clouds.png");
      }
      if(data.weather[0].main == 'Clear'){
          setImgSrc("/clear.png");
      }
      if(data.weather[0].main == 'Drizzle'){
          setImgSrc("/drizzle.png");
      }
      if(data.weather[0].main == 'Mist'){
          setImgSrc("/mist.png");
      }
      if(data.weather[0].main == 'Snow'){
          setImgSrc("/snow.png");
      }
      if(data.weather[0].main == 'Rain'){
          setImgSrc("/rain.png");
      }

  },[data])

  return (
    <>
      <div className="flex-1 p-5 rounded-xl flex flex-col md:flex-row items-center border shadow-md">
        <div className='flex-1 flex items-center gap-5'>
          {/* DATE */}
          <div className='flex flex-col md:flex-row items-center gap-3'>
            <h4>{formattedDate}</h4>
          </div>
          <div className='flex items-center flex-wrap gap-5'>
            {/* WEATHER ICON */}
            <div className='w-14 h-14 relative mb-5'>
              <Image className='animate-pulse transition-all' src={imgSrc} alt='weather-icon' fill />
            </div>
            {/* TEMP_MAX */}
            <div className='flex-1 flex items-center'>
              <h2 className='text-2xl font-bold'>{Math.round(data.main.temp) + ' °C'}</h2>
            </div>
          </div>
        </div>
        <div className='flex-1  flex items-center justify-center flex-wrap gap-3  md:gap-5'>
          {/* FEEL'S LIKE */}
          <div className='flex flex-col items-center justify-center gap-2'>
            <Badge className='w-fit' variant="outline">feel's like</Badge>
            <span className='text-xs md:text-base'>{Math.round(data.main.feels_like) + ' °C'}</span>
          </div>
          {/* TEMP_MIN */}
          <div className='flex flex-col items-center justify-center gap-2'>
            <Badge className='w-fit' variant="outline">min</Badge>
            <span className='text-xs md:text-base'>{Math.round(data.main.temp_min) + ' °C'}</span>
          </div>
          {/* WIND SPEED */}
          <div className='flex flex-col items-center justify-center gap-2'>
            <Badge className='w-fit' variant="outline">Wind</Badge>
            <span className='text-xs md:text-base'>{data.wind.speed + " km/h"}</span>
          </div>
          {/* HUMIDITY */}
          <div className='flex flex-col  items-center justify-center gap-2'>
            <Badge className='w-fit' variant="outline">Humidity</Badge>
            <span className='text-xs md:text-base'>{data.main.humidity + ' %'}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forecast
