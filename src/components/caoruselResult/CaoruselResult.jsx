import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from './caoruselResult.module.css';
import { useSelector } from 'react-redux';
import { selectDataHistograms } from '../../redux/selectors/selectors';


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
            style={{ ...style, display: "block", background: "black"}}
            onClick={onClick}
        />
    );
}; 

export default function SimpleSliderResult() {

    const dataHistograms = useSelector(selectDataHistograms);

    let totalDocData = dataHistograms.data?.[0]?.data;
    let risckDocData = dataHistograms.data?.[1]?.data;

    let newRisckDocData = risckDocData?.map((prop) => ({risckValue: prop.value}));
    let resultDataCaorusel = totalDocData?.map((totaldata, index) => ({...totaldata, ...newRisckDocData[index]}));

    let settings = {
        dots: false,
        infinite: resultDataCaorusel?.length > 1 ? true : false,
        speed: 500,
        slidesToShow: resultDataCaorusel?.length <= 8 ? resultDataCaorusel?.length : 8,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1235,
                settings: {
                    slidesToShow: 1,
            }
        }
        ]
    };

    return (
        <Slider {...settings}>
            {resultDataCaorusel && resultDataCaorusel?.map((data, index) => <div key={index} className={styles.cardInfo}>
            <div className={styles.positionDataCaorusel}><h3 className={styles.textModifyDataResultDate}>{data.date?.split('T')[0]}</h3></div>
                <div className={styles.positionDataCaorusel}><h3 className={styles.textModifyDataResultTotal}>{data.value}</h3></div>
                <div className={styles.positionDataCaorusel}><h3 className={styles.textModifyDataResultRisck}>{data.risckValue}</h3></div>
            </div>)}
        </Slider>
    );
}