import './Footer.scss';
import Logo from '../../assets/images/icons/logo.png';

const Footer = () =>{
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <img src={Logo} alt="" className='logo' />
                    <ul className='phone-number'>
                        <li>
                            <a href="https://google.com">
                                phone number
                            </a>
                        </li>
                        <li>
                            <a href="https://">
                                phone number
                            </a>
                        </li>
                        <li>
                            <a href="https://">
                                phone number
                            </a>
                        </li>
                    </ul>
                    <ul className='email-address' >
                        <li>
                            <a href="https://google.com">
                                email-dress
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com">
                                email-dress
                            </a>
                        </li>
                        <li>
                            <a href="https://google.com">
                                email-dress
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer