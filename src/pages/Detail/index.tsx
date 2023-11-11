import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Loading } from "../../components/Loading";

const key = import.meta.env.VITE_API_KEY
const img_path = "https://image.tmdb.org/t/p/w500"

interface PropsMovie{
    id: string ;
    title: string;
    overview: string;
    date_release: string;
    image: string;
}

export function Detail() {

    const { id } = useParams()

    const [loading, setLoading]= useState(true)
    const [movie, setMovie] = useState< PropsMovie | null>(null)



    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-BR`)
        .then(response => response.json())
            .then(data => {
                const { title, overview, poster_path, release_date } = data
                const date_release = formatDate(release_date)

                const movie = {
                    id:id!,
                    title,
                    overview,
                    date_release,
                    image: `${img_path}${poster_path}`

                }
                setMovie(movie)
            })
            setTimeout(()=>setLoading(false),500)

    }, [id])

    return (
        <>
        {loading ? <Loading/>:
            <div className="h-screen overflow-hidden">
                <BackButton/>
                <Header title={movie?.title} />
                <section className="flex justify-center items-center gap-8 ">
                    <img className="hover:scale-105  duration-300 rounded-2xl w-[11.6rem]"
                        src={`${movie?.image}`}
                        alt={movie?.title} />
                    <section className="w-3/6 flex flex-col gap-4">
                        <span >{movie?.overview}</span>
                        <span>Lançado em {movie?.date_release}</span>
                    </section>
                </section>
            </div>
            }
        </>
    )
}

function formatDate(data:Date){
    const date = new Date(data)
    const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate() 
    const month = date.getMonth() <= 9 ? `0${date.getMonth()}` : date.getMonth()
    const year = date.getFullYear()
    const dateFormat = `${day}/${month}/${year}`
    return  dateFormat
}

