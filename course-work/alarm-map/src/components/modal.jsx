import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../style/modal.css';
import axios from 'axios'
import Close from '../image/close_icon.png'

const Modal = ({ isOpen, onClose, children, country, setIsModalOpen }) => {

    const [data, setData] = useState([])

    const citys = ["Vinnytsia",
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
    "Chernihivska"]

    const oblast = ["Вінницька область",
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
        "Чернігівська область"]

    if(!setIsModalOpen){
        data = []
    }
    async function dataHandle() {
        try {
            if (country !== '') {
                const response = await axios.get(`http://localhost:5000/withdraw/history/${country}`)
                    .then((response) => {
                        console.log(response);
                        setData(response.data);
                    }).catch((error) => {
                        console.log(error);
                    })
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dataHandle()
        console.log(data.length);
        if(data.length === 0){
            dataHandle()
        }
    }, [country]);

    const controller = (count) => {
        for(let i = 0; i < citys.length; i++){
            if(citys[i] === count){
                return oblast[i]
            }
        }
    }

    if (!isOpen) {
        return null;
    } else {
        return ReactDOM.createPortal(
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className='header-modal'>
                        <span className='name-modal'>sads</span>
                        <button onClick={onClose} className="close-button">
                            <img src={Close} alt='' />
                        </button>
                    </div>
                    <hr />
                    <div className='main'>
                        <div className="items-head">
                            <div className="title-type">Тип тривоги</div>
                            <div className="title">Початок</div>
                            <div className="title">Відбій</div>
                        </div>
                    </div>
                    <div className="items" id="regionItems">
                        <div className='body-alarm-data'>{data !== '' ? 
                            <div className="item region" id="regionItem">
                        {data.map((item) => (
                            <div className="item-top" key={item._id}>
                                <div className="info">
                                    <div className="text">
                                        <div className="description air" id="alertType">Повітряна тривога</div>
                                        <div className="region">{controller(item.country)}</div>
                                    </div>
                                </div>
                                <div className="duration">
                                    <span id="time">{item.startAlarm} </span>
                                </div>
                                <div className="count">
                                    <span id="durationTime"> {item.allClearAlarm} </span>
                                </div>
                            </div>
                            ))}
                        </div> : <p>Loading</p>}
                        <div className="item region" id="regionItem">
                            <div className="item-top">
                                <div className="info">
                                    <div className="text">
                                        <div className="description air" id="alertType">Повітряна тривога</div>
                                        <div className="region">Черкаська область</div>
                                    </div>
                                </div>
                                <div className="duration">
                                    <span id="time">15 листопада 00:08 - 00:22</span>
                                </div>
                                <div className="count">
                                    <span id="durationTime">13 хв. </span>
                                </div>
                            </div>
                        </div><div className="item region" id="regionItem">
                            <div className="item-top">
                                <div className="info">
                                    <div className="text">
                                        <div className="description air" id="alertType">Повітряна тривога</div>
                                        <div className="region">Черкаська область</div>
                                    </div>
                                </div>
                                <div className="duration">
                                    <span id="time">14 листопада 14:38 - 17:21</span>
                                </div>
                                <div className="count">
                                    <span id="durationTime">02 год. 43 хв. </span>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>

                    {children}
                </div>
            </div>,
            document.body
        );
    }
};

export default Modal;


// Vinnytsia
// Volynsk
// Dnipropetrovsk
// Donetsk
// Zhytomyr
// Zakarpattia
// Zaporizhzhia
// Ivano-Frankivsk
// Kyivska
// Kirovohradsk
// Luhansk
// Lviv
// Mykolayivska
// Odesa
// Poltava
// Rivne
// Sumy
// Ternopilsk
// Kharkivska
// Khersonsk
// Khmelnytska
// Cherkassy
// Chernivtsi
// Chernihivska