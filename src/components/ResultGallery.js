import React, { useState, useEffect } from 'react';

function ResultGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Если галерея пустая, показываем заглушку
  if (!images || images.length === 0) {
    return (
      <section className="gallery-container">
        <h2 className="gallery-title">Результат обработки:</h2>
        <p className="no-images-text">Нет доступных изображений</p>
      </section>
    );
  }

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Сброс анимации после завершения перехода
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 300); // Время анимации
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">Результат обработки:</h2>

      <div className="gallery-wrapper">
        <button onClick={handlePrev} className="nav-button">&lt;</button>
        
        <div className="slider">
          <div
            className="slides"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 0.3s ease' : 'none',
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img
                  src={image}
                  alt={`Результат ${index + 1}`}
                  className="main-image"
                />
              </div>
            ))}
          </div>
        </div>
        
        <button onClick={handleNext} className="nav-button">&gt;</button>
      </div>

      <div className="footer-section">
        <button className="download-button">
          <span className="download-icon">↓</span> Скачать
        </button>
      </div>
    </section>
  );
}

export default ResultGallery;

// import React from 'react';

// /**
//  * Компонент галереи, принимает:
//  *   - images (array): список URL изображений
//  *   - currentIndex (number): индекс текущего изображения
//  *   - onPrev (function): обработчик нажатия "назад"
//  *   - onNext (function): обработчик нажатия "вперёд"
//  */
// function ResultGallery({ images, currentIndex, onPrev, onNext }) {
//   // Если галерея пустая, показываем заглушку
//   if (!images || images.length === 0) {
//     return (
//       <section className="gallery-container">
//         <h2>Результат обработки:</h2>
//         <p>Нет доступных изображений</p>
//       </section>
//     );
//   }

//   const currentImage = images[currentIndex];

//   return (
//     <section className="gallery-container">
//       <h2>Результат обработки:</h2>

//       <div className="gallery-wrapper">
//         <button onClick={onPrev} className="nav-button">&lt;</button>
        
//         <div className="image-wrapper">
//           <img
//             src={currentImage}
//             alt={`Результат ${currentIndex + 1}`}
//             className="main-image"
//           />
//         </div>
        
//         <button onClick={onNext} className="nav-button">&gt;</button>
//       </div>
      
//       <button className="download-button">
//         Скачать
//       </button>
//     </section>
//   );
// }

// export default ResultGallery;
