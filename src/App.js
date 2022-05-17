import { Routes, Route } from "react-router-dom";
import Movie from "./Movie";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import ModalMovie from "./components/ModalMovie";
function App() {
  return (
    <>
      {/* <h1>Welcome to NETFLIX MOVIE app</h1> */}
      <ModalMovie/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ModalMovie" element={<ModalMovie />} />
        <Route path="ModalMovie" element={<MovieList />} />
        <Route path="ModalMovie" element={<Movie />} />
        <Route path="ModalMovie" element={<trending/>} />
      </Routes>
    </>
  );
}

export default App;