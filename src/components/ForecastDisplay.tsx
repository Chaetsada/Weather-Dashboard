import React from 'react'
import Forecast from '@/components/Forecast';
import { HourlyForecastResponse } from '@/libs/type';

interface foreCastWeatherProps {
    data: HourlyForecastResponse
}

const ForecastDisplay = ({ data }: foreCastWeatherProps) => {
    //API call 5 day / 3 hour forecast
    //So I've to use cnt=40 in API_URL  for cover 5 days forecast data
    //1 day = 8 sample data (24 hour/3 = 8 sample data)
    //5 days = 40 sample data
    //data.list[0] = current weather(today) start at 15:00 AM //day 0
    //data.list[0] + 8 = weather forecast next day at 12.00 AM //day 1
    //data.list[7] + 8 = weather forecast next day at 12.00 AM //day 2
    //....
    return (
        <div className='flex-1 flex flex-col h-full gap-3'>
            <Forecast data={data.list[7]} />
            <Forecast data={data.list[15]} />
            <Forecast data={data.list[23]} />
            <Forecast data={data.list[31]} />
            <Forecast data={data.list[39]} />
        </div>
    )
}

export default ForecastDisplay