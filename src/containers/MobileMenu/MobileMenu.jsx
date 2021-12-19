import './MobileMenu.scss'
import {Link} from "react-router-dom";


const MobileMenu = ({BurgerButton, setBurgerButton}) => {

    return (
        <>
            <div className={`mobile-menu ${BurgerButton ===  true ? '' : 'hidden'}`} >
                <ul className="linkers">
                    <li>
                        <Link to='/' onClick={()=> setBurgerButton(!BurgerButton)} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' onClick={()=> setBurgerButton(!BurgerButton)} >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MobileMenu;