import React from 'react';
import Slider from "react-slick";
import { mortgage, car, money } from '../../../../assets/images';
export default class SubProducts extends React.Component {
    renderSubProducts = () => {
        const elements = [{
            src: mortgage,
            title: 'Home Loan',
            description: 'Starting as low as 12% PA'
        },
        {
            src: car,
            title: 'Car Loan',
            description: 'In just ₹999'
        },
        {
            src: money,
            title: 'Personal Loan',
            description: 'Lorim Ispum 7.36%'
        }
        ];
        return elements.map((item) => {
            return (<div className="iconbox col-sm" key={item.title}><a href={item.link}> <div className="img"> <img alt="bajaj" src={item.src} /><h5>{item.title}</h5> {item.description}</div>
            </a></div>)
        })
    }
    render() {
        const { showItems } = this.props;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: showItems,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false
        };

        return (
            <div className=" container-fluid highlighter">
                <div className="container">
                    <Slider {...settings}>
                        {this.renderSubProducts()}
                    </Slider>
                </div>
            </div>
        );
    }
}