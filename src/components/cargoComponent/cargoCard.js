import { useState } from "react"
import './cargoCard.css'


function CargoCard(props) {
    let [count, setCount] = useState(0);

    let handleAddCounter = () => {
        setCount(count + 1);
    }

    let handleSubtractCounter = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(0);
        }

    }

    return (
        <div className='cargo-card-container'>

            <img src={props.item.img} alt="" />

            <div className='cargo-card-name'>
                <h1>{props.item.product}</h1>
            </div>

            <div className='cargo-card-count'>
                <button onClick={handleSubtractCounter}>-</button>&nbsp;&nbsp;
                <span>{count}</span>&nbsp;&nbsp;
                <button onClick={handleAddCounter}>+</button>
            </div>

            <div className='cargo-card-add'>
                <button>Add</button>
            </div>

        </div>
    )
}
export default CargoCard