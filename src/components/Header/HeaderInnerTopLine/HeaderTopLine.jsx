import React , {useEffect, useState} from "react";
import img from "../../../constants/imgConst"
import {NavLink} from "react-router-dom";
import stringRU from "../../../constants/stringsRU";
import classNames from "classnames";



const HeaderTopLine = () => {
    const [backBackground, setBackBackground] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    },[]);
    const handleScroll = e => {
        if (window.scrollY < 10) {
            setBackBackground(false)
        } else{
            setBackBackground(true)
        }
    }
    return (
        <>
            <div className={classNames("topLine", {"backBackground":backBackground})}>
                <div className="topLine-leftSide">
                    <div className="topLine-leftSide__logo">
                        <img src={img.LOGO_ICO} alt="logo DiCh"/>
                    </div>
                    <div className="topLine-leftSide__txt">
                        DiCh
                    </div>
                </div>
                <div className="topLine-rightSide">
                    <NavLink exact className="topLine-rightSide__txt"  to='/' activeClassName="active">{stringRU.HOME_PAGE}</NavLink>
                    <NavLink className="topLine-rightSide__txt"  to='/spares' activeClassName="active">{stringRU.SPARES}</NavLink>
                    <NavLink className="topLine-rightSide__txt"  to='/production' activeClassName="active">{stringRU.PRODUCTION}</NavLink>
                    <NavLink className="topLine-rightSide__txt"  to='/skool' activeClassName="active">{stringRU.SKOOL}</NavLink>
                    <NavLink className="topLine-rightSide__txt"  to='/repair' activeClassName="active">{stringRU.REPAIR}</NavLink>
                </div>
            </div>
        </>
    )
}

export default HeaderTopLine