import axios from "axios";

export default async function getMovies() {
  const { data } = await axios.get(
    "https://pdp-movies-78.onrender.com/api/movies"
  );
  return data;
}
