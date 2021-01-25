import {NavLink} from "react-router-dom";
import React from "react";
import stringRU from "../../../constants/stringsRU";

const FooterInnerLine = () => (
    <div className="mainLine">
        <div className="mainLine-leftSide">
            <div className="mainLine-leftSide__text">
                {stringRU.ALL_RIGHTS_RESERVED}
            </div>
        </div>
        <div className="mainLine-rightSide">
            <NavLink className="mainLine-rightSide__button"  to='/about' activeClassName="active">{stringRU.ABOUT_COMPANY}</NavLink>
        </div>
    </div>
)
export default FooterInnerLine