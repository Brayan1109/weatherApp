import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = 'db500a2c556fc1c1168e7f8216edd70a'

// la siguiente función hace la conexión con la api.

const getWeather = async (lat, lon) => {

    const res = await axios.get(URL+`lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`)
    return res
}


export default getWeather;
