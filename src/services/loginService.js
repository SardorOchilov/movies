import axios from "axios";

export default async function Login(email, password) {
  const user = {
    email: email,
    password: password,
  };

  const res = await axios.post("https://pdp-movies-78.onrender.com/api/auth", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}
