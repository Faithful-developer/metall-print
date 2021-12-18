import './MobileMenu.scss'
import {Link} from "react-router-dom";


const MobileMenu = ({BurgerButton}) => {

    return (
        <>
            <div className={`mobile-menu ${BurgerButton ===  true ? '' : 'hidden'}`} >
                <ul className="linkers">
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MobileMenu;