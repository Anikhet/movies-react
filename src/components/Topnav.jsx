import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '../utils/axios' // Ensure this is correctly configured

const Topnav = () => {

    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const getSearch = async () => {
        if (!query) {
            setSearchResults([]) // Clear results when query is empty
            return
        }

        try {
            const response = await instance.get(`/search/multi?query=${query}`)
            console.log(response.data) // Log the data
            setSearchResults(response.data.results) // Assuming results is the array containing search results
        } catch (e) {
            console.error("error", e)
        }
    }

    useEffect(() => {
        getSearch()
    }, [query])

    return (
        <div className='ml-[20vw] w-[50vw] h-[8vh] relative flex justify-start  p-2 text-[#EEEEEE]'>
            <i className="text-[2vw] ri-search-line"></i>
            <input 
                onChange={(e) => setQuery(e.target.value)} 
                value={query} 
                className=' outline-none border-none bg-transparent mx-10 p-5 w-[30vw] h-[3vw]' 
                type='text' 
                placeholder='Search your favourite shows & movies'
            />
            {query.length > 0 && (
                <i onClick={() => setQuery('')} className="text-[2vw] ri-close-fill"></i>
            )}

            <div className='absolute text-[#EEEEEE] h-[50vh] top-[100%] w-[40vw] overflow-auto'>
                {searchResults.map(result => (
                    <Link key={result.id} className='bg-[#393E46] text-white text-[1vw] inline-block p-[2vw] w-full hover:bg-[#EEE] hover:text-black duration-500'>
                      <div className=' justify-start  flex items-center'>
                      <span className='text-[2vw] '>{result.name||result.title||result.original_name||result.title}</span>
                          <img className='object-cover ml-[4vw] w-[5vw] h-[6vw]' src={`https://image.tmdb.org/t/p/w500${result.poster_path || result.backdrop_path||result.profile_path}`}  />
                          </div>
                          <hr className='mt-5 h-[1px]'></hr>
                    </Link>
                ))}
           
            </div>
        </div>
    )
}

export default Topnav
