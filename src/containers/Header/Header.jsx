import './Header.scss'
import {Link} from "react-router-dom";
import Logo from '../../assets/images/icons/logo.png'
import MobileMenu from "../MobileMenu";
import burgerButton from "../../assets/images/icons/menu.png";
import closeButton from "../../assets/images/icons/close.png";

import {useState} from "react";

const Header = () => {
    const [BurgerButton, setBurgerButton] = useState(false);
    return (
        <header className="header">
            <div className="container">
                <Link to='/' className='logo'>
                    <img src={Logo} alt=""/>
                </Link>
                <button onClick={() => setBurgerButton(!BurgerButton)}
                        className={`burger-button ${BurgerButton === true ? 'active' : ' '}`}>
                    <img src={burgerButton} alt="" className='burger-button-open'/>
                    <img src={closeButton} alt="" className='burger-button-close'/>
                </button>
                <ul className="header-linkers">
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>

                </ul>
                <MobileMenu BurgerButton={BurgerButton} setBurgerButton={setBurgerButton}/>
            </div>
        </header>
    )
}

export default Header