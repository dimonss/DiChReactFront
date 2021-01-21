import React from "react";
import img from "../../../constants/imgConst"
import {NavLink} from "react-router-dom";

const HeaderInnerTopLine = () => {
    return (
        <div className="topLine">
            <div className="topLine-leftSide">
                <div className="topLine-leftSide__logo">
                    <img src={img.LOGO_ICO} alt="logo DiCh"/>
                </div>
                <div className="topLine-leftSide__txt">
                    DiCh
                </div>
            </div>
            <div className="topLine-rightSide">
                <NavLink className="topLine-rightSide__txt"  to='/home' activeClassName="active">Главная страница</NavLink>
                <NavLink className="topLine-rightSide__txt"  to='/spares' activeClassName="active">Запчасти</NavLink>
                <NavLink className="topLine-rightSide__txt"  to='/production' activeClassName="active">Продукция</NavLink>
                <NavLink className="topLine-rightSide__txt"  to='/scool' activeClassName="active">Курсы</NavLink>
                <NavLink className="topLine-rightSide__txt"  to='/repair' activeClassName="active">Ремонт </NavLink>
            </div>
        </div>
    )
}

export default HeaderInnerTopLine