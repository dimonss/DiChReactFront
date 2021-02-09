import {NavLink} from "react-router-dom";
import stringRU from "../../constants/stringsRU";
import "./dropdownMenu.scss"
import img from "../../constants/imgConst";
import {useState} from "react";
import classNames from "classnames";

const DropdownMenu = () => {
    const [navbarIsOpen, changeStatusNavbar] = useState(false)

    const changeStatusNavbarIsOpen = () => {
        changeStatusNavbar(!navbarIsOpen);
        console.log(navbarIsOpen);
    }
    return (
        <>
            <div className={classNames("dropdown-button", {"dropdown-open":navbarIsOpen})} onClick={changeStatusNavbarIsOpen}>
                <img src={img.BUTTON_THREE_HORIZONTAL_LINES} alt="Button dropdown menu"/>
            </div>
            <div className={classNames("dropdown", {"dropdown-open":navbarIsOpen})}>
                <div className="dropdown-button" onClick={changeStatusNavbarIsOpen}>
                    <img src={img.BUTTON_CLOSE} alt="Button dropdown menu"/>
                </div>
                <div className="dropdown-navlinks">
                    <NavLink exact className="topLine-rightSide__txt dropdown-inner__txt" to='/'
                             activeClassName="active">{stringRU.HOME_PAGE}</NavLink>
                    <NavLink className="topLine-rightSide__txt dropdown-inner__txt" to='/spares'
                             activeClassName="active">{stringRU.SPARES}</NavLink>
                    <NavLink className="topLine-rightSide__txt dropdown-inner__txt" to='/production'
                             activeClassName="active">{stringRU.PRODUCTION}</NavLink>
                    <NavLink className="topLine-rightSide__txt dropdown-inner__txt" to='/skool'
                             activeClassName="active">{stringRU.SKOOL}</NavLink>
                    <NavLink className="topLine-rightSide__txt dropdown-inner__txt" to='/repair'
                             activeClassName="active">{stringRU.REPAIR}</NavLink>
                </div>
            </div>
        </>
    );
}

export default DropdownMenu