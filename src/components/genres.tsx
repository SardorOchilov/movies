import React, { Component } from "react";
import getGenres from "../services/genreService";

interface AppState {
  genres: { _id: string; name: string }[];
}

// interface GenresProps {
//   actionHandler(name:string): ()
// }
class Genres extends Component {
  state: AppState = {
    genres: [],
  };

  async componentDidMount() {
    const data = await getGenres();
    this.setState({ genres: [{ _id: "", name: "All Genres" }, ...data] });
  }

  render() {
    return (
      <table className="w-full">
        <tbody>
          {this.state.genres.map((item) => {
            return (
              <tr key={item._id}>
                <td className="p-4 border border-gray-400 border-collapse hover:bg-blue-600 hover:text-white duration-300">
                  {item.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Genres;
