import { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import Card from "../../components/Card";

const Home = () => {
  const [movies, setMovies] = useState();
  //   const [day, setDay] = useState(true);
  //   const [week, setWeek] = useState(false);

  const fetchMovies = async (time) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${time}?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZhMzE4NDRlYmUyOThiNWYyMmFlOWM0YzVjMGE4MSIsInN1YiI6IjY1ZWZmOGU2MTdiNWVmMDE2MmI3OTA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8bEPvENs5_sx8gN1m9530YTPulEklACm1iTcMVkSNYc",
        },
      }
    );
    // console.log(res.data.results);
    setMovies(res.data.results);
  };

  useEffect(() => {
    fetchMovies("day");
  }, []);

  const handleDay = () => {
    fetchMovies("day");
    // setDay(true);
    // setWeek(false);
  };

  const handleWeek = () => {
    fetchMovies("week");
    // setDay(false);
    // setWeek(true);
  };

  return (
    <div className="home">
      <div className="top">
        <h3>Current Trending Movies:</h3>
        <button className="buttons">
          <span>By: </span>
          <button onClick={handleDay}>Day</button>
          <button onClick={handleWeek}>Week</button>
        </button>
      </div>
      <div className="bottom">
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie, i) => (
              <Card movie={movie} key={i} />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Home;
