import React from 'react';
import Slider from "react-slick";
import {
    home_carousel1, bajaj_awards, blog_list, mutual_funds, car_insurance,
    term_insurance, credit_card, health_insurance, personal_loan
} from '../../../../assets/images';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgImages: [
                home_carousel1,
                bajaj_awards,
                blog_list
            ],
            showImage: 0
        }
    }

    componentDidMount() {
        this.changeBackgroundImage();
    }

    changeBackgroundImage = () => {
        const { bgImages } = this.state;
        this.timerHandle = setTimeout(() => {
            let { showImage } = this.state;
            if (showImage === (bgImages.length - 1)) {
                showImage = 0;
            } else {
                showImage = showImage + 1;
            }
            this.setState({ showImage }, () => {
                this.changeBackgroundImage();
            });
        }, 5000)
    }

    componentWillUnmount = () => {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    };

    render() {
        const { showItems } = this.props;
        let show = 6
        if (showItems === 1) {
            show = 3;
        }
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: show,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false
        };
        const { bgImages, showImage } = this.state;
        return (
            <div className="jumbotron jumbotron-fluid homebanner" id="header1">
                <div id="carouselExampleCaptions" className=" carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bgImages[showImage]} className="d-block w-100 img-fluid" alt="..." />
                            <div className="carousel-caption">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h1>Your trusted financial
              partner for over 53 years </h1>
                                        <p>Join lakhs of people who have put their faith in our services to help them meet their financial goals </p>
                                        <a href="/" className="btn btn-primary"> Read more </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <ul className="banner-slide row">
                    <Slider {...settings} className="col-md-8">
                        <li>
                            <a href="http://onebajaj.capital/mutual-funds" className=" text-decoration-none"
                                target="_blank" rel="noopener noreferrer">
                                <span>
                                    <img src={mutual_funds} className="img-fluid" alt="credit" /> </span>
                                Mutual Funds
    </a>
                        </li>
                        <li>
                            <a className=" text-decoration-none" href="https://onebajaj.capital/credit-card"
                                target="_blank" rel="noopener noreferrer">
                                <span>  <img src={credit_card} alt="credit" /> </span>Credit Card
    </a>
                        </li>
                        <li>
                            <a className=" text-decoration-none"
                                href="https://getquote.bajajcapitalinsurance.com/car-insurance/car-profile/car-registration-info"
                                target="_blank" rel="noopener noreferrer">
                                <span>  <img src={car_insurance} alt="motor" /> </span>
                                Motor Insurance</a>
                        </li><li>
                            <a className=" text-decoration-none"
                                href="https://getquote.bajajcapitalinsurance.com/health-insurance/health-profile/profile-needs"
                                target="_blank" rel="noopener noreferrer">
                                <span><img src={health_insurance} alt="health" /> </span>   Health Insurance</a>
                        </li>
                        <li>
                            <a className=" text-decoration-none"
                                href="https://getquote.bajajcapitalinsurance.com/term-life-insurance/life-profile"
                                target="_blank" rel="noopener noreferrer">
                                <span> <img src={term_insurance} alt="term" /></span>   Term Insurance</a>
                        </li>
                        <li>
                            <a className=" text-decoration-none" href="https://onebajaj.capital/loans/personal-loan"
                                target="_blank" rel="noopener noreferrer">
                                <span> <img src={personal_loan} alt="personal" /></span>  Personal Loan</a>
                        </li>
                    </Slider>
                </ul>
            </div>
        )
    }
}