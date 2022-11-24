import { useState } from "react";
import { profile } from '../../redux/action';
import { useDispatch, useSelector } from "react-redux";

import carImg1 from "../../resources/img/2.png";
import carImg2 from "../../resources/img/3.png";
import carImg3 from "../../resources/img/4.png";

const ZeroCard = () => {
    const dispatch = useDispatch();
    return (
        <div className="map__card map__card_padding">
            <div className="map__card-title">Заполните платежные данные</div>
            <div className="map__card-subtitle">Укажите информацию о банковской карте, чтобы сделать заказ.</div>
            <button className="map__cars-button" onClick={() => dispatch(profile())}>Перейти в профиль</button>
        </div>
    )
}

const DoneCard = () => {
    const [count, setCount] = useState(1);

    const changeCount = (value) => {
        setCount(count => value)
    }

    return (
        <div className="map__card">
            <div className="map__card-input">
                <input type="text" placeholder="Откуда" list="text_editors-1"></input>
                    <datalist id="text_editors-1">
                    <option value="Пулково (LED)">Пулково (LED)</option>
                    <option value="Эрмитаж">Эрмитаж</option>		
                </datalist>
            </div>
            <div className="map__card-input">
                <input type="text" placeholder="Куда" list="text_editors-2"></input>
                    <datalist id="text_editors-2">
                    <option value="Пулково (LED)">Пулково (LED)</option>
                    <option value="Эрмитаж">Эрмитаж</option>		
                </datalist>
            </div>
            <div className="map__cars">
                <div className="map__cars-wr">
                    <input type="radio" name="car" id="1" onChange={() => changeCount(1)} checked={count === 1 ? true : false}></input>
                    <label htmlFor="1">
                        <p>Стандарт</p>
                        <span>Стоимость</span>
                        <div>150 ₽</div>
                        <img src={carImg1} alt="car"></img>
                    </label>
                    <input type="radio" name="car" id="2" onChange={() => changeCount(2)}  checked={count === 2 ? true : false}></input>
                    <label htmlFor="2">
                        <p>Премиум</p>
                        <span>Стоимость</span>
                        <div>250 ₽</div>
                        <img src={carImg2} alt="car"></img>
                    </label>
                    <input type="radio" name="car" id="3" onChange={() => changeCount(3)}  checked={count === 3 ? true : false}></input>
                    <label htmlFor="3">
                        <p>Бизнес</p>
                        <span>Стоимость</span>
                        <div>300 ₽</div>
                        <img src={carImg3} alt="car"></img>
                    </label>
                </div>
                <button className="map__cars-button">Заказать</button>
            </div>
        </div>
    )
}

const AppMapPage = () => {
    const fullCardDetails = useSelector(state => state.cardDetails) ? <DoneCard/> : <ZeroCard/>;
    return (
        <div className="map">
            <div className="map__wrapper">
                {fullCardDetails}
            </div>
            
        </div>
    )
}
export default AppMapPage;