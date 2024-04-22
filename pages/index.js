// home path

import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Link from "next/link";

// function Home() {
  // serverSideProps 받는 경우 아래와 같이 파라미터 전달,
  function Home({ movies }) {

  // const [movies, setMovies] = useState([]);

//  useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/movies", {
//           method: 'GET',
//           headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDI0YjY2MGMyNDMxZThmNDNiNDVmNzQzYzNjMDQyYyIsInN1YiI6IjY2MjVjNjY0MjU4ODIzMDE2NDkxMmVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q1-1A2mU2qg13n561yqjy-JGuyFp2evDX9Wd8YUklZk'
//           }
//         });
//         const data = await response.json();
//         console.log("data------>", data)
//         setMovies(data.results);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div
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

export default Home;

// 아래 예시 펑션은 only server side에서만 실행되는 코드
// API_KEY 같은 거 client에서 보이지 않음
// 펑션명은 고정 'getServerSideProps'
export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3000/api/movies", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDI0YjY2MGMyNDMxZThmNDNiNDVmNzQzYzNjMDQyYyIsInN1YiI6IjY2MjVjNjY0MjU4ODIzMDE2NDkxMmVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q1-1A2mU2qg13n561yqjy-JGuyFp2evDX9Wd8YUklZk",
      },
    });
    const data = await response.json();
    const movies = data.results;
    return {
      props: {
        movies,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movies: [],
      },
    };
  }
}