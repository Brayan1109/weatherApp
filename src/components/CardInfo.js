import '../style/cardStyle.css'

const CardInfo = ({pressure, humidity, wind_speed})=> {

    return (
        <div className="container-card-info">
            <h5>Presión: {pressure} hPa</h5>
            <h5>Humedad: {humidity} %</h5>
            <h5>Vel. Viento: {wind_speed} m/s</h5>
        </div>
    )
}

export default CardInfo