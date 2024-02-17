import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login"; // Use PascalCase for component names
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authState } from "./components/Recoil/recoil";
function App() {
  const [isAuth, setIsAuth] = useRecoilState(authState);
  useEffect(() => {
    const token = localStorage.getItem("Auth");

    const checkAuth = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/auth/me", {
          headers: { authorization: `Bearer ${token}` },
        });
        setIsAuth(response.status === 200);
      } catch (error) {
        setIsAuth(false);
        console.error("Error while checking authentication:", error);
      }
    };
    if (token) {
      checkAuth();
    } else {
      setIsAuth(false);
    }
  }, [setIsAuth]); // Include setIsAuth in the dependency array

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={isAuth ? <Home /> : <Navigate to="/" />} //
        />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
