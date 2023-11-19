import Arrow from '../image/icon-arrow.png'
import '../style/globalInfo.css'


const GlobalInfo = () =>{
    return(
        <>
        <div class="general-button">
            <div class="dangers-info">
                <div class="danger" >
                    <div class="danger-icon"  >
                    </div>
                </div>
                <span>Загрози:</span>
                <div class="dangers">
                    
                <div class="danger" >
                    <div class="danger-icon">
                    </div>
                    <p class="danger-count air">3</p>
                </div></div> 
            </div>
            <button class="icon1">
                <img src={Arrow} alt="icon"/>
            </button>
        </div>
        <div class="general-aside">
        <div class="city-item" >
            <div class="text">
                <div class="title">Дніпропетровська область</div>
                <div class="description air">Повітряна тривога</div>
                <div class="date">
                    <p class="time">Cьогодні о 10:37</p>
                    <p class="duration">195 д 15 год 37 хв</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="city-items">
            
            <div class="city-item">
            <div class="text">
                <div class="title">Донецька область</div>
                <div class="description air">Повітряна тривога</div>
                <div class="date">
                    <p class="time">Сьогодні о о 15:19</p>
                    <p class="duration">19хв. </p>
                    </div>
                </div>
            </div><div class="city-item">
            <div class="text">
                <div class="title">Автономна Республіка Крим</div>
                <div class="description air">Повітряна тривога</div>
                <div class="date">
                    <p class="time">11.12 о 00:22</p>
                    <p class="duration">342д. 15год. 17хв. </p>
                    </div>
                </div>
            </div><div class="city-item">
            <div class="icon">
            <div class="text">
                <div class="title">Луганська область</div>
                <div class="description air">Повітряна тривога</div>
                <div class="date">
                    <p class="time">04.04 о 19:45</p>
                    <p class="duration">592д. 20год. 54хв. </p>
                    </div>
                </div>
            </div></div>
        </div>
</>
    )
}

export default GlobalInfo;

