import React, { useState } from "react";

function ResultGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Переключение на следующую фотографию
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Переключение на предыдущую фотографию
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Скачивание текущей фотографии
  const handleDownload = () => {
    if (images.length > 0) {
      const link = document.createElement("a");
      link.href = images[currentIndex];
      link.download = `photo_${currentIndex + 1}.jpg`;
      link.click();
    }
  };

  return (
    <section className="gallery-container">
      <br></br>
      <h2 className="gallery-title">Результат обработки:</h2>

      <div className="slider-wrapper">
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.4s ease",
          }}
        >
          {images.length > 0 ? (
            images.map((imgSrc, idx) => (
              <div className="slide" key={idx}>
                <img src={imgSrc} alt={`Обработанное ${idx}`} />
              </div>
            ))
          ) : (
            <div className="slide">Загрузите фотографии</div>
          )}
        </div>
      </div>

      <div className="nav-buttons">
        <button className="nav-button" onClick={handlePrev}>
          ‹
        </button>
        <button className="nav-button" onClick={handleNext}>
          ›
        </button>
      </div>

      <button className="download-button" onClick={handleDownload}>
        Скачать
      </button><br></br>
    </section>
  );
}

export default ResultGallery;