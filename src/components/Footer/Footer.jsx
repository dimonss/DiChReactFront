import "./footer.scss"
import FooterInnerLine from "./FooterInnerLine/FooterInnerLine";
import img from "../../constants/imgConst";

const Footer = () => (
    <div className="footer" style={img.BACKGROUND}>
        <FooterInnerLine/>
    </div>
)
export default Footer
