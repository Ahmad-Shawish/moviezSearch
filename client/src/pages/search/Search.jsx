import { useState } from "react";
import "./search.scss";
import axios from "axios";
import Card from "../../components/Card";
import search from "../../search.svg";
import { Pagination } from "@mui/material";

const Search = () => {
  const [movies, setMovies] = useState();
  const [term, setTerm] = useState("");
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMovies = async (name, page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${name}&language=en-US&page=${page}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZhMzE4NDRlYmUyOThiNWYyMmFlOWM0YzVjMGE4MSIsInN1YiI6IjY1ZWZmOGU2MTdiNWVmMDE2MmI3OTA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8bEPvENs5_sx8gN1m9530YTPulEklACm1iTcMVkSNYc",
        },
      }
    );
    setMovies(res.data.results);
    setPages(res.data.total_pages);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    await fetchMovies(term, 1);
    // console.log(currentPage);
  };

  const handlePage = async (page) => {
    setCurrentPage(page);
    await fetchMovies(term, page);
    // console.log("page is ", page);
    // console.log("currentpage is ", currentPage);
  };

  return (
    <div className="search">
      <div className="top">
        <form onSubmit={handleClick}>
          <input
            type="text"
            placeholder="Movie name.."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <img src={search} alt="" onClick={handleClick} />
        </form>
      </div>
      {movies?.length > 0 ? (
        <div className="bottom">
          <div className="container">
            {movies.map((movie, i) => (
              <Card movie={movie} key={i} />
            ))}
          </div>

          <div className="buttons">
            {/* {[...Array(pages)].map((_, i) => (
                <button key={i} onClick={() => handlePage(i + 1)}>
                  {i + 1}
                </button>
              ))} */}
            <Pagination
              count={pages}
              page={currentPage}
              color="primary"
              onChange={(event, page) => {
                handlePage(page);
              }}
              // variant="outlined"
              shape="rounded"
              size="large"
              className="custom"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;

/* ************************************************************* */
// import { useState, useEffect } from "react";
// import "./search.scss";
// import axios from "axios";
// import Card from "../../components/Card";
// import search from "../../search.svg";
// import { Pagination } from "@mui/material";

// const Search = () => {
//   const [movies, setMovies] = useState();
//   const [term, setTerm] = useState("");
//   const [pages, setPages] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     // Fetch movies when term or currentPage changes
//     fetchMovies(term, currentPage);
//   }, [term, currentPage]);

//   const fetchMovies = async (name, page) => {
//     const res = await axios.get(
//       `https://api.themoviedb.org/3/search/movie?query=${name}&language=en-US&page=${page}`,
//       {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZhMzE4NDRlYmUyOThiNWYyMmFlOWM0YzVjMGE4MSIsInN1YiI6IjY1ZWZmOGU2MTdiNWVmMDE2MmI3OTA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8bEPvENs5_sx8gN1m9530YTPulEklACm1iTcMVkSNYc",
//         },
//       }
//     );
//     setMovies(res.data.results);
//     setPages(res.data.total_pages);
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     setCurrentPage(1); // Reset currentPage when search button is clicked
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="search">
//       <div className="top">
//         <form onSubmit={handleClick}>
//           <input
//             type="text"
//             placeholder="Movie name.."
//             value={term}
//             onChange={(e) => setTerm(e.target.value)}
//           />
//           <img src={search} alt="search" onClick={handleClick} />
//         </form>
//       </div>
//       <div className="bottom">
//         {movies?.length > 0 ? (
//           <div className="container">
//             {movies.map((movie, i) => (
//               <Card movie={movie} key={i} />
//             ))}
//             <div className="buttons">
//               <Pagination
//                 count={pages}
//                 page={currentPage}
//                 color="primary"
//                 onChange={(event, page) => handlePageChange(page)}
//               />
//             </div>
//           </div>
//         ) : (
//           <div>No movies found</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;
