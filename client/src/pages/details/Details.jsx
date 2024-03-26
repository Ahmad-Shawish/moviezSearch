import { useEffect, useState } from "react";
import "./details.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const id = useParams().id;

  const [movie, setMovie] = useState();
  let [imgURL, setImgURL] = useState("");
  let [backImg, setBackImg] = useState("");
  let [data, setData] = useState({
    title: "",
    rating: 0,
    date: "",
    genre: {},
    duration: "",
    desc: "",
  });

  const fetchMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZhMzE4NDRlYmUyOThiNWYyMmFlOWM0YzVjMGE4MSIsInN1YiI6IjY1ZWZmOGU2MTdiNWVmMDE2MmI3OTA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8bEPvENs5_sx8gN1m9530YTPulEklACm1iTcMVkSNYc",
        },
      }
    );
    // console.log(res.data);
    setMovie(res.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  useEffect(() => {
    if (movie) {
      imgURL = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
      setImgURL(imgURL);
      backImg = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
      setBackImg(backImg);
      setData({
        title: movie.title,
        rating: movie.vote_average,
        date: movie.release_date,
        genre: movie.genres,
        duration: movie.runtime,
        desc: movie.overview,
      });
    }
  }, [movie]);

  // const newG = new Array(1).fill(data.genre)[0];

  return (
    <div className="container">
      <div className="bgImg">
        <img src={backImg} alt="" />
      </div>
      <div className="details">
        <div className="left">
          <img src={imgURL} alt="" />
        </div>

        <div className="right">
          <div className="title">
            <h1>{data.title}</h1>
            <span>{data.rating} / 10 ⭐</span>
          </div>

          <div className="info">
            <span>{data.date}</span>
            <br />
            {/* <span>{data.genre[0].name}</span> */}
            {/* {console.log(new Array(1).fill(data.genre)[0][1].name)} */}
            {/* {console.log(newG)}
          {console.log(newG.length, "****************")} */}
            {Object.values(data.genre).map((it, i) => (
              <span key={i}>{it.name}</span>
            ))}
            {/* {newG.map((item) => console.log(item))} */}
            <br />
            <span>Duration: {data.duration} minutes</span>
          </div>

          <div className="desc">
            <p>{data.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
