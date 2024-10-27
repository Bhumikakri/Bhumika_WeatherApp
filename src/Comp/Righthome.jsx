import React, { useRef } from 'react';
import { useWeather } from '../Context/WeatherContext';
import Tble from './Tble';

const Righthome = () => {
    const { selectedListData, searchedCity, searchCity } = useWeather();
    const cityNameRef = useRef();

    const handleSearch = () => {
        searchCity(cityNameRef.current.value);
    };

    return (
        <div className=' w-full lg:w-9/12 flex flex-col p-5 gap-4'>
            <div className='w-full text-right flex items-center justify-end'>
                <input type="text" placeholder='City Name' ref={cityNameRef} className=' w-5/6  lg:w-2/6 p-2 h-full rounded-es-md rounded-tl-md' />
                <button onClick={handleSearch} className='bg-cyan-500 lg:w-1/12 lg:h-full w-2/12 h-9 px-1 lg:px-4 rounded-se-md rounded-ee-md'>🔍</button>
            </div>
            <div className='p-5 overflow-x-scroll lg:overflow-hidden self-center w-full min-h-96 text-center'>
                {selectedListData.length > 0 ? (
                    <table frame='box' rules='all' className='w-[100%] border border-black rounded-sm text-center '>
                        <thead>
                            <tr className='border border-black'>
                                <th className='bg-emerald-400 border border-white'>City</th>
                                <th className='bg-emerald-400 border border-white'>Description</th>
                                <th className='bg-emerald-400 border border-white'>Temperature</th>
                                <th className='bg-emerald-400 border border-white'>Pressure</th>
                                <th className='bg-emerald-400 border border-white'>Data age (hrs)</th>
                                <th className='bg-emerald-400 border border-white'>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedListData.map((data, index) => (
                                <Tble key={index} data={data} highlight={searchedCity === data.name} />
                            ))}
                        </tbody>
                    </table>
                ) : (

                    <table frame='box' rules='all' className='w-[100%] border border-black rounded-sm text-center'>
                        <thead>
                            <tr className='border border-black'>
                                <th className='bg-emerald-400 border border-white'>City</th>
                                <th className='bg-emerald-400 border border-white'>Description</th>
                                <th className='bg-emerald-400 border border-white'>Temperature</th>
                                <th className='bg-emerald-400 border border-white'>Pressure</th>
                                <th className='bg-emerald-400 border border-white'>Data age (hrs)</th>
                                <th className='bg-emerald-400 border border-white'>Remove</th>
                            </tr>
                        </thead>
                        <span className=' text-3xl font-medium text-center'>NO DATA</span>

                    </table>
                )}
            </div>
        </div>
    );
};

export default Righthome;
