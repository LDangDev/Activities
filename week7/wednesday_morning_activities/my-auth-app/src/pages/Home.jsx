import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Home() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
