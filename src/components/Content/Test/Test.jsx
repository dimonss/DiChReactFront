import img from "../../../constants/imgConst";
import Icons from "./Icons";

const Test = () => {
    return (
        <>
            <div className="test">
                <div className="test_inner">
                    <div className="test_left">
                        <div className="test_inner_heading">
                            Скидки только в самых лучших заведенияx Бишкека!
                        </div>
                        <div className="test_inner_text">
                            Экономьте с нами, оплачивая через <span
                            style={{textDecoration: "underline"}}>Balance.kg!</span>
                        </div>
                        <div className="test_inner_line"/>
                    </div>
                    <div className="test_right">
                        <Icons/>
                        <Icons/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test