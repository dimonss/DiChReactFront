import stringRU from "../../../../constants/stringsRU";
import img from "../../../../constants/imgConst";

const Card = props => (
    <div className="card">
        <div className="card-image">
            <img src={props.img} alt="item"/>
        </div>
        <div className="card-info">
            <div className="card-info__name">
                {props.name}
            </div>
            <div className="card-info__description">
            {props.description}
            </div>
            <div className="card-info__price">
            {stringRU.PRICE + props.price}
            </div>
            {/*<div className="card-info__button">*/}
            {/*    <img src={img.BASKET} alt=""/>*/}
            {/*    /!*{stringRU.ADD_TO_CARD}*!/*/}
            {/*</div>*/}
        </div>
    </div>
)
export default Card