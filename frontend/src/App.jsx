import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./index.css";
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Navbar from "./Components/NavBar";
import PrivateRoute from "./Components/PrivateRoute";
import CreateEvent from "./Components/CreateEvent";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    window.addEventListener("storage", loadUser); 
    loadUser();

    return () => window.removeEventListener("storage", loadUser);
  }, []);


  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/dashboard" element={
  <PrivateRoute user={user}>
    <Dashboard />
  </PrivateRoute>
} />
 <Route path="/create-event" element={
          <PrivateRoute user={user}>
            <CreateEvent />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;