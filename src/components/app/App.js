// import AppHeader from "../appHeader/AppHeader";
import AppLogoLogin from "../appLogoLogin/appLogoLogin";
import AppLoginPage from "../../pages/appLoginpage/appLoginPage"; 
import AppRegisterPage from "../../pages/appRegisterPage/appRegisterPage";
import AppHeader from "../appHeader/AppHeader";
import AppProfilePage from '../../pages/appProfilePage/appProfilePage';
import AppMapPage from "../../pages/appMapPage/appMapPage";
import { useSelector } from "react-redux";

function Greeting() {
    const page = useSelector(state => state.loginPage) ? <AppLoginPage/> : <AppRegisterPage />;
    return (
        <div className="wrapper">
            <AppLogoLogin />
            { page }
        </div>
    )
}

const App = () => {
    const loginPage = useSelector(state => state.page) === "Login" ? <Greeting/> : null;
    const header = useSelector(state => state.page) !== "Login" ? <AppHeader/> : null;
    const profile = useSelector(state => state.page) === "Profile" ? <AppProfilePage/> : null;
    const map = useSelector(state => state.page) === "Map" ? <AppMapPage/> : null;
    return (
        <div className="app">
            {header}
            {loginPage}
            {profile}
            {map}
        </div>
    )
}

export default App;