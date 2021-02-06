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
          <Route exact path={urls.HOME} render={() => {}} />
          <Route path={urls.SPARES}  render={() => <HeaderBottomLine img={process.env.PUBLIC_URL+img.SPARES} txt={stringRU.SPARES} />}/>
          <Route path={urls.PRODUCTION} render={() => <HeaderBottomLine img={process.env.PUBLIC_URL+img.PRODUCTION} txt={stringRU.PRODUCTION} />}/>
          <Route path={urls.SKOOL} render={() => <HeaderBottomLine img={process.env.PUBLIC_URL+img.SKOOL} txt={stringRU.SKOOL} />}/>
          <Route path={urls.REPAIR} render={() => <HeaderBottomLine img={process.env.PUBLIC_URL+img.REPAIR} txt={stringRU.REPAIR} />}/>
          <Route path={urls.ABOUT} render={() => <HeaderBottomLine img={process.env.PUBLIC_URL+img.ABOUT} txt={stringRU.ABOUT_COMPANY} />}/>
      </div>
)

export default Header