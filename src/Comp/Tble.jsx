import React from 'react';
import { useWeather } from '../Context/WeatherContext';

const Tble = ({ data, highlight }) => {
  const { deleteCityData } = useWeather();
  const hrs = new Date().getHours();
  const cityHrs = parseInt(data.date_and_time.split(",")[1].split(":")[0], 10);

  return (
    <tr style={{ backgroundColor: highlight ? 'yellow' : 'white' }}>
      <td className='border border-black cursor-default '>{data.name}</td>
      <td className='border border-black cursor-text'><input className=' bg-gray-400 text-center' style={{ width: '80%' }} type="text" defaultValue={data.description} /></td>
      <td className='border border-black'>{data.temp_in_celsius}°C</td>
      <td className='border border-black'>{data.pressure_in_hPa} hPa</td>
      <td className='border border-black'>{hrs - cityHrs} hrs</td>
      <td className=' cursor-pointer' onClick={() => deleteCityData(data.name)}>❌</td>
    </tr>
  );
};

export default Tble;
