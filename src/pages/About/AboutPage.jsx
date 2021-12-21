import './AboutPage.scss'
import zavodPhoto from '../../assets/images/zavod.jpeg'
import VideoCard from "../../components/VideoCard";
import Footer from "../../containers/Footer";
import videoData from "./Data/videoData";
import {Helmet} from "react-helmet";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>
                    About Page
                </title>
            </Helmet>
            <div className="location">
                <div className="container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.9817307350913!2d69.30686861183123!3d41.22001159767039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5e3ec5a36e1d%3A0xa0b2478ab5aaf447!2z0YPQu9C40YbQsCDQntC70YLQuNC90YLQvtC_0LPQsNC9LCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1639915444564!5m2!1sru!2s"/>
                </div>
            </div>
            <div className="info-container">
                <div className="container">
                    <h3 className='title' >Information about company and delivering</h3>
                    <div className="box">
                        <div className="info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab dolorum illum iusto magni nam nemo
                                quasi saepe sit voluptatem? Aperiam ex fugit ipsam iusto sunt. Adipisci, at deserunt eius nobis
                                nostrum provident. Consequatur et fugit placeat quam saepe sapiente sit. A accusamus, autem
                                blanditiis dicta explicabo facilis maiores quam?</p>
                        </div>
                        <div className="img">
                            <img src={zavodPhoto} alt=""/>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src={zavodPhoto} alt=""/>
                        </div>
                        <div className="info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab dolorum illum iusto magni nam nemo
                                quasi saepe sit voluptatem? Aperiam ex fugit ipsam iusto sunt. Adipisci, at deserunt eius nobis
                                nostrum provident. Consequatur et fugit placeat quam saepe sapiente sit. A accusamus, autem
                                blanditiis dicta explicabo facilis maiores quam?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-content">
                <div className="container">
                    {
                        videoData.map(item => (
                            <VideoCard
                                videoLink={item.videoLink}
                                title={item.title}
                                overview={item.overview}
                            />
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutPage