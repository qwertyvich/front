import React from 'react';

function IntroSection() {
  return (
    <section className="intro-section">
      <h1 className="intro-title">Название сервиса</h1>
      <p className="subtitle">
        Восстановление цвета чёрно-белых фотографий
      </p>
      <p className="description">
        Хотите вернуть к жизни старые чёрно-белые фотографии, придав им
        яркие и насыщенные цвета? С помощью нашего приложения это стало
        возможным! Наше решение идеально подходит для различных целей и задач.
      </p>
      <div className="example-images">
        <img
          src="https://i.imgur.com/2zyaItV.png"
          alt="ЧБ фото"
          className="example-image"
        />
        <img
          src="https://i.imgur.com/UMeXmRp.png"
          alt="Пример раскрашенного фото"
          className="example-image"
        />
      </div>
    </section>
  );
}

export default IntroSection;
