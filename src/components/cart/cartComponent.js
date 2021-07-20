import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function CartComponent() {
    const [open, setOpen] = useState(false)

    let handleShowCart = (e) => {
        e.preventDefault();
        setOpen(!open);
    }

    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faShoppingCart} onClick={handleShowCart} />
            </div>
            {open &&
                <ul className='ul-cart'>
                    <li><img src="" alt="" /></li>


                </ul>
            }
        </div>
    )
}
export default CartComponent