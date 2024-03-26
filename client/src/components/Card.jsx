import { useNavigate } from "react-router-dom";
import "./card.scss";

const Card = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${movie.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={imgURL} alt="" />
      <p>{movie.title}</p>
      <span>{movie.release_date}</span>
    </div>
  );
};

export default Card;
