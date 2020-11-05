import React from 'react';

const Country = ({country, weather}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languajes</h2>
            <ul>
                {country.languages.map(lang => <li key={lang.iso639_1}>{lang.name}</li>)}
            </ul>
            <img style={{maxWidth: '200px'}} src={country.flag} alt={country.name}/>
            {weather.current &&
                <div>
                    <h2>weather in {country.capital}</h2>
                    <p>temperature: {weather.current.temperature}</p>
                    <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]}/>
                    <p>wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
                </div>
            }
        </div>
    )
};

export default Country
