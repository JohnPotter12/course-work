import Arrow from "../image/icon-arrow.png";
import "../style/globalInfo.css";
import axios from "axios";

const GlobalInfo = ({ isOpenSide, onCloseSide, data, setData }) => {
  const citys = [
    "Vinnytsia",
    "Volynsk",
    "Dnipro",
    "Donetsk",
    "Zhytomyr",
    "Zakarpattia",
    "Zaporizhzhia",
    "Ivano-Frankivsk",
    "Kyivska",
    "Kirovohradsk",
    "Luhansk",
    "Lviv",
    "Mykolayivska",
    "Odesa",
    "Poltava",
    "Rivne",
    "Sumy",
    "Ternopilsk",
    "Kharkivska",
    "Khersonsk",
    "Khmelnytska",
    "Cherkassy",
    "Chernivtsi",
    "Chernihivska",
  ];

  const oblast = [
    "Вінницька область",
    "Волинська область",
    "Дніпропетровська область",
    "Донецька область",
    "Житомирська область",
    "Закарпатська область",
    "Запорізька область",
    "Івано-Франківська область",
    "Київська область",
    "Кіровоградська область",
    "Луганська область",
    "Львівська область",
    "Миколаївська область",
    "Одеська область",
    "Полтавська область",
    "Рівненська область",
    "Сумська область",
    "Тернопільська область",
    "Харківська область",
    "Херсонська область",
    "Хмельницька область",
    "Черкаська область",
    "Чернівецька область",
    "Чернігівська область",
  ];

  const controller = (count) => {
    for (let i = 0; i < citys.length; i++) {
      if (citys[i] === count) {
        return oblast[i];
      }
    }
  };

  return (
    <div>
      <div className={`sidenav ${isOpenSide ? "open" : ""}`}>
        <button onClick={onCloseSide} className="close-btn">
          <img src={Arrow} alt=""/>
        </button>
        {data.map((item) => (
          <div class="city-items" key={item._id}>
            <div class="city-item">
              <div class="text">
                <div className="title-text">
                  <div class="title">{controller(item.country)}</div>
                  <div class="descriptions">Повітряна тривога</div>
                </div>
                <div class="date">
                  <p class="time">{item.startAlarm}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalInfo;
