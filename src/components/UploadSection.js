import React, { useState } from 'react';
import uploadsvg from '../assets/upload.svg';

function UploadSection({ onImagesUploaded }) {
  const [highlight, setHighlight] = useState(false);

  // Обработчик выбора файлов при клике
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Преобразуем FileList в массив локальных URL
    const fileUrls = Array.from(files).map((file) => URL.createObjectURL(file));

    // Вызываем колбэк, передавая массив URL
    onImagesUploaded(fileUrls);
  };

  // Для Drag & Drop:
  const handleDragOver = (e) => {
    e.preventDefault();
    setHighlight(true); // Подсвечиваем зону
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setHighlight(false); // Убираем подсветку
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setHighlight(false);
    const files = e.dataTransfer.files;
    if (!files || files.length === 0) return;

    const fileUrls = Array.from(files).map((file) => URL.createObjectURL(file));
    onImagesUploaded(fileUrls);
  };

  return (
    <section className="upload-section">
      <div 
        className={`upload-box ${highlight ? 'highlight' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* 
          Весь <label> растянут на весь блок, 
          поэтому клик в любой точке квадратика => открытие файлового диалога 
        */}
        <label className="upload-label">
          Нажмите или перетащите сюда фото
          <img
          src={uploadsvg}
          alt="upload"
          width="100"
          height="100"
          //className="theme-toggle-icon"
        />
          <input
            type="file"
            multiple
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </label>
      </div>

      <button className="customize-button">
        Обработать
      </button>
    </section>
  );
}

export default UploadSection;
