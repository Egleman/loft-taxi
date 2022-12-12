import AppLoginPage from "../../pages/appLoginpage/appLoginPage"; 
import AppMapPage from "../../pages/appMapPage/appMapPage";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {PrivateRoute} from "../../PrivateRoute/PrivateRoute";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";

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
    const loginIn = useSelector((state) => state.AuthReducer.isLoggedIn);
    
    return (
        <Router>
            <div className="app">
                <Switch>
                    {/* <Route exact path="/loft-taxi">
                        <Redirect to="/"/>
                    </Route> */}
                    {
                        loginIn ? (
                            <>
                            <Route exact path="/map">
                                <AppMapPage/>
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/map"/>
                            </Route>
                            </>
                        ) : (
                            <>
                                <Route exact path="/map">
                                    <Redirect to="/"/>
                                </Route>
                                <Route exact path="/">
                                    <AppLoginPage/>
                                </Route>
                            </>
                        )
                    }
                </Switch>
            </div>
        </Router>
    )
}
export default App;