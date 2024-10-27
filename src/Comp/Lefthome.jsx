import React from 'react';
import { useWeather } from '../Context/WeatherContext';

const Lefthome = () => {
  const { cities, clickedCities, handleClick } = useWeather();

  return (
    <div className=' w-full lg:w-3/12 h-full bg-white p-3 flex gap-10 flex-col items-center pt-7'>
      <button className='bg-emerald-700 text-white border p-2 rounded-md' onClick={handleClick}>
        Get Weather
      </button>
      <div className='w-3/5 min-h-20 h-fit border border-black text-center'>
        <h1 className='p-3 bg-emerald-900 text-white font-semibold text-xl'>City</h1>
        <div className='text-left'>
          {cities.map((city, index) => (
            <div key={index} className={clickedCities.includes(city) ? 'p-3 border border-gray-500' : 'p-3 bg-red-500 border border-gray-800 text-white cursor-pointer'}>
              {city}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lefthome;
