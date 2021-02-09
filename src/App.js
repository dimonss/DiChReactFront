import './App.scss';
import store from "./redux/redux-store"
import {Provider} from "react-redux";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import DropdownMenu from "./components/DropDownMenu/DropdownMenu";

function App() {
    return (
        <div className="AppWrapper">
            <Provider store={store}>
                <BrowserRouter>
                    <DropdownMenu/>
                    <Header/>
                    <Content/>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
