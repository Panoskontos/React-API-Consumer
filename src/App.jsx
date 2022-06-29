import { useState,useEffect } from "react"
import Element from "./components/Element"

const api_url="http://www.omdbapi.com/?apikey=68e199da"


export default function App(){
    // hook for data
    // set movies to []
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('Batman')
    
    // fetching movies by title
    // set movies to [...]
    const fetchMovies = async (title) => {
        const res = await fetch(`${api_url}&s=${title}`)
        const data = await res.json();
        setMovies(data.Search)
        console.log(movies)
    }


    // call data as soon as page loads
    useEffect(()=>{
        fetchMovies(search)
    },[])


    return(
        <>
        <h1>Api Consumer</h1>
        {/* search */}
        <div className="search">
            <input 
            type="text" 
            placeholder="search" 
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
            />
            <button
            onClick={()=>{fetchMovies(search)}}
            >Search</button>
        </div>
        <br /><br />
        {/* container - API Data*/}
           {/* write jsx */}
           {
            // if movies then show container
            movies.length>0 ? (
                <>
                <div className="container">
                        {movies.map((movie)=>(<Element key={movie.imdbID} movie={movie}/>))}
                </div>
                </>
            ) : (
                <div>No movies</div>
            )
           }
        


        </>
    )
}