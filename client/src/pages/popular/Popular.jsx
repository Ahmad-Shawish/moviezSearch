import { useEffect, useState } from "react";
import "./popular.scss";
import axios from "axios";
import Card from "../../components/Card";
import { Pagination } from "@mui/material";

const Popular = () => {
  const [movies, setMovies] = useState();
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  //   const [day, setDay] = useState(true);
  //   const [week, setWeek] = useState(false);

  const fetchMovies = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZhMzE4NDRlYmUyOThiNWYyMmFlOWM0YzVjMGE4MSIsInN1YiI6IjY1ZWZmOGU2MTdiNWVmMDE2MmI3OTA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8bEPvENs5_sx8gN1m9530YTPulEklACm1iTcMVkSNYc",
        },
      }
    );
    // console.log(res.data.results);
    setMovies(res.data.results);
    setPages(res.data.total_pages);
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const handlePage = async (page) => {
    setCurrentPage(page);
    await fetchMovies(page);
  };

  return (
    <div className="popular">
      <div className="top">
        <h3>Current Popular Movies: </h3>
      </div>
      {movies?.length > 0 ? (
        <div className="bottom">
          <div className="container">
            {movies.map((movie, i) => (
              <Card movie={movie} key={i} />
            ))}
          </div>
          <Pagination
            count={pages}
            page={currentPage}
            color="primary"
            onChange={(event, page) => {
              handlePage(page);
            }}
            // variant="text"
            shape="rounded"
            size="large"
            className="custom"
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Popular;
