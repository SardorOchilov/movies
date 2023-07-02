import axios from "axios";

export default async function getGenres() {
    const {data} = await axios.get('https://pdp-movies-78.onrender.com/api/genres');
    return data;
}