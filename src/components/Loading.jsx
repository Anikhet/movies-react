import React from 'react';
import giphy from '/giphy.gif';

const Loading = () => {
  return (
    <div className='flex w-full justify-center items-center h-screen bg-black'>
      <img className='' src={giphy} alt="Loading..." />
    </div>
  );
};

export default Loading;
