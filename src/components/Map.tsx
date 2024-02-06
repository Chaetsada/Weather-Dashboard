'use client'
import { GoogleMap , useLoadScript, Marker} from  "@react-google-maps/api";

const Map = () =>{
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_API_KEY!,
    });

    if(!isLoaded) return <div>Loading....</div>
    
    return (
        <GoogleMap zoom={10} center={{lat:17.22,lng:102.67}} mapContainerStyle={{width:'100%',height:'100%'}}></GoogleMap>
    )
}

export default Map