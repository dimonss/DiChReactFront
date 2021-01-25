import React from "react";
import "./content.scss"
import ToDoApp from "./ToDoApp/ToDoApp";
import {Route} from "react-router-dom";
import Spares from "./Spares/Spares";
import Production from "./Production/Production";
import Skool from "./Skool/Scool";
import Repair from "./Repair/Repair";
import About from "./About/About";

const Content = () => (
    <div className="content">
        <Route exact path='/' render={() => <ToDoApp/>}/>
        <Route path='/spares' render={() => <Spares/>}/>
        <Route path='/production' render={() => <Production/>}/>
        <Route path='/skool' render={() => <Skool/>}/>
        <Route path='/repair' render={() => <Repair/>}/>
        <Route path='/about' render={() => <About/>}/>
    </div>
)
export default Content
