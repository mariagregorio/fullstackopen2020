import React from 'react';

const Countries = ({filteredCountries, handleShowCountry}) => {

    return (
        <ul>
            {filteredCountries.map(country => <li key={country.numericCode}>{country.name} <button onClick={() => {handleShowCountry(country)}}>show</button></li>)}
        </ul>
    )
};

export default Countries
