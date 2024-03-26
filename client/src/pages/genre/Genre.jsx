import { Link } from "react-router-dom";
import "./genre.scss";

const Genre = () => {
  return (
    <div className="genre">
      <Link to="/genres/28" className="item">
        Action
      </Link>
      <Link to="/genres/12" className="item">
        Adventure
      </Link>
      <Link to="/genres/16" className="item">
        Animation
      </Link>
      <Link to="/genres/35" className="item">
        Comedy
      </Link>
      <Link to="/genres/80" className="item">
        Crime
      </Link>
      <Link to="/genres/99" className="item">
        Documentary
      </Link>
      <Link to="/genres/18" className="item">
        Drama
      </Link>
      <Link to="/genres/10751" className="item">
        Family
      </Link>
      <Link to="/genres/14" className="item">
        Fantasy
      </Link>
      <Link to="/genres/36" className="item">
        History
      </Link>
      <Link to="/genres/27" className="item">
        Horror
      </Link>
      <Link to="/genres/10402" className="item">
        Muisc
      </Link>
      <Link to="/genres/9648" className="item">
        Mystery
      </Link>
      <Link to="/genres/10749" className="item">
        Romance
      </Link>
      <Link to="/genres/878" className="item">
        Science Fiction
      </Link>
      <Link to="/genres/10770" className="item">
        TV Movie
      </Link>
      <Link to="/genres/53" className="item">
        Thriller
      </Link>
      <Link to="/genres/10752" className="item">
        War
      </Link>
      <Link to="/genres/37" className="item">
        Westren
      </Link>
    </div>
  );
};

export default Genre;
