import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


const  countriesApi = 'https://restcountries.eu/rest/v2/all';

const Country = () => {
    const [countries, setCountries] = useState([])

    const fetchCountiesData = async () =>{
        const response = await fetch(countriesApi)
        const countries = await response.json()
        setCountries(countries)
    }

    useEffect(() => {
       fetchCountiesData()
    }, [])


const removeCountry = (numericCode) =>{
    const newCountry = countries.filter((country) => country.numericCode !== numericCode)
    setCountries(newCountry)
}
    return (

        <div className="container grids">
            {countries.map((country) =>{
                const {name, population, flag, region, capital, numericCode} = country
                return (
                    <article key={numericCode}>
                        <div>
                            <img src={flag} alt={name}/>
                            <div className="details">
                                <div className="country-name">
                                <h3 >{name}</h3>
                                <h4>Population: <span>{population}</span></h4>
                                <h4>Region: <span>{region}</span></h4>
                                <h4>Capital: <span>{capital}</span></h4>
                                <div className="buttons">
                                    <Link to={`/${name}`} className="more ">Learn More</Link>
                                    <button className="remove" onClick={() => removeCountry(numericCode)}>Remove</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Country
