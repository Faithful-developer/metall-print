import certificate1 from '../../assets/images/sertificate-1.jpg'
import certificate2 from '../../assets/images/sertificate-2.jpg'
import certificate3 from '../../assets/images/sertificate-3.jpg'
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
                    <h3 className='title'>Information about company and delivering</h3>
                    <div className="box">
                        <div className="info">
                            <p>Сегодня одной из наиболее распространенной технологией укупорки консервированной
                                продукции в стеклянную банку является использование металлической винтовой крышки
                                "Twist-off".
                                Наше производство оснащено автоматической линией компании ALFONS HAAR (Германия) по
                                производству винтовой крышки "Twist-off". Высокая производительность, данного
                                обооудования позволяет выпускать до 350 крышек/мин. На технологической линии
                                осуществляется полный цикл изготовления винтовой крышки, начиная с загрузки
                                подготовленных листов жести и заканчивая фасовкой готовой продукции в гофрокороба.
                                Мы осуществляем выпуск винтовых крышек диаметром Ø66 и Ø82 в исполнении стандартной
                                палитры цветов (золотой, белый, зеленый, красный, черный), а также с литографической
                                печатью. Двухслойное внутреннее покрытие крышки включает грунтовое покрытие и
                                адгезионные лаки.
                                Винтовые крышки «Twist-off» выпускаются со следующими профилями:
                                <ul>
                                    <li>
                                        RTS - профиль, без кнопки акустического контроля вакуума.
                                    </li>
                                    <li>
                                        RSB - профиль, с кнопкой акустического контроля вакуума
                                    </li>
                                </ul>
                                В зависимости от вида укупорки на крышки наносится уплотнительная паста (PVC-пластизоль)
                                различных видов:
                                <ul>
                                    <li>
                                        пластизоль для пастеризации (укупорка до 105°С)
                                    </li>
                                    <li>
                                        пластизоль для стерилизация (укупорка до 121°С)
                                    </li>
                                </ul>
                            </p>
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
                            <p>Для производства винтовых крышек используется белая жесть ведущих Китайских
                                производителей, Европейских производителей, а также европейские лакокрасочные материалы,
                                что позволяет добиться высочайшего качества выпускаемой продукции.
                                Готовые изделия автоматически упаковываются в гофрокороба, размером 400х400х400 с
                                полиэтиленовыми вкладышами внутри, предохраняющими крышки от загрязнения. Далее
                                гофрокороба укладываются на европаллеты 1200х800.
                                Неотъемлемым условием производства крышки «Twist-off» является осуществление
                                непрерывного контроля качества на протяжении всего технологического процесса.
                                Осуществляется входной контроль материалов, проверка качества в контрольных точках, а
                                также автоматический фотоконтроль внутреннего покрытия крышки и уплотнительной
                                прокладки, оценка качества готовой продукции в сравнении с заданными эталонными
                                параметрами.
                                Вся выпускаемая продукция сертифицирована международными организациями такими как:
                                Американская компания RIR CERTIFICATION PRIVATE LIMITED в области стандартов менеджмента
                                и качества и Турецкой компанией TURKCERT:
                                ISO 9001:2015 — Система менеджмента и качества;
                                ISO 22000:2018 — Система менеджмента в области безопасности пищевой продукции;
                                Halal — Требования к продукции, производству, хранению, транспортированию, реализации и
                                маркировке.</p>
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
            <div className="certificate">
                <div className="container">
                    <img src={certificate1} alt=""/>
                    <img src={certificate2} alt=""/>
                    <img src={certificate3} alt=""/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutPage