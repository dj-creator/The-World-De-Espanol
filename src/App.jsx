import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUp from "./components/signUp";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyProfile from "./components/myProfile";
import CreateBlog from "./components/createBlog";
import Login from "./components/login";
import Footer from "../src/components/footer";
import MainBlog from "./components/MainBlog";


function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);
  
  return (
    <>
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/signup" element={<SignUp setUser={setUser} />} />
          <Route  path="/profile" element={<MyProfile user={user} />} /> 
          <Route  path="/create" element={<CreateBlog user={user} />} />
          <Route  path="/login" element={< Login setUser={setUser} />}  />
          <Route path="/blog/:id" element={< MainBlog />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
