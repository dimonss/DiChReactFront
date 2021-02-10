import React , {useEffect, useState} from "react";
import img from "../../../constants/imgConst"
import {NavLink} from "react-router-dom";
import stringRU from "../../../constants/stringsRU";
import classNames from "classnames";
import urls from "../../../constants/urls";




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
                    <NavLink exact className="link_button"  to={urls.HOME} activeClassName="active">{stringRU.HOME_PAGE}</NavLink>
                    <NavLink className="link_button"  to={urls.SPARES}  activeClassName="active">{stringRU.SPARES}</NavLink>
                    <NavLink className="link_button"  to={urls.PRODUCTION}  activeClassName="active">{stringRU.PRODUCTION}</NavLink>
                    <NavLink className="link_button"  to={urls.SKOOL}  activeClassName="active">{stringRU.SKOOL}</NavLink>
                    <NavLink className="link_button"  to={urls.REPAIR}  activeClassName="active">{stringRU.REPAIR}</NavLink>
                </div>
            </div>
        </>
    )
}

export default HeaderTopLine