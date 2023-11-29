import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";

const key = import.meta.env.VITE_API_KEY

interface MoviesProps {
    id:string,
    title:string,
    poster_path:string,
    overview:string
}

export function Movies() {
    const [movies, setMovies] = useState<MoviesProps[] | null>(null)
    const [loading, setLoading] = useState(true)

useEffect(() => {
    setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                const {results} = data                
                setMovies(results)
                }
            )
            setTimeout(()=>setLoading(false),500)
    }, [])
    return (
        <>
        {loading && <Loading/>}
            <ul className="flex flex-wrap justify-evenly text-center">
                {movies?.map(movie => {
                    if(movie.overview != "")
                    return(

                        <li className="flex flex-col gap-4 px-4 mb-12  w-60" key={movie.id}>
                        <Link className="hover:scale-105  duration-300" to={`/detail/${movie.id}`}>
                            <img className="rounded-2xl" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </Link>
                        <span >{movie.title}</span>
                    </li>
                    )
                })}
            </ul>
        </>
    )
}
