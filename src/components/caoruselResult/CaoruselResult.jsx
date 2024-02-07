import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from './caoruselResult.module.css';
import { hover } from "@testing-library/user-event/dist/hover";


function ArrowPrev(props) {
    const { className, style, onClick } = props;
    
    return (
        <div
            className={className+' '+styles.arrow+' '+styles.slick_prev}
            style={{ ...style, display: "block", background: "#dadada"}}
            onClick={onClick}
        />
    );
}; 

function ArrowNext(props) {
    const { className, style, onClick } = props;
    
    return (
        <div
            className={className+' '+styles.arrow+' '+styles.slick_next}
            style={{ ...style, display: "block", background: "#dadada"}}
            onClick={onClick}
        />
    );
}; 

export default function SimpleSliderResult() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
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
            <div className={styles.cardInfo}>
                <h3 className={styles.textModifyDataResultDate}>10.09.2021</h3>
                <h3 className={styles.textModifyDataResultAll}>5</h3>
                <h3 className={styles.textModifyDataResultAll}>0</h3>
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.textModifyDataResultDate}>10.09.2021</h3>
                <h3 className={styles.textModifyDataResultAll}>5</h3>
                <h3 className={styles.textModifyDataResultAll}>0</h3>
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.textModifyDataResultDate}>10.09.2021</h3>
                <h3 className={styles.textModifyDataResultAll}>5</h3>
                <h3 className={styles.textModifyDataResultAll}>0</h3>
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.textModifyDataResultDate}>10.09.2021</h3>
                <h3 className={styles.textModifyDataResultAll}>5</h3>
                <h3 className={styles.textModifyDataResultAll}>0</h3>
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.textModifyDataResultDate}>10.09.2021</h3>
                <h3 className={styles.textModifyDataResultAll}>5</h3>
                <h3 className={styles.textModifyDataResultAll}>0</h3>
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.textModifyDataResultDate}>10.09.2021</h3>
                <h3 className={styles.textModifyDataResultAll}>5</h3>
                <h3 className={styles.textModifyDataResultAll}>0</h3>
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.textModifyDataResultDate}>10.09.2021</h3>
                <h3 className={styles.textModifyDataResultAll}>5</h3>
                <h3 className={styles.textModifyDataResultAll}>0</h3>
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.textModifyDataResultDate}>10.09.2021</h3>
                <h3 className={styles.textModifyDataResultAll}>5</h3>
                <h3 className={styles.textModifyDataResultAll}>0</h3>
            </div>
        </Slider>
    );
}