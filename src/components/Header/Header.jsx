import React from "react";
import "./header.scss"
import HeaderInnerTopLine from "./HeaderInnerTopLine/HeaderInnerTopLine";
import img from "../../constants/imgConst";
import {Route} from "react-router-dom";
import HeaderInnerBottomLine from "./HeaderInnerBottomLine/HeaderInnerBottomLine";

const Header = () =>(
      <div className="header" style={img.BACKGROUND}>
        <HeaderInnerTopLine/>
          <Route exact path='/home' render={() => <HeaderInnerBottomLine img={img.LOGO_ICO} txt='home' />} />
          <Route path='/spares' render={() => <HeaderInnerBottomLine img={img.SPARES} txt='spares' />}/>
          <Route path='/production' render={() => <HeaderInnerBottomLine img={img.PRODUCTION} txt='production' />}/>
          <Route path='/scool' render={() => <HeaderInnerBottomLine img={img.SCOOL} txt='scool' />}/>
          <Route path='/repair' render={() => <HeaderInnerBottomLine img={img.REPAIR} txt='repair' />}/>
          <Route path='/about' render={() => <HeaderInnerBottomLine img={img.ABOUT} txt='about' />}/>
      </div>
    )

export default Header