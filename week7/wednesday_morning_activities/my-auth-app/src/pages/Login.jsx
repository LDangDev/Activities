import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUserNAme] = useState("");
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username)
    navigate("/")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserNAme(e.target.value)}
        placeholder="Username"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
