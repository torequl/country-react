import { useState } from "react";
import './country.css'

const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, capital, population, timezones, currencies } = country;

    const [visited, setVisited] = useState()

    const handleVisited = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry);
    return (
        <div className="country">
            <h3> {name.common} </h3>
            <p>Capital: {capital} </p>
            <p>Population: {population} </p>
            <p>Timezones: {timezones} </p>
            <img src={flags.png} alt={name.common} />
            <div className="flex">
                <button onClick={handleVisited} className={visited && 'bg-red'}> {visited ? 'Visited' : 'Going'} </button>

                <button onClick={()=>{handleVisitedCountry(country)}}>Mark</button>
            </div>

        </div>
    );
};

export default Country;