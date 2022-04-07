import getWeather from "../services/getWeather";


function positionGeo(){
    const coords = new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(position => {
            resolve([position.coords.altitude, position.coords.longitude])
        })
    })

    return coords
}

const geolocalizacion = async () => {

    let req;
    const coords = await positionGeo()

    if(coords[0] === null) {
        req = await getWeather(9.11, coords[1])
    }if(coords[1] === null){
        console.log(coords[0], -71.11)
        req = await getWeather(coords[0], -71.11)
    }if( coords[0] !== null && coords[1] !== null ){
        req = await getWeather(coords[0], coords[1])
    }

    return req.data
}

export default geolocalizacion;
