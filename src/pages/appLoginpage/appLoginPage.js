// import './appLoginPage';
import {register, map} from '../../redux/action';
import { useDispatch } from "react-redux";
import { useRef, useEffect, useState } from "react";

const AppLoginPage = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('test@test.com');
    const [password, setPassword] = useState('123123');
    const [errorLabelLogin, setErrorLabelLogin] = useState(false);
    const [errorLabelPassword, setErrorLabelPassword] = useState(false);
    const [errorForm, setErrorForm] = useState(false);

    const inputs = {
        login: '',
        password: ''
    }
    const focusLogin = () => {
        setErrorLabelLogin(false);
    }
    const focusPassword = () => {
        setErrorLabelPassword(false);
    }
    useEffect(() => {
        setTimeout(() => {
            setErrorLabelLogin(false);
        }, 3000)
    }, [errorLabelLogin])

    useEffect(() => {
        setTimeout(() => {
            setErrorLabelPassword(false);
        }, 3000)
    }, [errorLabelPassword])
    useEffect(() => {
        setTimeout(() => {
            setErrorForm(false);
        }, 300)
    }, [errorLabelPassword])

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputs.login.length === 0) {
            setErrorLabelLogin(true);
            setErrorForm(true)
        }
        if (inputs.password.length === 0) {
            setErrorLabelPassword(true);
            setErrorForm(true)
        }
        if (inputs.login === login && inputs.password === password) {
            dispatch(map());
        }
    }
    return (
        <div className='login'>
            <div className='login__wrapper' style={errorForm ? {animation: 'move .3s linear'} : null}>
                <div className='login__title'>Войти</div>
                <form className='login__form' method='post' onSubmit={(e) => onSubmit(e)} autoComplete="off"> 
                    <label htmlFor='email' style={errorLabelLogin ? {color: 'red'} : null}>Email</label>
                    <input type="text" autoComplete="off" name='email' placeholder='mail@mail.ru' id='email' onFocus={focusLogin} onInput={(e) => {
                        inputs.login = e.target.value
                    }}></input>
                    <label htmlFor='password' style={errorLabelPassword ? {color: 'red'} : null}>Пароль</label>
                    <input type="password" autoComplete="off" name="password" placeholder='*************' onFocus={focusPassword} id='password' onInput={(e) => {
                        inputs.password = e.target.value
                    }}></input>
                    <a href='#' className='login__reset'>Забыли пароль?</a>
                    <button type='submit'>Войти</button>
                </form>
                <div className='login__new'>Новый пользователь? <button href='#' className='login__new-user' onClick={() => dispatch(register())}>Регистрация</button></div>
            </div>
        </div>
    )
}

export default AppLoginPage;