'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { currentWeatherData } from '@/libs/type'
import { Sunrise, Sunset,Droplets,Wind } from 'lucide-react'
import { convertUnixTimeStamp } from '@/libs/ConvertDateUtils'

interface currentWeatherProps {
    data: currentWeatherData
}

const MainDisplay = ({ data }: currentWeatherProps) => {
    const [imgSrc, setImgSrc] = useState('/clear.png');
    
    const sunRiseTime = convertUnixTimeStamp(data.sys.sunrise)
    const sunSetTime = convertUnixTimeStamp(data.sys.sunset)
    
    useEffect(() => {

        if (data.weather[0].main == 'Clouds') {
            setImgSrc("/clouds.png");
        }else if (data.weather[0].main == 'Clear') {
            setImgSrc("/clear.png");
        }else if (data.weather[0].main == 'Drizzle') {
            setImgSrc("/drizzle.png");
        }else if (data.weather[0].main == 'Mist') {
            setImgSrc("/mist.png");
        }else if (data.weather[0].main == 'Snow') {
            setImgSrc("/snow.png");
        }else if (data.weather[0].main == 'Rain') {
            setImgSrc("/rain.png");
        }

    }, [data])

    return (
        <div className="w-full md:w-[450px] rounded-xl shadow-lg border  ">
            <div className='flex flex-col h-full p-5'>
                <div className='h-full flex flex-col md:justify-between'>
                    <div className='flex flex-col h-2/3 w-full '>
                        <div className='flex w-full justify-between md:px-5 '>
                            {/* MAIN TEMP */}
                            <div className='flex flex-col gap-2 '>
                                <Badge className='w-fit' variant={'outline'}>{data.weather[0].main}</Badge>
                                <h2 className='text-4xl md:text-5xl font-bold'>{data.main.temp.toFixed(1) + " °C"}</h2>
                                <div className='flex items-center'>
                                    <Badge className='w-fit' variant="outline">feel's like</Badge>
                                    : {data.main.feels_like.toFixed(1) + " °C"}
                                </div>
                                <div className='flex items-center'>
                                    <Badge className='w-fit' variant="outline">min</Badge>
                                    : {data.main.temp_min.toFixed(1) + " °C"}
                                </div>
                            </div>
                            {/* WEATHER ICON */}
                            <div className='w-32 h-32 relative'>
                                <Image className='animate-pulse transition-all duration-2000 ' src={imgSrc} alt='weather-icon' fill />
                            </div>
                        </div>
                        <div className='mt-5 md:mt-14 flex '>
                            {/* DETAIL CONTAINER */}
                            <div className='h-fit w-full p-3 grid grid-cols-2 gap-10'>
                                {/* WIND SPEED */}
                                <div className='flex items-center justify-center gap-3'>
                                     <Wind  className='w-12 h-12 text-red-200 dark:text-white' />
                                    <div className='flex flex-col gap-2'>
                                        <Badge className='w-fit' variant="outline">Wind</Badge>
                                        <span className=' md:text-xl font-bold'>{data.wind.speed + " Km/h"}</span>
                                    </div>
                                </div>
                                {/* HUMIDITY */}
                                <div className='flex items-center justify-center gap-3'>
                                    <Droplets  className='w-12 h-12 text-red-200 dark:text-white' />
                                    <div className='flex flex-col gap-2'>
                                        <Badge className='w-fit' variant="outline">Humidity</Badge>
                                        <span className='ms-3 md:text-xl font-bold'>{data.main.humidity + " %"}</span>
                                    </div>
                                </div>
                                {/* SUNRISE */}
                                <div className='flex items-center justify-center gap-3'>
                                    <Sunrise  className='w-12 h-12 text-red-200 dark:text-white' />
                                    <div className='flex flex-col gap-2'>
                                        <Badge variant="outline" className='w-fit'>sunrise</Badge>
                                        <span className='text-xs md:text-xl font-bold ms-1 '>{sunRiseTime}</span>
                                    </div>
                                </div>
                                {/* SUNSET */}
                                <div className='flex items-center justify-center gap-3'>
                                    <Sunset  className='w-12 h-12 text-red-200 dark:text-white' />
                                    <div className='flex flex-col gap-2'>
                                        <Badge variant="outline" className='w-fit'>sunset</Badge>
                                        <span className='text-xs md:text-xl font-bold ms-1 '>{sunSetTime}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* CITY NAME */}
                    <div className='mt-5'>
                        <Badge variant="outline">city</Badge>
                        <h1 className='text-4xl md:text-5xl font-bold '>{data.name}, {data.sys.country}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDisplay