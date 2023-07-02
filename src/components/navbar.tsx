import React, { Component } from "react";
import Home from "../container/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SignIn from "./sign-in";
import RegisterForm from "./register";

class Navbar extends Component {
  render() {
    return (
      <div>
        
        <Router>
        <nav className="flex gap-3 items-end py-4 px-8 bg-gray-100">
          <Link to="/" className="text-slate-900 text-xl font-normal">Vidly</Link>
          <Link to="/login" className="text-base ml-6 text-gray-500">
            Login
          </Link>
          <Link
            to="/register"
            className="text-base ml-2 text-gray-500 text-light"
          >
            Register
          </Link>
        </nav>
          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/login" element={<SignIn></SignIn>}/>
            <Route path="/register" element={<RegisterForm></RegisterForm>}/>
          </Routes>
        </Router>
        
      </div>
    );
  }
}

export default Navbar;
