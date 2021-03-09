import React from "react";
import "./header.scss"
import img from "../../constants/imgConst";
import urls from "../../urls";
import {Route} from "react-router-dom";
import HeaderBottomLine from "./HeaderInnerBottomLine/HeaderBottomLine";
import stringRU from "../../constants/stringsRU";
import HeaderTopLine from "./HeaderInnerTopLine/HeaderTopLine";

const Header = () => (
      <div className="header" style={img.BACKGROUND}>
          <HeaderTopLine/>
          <Route exact path={urls.HOME} />
          <Route path={urls.SPARES}  component={() => <HeaderBottomLine img={img.SPARES} txt={stringRU.SPARES} />}/>
          <Route path={urls.PRODUCTION} component={() => <HeaderBottomLine img={img.PRODUCTION} txt={stringRU.PRODUCTION} />}/>
          <Route path={urls.SKOOL} component={() => <HeaderBottomLine img={img.SKOOL} txt={stringRU.SKOOL} />}/>
          <Route path={urls.REPAIR} component={() => <HeaderBottomLine img={img.REPAIR} txt={stringRU.REPAIR} />}/>
          <Route path={urls.ABOUT} component={() => <HeaderBottomLine img={img.ABOUT} txt={stringRU.ABOUT_COMPANY} />}/>
      </div>
)

export default Header