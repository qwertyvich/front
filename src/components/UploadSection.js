import React, { useState } from "react";
import uploadIcon from "../assets/upload.svg";

function UploadSection({ onImagesUploaded }) {
  const [grain, setGrain] = useState(50);
  const [sharpness, setSharpness] = useState(50);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const fileUrls = Array.from(files).map((file) => URL.createObjectURL(file));
    onImagesUploaded(fileUrls);
  };

  return (
    <section className="upload-section">
      {/* Блок превью фотографий */}
      <div className="upload-images-preview">
        <img
          src="https://i.imgur.com/2zyaItV.png"
          alt="Пример ч/б"
        />
        <img
          src="https://i.imgur.com/UMeXmRp.png"
          alt="Пример цветной"
        />
      </div>

      {/* Блок загрузки и настроек */}
      <div className="upload-controls">
        <div className="upload-box">
          <label className="upload-label">
            <img src={uploadIcon} alt="Upload" className="upload-icon" />
            Загрузить файлы
            <input
              type="file"
              multiple
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </label>
        </div>

        <div className="customize-sliders">
          <div className="slider-row">
            <label>Зернистость:</label>
            <input
              type="range"
              min="0"
              max="100"
              value={grain}
              onChange={(e) => setGrain(e.target.value)}
            />
          </div>

          <div className="slider-row">
            <label>Чёткость:</label>
            <input
              type="range"
              min="0"
              max="100"
              value={sharpness}
              onChange={(e) => setSharpness(e.target.value)}
            />
          </div>
        </div>

        <button className="customize-button">Обработать изображение</button> 
      </div>
    </section>
  );
}

export default UploadSection;