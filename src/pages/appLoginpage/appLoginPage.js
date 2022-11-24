// import './appLoginPage';
import {register, map} from '../../redux/action';
import { useDispatch } from "react-redux";

const AppLoginPage = () => {
    const dispatch = useDispatch();
    const dataBase = {
        login: "test@test.com",
        password: "123123"
    }
    const inputs = {
        login: '',
        password: ''
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputs.login === dataBase.login && inputs.password === dataBase.password) {
            dispatch(map());
        }
    }
    return (
        <div className='login'>
            <div className='login__wrapper'>
                <div className='login__title'>Войти</div>
                <form className='login__form' method='post' onSubmit={(e) => onSubmit(e)}> 
                    <label htmlFor='email'>Email</label>
                    <input type="text" name='email' placeholder='mail@mail.ru' id='email' onInput={(e) => {
                        inputs.login = e.target.value
                    }}></input>
                    <label htmlFor='password'>Пароль</label>
                    <input type="password" name="password" placeholder='*************' id='password' onInput={(e) => {
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