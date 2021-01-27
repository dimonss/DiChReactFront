import stringRU from "../../../constants/stringsRU";

const Repair = () => (
    <div className="repair">
        <div className="repair-leftBlock">
            {stringRU.REPAIR_CONTENT_TEXT}
        </div>
        <div className="repair-rightBlock">
            <div className="repair-rightBlock__title">
                {stringRU.WE_ON_MAP}
            </div>
            <div className="repair-rightBlock__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1463.092613832
                011!2d75.283451!3d42.82670100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x
                0%3A0x0!2zNDLCsDQ5JzM1LjgiTiA3NcKwMTYnNTcuNyJF!5e0!3m2!1sru!2skg!4v16117
                39506925!5m2!1sru!2skg"
                    width="100%" height="450" frameBorder="" allowFullScreen="" aria-hidden="false"/>
            </div>

        </div>
    </div>
)
export default Repair