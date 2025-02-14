import React from 'react';

function Offers() {
  return (
    <section className="offers-container">
      <h2 className="section-title">Мы предлагаем</h2>
      <div className="cards-wrapper">
        
        <div className="offer-card">
          <h3 className="card-title">Обычным пользователям:</h3>
          <ul className="card-list">
            <li>Простой и доступный инструмент для раскраски семейных архивных фотографий</li>
            <li>Быстрая обработка изображений и удобный веб-интерфейс для загрузки и скачивания результатов</li>
          </ul>
        </div>

        <div className="offer-card">
          <h3 className="card-title">Историкам и архивистам:</h3>
          <ul className="card-list">
            <li>Восстановление исторических документов и фотографий с сохранением исторической точности и контекста</li>
            <li>Возможность придать новую жизнь архивным материалам, сохраняя их аутентичность.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Offers;
