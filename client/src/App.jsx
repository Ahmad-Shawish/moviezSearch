import "./App.scss";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Popular from "./pages/popular/Popular";
import Genre from "./pages/genre/Genre";
import Search from "./pages/search/Search";
import GenreMovie from "./pages/genreMovie/GenreMovie";
import Details from "./pages/details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/popular",
    element: (
      <>
        <Navbar />
        <Popular />
      </>
    ),
  },
  {
    path: "/genres",
    element: (
      <>
        <Navbar />
        <Genre />
      </>
    ),
  },
  {
    path: "/genres/:id",
    element: (
      <>
        <Navbar />
        <GenreMovie />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <Navbar />
        <Search />
      </>
    ),
  },
  {
    path: "/details/:id",
    element: (
      <>
        <Navbar />
        <Details />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
