import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>Moviez</p>
      <Link to="/">Home</Link>
      <Link to="/popular">Popular</Link>
      <Link to="/genres">Genres</Link>
      <Link to="/search">Search</Link>
    </div>
  );
};

export default Navbar;
