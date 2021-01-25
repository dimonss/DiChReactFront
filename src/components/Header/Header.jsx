import React from "react";
import "./header.scss"
import HeaderInnerTopLine from "./HeaderInnerTopLine/HeaderInnerTopLine";
import img from "../../constants/imgConst";
import {Route} from "react-router-dom";
import HeaderInnerBottomLine from "./HeaderInnerBottomLine/HeaderInnerBottomLine";
import stringRU from "../../constants/stringsRU";

const Header = () =>(
      <div className="header" style={img.BACKGROUND}>
          <HeaderInnerTopLine/>
          <Route exact path='/' render={() => {}} />
          <Route path='/spares' render={() => <HeaderInnerBottomLine img={process.env.PUBLIC_URL+img.SPARES} txt={stringRU.SPARES} />}/>
          <Route path='/production' render={() => <HeaderInnerBottomLine img={process.env.PUBLIC_URL+img.PRODUCTION} txt={stringRU.PRODUCTION} />}/>
          <Route path='/skool' render={() => <HeaderInnerBottomLine img={process.env.PUBLIC_URL+img.SKOOL} txt={stringRU.SKOOL} />}/>
          <Route path='/repair' render={() => <HeaderInnerBottomLine img={process.env.PUBLIC_URL+img.REPAIR} txt={stringRU.REPAIR} />}/>
          <Route path='/about' render={() => <HeaderInnerBottomLine img={process.env.PUBLIC_URL+img.ABOUT} txt={stringRU.ABOUT_COMPANY} />}/>
      </div>
    )

export default Header