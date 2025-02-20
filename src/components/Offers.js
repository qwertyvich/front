import React from "react";

function Offers() {
  return (
    <section className="offers-container">
      <h2 className="offers-title">Мы предлагаем</h2>
      <div className="cards-wrapper">
        <div className="offer-card">
          <h3>Обычным пользователям:</h3>
          <ul>
            <li>Простой и доступный инструмент для раскраски семейных фотографий</li>
            <li>Быстрая обработка изображений и удобный веб-интерфейс для загрузки и скачивания результатов</li>
          </ul>
        </div>
        <div className="offer-card">
          <h3>Историкам и архивистам:</h3>
          <ul>
            <li>Восстановление исторических документов и фотографий с сохранением исторической точности и контекста</li>
            <li>Возможность придать новую жизнь архивным материалам, сохраняя их аутентичность.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Offers;