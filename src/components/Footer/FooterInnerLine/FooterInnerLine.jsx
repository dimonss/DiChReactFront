import {NavLink} from "react-router-dom";
import React from "react";

const FooterInnerLine = () => (
    <div className="mainLine">
        <div className="mainLine-leftSide">
            <div className="mainLine-leftSide__text">
                Все права защищены
            </div>
        </div>
        <div className="mainLine-rightSide">
            <NavLink className="mainLine-rightSide__button"  to='/about' activeClassName="active">О сайте</NavLink>
        </div>
    </div>
)
export default FooterInnerLine