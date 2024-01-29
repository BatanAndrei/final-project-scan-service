import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from './carousel.module.css';


function Arrow(props) {
    const { className, style, onClick } = props;
    console.log(className)
    return (
        <div
            className={className+' '+styles.arrow}
            style={{ ...style, display: "block", background: "#a9a9a9" }}
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
                <div className={styles.cardInfo}></div>
            </div>
            <div className={styles.marginItem}>
                <div className={styles.cardInfo}></div>
            </div>
            <div className={styles.marginItem}>
                <div className={styles.cardInfo}></div>
            </div>
        </Slider>
    );
}