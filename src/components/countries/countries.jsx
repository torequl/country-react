import { useEffect, useState } from "react";
import Country from "../country/country";
import './countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleVisitedCountry = country => {
        const newVisitCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitCountry);
    }

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div className="country-list">
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <div className="flex">
                    {
                        visitedCountries.map(i =>
                            <div key={i.cca3} className="flex">
                                <p>{i.name.common}</p>
                                <img src={i.flags.png} />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;