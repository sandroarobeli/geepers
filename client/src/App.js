import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme/theme";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

const isLoggedIn = false; // temporary

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="" exact element={isLoggedIn ? <Home /> : <Register />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate replace to="" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
