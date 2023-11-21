
import './styles/index.scss';
import { Link, Route, Routes } from "react-router-dom";

import { Suspense } from "react";
import { useTheme } from '@/app/providers/themeProviders/useTheme';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';


export const App = () => {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>THEME</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  
  );
};