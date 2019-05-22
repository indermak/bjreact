import React from 'react';
import { Carousel } from 'react-bootstrap';
import { testimonial1, testimonial2, testimonial3, testimonial4, boy, girl } from '../../../../assets/images';
export default class ClientSayings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <section className="testimonial pt80 pb80">
                <div className="testimg-left d-none d-lg-block d-xl-block">
                    <img alt="bajaj" src={testimonial1} className="img1 rounded-circle" />
                    <img alt="bajaj" src={testimonial2} className="img2 rounded-circle" />
                    <img alt="bajaj" src={testimonial3} className="img3 rounded-circle" />
                    <img alt="bajaj" src={testimonial4} className="img3 rounded-circle" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 sec-heading text-center">
                            <h2> Hear what our clients are saying</h2>
                        </div>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <Carousel
                                activeIndex={index}
                                direction={direction}
                                onSelect={this.handleSelect}
                                controls={false}
                            >
                                <Carousel.Item>
                                    <div className="col-md-8 offset-md-2"><div className="card">
                                        <div className="box">
                                            <div className="img">
                                                <img alt="bajaj" src={boy} />
                                            </div>
                                            <p> The service and customer care response is very nice and especially in my case I have been contacted by Ms. Nitika from Bajaj Capital (CP Office) and I am very happy with her response to all my queries which I have raised in the past. </p>
                                            <h2>ROHIT KUMAR SHRIVASTAVA </h2>
                                            {/* SVP-Sony India */}
                                        </div>
                                    </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="col-md-8 offset-md-2"><div className="card">
                                        <div className="box">
                                            <div className="img">
                                                <img alt="bajaj" src={girl} />
                                            </div>
                                            <p> Because it’s available at most of the stores and online portals. Your service is very reliable and safer than any other. Moreover I would like to increase my limit so that I can use it more often for bigger purchases as well. </p>
                                            <h2> PRABHJYOT KAUR</h2>
                                            {/* SVP-Sony India */}
                                        </div>
                                    </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="col-md-8 offset-md-2"><div className="card">
                                        <div className="box">
                                            <div className="img">
                                                <img alt="bajaj" src={girl} />
                                            </div>
                                            <p> Giving good return to the investors and messages alert facility is also very nice so the customer get aware to their product </p>
                                            <h2>ISHA ALARIA</h2>
                                            {/* SVP-Sony India */}
                                        </div>
                                    </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="col-md-8 offset-md-2"><div className="card">
                                        <div className="box">
                                            <div className="img">
                                                <img alt="bajaj" src={boy} />
                                            </div>
                                            <p> :I thing I have best house chòse for my investment through.at present I have no more income against my investment .but i am satisfies my invesent . </p>
                                            <h2> SURESH CHAND PAREEK</h2>
                                            {/* SVP-Sony India */}
                                        </div>
                                    </div></div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="col-md-8 offset-md-2"><div className="card">
                                        <div className="box">
                                            <div className="img">
                                                <img alt="bajaj" src={boy} />
                                            </div>
                                            <p> First I must appreciate services provided by Bajaj Capital. I expect Bajaj Capital could provide its own market research data on a regular basis and update investors about impact of upcoming policies etc so that investors can make their own judgements. There could be one market information display at each centre. \nMy best wishes to Bajaj Capital.
 </p>
                                            <h2> MANIK MUKHERJEE</h2>
                                            {/* SVP-Sony India */}
                                        </div>
                                    </div></div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}