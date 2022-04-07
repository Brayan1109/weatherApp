import { useState } from "react"


const CardTemperature = ({temp, feels_like}) => {

    const [uni, setUni] = useState('°C')
    const [uniButton, setUniButton] = useState(true)
    const [tempRender, setTempRender] = useState(temp)
    const [tempSRender, setTempSRender] = useState(feels_like)

    function changeFarenheit(){
        let tempFarenheit = Math.floor((temp)*(9/5) + 32);
        let tempFarenheitS = Math.floor((feels_like)*(9/5) + 32)
        setTempRender(tempFarenheit)
        setTempSRender(tempFarenheitS)
        setUni('°F')
        setUniButton(false)
    }

    

    return(
        <div className="container-card-temperature">

            <div>

                <div className="container-temp">
                    <h2>Temperatura</h2>
                    <h3>{Math.floor(tempRender)} {uni}</h3>
                </div>

                <div className="container-temp">
                    <h2>S. térmica</h2>
                    <h3>{Math.floor(tempSRender)} {uni}</h3>
                </div>


            </div>
            {(uniButton) ?<button className="button-temperature" onClick={changeFarenheit}>Pasar a °F</button> 
                         : <button className="button-temperature" onClick={() => {
                             setTempRender(temp)
                             setTempSRender(feels_like)
                             setUni('°C')
                             setUniButton(true)
                             }}>Pasar a °C</button>}
        </div>
    )
}

export default CardTemperature