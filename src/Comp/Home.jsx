import React from 'react';
import Lefthome from './Lefthome';
import Righthome from './Righthome';

const Home = () => {
  return (
    <div className='bg-slate-200  min-w-full min-h-screen h-fit overflow-hidden'>
      <div className='w-full p-5 text-4xl text-center font-semibold bg-emerald-400'>
        Bhumika Weather App
      </div>
      <div className='w-full h-fit lg:h-[533px] flex gap-1 flex-col  lg:flex-row'>
        <Lefthome />
        <Righthome />
      </div>
    </div>
  );
};

export default Home;
