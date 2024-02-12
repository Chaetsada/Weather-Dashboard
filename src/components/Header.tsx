'use client'
import React, { useState, FormEvent } from "react";
import ThemeToggle from "@/components/ThemeToggle";
//UI
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
//icon
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { getGeoCode } from "@/actions/getGeoCode";

import { changeTimeFormat, changeDateFormat } from "@/libs/ConvertDateUtils";

const Header = () => {
  const router = useRouter();
  const [location,setLocation] = useState('');

  let initDate = new Date();
  const formattedTime = changeTimeFormat(initDate);
  const formattedDate = changeDateFormat(initDate);
    
  const handleSearch = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { lat,lon } = await getGeoCode(location);
    router.push(`/Search?lat=${lat.toString()}&lon=${lon.toString()}`);
    setLocation('');
  }

  return (  
    <header className="w-full p-5 rounded-xl flex items-center border shadow-md">
      {/* DATE */}
      <div className="flex-1 hidden md:block ">
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <h4>{formattedTime}</h4>
          <Separator className="w-10" />
          <h4>{formattedDate}</h4>
        </div>
      </div>
      {/* INPUT */}
      <form className="flex-1 flex gap-3" onSubmit={handleSearch}>
        <Input
          type="text" 
          placeholder="Search..." 
          onChange={(e)=>setLocation(e.target.value)}
          value={location}
          required
          />
        <Button  className="flex gap-2 border" type="submit" >
          <span className="hidden md:block">Search Location </span>
          <Search />
        </Button>
      </form>
    </header>
  );
};

export default Header
