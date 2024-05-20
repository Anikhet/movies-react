import React from 'react';
import { Link } from 'react-router-dom';


const Horizontal = ({ card}) => {

    console.log(card)
  return (
    <div className='w-[100%]  p-[1vw] mb-[0.2vw]  '>
      <h1 className='text-[2.5vw] font-semibold text-white ml-[1vw]'>Trending</h1>
      <div className='w-full flex p-[1vw] gap-[0.3vw] overflow-y-hidden'>
      {card.map((item,index)=>{
          const imageUrl = `https://image.tmdb.org/t/p/original${item.backdrop_path ||  item.poster_path}`;
        return <div
         key={index} 
         className='text-[1.5vw] text-white min-w-[40%] h-[20vw] p-[2vw] flex flex-col justify-end '
         style={{
          background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
     
        }}>
          
         <h1>{item.name||item.title||item.original_name||item.title}</h1>
         <p className='text-[1vw] text-white '>{item.overview.slice(0,100)}...<Link className='text-blue-400'>more</Link></p>
       </div>

      })}
     
      </div>
      
      
    </div>
  );
};

export default Horizontal;
