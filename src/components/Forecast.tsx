'use client'
import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'

const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]
console.log(weekday)

const Forecast = () => {
  return (
    <>
      <div className="flex-1 h-full rounded-xl border flex justify-center items-center px-5 ">
       
          <div className='flex-1 flex justify-start gap-6'>
            <div className='flex flex-col'>
              <span className='text-2xl'>Wed</span>
              <span>22-aug-2023</span>
            </div>

           <div className='flex items-center gap-5'>
            <div className='w-14 h-14 relative mb-5'>
                <Image src='/mist.png' alt='' fill />
              </div>

              <div className='flex-1'>
                <h2 className='text-2xl font-bold'>22°C</h2>
              </div>
           </div>
        

          </div>


          

          <div className='flex-1 flex items-center justify-end gap-3'>

            <div className='flex items-center'>
              <h4 className='font-bold'>Wind</h4>
              <span className='text-xl'>12 Km/h</span>
            </div>

            <div className='flex  items-center'>
              <h4 className='font-bold'>Hum</h4>
              <span className='text-xl'>39%</span>
            </div>

          </div>
  
        </div>
   
    </>
  )
}

export default Forecast