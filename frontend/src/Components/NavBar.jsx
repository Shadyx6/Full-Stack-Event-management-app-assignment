import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold ">Event Manager</h1>
      <div className="flex">
        <a href="/" className="mr-4 flex">
          Home
        </a>
        {user ? (
          <>
            <a href="/dashboard" className="mr-4">
              Dashboard
            </a>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
        <div className="flex gap-5">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
