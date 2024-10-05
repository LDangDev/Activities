import { useNavigate } from "react-router-dom";
import useField from "../hooks/useField";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const email = useField("email");
  const password = useField("password");

  const { login, error } = useLogin("/api/users/login");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await login({ email: email.value, password: password.value });
    if (!error) {
      console.log("success");
      navigate("/");
    }
  };

  return (
    <div className="create">
      <h2>Log in</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input {...email} />
        <label>Password</label>
        <input {...password} />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
