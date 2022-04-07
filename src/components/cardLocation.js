

const CardLocation = ({city, country}) => {
    
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    
    return(
        <div>
            <h3>{city}</h3>
            <h4>{country}</h4>
            <h5>{day}-{month}-{year}</h5>
        </div>
    )
}

export default CardLocation;