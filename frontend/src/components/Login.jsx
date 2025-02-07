import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const mockUser = { username: "testuser" };
    localStorage.setItem("user", JSON.stringify(mockUser));
    setUser(mockUser);
    navigate("/dashboard");
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold">Login</h2>
      <button onClick={handleLogin} className="bg-blue-500 px-4 py-2 rounded mt-4 text-white">
        Login as Guest
      </button>
    </div>
  );
};

export default Login;
