import stringRU from "../../../../constants/stringsRU";
import {NavLink} from "react-router-dom";
import urls from "../../../../constants/urls";
import img from "../../../../constants/imgConst";

const Navbar = () => {
        return (
            <div className="navbar" style={img.BACKGROUND}>
                <div className="navbar-inner">
                    <NavLink exact className="link_button" to={urls.CATEGORY_PUMP}
                             activeClassName="active"
                             >{stringRU.CATEGORY_PUMPS}</NavLink>
                    <NavLink exact className="link_button" to={urls.CATEGORY_SUPERCHARGER}
                             activeClassName="active"
                             >{stringRU.CATEGORY_SUPERCHARGER}</NavLink>
                    <NavLink exact className="link_button" to={urls.CATEGORY_GRID}
                             activeClassName="active"
                             >{stringRU.CATEGORY_GRID}</NavLink>
                    <NavLink exact className="link_button" to={urls.CATEGORY_PLUG}
                             activeClassName="active"
                    >{stringRU.CATEGORY_PLUG}</NavLink>
                    <NavLink exact className="link_button" to={urls.CATEGORY_SENSOR}
                             activeClassName="active"
                    >{stringRU.CATEGORY_SENSOR}</NavLink>
                    <NavLink exact className="link_button" to={urls.CATEGORY_ENGIN}
                             activeClassName="active"
                    >{stringRU.CATEGORY_ENGIN}</NavLink>
                    <NavLink exact className="link_button" to={urls.CATEGORY_GASTKET}
                             activeClassName="active"
                    >{stringRU.CATEGORY_GASTKET}</NavLink>
                    <NavLink exact className="link_button" to={urls.CATEGORY_BEARING}
                             activeClassName="active"
                    >{stringRU.CATEGORY_BEARING}</NavLink>
                </div>
            </div>
        );
}

export default Navbar