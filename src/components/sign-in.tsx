import React, { Component } from "react";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  
  render() {
    return (
      <div className="p-10 mt-12 rounded-md bg-gray-100 font-medium gap-3 flex flex-col max-w-lg mx-auto my-auto text-slate-900">
        <h1 className="text-center text-3xl">Sign In</h1>
        <label htmlFor="email" className="mt-6">Email address</label>
        <input type="email" name="email" id="email" className="px-4 py-2 rounded" placeholder="Enter email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          className="px-4 py-2 rounded"
        />
        <button className="bg-blue-500 text-white font-normal py-3 text-lg mt-14">Submit</button>
      </div>
    );
  }
}

export default SignIn;
