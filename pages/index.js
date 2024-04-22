// home path

import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Link from "next/link";

const TMDB_API_KEY = "5424b660c2431e8f43b45f743c3c042c";

function index() {

  const [movies, setMovies] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`, {
        const response = await fetch("/api/movies", {
        // const response = await fetch('https://api.themoviedb.org/3/movie/popular?', {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDI0YjY2MGMyNDMxZThmNDNiNDVmNzQzYzNjMDQyYyIsInN1YiI6IjY2MjVjNjY0MjU4ODIzMDE2NDkxMmVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q1-1A2mU2qg13n561yqjy-JGuyFp2evDX9Wd8YUklZk'
          }
        });
        const data = await response.json();
        console.log("data------>", data)
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  // useEffect(()=>{
  //   console.log("movies----->", movies);
  // }, [movies])



  return (
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div
          // onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <p>{movie.original_title}</p>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default index;
