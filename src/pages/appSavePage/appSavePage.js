import { useDispatch } from "react-redux";
import { map } from "../../redux/action";

const AppSavePage = () => {
    const dispatch = useDispatch();

    return (
        <div className="profile">
            <div className="profile__wrapper">
                <div className="profile__title">Профиль</div>
                <div className="profile__subtitle profile__subtitle_center">Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
                <button type='submit' onClick={() => dispatch((map()))}>Перейти на карту</button>
            </div>
        </div>
    )
}
export default AppSavePage;