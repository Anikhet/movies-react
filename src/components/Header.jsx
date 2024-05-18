import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ data }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${data.backdrop_path ||  data.poster_path}`;


  return (
    <div
      className="w-full h-[70vh] flex flex-col justify-end "
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${imageUrl})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <div className=' w-1/2 p-10'>
         <span className='text-[3vw] text-white '>{data.name||data.title||data.original_name||data.title}</span>
         <p className='text-[1vw] text-white '>{data.overview.slice(0,200)}...<Link className='text-blue-400'>more</Link></p>
         </div>
    </div>
  );
};

export default Header;
