import './AboutPage.scss'
import zavodPhoto from '../../assets/images/zavod.jpeg'
import VideoCard from "../../components/VideoCard";
import Footer from "../../containers/Footer";
import videoData from "./Data/videoData";

const AboutPage = () => {
    return (
        <>
            <div className="location">
                <div className="container">
                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.8127915211353!2d69.20100591597202!3d41.269411879275175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a19bb884ca9%3A0xb7386f7cd9f2cf2b!2z0JzQtdC90LXQtNC20LzQtdC90YIg0JTQtdCy0LXQu9C-0L_QvNC10L3RgiDQmNC90YHRgtC40YLRg9GCINC-0YQg0KHQuNC90LPQsNC_0L7RgCDQuNC9INCi0LDRiNC60LXQvdGC!5e0!3m2!1sru!2s!4v1639581862359!5m2!1sru!2s"/>
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