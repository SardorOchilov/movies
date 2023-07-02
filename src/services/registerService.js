import axios from "axios";

export default async function Register(username, email, password) {
  const user = {
    username: username,
    email: email,
    password: password,
  };

  const res = await axios.post("https://pdp-movies-78.onrender.com/api/users", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}
