import '../style/cardStyle.css'

const CardIcon = ({icon, description}) => {

    const url = `http://openweathermap.org/img/wn/${icon}@2x.png`
    console.log(url)

    return(
        <div className='container-icon'>
            <p>{description}</p>
            <img src={url} alt=''/>
        </div>
    )
}

export default CardIcon