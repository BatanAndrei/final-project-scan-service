import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from './caoruselResult.module.css';
import { useSelector } from 'react-redux';
import { selectDataHistograms, selectDataObjectsearch } from '../../redux/selectors/selectors';


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
    const dataObjectsearch = useSelector(selectDataObjectsearch);

    let totalData = dataHistograms.data[0].data;
    let risckData = dataHistograms.data[1].data;

    let newPropRisckData = risckData.map((prop) => ({risckValue: prop.value}));
    let resultDataCaorusel = totalData.map((item, index) => ({...item, ...newPropRisckData[index]}));

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
            {resultDataCaorusel.map((data, index) => <div key={index} className={styles.cardInfo}>
                <h3 className={styles.textModifyDataResultDate}>{data.date?.split('T')[0]}</h3>
                <div className={styles.positionDataCaorusel}><h3 className={styles.textModifyDataResultTotal}>{data.value}</h3></div>
                <div className={styles.positionDataCaorusel}><h3 className={styles.textModifyDataResultRisck}>{data.risckValue}</h3></div>
            </div>)}
        </Slider>
    );
}