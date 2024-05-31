import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = ({ data }) => {
  const headerRef = useRef(null);
  const imageUrl = `https://image.tmdb.org/t/p/original${data.backdrop_path || data.poster_path}`;

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, 
          { opacity: 0, x : -100 }, 
          { opacity: 1, duration: 2, x : 0 }
        );
        headerRef.current.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${imageUrl})`;
      }
    };
  }, [data, imageUrl]);

  return (
    <div
      ref={headerRef}
      className="w-full h-[70vh] flex flex-col justify-end bg-black"
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'background 1s ease-in-out',
      }}
    >
      <div className="w-1/2 p-10">
        <span className="text-[3vw] text-white">
          {data.name || data.title || data.original_name || data.title}
        </span>
        <p className="text-[1vw] text-white">
          {data.overview.slice(0, 200)}...
          <Link to={`/details/${data.id}`} className="text-blue-400">more</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
