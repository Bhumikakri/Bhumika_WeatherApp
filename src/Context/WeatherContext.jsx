import React, { createContext, useState, useContext } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [clickedCities, setClickedCities] = useState(['London', 'New York', 'Los Angeles', 'Las Vegas']);
  const [selectedListData, setSelectedListData] = useState([]);
  const [searchedCity, setSearchedCity] = useState('');
  const cities = ["Las Vegas", "London", "Los Angeles", "New York"];

  const fetchCityData = async (city) => {
    try {
      const response = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`);
      const data = await response.json();
      setSelectedListData(prevData => [...prevData, { name: city, ...data, date_and_time: new Date().toLocaleString() }]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = () => {
    if (clickedCities.length > 0) {
      const [city, ...remainingCities] = clickedCities;
      fetchCityData(city);
      setClickedCities(remainingCities);
    } else {
      alert('All cities have been displayed.'); // added alert when all cities displayed
    }
  };

  const deleteCityData = (cityName) => {
    setSelectedListData(prevData => prevData.filter(data => data.name !== cityName));
    setClickedCities(prevCities => [...prevCities, cityName]);
  };

  const searchCity = (city) => {
    setSearchedCity(city);
    setTimeout(() => setSearchedCity(''), 3000);
  };

  return (
    <WeatherContext.Provider
      value={{
        cities,
        clickedCities,
        selectedListData,
        searchedCity,
        handleClick,
        deleteCityData,
        searchCity
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
