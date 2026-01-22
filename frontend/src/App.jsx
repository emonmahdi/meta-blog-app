import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";
import BlogProvider from "./context/BlogContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BlogProvider>
          <Navbar />
          <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
            <Outlet />
          </div>
          <Footer />
        </BlogProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
