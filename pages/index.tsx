import { useRouter } from 'next/router';
import Seo from '../components/Seo';
import Link from 'next/link';

type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
};

type HomeProps = {
  movies: Movie[];
};

const Home: React.FC<HomeProps> = ({ movies }) => {
  const router = useRouter();

  const onClickMovieRoutingHandler = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    // <div className="grid grid-cols-2 p-20 gap-20">
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div
        // className="cursor-pointer"
        className="movie"
          onClick={() => onClickMovieRoutingHandler(movie.id, movie.original_title)}
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <Link href={`/movies/${encodeURIComponent(movie.original_title)}/${movie.id}`}>
            {/* <h4 className="text-center text-lg">{movie.original_title}</h4> */}
            <h4>{movie.original_title}</h4>
          </Link>
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
};

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/movies', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDI0YjY2MGMyNDMxZThmNDNiNDVmNzQzYzNjMDQyYyIsInN1YiI6IjY2MjVjNjY0MjU4ODIzMDE2NDkxMmVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q1-1A2mU2qg13n561yqjy-JGuyFp2evDX9Wd8YUklZk',
      },
    });
    const data = await response.json();
    const movies: Movie[] = data.results;
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

export default Home;



// js code
// home path
// import { useRouter } from "next/router";
// import Seo from "../components/Seo";
// import Link from "next/link";

// export default function Home({ movies }) {
//   const router = useRouter();
//   const onClickMovieRoutingHandler = (id, title) => {
//     router.push(`/movies/${title}/${id}`,)
//   };

//   return (
//     <div className="container">
//       <Seo title="Home" />
//       {movies?.map((movie) => (
//         <div
//           onClick={() =>
//             onClickMovieRoutingHandler(movie.id, movie.original_title)
//           }
//           className="movie"
//           key={movie.id}
//         >
//           <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
//           <Link href={`/movies/${movie.original_title}/${movie.id}`}>
//             <h4>{movie.original_title}</h4>
//           </Link>
//         </div>
//       ))}
//       <style jsx>{`
//         .container {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           padding: 20px;
//           gap: 20px;
//         }
//         .movie {
//           cursor: pointer;
//         }
//         .movie img {
//           max-width: 100%;
//           border-radius: 12px;
//           transition: transform 0.2s ease-in-out;
//           box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
//         }
//         .movie:hover img {
//           transform: scale(1.05) translateY(-10px);
//         }
//         .movie h4 {
//           font-size: 18px;
//           text-align: center;
//         }
//       `}</style>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   try {
//     const response = await fetch("http://localhost:3000/api/movies", {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDI0YjY2MGMyNDMxZThmNDNiNDVmNzQzYzNjMDQyYyIsInN1YiI6IjY2MjVjNjY0MjU4ODIzMDE2NDkxMmVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q1-1A2mU2qg13n561yqjy-JGuyFp2evDX9Wd8YUklZk",
//       },
//     });
//     const data = await response.json();
//     const movies = data.results;
//     return {
//       props: {
//         movies,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         movies: [],
//       },
//     };
//   }
// }
