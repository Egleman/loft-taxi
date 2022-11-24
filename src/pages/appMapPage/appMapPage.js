import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 
import { useRef, useEffect, useState, useContext } from "react";
import dataContext from '../../context';
import PropTypes from "prop-types";

import carImg1 from "../../resources/img/2.png";
import carImg2 from "../../resources/img/3.png";
import carImg3 from "../../resources/img/4.png";

const ZeroCard = () => {
    const [context, setContext] = useContext(dataContext);
    return (
        <div className="map__card map__card_padding">
            <div className="map__card-title">Заполните платежные данные</div>
            <div className="map__card-subtitle">Укажите информацию о банковской карте, чтобы сделать заказ.</div>
            <button className="map__cars-button" onClick={() => setContext({...context, page: 'Profile'})}>Перейти в профиль</button>
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

const AppMapPage = () => {
    const [context, setContext] = useContext(dataContext);

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
});


    const fullCardDetails = context.cardDetails ? <DoneCard/> : <ZeroCard/>;
    return (
        <div className="map">
            <div className="map__wrapper">
                {fullCardDetails}
            </div>
            <div ref={mapContainer} className="map-container"></div>
        </div>
    )
}
AppMapPage.propTypes = {
    pageMap: PropTypes.string,
    pageProfile: PropTypes.string,
    pageLogin: PropTypes.string
}
export default AppMapPage;