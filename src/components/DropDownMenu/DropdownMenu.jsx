import {NavLink} from "react-router-dom";
import stringRU from "../../constants/stringsRU";
import "./dropdownMenu.scss"
import img from "../../constants/imgConst";
import {useState} from "react";
import classNames from "classnames";
import ReactDOM from "react-dom";
import urls from "../../constants/urls";


const DropdownMenu = () => {
    const [navbarIsOpen, changeStatusNavbar] = useState(false)

    const changeStatusNavbarIsOpen = () => changeStatusNavbar(!navbarIsOpen);
    return (
        ReactDOM.createPortal(<>
                <div className={classNames("dropdown-button", {"dropdown-button_open": navbarIsOpen})}
                     onClick={changeStatusNavbarIsOpen}>
                    <img src={img.BUTTON_THREE_HORIZONTAL_LINES} alt="Button dropdown menu"/>
                </div>
                <div className={classNames("dropdown", {"dropdown-open": navbarIsOpen})}>
                    <div className="dropdown-button" onClick={changeStatusNavbarIsOpen}>
                        <img src={img.BUTTON_CLOSE} alt="Button dropdown menu"/>
                    </div>
                    <div className="dropdown-navlinks">
                        <NavLink exact className="link_button dropdown-inner__txt" to={urls.HOME}
                                 activeClassName="active"
                                 onClick={changeStatusNavbarIsOpen}>{stringRU.HOME_PAGE}</NavLink>
                        <NavLink className="link_button dropdown-inner__txt" to={urls.SPARES}
                                 activeClassName="active"
                                 onClick={changeStatusNavbarIsOpen}>{stringRU.SPARES}</NavLink>
                        <NavLink className="link_button dropdown-inner__txt" to={urls.PRODUCTION}
                                 activeClassName="active"
                                 onClick={changeStatusNavbarIsOpen}>{stringRU.PRODUCTION}</NavLink>
                        <NavLink className="link_button dropdown-inner__txt" to={urls.SKOOL}
                                 activeClassName="active"
                                 onClick={changeStatusNavbarIsOpen}>{stringRU.SKOOL}</NavLink>
                        <NavLink className="link_button dropdown-inner__txt" to={urls.REPAIR}
                                 activeClassName="active"
                                 onClick={changeStatusNavbarIsOpen}>{stringRU.REPAIR}</NavLink>
                    </div>
                </div>
                <div className={classNames({"dropdown-void": navbarIsOpen})} onClick={changeStatusNavbarIsOpen}/>
            </>,
            document.getElementById("modal-root")
        )
    );
}

export default DropdownMenu