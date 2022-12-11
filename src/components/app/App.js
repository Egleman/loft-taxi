import AppLoginPage from "../../pages/appLoginpage/appLoginPage"; 
import AppMapPage from "../../pages/appMapPage/appMapPage";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {PrivateRoute} from "../../PrivateRoute/PrivateRoute";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

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
    
    return (
        <Router>
            <div className="app">
                <Switch>
                    <PrivateRoute exact path="/map" component={AppMapPage} />
                    <Route exact path="/loft-taxi">
                        <Redirect to="/"/>
                    </Route>
                    <Route exact path="/" component={AppLoginPage}/>
                </Switch>
            </div>
        </Router>
    )
}
export default App;