import carImg1 from "./2.png";
import carImg2 from "./3.png";
import carImg3 from "./4.png";

const AppMapPage = () => {
    return (
        <div className="map">
            <div className="map__wrapper">
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
                            <input type="radio" id="1" checked></input>
                            <label htmlFor="1" name="car">
                                <p>Стандарт</p>
                                <span>Стоимость</span>
                                <div>150 ₽</div>
                                <img src={carImg1} alt="car"></img>
                            </label>
                            <input type="radio" id="2"></input>
                            <label htmlFor="2" name="car">
                                <p>Премиум</p>
                                <span>Стоимость</span>
                                <div>250 ₽</div>
                                <img src={carImg2} alt="car"></img>
                            </label>
                            <input type="radio" id="3"></input>
                            <label htmlFor="3" name="car">
                                <p>Бизнес</p>
                                <span>Стоимость</span>
                                <div>300 ₽</div>
                                <img src={carImg3} alt="car"></img>
                            </label>
                        </div>
                        <button className="map__cars-button">Заказать</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default AppMapPage;