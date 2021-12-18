import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Helmet} from 'react-helmet'
import Slider from 'react-slick'
import CarouselData from "./Data/CarouselData";
import ProductCard from "../../components/ProductCard";
import ProductData from "./Data/ProductData";
import Footer from "../../containers/Footer";

const HomePage = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div className='home-slider'>
                <Slider {...settings}>
                    {
                        CarouselData.map(item => (
                            <div className="slide">
                                <img src={item.imgLink} alt=""/>
                                <div className="context">
                                    <h2>{item.title}</h2>
                                    <p>{item.overview}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="product">
                <div className="container">
                    <div className="product-wrapper">
                        {
                            ProductData.map(item => (
                                <ProductCard
                                    id={item.id}
                                    title={item.title}
                                    imgLink={item.imgLink}
                                    overview={item.overview}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default HomePage