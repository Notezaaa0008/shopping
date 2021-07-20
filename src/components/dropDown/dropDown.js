import { useState } from "react"
import './dropDown.css'

function DropDown() {
    const [open, setOpen] = useState(false)

    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(!open);
    }

    return (
        <div className='dropdown-box'>
            <div className="dropdown-button" onClick={handleOpen}>Dropdown</div>
            {open &&
                <ul className='ul-dropdown'>
                    <li><a href='#'>test</a></li>
                    <li><a href='#'>test</a></li>
                    <li><a href='#'>test</a></li>
                    <li><a href='#'>test</a></li>
                </ul>
            }
        </div>
    )
}
export default DropDown