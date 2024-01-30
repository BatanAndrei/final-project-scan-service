import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from './carousel.module.css';
import glass from '../../Images/glass.png';
import watch from '../../Images/watch.png';
import protection from '../../Images/protection.png';


function Arrow(props) {
    const { className, style, onClick } = props;
    
    return (
        <div
            className={className+' '+styles.arrow}
            style={{ ...style, display: "block", background: "#dadada" }}
            onClick={onClick}
        />
    );
}; 



export default function SimpleSlider() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
            }
        }
        ]
    };

    return (
        <Slider {...settings}>
            <div className={styles.marginItem}>
                <div className={styles.cardInfo}>
                    <img src={watch}></img>
                    <p className={styles.paragraf}>Высокая и оперативная скорость<br/> обработки заявки</p>
                </div>
            </div>
            <div className={styles.marginItem}>
                <div className={styles.cardInfo}>
                    <img src={glass}></img>
                    <p className={styles.paragraf}>Огромная комплексная база<br/> данных, обеспечивающая<br/> объективный ответ на запрос</p>
                </div>
            </div>
            <div className={styles.marginItem}>
                <div className={styles.cardInfo}>
                    <img src={protection}></img>
                    <p className={styles.paragraf}>Защита конфеденциальных сведений,<br/> не подлежащих разглашению по<br/> федеральному законодательству</p>
                </div>
            </div>
        </Slider>
    );
}