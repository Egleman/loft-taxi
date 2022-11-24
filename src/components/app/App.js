import AppLogoLogin from "../appLogoLogin/appLogoLogin";
import AppLoginPage from "../../pages/appLoginpage/appLoginPage"; 
import AppRegisterPage from "../../pages/appRegisterPage/appRegisterPage";
import AppHeader from "../appHeader/AppHeader";
import AppProfilePage from '../../pages/appProfilePage/appProfilePage';
import AppMapPage from "../../pages/appMapPage/appMapPage";
import AppSavePage from "../../pages/appSavePage/appSavePage";

import dataContext from "../../context";
import { useState } from "react";

const App = () => {
    const {Provider} = dataContext;
    // const changePageMap = () => {
    //     setState({...state, page: 'Map'})
    // }

    const [state, setState] = useState({
        page: 'Login',
        loginPage: true,
        cardDetails: false,
        name: 'IVAN IVANOV',
        time: '05/08',
        number: '0000 0000 0000 0000',
        secret: '667'
    })

    

    function Greeting() {
        const page = state.loginPage ? <AppLoginPage/> : <AppRegisterPage />;
        return (
            <div className="wrapper">
                <AppLogoLogin />
                { page } 
            </div>
        )
    }

    const loginPage = state.page === "Login" ? <Greeting/> : null;
    const header = state.page !== "Login" ? <AppHeader/> : null;
    const profile = state.page === "Profile" ? <AppProfilePage/> : null;
    const map = state.page === "Map" ? <AppMapPage/> : null;
    const savePage = state.page === "SavePage" ? <AppSavePage/> : null;
    return (
        <Provider value={[state, setState]}>
            <div className="app">
                {header}
                {loginPage}
                {profile}
                {map}
                {savePage}
            </div>
        </Provider>
    )
}

export default App;