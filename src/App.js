import React, { useState } from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import UploadSection from './components/UploadSection';
import Offers from './components/Offers';
import ResultGallery from './components/ResultGallery';
import Footer from './components/Footer';

/**
 * Основной компонент приложения, который объединяет все секции:
 * - Header (шапка + переключатель темы)
 * - IntroSection (текст, пример фото "до/после")
 * - UploadSection (загрузка файлов + "кастомизация обработки")
 * - Offers (карточки "Мы предлагаем")
 * - ResultGallery (галерея с кнопками листания)
 * - Footer
 */
function App() {
  // Тема: 'dark' или 'light'
  const [theme, setTheme] = useState('dark');

  // Список загруженных файлов (превращаем в LocalURL)
  const [uploadedImages, setUploadedImages] = useState([]);

  // Индекс текущего изображения в галерее
  const [currentIndex, setCurrentIndex] = useState(0);

  // Пример "обработанных" изображений
  // В реальном приложении вы бы заполняли этот массив результатами с сервера
  const sampleProcessedImages = [
    'https://via.placeholder.com/200x300?text=Результат+1',
    'https://via.placeholder.com/200x300?text=Результат+2',
    'https://via.placeholder.com/200x300?text=Результат+3'
  ];

  // Для демонстрации будем объединять "обработанные" и "загруженные" в одном массиве галереи
  // В реальном проекте логика может быть другая, например показывать только обработанные
  const galleryImages = [...uploadedImages, ...sampleProcessedImages];

  // Переключение темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Перелистывание вперёд
  const nextImage = () => {
    if (galleryImages.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Перелистывание назад
  const prevImage = () => {
    if (galleryImages.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Изменяем класс body, чтобы стили темы распространялись
  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <IntroSection />

        <UploadSection onImagesUploaded={setUploadedImages} />

        <Offers />

        <ResultGallery
          images={galleryImages}
          currentIndex={currentIndex}
          onPrev={prevImage}
          onNext={nextImage}
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
