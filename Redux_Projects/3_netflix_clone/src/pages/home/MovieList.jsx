import { useEffect, useState } from "react"
import api from "../../api";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { baseImgUrl } from "../../constant";

const MovieList = ({ genre }) => {

    // console.log(genre)
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const params = {
            with_genres: genre.id,
        };

        api.get("/discover/movie", { params })
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err))
    }, []);

    console.log(movies);

    return (
        <div className="my-10">
            <h1 className="text-3xl font-semibold mb-3">{genre.name}</h1>
            <Splide options={{ autoWidth: true, gap: "20px", pagination: false, type: "loop" }} aria-label="My Favorite Images">
                {movies?.map((movie, key) => (
                    <SplideSlide key={key}>
                        <img className="max-w-[300px] cursor-pointer rounded transition hover:scale-[1.01]"
                            src={baseImgUrl + movie.poster_path} alt="Image 2" />
                    </SplideSlide>
                ))}

            </Splide>
        </div >
    )
}

export default MovieList