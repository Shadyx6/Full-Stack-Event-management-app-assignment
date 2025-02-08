import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../utils/api";

const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = await registerUser({ name, email, password });

    if (data.token) {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      navigate("/dashboard");
    } else {
      alert(data.message || "Registration failed");
    }
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleRegister} className="mt-4">
        <input type="text" placeholder="Name" className="p-2 border rounded w-full" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" className="p-2 border rounded w-full mt-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="p-2 border rounded w-full mt-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded mt-4 text-white">Register</button>
      </form>
    </div>
  );
};

export default Register;
