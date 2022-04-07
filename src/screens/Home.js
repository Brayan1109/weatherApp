import { useEffect, useState } from "react";
import CardIcon from "../components/CardIcon";
import CardInfo from "../components/CardInfo";
import CardLocation from "../components/cardLocation";
import CardTemperature from "../components/CardTemperature";
import geolocalizacion from "../services/dataGeolocation";
import '../style/cardStyle.css'
import spinner from '../assets/logo/spinner.png'

// El home es el screen que se renderiza al inicio

const Home = () => {

    // se hace por lo menos un llamado al inicio de la app con el useEffect
    
    const [data, setData] = useState(false)

    useEffect(() => {
      geolocalizacion().then(res => {
          setData(res)
          console.log(res)
      })
    }, [])

    return(

        // Ternario que renderiza condicionalmente, espera hasta tener la información completa para 
        // renderizar la section, mientras muestra la imagen de cargando.

        (data) ?  <section className="container-home">
                        {(data !== false) ?<CardLocation city={data.name} country={data.sys.country}/> : null}
                        {(data !== false) ?<CardIcon icon={data.weather[0].icon} description={data.weather[0].description}/> : null}
                        {(data !== false) ?<CardTemperature temp={data.main.temp} feels_like={data.main.feels_like}/> :null}
                        {(data !== false) ?<CardInfo pressure={data.main.pressure} humidity={data.main.humidity} 
                            wind_speed={data.wind.speed}/> : null}
                     </section>
                : <div className="container-home" >
                    <img className="spinner" src={spinner} alt=''/>
                </div> 
                    
            
       
    )
}

export default Home;