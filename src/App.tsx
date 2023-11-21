
import './styles/index.scss';
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense, useMemo } from "react";
import { useTheme } from './theme/useTheme';


export const App = () => {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>THEME</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  
  );
};