import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const Home = ({ someData }) => {
  const [movies, setMovies] = useState([]);

  const router = useRouter();

  const onClick = (id, title) => {
    // router.push(`/movies/${id}`);

    // router.push(
    //   {
    //     pathname: `movies/${id}`,
    //     query: {
    //       title,
    //     },
    //   }, // url 파라미터, http://localhost:3000/movies/634649?title=Spider-Man%3A+No+Way+Home
    //   `movies/${id}` // as 파라미터, 주소 url을 이것으로 고정시킴
    // );

    router.push(`/movies/${title}/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/movies`);

      const object = await data.json();

      // console.log(object.results);

      setMovies(object.results);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div onClick={() => onClick(movie.id, movie.original_title)} key={movie.id} className="movie">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
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

export const getServerSideProps = async () => {
  // 서버 사이드 렌더링으로 완전히 전환하려면 getServerSideProps 이름으로 async 함수 선언
  // 여기에서 API 키를 써준다면 클라이언트쪽에선 보이지 않는다
  // 이 코드는 오직 백엔드에서만 실행된다
  //
  // 클라이언트 사이드 렌더링으로 하면, 페이지 이동 이후 데이터 전송이 진행된다
  // 따로 로딩을 표시해줄 화면 처리 작업이 필요하다
  //
  // 서버 사이드 렌더링으로 하면 데이터 전송이 완료된 후 페이지 이동이 이루어진다
  // 검색 엔진이 소스 코드를 볼 수 있게 되기 때문에 유리해진다
  // ssr이기때문에 useEffect를 사용할 필요가 없다
  return {
    props: {
      someData: "some api data is here",
    },
  };
};

export default Home;
