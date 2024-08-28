import { useEffect, useState } from "react"
import CardMovie from "../components/Card"
import { useApiCard } from '../hooks/useApiCard'

const BtnChangeMovie = ({ textBtn, getApi }) => {
  return (
    <button onClick={getApi} className="text-sm md:text-lg lg:text-xl border border-primary px-2 py-1.5 font-semibold rounded">{textBtn}</button>
  )
}

const movieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1d41356d1fc2c3dd914c85d9c7d6a3e2';
const tvUrl = 'https://api.themoviedb.org/3/trending/tv/day?api_key=1d41356d1fc2c3dd914c85d9c7d6a3e2';
const apiKey = 'api_key=1d41356d1fc2c3dd914c85d9c7d6a3e2';


const MainMovies = () => {
  const [movie, setMovie] = useState(movieUrl);
  const [active, seActive] = useState();
  const data = useApiCard(movie);
  const imgPath = 'https://image.tmdb.org/t/p/w500';

  setTimeout(() => {
    console.log(data)
  }, 2000)

  function getMovie() {
    setMovie(movieUrl)
  }
  function getTv() {
    setMovie(tvUrl)
  }

  return (
    <main className="mt-4 w-full overflow-x-hidden relative px-2 md:px-4 xl:px-6">
      <h3 className="text-heading">Popular Movies</h3>
      <div className="flex items-center gap-2 mt-2">
        <BtnChangeMovie getApi={getMovie} textBtn="Movies Show" />
        <BtnChangeMovie getApi={getTv} textBtn="Tv Show" />
      </div>
      <div className="mt-3 grid grid-cols-2 items-center justify-center gap-1.5 flex-wrap">
        {
          data.map((item, index) => {
            return <CardMovie key={index} title={item.title} image={imgPath + item.poster_path} rating={item.vote_average.toString().substring(0, 3)} rilis={item.first_air_date} />
          })
        }
      </div>
    </main>
  )
}

export default MainMovies
