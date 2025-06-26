import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);

    () => {
      document.documentElement.removeAttribute("data-bs-theme");
    };
  }, [theme]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
