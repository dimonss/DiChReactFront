import React from "react";
import "./content.scss"
import {Route} from "react-router-dom";
import Spares from "./Spares/Spares";
import Production from "./Production/Production";
import Skool from "./Skool/Scool";
import Repair from "./Repair/Repair";
import About from "./About/About";
import urls from "../../urls";
import Test from "./Test/Test";

const Content = () => (
    <div className="content">
        <Route exact path={urls.HOME} component={Test}/>
        <Route path={urls.SPARES} component={Spares}/>
        <Route path={urls.PRODUCTION} component={Production}/>
        <Route path={urls.SKOOL} component={Skool}/>
        <Route path={urls.REPAIR} component={Repair}/>
        <Route path={urls.ABOUT} component={About}/>
    </div>
)
export default Content
