import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css';
 
const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // initial fetch, Fetch data from the REST Countries API
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  // Handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter countries based on user input
  useEffect(() => {
    const results = countries.filter(country =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCountries(results);
    if (results.length === 1) {
      setSelectedCountry(results[0]);
    } else {
      setSelectedCountry(null);
    }
  }, [filter, countries]);

  // Display country details when exactly one country is matched
  const CountryDetails = ({ country }) => {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} km²</p>
        <h4>Languages:</h4>
        <ul>
          {Object.values(country.languages).map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="200" />
      </div>
    );
  };
 
  return (
    <div>
      <h1>Find Countries</h1>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search for a country"
      />
      
      {filteredCountries.length > 10 && (
        <p>Too many matches, please specify your search</p>
      )}

      {filteredCountries.length <= 10 && filteredCountries.length > 1 && (
        <ul>
          {filteredCountries.map(country => (
            <li key={country.cca3}>
              {country.name.common}
              <button onClick={() => setSelectedCountry(country)}>Show</button>
            </li>
          ))}
        </ul>
      )}

      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
};

export default App
