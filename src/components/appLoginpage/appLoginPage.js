import './appLoginPage';

const AppLoginPage = () => {
    return (
        <div className='login'>
            <div className='login__wrapper'>
                <div className='login__title'>Войти</div>
                <form className='login__form' method='post'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name='email' placeholder='mail@mail.ru' id='email'></input>
                    <label htmlFor='password'>Пароль</label>
                    <input type="password" name="password" placeholder='*************' id='password'></input>
                    <a href='#' className='login__reset'>Забыли пароль?</a>
                    <button type='submit'>Войти</button>
                </form>
                <div className='login__new'>Новый пользователь? <a href='#' className='login__new-user'>Регистрация</a></div>
            </div>
        </div>
    )
}

export default AppLoginPage;