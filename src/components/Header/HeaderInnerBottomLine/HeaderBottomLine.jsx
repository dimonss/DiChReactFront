import React from "react";

const HeaderBottomLine = props => (
    <div className="bottomLine">
        <div className="bottomLine-leftSide">
            <div className="bottomLine-leftSide__text">
                {props.txt}
            </div>
        </div>
        <div className="bottomLine-rightSide">
            <div className="bottomLine-rightSide__img">
                <img src={props.img} alt="logo section"/>
            </div>
        </div>
    </div>
)

export default HeaderBottomLine