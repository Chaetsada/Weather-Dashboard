
export function changeTimeFormat(date:any){
  
    const options = {
        hour:'2-digit',
        minute:'2-digit',
        hour12:true
    }
    const formattedTime = date.toLocaleString("en-US",options)

    return formattedTime
}

export function changeDateFormat(input:any){
    const Fullday = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const Fullmonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let day = Fullday[input.getDay()];
    let date = input.getDate();
    let month = Fullmonth[input.getMonth()];
    let year = input.getFullYear()

    const formattedDate = day + ' ' + date + ' ' + month + ' ' + year

    return formattedDate
}

export function convertToDate(input:any){
    const Fullday = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const Fullmonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    const newDate = new Date(input);
    
    let day = Fullday[newDate.getDay()];
    let date = newDate.getDate();
    let month = Fullmonth[newDate.getMonth()];
    let year = newDate.getFullYear();

    const formattedDate = day + ' ' + date + ' ' + month + ' ' + year

    return formattedDate
}

export function convertUnixTimeStamp(input:any){
    const newDate = new Date(input * 1000);
    const formattedTime = changeTimeFormat(newDate);

    return formattedTime
}
