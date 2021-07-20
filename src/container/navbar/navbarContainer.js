import './navbarContainer.css'
import DropDown from '../../components/dropDown/dropDown'
import CartComponent from '../../components/cart/cartComponent'

function NavbarContainer() {
    return (
        <div className='navbar-container'>
            <nav>
                <h1>LOGO</h1>
                <a href="">test</a>
                <a href="">test</a>
                <a href="">test</a>
                <DropDown />
            </nav>
            <div className='cart'>
                <CartComponent />
            </div>
        </div>
    )
}
export default NavbarContainer