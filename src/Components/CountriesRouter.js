import React, {useState, useEffect}from 'react'
import { Link, useParams } from 'react-router-dom'

const CountriesRouter = () =>{
    const [country, setCountry] = useState([])
    const {name} = useParams([])

    
    useEffect(() => {
        const countryDataAPI = async () =>{
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            const country = await response.json()
            setCountry(country)
        }
        countryDataAPI()
     },)

    return (
        <div className="container">
            <Link to='/' className="back link">Back to home</Link>
            <div className="mt-4">
                {country.map((c) => {
                    const {numericCode, flag, name, nativeName, population, region,callingCodes, languages, capital,borders ,topLevelDomain, currencies, subregion} = c

                    return(
                        <article key={numericCode}>
                            <div className="para">
                                <p>Region: </p>
                                <h2>{subregion} </h2>
                            </div>
                            <div className="gridData">
                                <img src={flag} alt={name}/>  
                                                
                            <div className="countryData">
                                <div className="countryName"><h3>{name} </h3></div><br/>
                                    <h4>Population: <span>{population}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                    <h4>Native Name: <span>{nativeName}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Domain: <span>{topLevelDomain}</span></h4>
                                    <h4>Sub Region: <span>{subregion}</span></h4>
                                    <h4>Language: <span>{languages[0].name}</span></h4>
                                    <h4>Currency: <span>{currencies[0].name}</span></h4>
                                    <h4>Border's: <span>{borders[0]}</span></h4>
                                    <h4>Country Code: <span>{callingCodes[0]}</span></h4>
                                </div>
                                
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )

}

export default CountriesRouter
