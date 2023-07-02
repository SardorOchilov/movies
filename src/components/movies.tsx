import axios from "axios";
import React, { Component } from "react";
import Pagination from "./pagination";
import Search from "../components/search-input";
import "../index.css";
import Genres from "./genres";

interface MoviesState {
  movies: {
    _id: string;
    title: string;
    genre: {
      name: string;
      _id: string;
    };
    numberInStock: number;
    dailyRentalRate: number;
  }[];
}

let  element:any;

class Movies extends Component {
  state: MoviesState = {
    movies: [],
  };

  async componentDidMount() {
    const { data: movies } = await axios(
      "https://pdp-movies-78.onrender.com/api/movies"
    );
    this.paginationHandler();
    this.setState({ movies });
  }

  paginationHandler(index = 1) {
    element = this.state.movies.map((movies, idx) => {
      if (index * 4 - 4 <= idx && index * 4 > idx)
        return (
          <tr key={movies._id}>
            <td className="py-2">
              <a href="lo" className="text-blue-600 hover:underline">
                {movies.title}
              </a>
            </td>
            <td>{movies.genre["name"]}</td>
            <td>{movies.numberInStock}</td>
            <td>{movies.dailyRentalRate}</td>
            <td>
              <button className="bg-red-500 px-3 py-1 rounded-sm text-white">
                Like
              </button>
            </td>
          </tr>
        );
      return null;
    });
  }

  actionHandler(name:string) {
    return this.state.movies.map((movies, idx) => {
      if (name)
        return (
          <tr key={movies._id}>
            <td className="py-2">
              <a href="lo" className="text-blue-600 hover:underline">
                {movies.title}
              </a>
            </td>
            <td>{movies.genre["name"]}</td>
            <td>{movies.numberInStock}</td>
            <td>{movies.dailyRentalRate}</td>
            <td>
              <button className="bg-red-500 px-3 py-1 rounded-sm text-white">
                Like
              </button>
            </td>
          </tr>
        );
      return null;
    });
  }


  render() {
    return (
      <>
        <div className="w-1/3">
          <Genres></Genres>
        </div>
        <div className="md:w-2/3 space-y-4 w-full">
          <p>Showing {this.state.movies.length} movies in the database.</p>
          <Search />
          <table className="w-full">
            <thead className="border-y-2 border-slate-300 font-bold">
              <tr className="space-x-20">
                {["Title", "Genre", "Stock", "Rate", ""].map((text, idx) => (
                  <td key={idx} className="py-2">
                    {text}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-solid text-lg font-normal">
              {element}
            </tbody>
          </table>
          <Pagination
            amount={this.state.movies.length}
            onPaginationClick={this.paginationHandler}
          />
        </div>
      </>
    );
  }
}

export default Movies;
