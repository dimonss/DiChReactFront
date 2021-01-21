import React from "react";
import ToDoApp from "./ToDoApp/ToDoApp";
import {Route} from "react-router-dom";
import Spares from "./Spares/Spares";
import Production from "./Production/Production";
import Scool from "./Skool/Scool";
import Repair from "./Repair/Repair";
import About from "./About/About";

const Content = () => (
    <div className="content">
            <Route exact path='/home' render={() => <ToDoApp/>}/>
            <Route path='/spares' render={() => <Spares/>}/>
            <Route path='/production' render={() => <Production/>}/>
            <Route path='/scool' render={() => <Scool/>}/>
            <Route path='/repair' render={() => <Repair/>}/>
            <Route path='/about' render={() => <About/>}/>
    </div>
)
export default Content
