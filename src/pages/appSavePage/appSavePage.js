import { useContext } from "react";
import dataContext from '../../context';
import PropTypes from "prop-types";

const AppSavePage = () => {
    const [context, setContext] = useContext(dataContext);
    return (
        <div className="profile">
            <div className="profile__wrapper">
                <div className="profile__title">Профиль</div>
                <div className="profile__subtitle profile__subtitle_center">Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
                <button type='submit' onClick={() => setContext({...context, page: 'Map'})}>Перейти на карту</button>
            </div>
        </div>
    )
}
AppSavePage.propTypes = {
    pageMap: PropTypes.string,
    pageProfile: PropTypes.string,
    pageLogin: PropTypes.string
}
export default AppSavePage;