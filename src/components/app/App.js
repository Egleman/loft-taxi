// import AppHeader from "../appHeader/AppHeader";
import AppLogoLogin from "../appLogoLogin/appLogoLogin";
import AppLoginPage from "../appLoginpage/appLoginPage"; 
import { Component } from "react";

class App extends Component  {
    render() {
        return (
            <div className="app">
                <div className="wrapper">
                    <AppLogoLogin />
                    <AppLoginPage />
                </div>
            </div>
        )
    }
}

export default App;