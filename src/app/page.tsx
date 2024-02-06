import Forecast from "@/components/Forecast";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";


import Image from "next/image";

export default function Home() {
  
  return (
    <div className="min-h-screen">
      <div className="container h-screen mx-auto py-24">
        {/* APP */}
        <main className="w-full h-full bg-backgroud p-5 rounded-2xl border flex flex-col overflow-hidden">
          {/* HEADER */}
          <header className="h-[70px] w-full flex items-center border rounded-xl p-5 mb-3">
            <div className="w-fit flex items-center gap-3">
              <ThemeToggle/>
              <h3 className="text-xl">19 : 32 AM</h3>
              <Separator  className="w-12"  />
              <h3 className="text-xl">12/Aug/2536</h3>
            </div>
            <div className="flex-1 flex items-center justify-end gap-5" >
              <Input className="max-w-[300px]" placeholder="Search Location..." />
              <Button>Seach Location</Button>
              <Button>Current Location</Button>
            </div>
          </header>
          <div className="w-full h-full flex gap-5">
            {/* MAIN DISPLAY */}
            <section className="h-full min-w-[350px] w-[500px]   rounded-xl border flex flex-col justify-center items-center gap-7">
              <div className="w-[150px] h-[150px] relative">
                <Image className="w-full h-full object-cover  animate-pulse" src='/clear.png' alt="weather-icon" fill />
              </div>
              <h2 className="text-5xl font-bold">Bangkok</h2>
              <span className="text-3xl">23 °C</span>
              <div className="flex w-full mt-10">
                <div className="flex-1 flex items-center justify-center gap-5">
                  <Image src='/humidity.png' alt="humidity-icon" width={70} height={70} />
                  <div className="flex flex-col gap-3">
                    <h4 className="text-2xl font-bold">Humidity</h4>
                    <span className="text-xl">84%</span>
                  </div> 
                </div>
                <div className="flex-1 flex items-center justify-center gap-5">
                  <Image src='/wind.png' alt="wind-icon" width={70} height={70} />
                  <div className="flex flex-col gap-3">
                    <h4 className="text-2xl font-bold">WIND</h4>
                    <span className="text-xl">12 KM/H</span>
                  </div>
                </div>
              </div>
            </section>
            {/* 4 DAY FORECAST */}
            <section className="flex-1 h-full  flex flex-col gap-3 overflow-hidden">
              <Forecast/>
              <Forecast/>
              <Forecast/>
              <Forecast/>
              <Forecast/>
            </section>
            {/* DATE AND TIME */}
          </div>
        </main>
      </div>
    </div>
  );
}
