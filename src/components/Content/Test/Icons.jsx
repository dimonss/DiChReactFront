import img from "../../../constants/imgConst";

const Icons = () => (
    <div className="test_inner_carousel">
        <div className="colOne">
            <div className="img_container">
                <img src={img.test5} alt="circle"/>
            </div>
            <div className="img_container">
                <img src={img.test1} alt="circle"/>
            </div>
            <div className="img_container">
                <img src={img.test6} alt="circle"/>
            </div>
            <div className="img_container">
                <img src={img.test1} alt="circle"/>
            </div>
        </div>
        <div className="colTwo">
            <div className="img_container">
                <img src={img.test7} alt="circle"/>
            </div>
            <div className="img_container">
                <img src={img.test4} alt="circle"/>
            </div>
            <div className="img_container">
                <img src={img.test3} alt="circle"/>
            </div>
            <div className="img_container">
                <img src={img.test4} alt="circle"/>
            </div>
        </div>
        <div className="colThree">
            <div className="img_container">
                <img src={img.test2} alt="circle"/>
            </div>
            <div className="img_container">
                <img src={img.test4} alt="circle"/>
            </div>
            <div className="img_container">
                <img src={img.test1} alt="circle"/>
            </div>
            <div className="img_container">
                <img src={img.test4} alt="circle"/>
            </div>
        </div>
    </div>
)
export default Icons