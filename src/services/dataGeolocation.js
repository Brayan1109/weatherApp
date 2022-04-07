import getWeather from "../services/getWeather";

// pedimos al usuario el permiso para obtener su ubicación

function positionGeo(){
    const coords = new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(position => {
            resolve([position.coords.latitude, position.coords.longitude])
        })
    })
    

    return coords
}

//  se hace el llamado a la api weatherApp 
const geolocalizacion = async () => {

    let req;
    const coords = await positionGeo()
    req = await getWeather(coords[0], coords[1])
    return req.data
}

export default geolocalizacion;
