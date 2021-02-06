import React from "react";
import "./content.scss"
import ToDoApp from "./ToDoApp/ToDoApp";
import {Route} from "react-router-dom";
import Spares from "./Spares/Spares";
import Production from "./Production/Production";
import Skool from "./Skool/Scool";
import Repair from "./Repair/Repair";
import About from "./About/About";
import urls from "../../urls";

const Content = () => (
    <div className="content">
        <Route exact path={urls.HOME} render={() => <ToDoApp/>}/>
        <Route path={urls.SPARES} render={() => <Spares/>}/>
        <Route path={urls.PRODUCTION} render={() => <Production/>}/>
        <Route path={urls.SKOOL} render={() => <Skool/>}/>
        <Route path={urls.REPAIR} render={() => <Repair/>}/>
        <Route path={urls.ABOUT} render={() => <About/>}/>
    </div>
)
export default Content
