import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Inputmask from "inputmask";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import carImg1 from "../../resources/img/2.png";
import carImg2 from "../../resources/img/3.png";
import carImg3 from "../../resources/img/4.png";
import AppHeader from "../../components/appHeader/AppHeader";

// mapboxgl.workerClass = require("worker-loader mapbox-gl/dist/mapbox-gl-csp-worker").default;
// mapboxgl.accessToken = 'pk.eyJ1IjoiZWdsZW1hbiIsImEiOiJjbGFpZXAyNDgwMjZpM29wanhpYnFjcjQ0In0.R9XTXYU3MEZWmRhOJlFN5Q';

const ZeroCard = () => {
    const dispatch = useDispatch();
    // const styles = useSelector(state => state.modal) ? {display: 'none'} : null;
    return (
        <div className="map__card map__card_padding">
            <div className="map__card-title">Заполните платежные данные</div>
            <div className="map__card-subtitle">Укажите информацию о банковской карте, чтобы сделать заказ.</div>
            <button className="map__cars-button">Перейти в профиль</button>
        </div>
    )
}
const DoneCard = () => {
    const [count, setCount] = useState(1);

    const changeCount = (value) => {
        setCount(count => value)
    }

    // const style = useSelector(state => state.modal) ? {display: 'none'} : null;
    return (
        <div className="map__card">
            <div className="map__card-input">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="7" fill="black"/>
                </svg>
                <input type="text" placeholder="Откуда" list="text_editors-1"></input>
                <datalist id="text_editors-1">
                    <option value="Пулково (LED)">Пулково (LED)</option>
                    <option value="Эрмитаж">Эрмитаж</option>		
                </datalist>
            </div>
            <div className="map__card-input">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1_300" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                    <path d="M15.7272 0.0350297L0.373266 5.69174C0.130027 5.78306 -0.0243204 6.02791 0.0031552 6.28812C0.0298227 6.54914 0.230232 6.75763 0.489633 6.79399L8.55045 7.94554L9.702 16.0064C9.73836 16.2658 9.94766 16.467 10.2071 16.4936C10.3832 16.513 10.5529 16.4484 10.6717 16.3296C10.7291 16.2722 10.7744 16.2027 10.8034 16.1235L16.4601 0.769594C16.5377 0.559488 16.486 0.325138 16.3284 0.167559C16.1709 0.00997888 15.9365 -0.0417397 15.7272 0.0350297Z" fill="#FDBF5A"/>
                    </mask>
                    <g mask="url(#mask0_1_300)">
                    <path d="M15.7272 0.0350297L0.373266 5.69174C0.130027 5.78306 -0.0243204 6.02791 0.0031552 6.28812C0.0298227 6.54914 0.230232 6.75763 0.489633 6.79399L8.55045 7.94554L9.702 16.0064C9.73836 16.2658 9.94766 16.467 10.2071 16.4936C10.3832 16.513 10.5529 16.4484 10.6717 16.3296C10.7291 16.2722 10.7744 16.2027 10.8034 16.1235L16.4601 0.769594C16.5377 0.559488 16.486 0.325138 16.3284 0.167559C16.1709 0.00997888 15.9365 -0.0417397 15.7272 0.0350297Z" fill="#FDBF5A"/>
                    <path d="M17.3583 -0.77063L8.35828 8.22937C8.85828 11.5627 9.85828 18.3294 9.85828 18.7294C9.85828 19.1294 13.8583 18.896 15.8583 18.7294L17.3583 -0.77063Z" fill="#E5AB4C"/>
                    </g>
                </svg>
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
const ProfileModal = () => {
    // const [cardNumber, setCardNumber] = useState(useSelector(state => state.cardData.number));
    // const [name, setName] = useState(useSelector(state => state.cardData.name));
    // const [time, setTime] = useState(useSelector(state => state.cardData.time));
    // const [secret, setSecret] = useState(useSelector(state => state.cardData.secret));
    const [save, setSave] = useState(false);

    const dispatch = useDispatch();

    const inputNumber = useRef();
    const inputTime = useRef();
    const inputSecret = useRef();

    let numberCard = new Inputmask({
        mask: '9999 9999 9999 9999',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        jitMasking: true,
        inputmode: 'tel'
    });
    let timeCard = new Inputmask({
        mask: '99/99',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        jitMasking: true,
        inputmode: 'tel'
    });
    let secretCard = new Inputmask({
        mask: '999',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        jitMasking: true,
        inputmode: 'tel'
    });
    useEffect(() => {
        numberCard.mask(inputNumber.current);
        timeCard.mask(inputTime.current);
        secretCard.mask(inputSecret.current)
    },)
    const customTrim = (val) => {
        val = val.replace(/\s+/g, " ");
        val = val.replace(/-+/g, '-');
        val = val.replace(/\(+/g, '(');
        val = val.replace(/\)+/g, ')');
        val = val.replace(/^[ |\-+]/g, '');
        val = val.replace(/[ |\-+]$/g, '');
        return val;
    }
    const onNumberCard = (e) => {
        // setCardNumber(e.target.value)
        // if (e.target.value.length === 0) {
        //     setCardNumber('0000  0000  0000  0000')
        // }
    }
    const onBlur = (e) => {
        // let val = e.target.value;
        // val = customTrim(val);
        // e.target.value = val;
        // setName(val);
    }
    const onName = (e) => {
        // e.target.value = e.target.value.replace(/[^a-zA-z \-}]$/ig, '')
        // setName(e.target.value.replace(/[^a-zA-z \-}]$/ig, ''))
        // if (e.target.value.length === 0) {
        //     setName('Ivan Ivanov');
        // }
    }
    const onTime = (e) => {
        // setTime(e.target.value);
        // if (e.target.value.length === 0) {
        //     setTime('05/08')
        // }
    }
    const onSecret = (e) => {
        // setSecret(e.target.value);
    }
    const saveData = () => {
        // if (name.toLowerCase() !== 'ivan ivanov' && time !== '05/08' && cardNumber !== '0000 0000 0000 0000' && secret !== 0) {
        //     dispatch({ type: 'DATACARD', cardNumber: cardNumber, name: name, time: time, secret: secret});
        //     dispatch(cardDetails());
        //     setSave(true);
        //     // dispatch(savePage());
        // }
        // dispatch({ type: 'DATACARD', cardNumber: cardNumber, name: name, time: time, secret: secret})
        
    }
    // const style = useSelector(state => state.modal) ? {display: 'block', zIndex: '1'} : {display: 'none'};
    // let styleProfile = null;
    // let styleSave = null;
    // // let modal = useSelector(state => state.modal);
    // if (modal && save) {
    //     styleProfile = {display: 'none'}
    //     styleSave = {display: 'block', zIndex: '1'}
    // } else {
    //     styleProfile = {display: 'block', zIndex: '1'}
    //     styleSave = {display: 'none'}
    // }
    return (
        <>
            <div className="profile__wrapper">
                <div className="profile__title">Профиль</div>
                <div className="profile__subtitle">Ввдеите платежные данные</div>
                <div className="profile__flex">
                    <form className='profile__form' method='post'> 
                        <label htmlFor='name'>Имя владельца</label>
                        <input type="text" name='name' placeholder='Ivan Ivanov' className="profile__form-name" onBlur={(e) => onBlur(e)} onInput={(e) => onName(e)} id='name'></input>
                        <label htmlFor='password'>Номер карты</label>
                        <input type="tel" name="number" placeholder='5545  2300  3432  4521' id='number' ref={inputNumber} onInput={(e) => onNumberCard(e)}></input>
                        <div className="profile__form-flex">
                            <div>
                                <label htmlFor='time'>MM/YY</label>
                                <input type="text" name='time' placeholder='05/08' id='time' ref={inputTime} onInput={(e) => onTime(e)}></input>
                            </div>
                            <div>
                                <label htmlFor='secret'>CVC</label>
                                <input type="text" name='secret' placeholder='667'  id='secret' ref={inputSecret} onInput={(e) => onSecret(e)}></input>
                            </div>
                        </div>
                    </form>
                    <div className="profile__card">
                        <div className="profile__card-top">
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5 33C25.6127 33 33 25.6127 33 16.5C33 14.5863 32.6742 12.7487 32.0751 11.0396L11.0396 32.0751C12.7487 32.6742 14.5863 33 16.5 33ZM3.16676 26.2217L11.2627 18.1258L1.91481 8.7779C0.692428 11.0819 0 13.7101 0 16.5C0 20.1349 1.17536 23.4952 3.16676 26.2217ZM8.7779 1.91481L18.1258 11.2627L26.2217 3.16676C23.4952 1.17536 20.1349 0 16.5 0C13.7101 0 11.0819 0.692428 8.7779 1.91481Z" fill="#FDBF5A"/>
                                <path d="M5.43872 5.48035L7.4804 7.52203" stroke="#FDBF5A" strokeWidth="2"/>
                                <path d="M9.8064 26.4485L7.76471 28.4902" stroke="#FDBF5A" strokeWidth="2"/>
                                <path d="M13.446 22.5662L11.4044 24.6078" stroke="#FDBF5A" strokeWidth="2"/>
                                <path d="M17.0859 18.6838L15.0443 20.7255" stroke="#FDBF5A" strokeWidth="2"/>
                                <path d="M24.3652 10.9191L22.3235 12.9608" stroke="#FDBF5A" strokeWidth="2"/>
                                <path d="M28.0049 7.0368L25.9632 9.07849" stroke="#FDBF5A" strokeWidth="2"/>
                                <path d="M9.2207 9.22058L11.2624 11.2623" stroke="#FDBF5A" strokeWidth="2"/>
                                <path d="M13.3457 13.3456L15.3874 15.3873" stroke="#FDBF5A" strokeWidth="2"/>
                                <path d="M20.7256 14.8015L18.6839 16.8431" stroke="#FDBF5A" strokeWidth="2"/>
                            </svg>
                            <p>
                            {/* {time} */}
                            </p>
                        </div>
                        <div className="profile__card-middle">
                            <span>
                            {/* {cardNumber} */}
                            </span>
                        </div>
                        <div className="profile__card-bottom">
                            <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 26.5H17.5V4.5H29C29.1667 3.33333 28.5 0.8 24.5 0H11.5V26.5Z" fill="#E1E1E1"/>
                                <path d="M3 0H9V4.5H0C0 3.33333 0.6 0.8 3 0Z" fill="#E1E1E1"/>
                                <path d="M3 26H9V21.5H0C0 22.6667 0.6 25.2 3 26Z" fill="#E1E1E1"/>
                                <path d="M26 26H20V21.5H29C29 22.6667 28.4 25.2 26 26Z" fill="#E1E1E1"/>
                                <path d="M0 6.5H9V11.5H0V6.5Z" fill="#E1E1E1"/>
                                <path d="M20 6.5H29V11.5H20V6.5Z" fill="#E1E1E1"/>
                                <path d="M0 13.5H9V18.5H0V13.5Z" fill="#E1E1E1"/>
                                <path d="M20 13.5H29V18.5H20V13.5Z" fill="#E1E1E1"/>
                            </svg>
                            <svg width="46" height="28" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g style={{mixBlendMode: 'multiply'}}>
                                <circle cx="14" cy="14" r="14" fill="#F1F1F1"/>
                                </g>
                                <g style={{mixBlendMode: 'multiply'}}>
                                <circle cx="32" cy="14" r="14" fill="#F1F1F1"/>
                                </g>
                            </svg>
                        </div>
                        <div className="profile__card-name">
                            <span>
                                {/* {name} */}
                            </span>
                        </div>
                    </div>
                </div>
                <button type='submit' onClick={saveData}>Сохранить</button>
            </div>
            <div className="profile__wrapper">
                <div className="profile__title">Профиль</div>
                <div className="profile__subtitle profile__subtitle_center">Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
                <button type='submit' onClick={() => {
                    // dispatch((hidden()))
                    // setSave(false);
                }}>Перейти на карту</button>
            </div>
        </>
        
    )
}
const AppMapPage = () => {
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(30.3056504);
    const [lat, setLat] = useState(59.9429126);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
            const map = new mapboxgl.Map({
            container: mapContainer.current,
            accessToken: 'pk.eyJ1IjoiZWdsZW1hbiIsImEiOiJjbGFpZXAyNDgwMjZpM29wanhpYnFjcjQ0In0.R9XTXYU3MEZWmRhOJlFN5Q',
            style: 'mapbox://styles/egleman/claierb1f000h15mmo0xqzw88',
            center: [lng, lat],
            zoom: zoom,
        })
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
    }, []);

    // const fullCardDetails = useSelector(state => state.cardDetails) ? <DoneCard/> : <ZeroCard/>;
    // const stylesMap = useSelector(state => state.modal) ? {opacity: '0.5'} : null;
    // const stylesWrapper = useSelector(state => state.modal) ? {background: '#000'} : null;
    // const modal = useSelector(state => state.modal) ? <ProfileModal/> : null;
    return (
        <>  
            <AppHeader/>
            <div className="map">
                <div className="map__wrapper">
                    {/* {fullCardDetails}
                    {modal} */}
                </div>
                <div ref={mapContainer} className="map-container"></div>
            </div>
        </>
    )
}
export default AppMapPage;