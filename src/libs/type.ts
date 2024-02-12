export type Coordinates ={
    lon: string,
    lat: string
}
export type Location = {
    city: string
    coord: Coordinates
}


export type currentWeatherData = {
    coord: {
        lon: number
        lat: number
      }
      weather: {
        id: number
        main: string
        description: string
        icon: string
      }[]
      base: string
      main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
      }
      visibility: number
      wind: {
        speed: number
        deg: number
      }
      clouds: {
        all: number
      }
      dt: number
      sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
      }
      timezone: number
      id: number
      name: string
      cod: number
}    

export type weatherForecastData = {
    list: any
    dt: number
    main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      humidity: number
    }
    weather: {
      id: number
      main: string
      description: string
      icon: string
    }[]
    wind: {
      speed: number
      deg: number
      gust: number
    }
    visibility: number
    dt_txt: string
 }




export type HourlyForecastData = {
  dt: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  visibility: number
  pop: number
  rain?: {
    "1h": number
  }
  sys: {
    pod: "d" | "n"
  }
  dt_txt: string
}
export type HourlyForecastResponse = {
  cod: string
  message: number
  cnt: number
  list: HourlyForecastData[]
  city: City
}


export type City = {
    id: number
    name: string
    coord: {
      lon: number
      lat: number
    }
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}