// home path

import { useRouter } from "next/router";
import Seo from "../components/Seo";
import Link from "next/link";

// function Home() {
// serverSideProps 받는 경우 아래와 같이 파라미터 전달,
export default function Home({ movies }) {
  const router = useRouter();
  const onClickMovieRoutingHandler = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          id,
          title,
        },
      },
      // "URL MASKING"
      // 유저에게 노출될 URL의 형식
      // router 문법의 'as' parameter임
      `/movies/${id}`
      // 마스킹을 활용해도 router 객체에서
      // query 부분을 여전히 확인 가능
      // 유저에게만 안 보이는 것
    );
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div
          onClick={() =>
            onClickMovieRoutingHandler(movie.id, movie.original_title)
          }
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          {/* <Link href={`/movies/${movie.id}`}> */}
          <Link
            href={{
              pathname: `/movies/${movie.id}`,
              query: {
                title: movie.original_title,
              },
            }}
            as={`/movies/${movie.id}`}
          >
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
}

// 아래 예시 펑션은 only server side에서만 실행되는 코드
// API_KEY 같은 거 client에서 보이지 않음
// 펑션명은 고정 'getServerSideProps'
// 서버에서 실행되면 -> _app "pageProps"
// -> index의 Home func "props"(movies) (source code에서는 "__NEXT_DATA__")
// 그다음 react.js와 상호작용
// Data가 다 준비되었을 때, Home func가 보임
export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3000/api/movies", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDI0YjY2MGMyNDMxZThmNDNiNDVmNzQzYzNjMDQyYyIsInN1YiI6IjY2MjVjNjY0MjU4ODIzMDE2NDkxMmVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q1-1A2mU2qg13n561yqjy-JGuyFp2evDX9Wd8YUklZk",
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
