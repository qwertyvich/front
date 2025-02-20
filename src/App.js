import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import UploadSection from "./components/UploadSection";
import Offers from "./components/Offers";
import ResultGallery from "./components/ResultGallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Состояние для темы (dark/light)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  // Устанавливаем тему в localStorage и применяем её
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Переключение темы
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Состояние для загруженных изображений
  const [processedImages, setProcessedImages] = useState([]);

  // Обработчик загрузки файлов (полная замена изображений)
  const handleImagesUploaded = (newImages) => {
    setProcessedImages(newImages);
  };

  return (
    <div className="app-container">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        {/* Основные секции */}
        <IntroSection />
        <UploadSection onImagesUploaded={handleImagesUploaded} />
        <Offers />
        <ResultGallery images={processedImages} />
      </main>
      <Footer />
    </div>
  );
}

export default App;