import AppLoginPage from "../../pages/appLoginpage/appLoginPage"; 
import AppMapPage from "../../pages/appMapPage/appMapPage";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// function Greeting() {
//     const page = useSelector(state => state.loginPage) ? <AppRegisterPage /> : <AppLoginPage/>;
//     return (
//         <div className="wrapper">
//             <AppLogoLogin />
//             { page }
//         </div>
//     )
// }

const App = () => {
    const loginIn = useSelector(state => state.isLoggedIn);
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        {loginIn ? <Redirect to="/map"/> : <Redirect to="/login"/>}
                    </Route>
                    <Route exact path="/login">
                        <AppLoginPage/>
                    </Route>
                    <Route exact path="/map">
                        <AppMapPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;