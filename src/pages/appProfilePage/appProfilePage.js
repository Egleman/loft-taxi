import Inputmask from "inputmask";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect, useState } from "react";
import { cardDetails, savePage } from "../../redux/action";

const AppProfilePage = () => {
    const [cardNumber, setCardNumber] = useState(useSelector(state => state.cardData.number));
    const [name, setName] = useState(useSelector(state => state.cardData.name));
    const [time, setTime] = useState(useSelector(state => state.cardData.time));
    const [secret, setSecret] = useState(useSelector(state => state.cardData.secret));

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
        setCardNumber(e.target.value)
        if (e.target.value.length === 0) {
            setCardNumber('0000  0000  0000  0000')
        }
    }
    const onBlur = (e) => {
        let val = e.target.value;
        val = customTrim(val);
        e.target.value = val;
        setName(val);
    }
    const onName = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-z \-}]$/ig, '')
        setName(e.target.value.replace(/[^a-zA-z \-}]$/ig, ''))
        if (e.target.value.length === 0) {
            setName('Ivan Ivanov');
        }
    }
    const onTime = (e) => {
        setTime(e.target.value);
        if (e.target.value.length === 0) {
            setTime('05/08')
        }
    }
    const onSecret = (e) => {
        setSecret(e.target.value);
    }
    const saveData = () => {
        if (name.toLowerCase() !== 'ivan ivanov' && time !== '05/08' && cardNumber !== '0000 0000 0000 0000' && secret !== 0) {
            dispatch({ type: 'DATACARD', cardNumber: cardNumber, name: name, time: time, secret: secret});
            dispatch(cardDetails());
            dispatch(savePage());
        }
        // dispatch({ type: 'DATACARD', cardNumber: cardNumber, name: name, time: time, secret: secret})
    }
    return (
        <div className="profile">
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
                            <p>{time}</p>
                        </div>
                        <div className="profile__card-middle"><span>{cardNumber}</span></div>
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
                        <div className="profile__card-name"><span>{name}</span></div>
                    </div>
                </div>
                <button type='submit' onClick={saveData}>Сохранить</button>
            </div>
        </div>
    )
}
export default AppProfilePage;