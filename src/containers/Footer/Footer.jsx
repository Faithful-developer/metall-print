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
                            <a href="tel: 998909711550">
                                +998 (90) 971-55-50
                            </a>
                        </li>
                        <li>
                            <a href="tel: +998900615550">
                                +998 (90) 061-55-50
                            </a>
                        </li>
                        <li>
                            <a href="tel: +99890372-05-55">
                                +998( 90) 372-05-55
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