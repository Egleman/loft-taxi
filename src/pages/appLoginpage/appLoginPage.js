import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import AppLogoLogin from "../../components/appLogoLogin/appLogoLogin";
import {Link} from 'react-router-dom'
import {loginPage, registerPage, authenticate} from '../../redux/action';
import {store} from '../../redux/store';

const Login = () => {
    const dispatch = useDispatch();
    const [errorLabelLogin, setErrorLabelLogin] = useState(false);
    const [errorLabelPassword, setErrorLabelPassword] = useState(false);
    const [errorForm, setErrorForm] = useState(false);

    const login = useRef();
    const password = useRef();

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
        const textLogin = inputs.login;
        const textPassword = inputs.password;
   
        // fetch(
        //     'https://loft-taxi.glitch.me/auth', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify({email: textLogin, password: textPassword})
        //     }
        //   )
        // .then(res => res.json())
        // .then(answer => answer.success)


        authenticate(textLogin, textPassword)


        console.log(textLogin);
        console.log(textPassword);
        console.log(store.getState());
    }
    return (
        <div className='login'>
            <div className='login__wrapper' style={errorForm ? {animation: 'move .3s linear'} : null}>
                <div className='login__title'>Войти</div>
                <form className='login__form' method='post' onSubmit={(e) => onSubmit(e)} autoComplete="off"> 
                    <label htmlFor='email' style={errorLabelLogin ? {color: 'red'} : null}>Email</label>
                    <input type="text" autoComplete="off" ref={login} name='email' placeholder='mail@mail.ru' id='email' onFocus={focusLogin} onInput={(e) => {
                        inputs.login = e.target.value
                    }}></input>
                    <label htmlFor='password' style={errorLabelPassword ? {color: 'red'} : null}>Пароль</label>
                    <input type="password" autoComplete="off" ref={password} name="password" placeholder='*************' onFocus={focusPassword} id='password' onInput={(e) => {
                        inputs.password = e.target.value
                    }}></input>
                    <a href='#' className='login__reset'>Забыли пароль?</a>
                    <button type='submit'>Войти</button>
                </form>
                <div className='login__new'>Новый пользователь? <button className="login__new-user" onClick={() => dispatch(registerPage())}>Регистрация</button></div>
            </div>
        </div>
    )
}
const Register = () => {
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        // dispatch(map()); 
    }
    return (
            <div className='login'>
                <div className='login__wrapper'>
                    <div className='login__title'>Регистрация</div>
                    <form className='login__form' method='post' onSubmit={(e) => onSubmit(e)}>
                        <label htmlFor='email'>Email</label>
                        <input type="text" name='email' placeholder='mail@mail.ru' id='email'></input>
                        <label htmlFor='name'>Как вас зовут?*</label>
                        <input type="text" name='name' placeholder='mail@mail.ru' id='name'></input>
                        <label htmlFor='password'>Придумайте пароль*</label>
                        <input type="password" name="password" placeholder='*************' id='password'></input>
                        <button type='submit'>Зарегистрироваться</button>
                    </form>
                    <div className='login__new'>Уже зарегестрированны? <button href='#' className='login__new-user' onClick={() => dispatch(loginPage())}>Войти</button></div>
                </div>
            </div> 
    )
}
const AppLoginPage = () => {
    const page = useSelector(state => state.startPage);
    return (
        <div className="wrapper">
            <AppLogoLogin/>
            {page === '/login' ? <Login/> : <Register/>}
        </div> 
    )
}

export default AppLoginPage;