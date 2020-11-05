import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Country from "./Country";
import Countries from "./Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [singleCountry, setSingleCountry] = useState(null);
  const [weather, setWeather] = useState({});

  useEffect(() => {
      axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(res => {
              setCountries(res.data);
          });
  }, []);

    const getWeather = (cityName) => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${cityName}`)
            .then(res => {
                setWeather(res.data);
            });
  };

  const filterCountries = (e) => {
      setSearch(e.target.value);
      let result = countries.filter(country => { return country.name.toUpperCase().includes(e.target.value.toUpperCase()); });
      setFilteredCountries(result);
      if (result.length === 1) {
          setSingleCountry(result[0]);
          getWeather(result[0].capital);
      } else {
          setSingleCountry(null);
      }
  };

  const handleShowCountry = (country) => {
      setSingleCountry(country);
      getWeather(country.capital);
  };

  return (
      <div>
        find countries <input type="text" value={search} onChange={filterCountries}/>
          {(filteredCountries.length > 10 && search !== '') && <p>Too many matches, specify another filter</p>}
          {(filteredCountries.length > 1 && filteredCountries.length <= 10) && <Countries filteredCountries={filteredCountries} handleShowCountry={handleShowCountry} />}
          {singleCountry && <Country country={singleCountry} weather={weather} />}
      </div>
  )
};

export default App
