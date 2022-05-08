import './registr.css';
import RegShelter from "./regShelter";
import RegDog from "./regDog"


const Reg = () => {

    return (
        <div className="regForm">
            <div>
                <RegDog/>
            </div>
            <div>
                <RegShelter/>
            </div>
        </div>

    );
}

export default Reg;