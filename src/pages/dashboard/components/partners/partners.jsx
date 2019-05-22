import React from 'react';
import { Carousel } from 'react-bootstrap';
import { partner_axis, partners_baroda, partners_fedral, partners_icici } from '../../../../assets/images';
export default class Partners extends React.Component {
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
            <section className="bajajpartners pt80 pb80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="col-lg-12 sec-heading ">
                                <h2> We Work With India’s Top Financial Institutions</h2>
                                The financial services industry is transforming at a pace never seen before.
                                That's why we partner with the top Indian banks and non-banking financial institutions
                                to ensure we offer a wide variety of solutions for all your needs. At Bajaj Capital,
                                our aim is to become a one-stop destination for all your aspirations and fulfil them in the most hassle-free way possible.
            </div>
                        </div>
                        <div className="col-md-7 partnerbox">
                            <Carousel
                                activeIndex={index}
                                direction={direction}
                                onSelect={this.handleSelect}
                                controls={false}
                                indicators={false}
                            >
                                <Carousel.Item>
                                    <div className="row partner-logo">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card">
                                                <img src={partner_axis} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card">
                                                <img src={partners_baroda} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card"><img src={partners_fedral} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card"><img src={partners_icici} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    
                                    <div className="row partner-logo">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card"><img src={partners_icici} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card">
                                                <img src={partner_axis} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card">
                                                <img src={partners_baroda} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card"><img src={partners_fedral} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                        </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="row partner-logo">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card">
                                                <img src={partner_axis} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card"><img src={partners_icici} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card">
                                                <img src={partners_baroda} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="card"><img src={partners_fedral} className="img-fluid" alt="axis" />
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}