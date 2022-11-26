import { useContext } from "react";
import dataContext from "../../context";
import PropTypes from "prop-types";

const AppRegisterPage = () => {
    const [context, setContext] = useContext(dataContext);

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='login'>
            <div  className='login__wrapper'>
                <div data-testid="RegisterPage" className='login__title'>Регистрация</div>
                <form className='login__form' method='post' onSubmit={(e) => onSubmit(e)}>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name='email' placeholder='mail@mail.ru' id='email'></input>
                    <label htmlFor='name'>Как вас зовут?*</label>
                    <input type="text" name='name' placeholder='mail@mail.ru' id='name'></input>
                    <label htmlFor='password'>Придумайте пароль*</label>
                    <input type="password" name="password" placeholder='*************' id='password'></input>
                    <button type='submit'>Зарегистрироваться</button>
                </form>
                <div className='login__new'>Уже зарегестрированны? <button href='#' className='login__new-user' onClick={() => setContext({...context, loginPage: true})}>Войти</button></div>
            </div>
        </div> 
    )
}
AppRegisterPage.propTypes = {
    pageMap: PropTypes.string,
    pageProfile: PropTypes.string,
    pageLogin: PropTypes.string
}
export default AppRegisterPage;