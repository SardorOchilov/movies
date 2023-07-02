import React, { Component } from "react";
import Movies from "../components/movies";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 px-8 py-4 md:flex-row">
          <Movies />
        </div>
      </div>
    );
  }
}

export default Home;
