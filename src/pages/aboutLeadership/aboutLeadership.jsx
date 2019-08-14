import React from 'react';
import { leadership_journey } from '../../assets/images';
import Slider from 'react-slick';

export default (props) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <main role="main">
            {/*Banner */}
            <div>
                <section className="aboutbanner pt40 pb40">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 sec-heading text-center">
                                <h1>About Bajaj Capital</h1>
                               We understand your dreams and your financial aspirations. Trust, commitment, skill and innovation form the very core of our business. Every small detail of our enterprise and experience is continuously upgraded to create value for our users.
 </div>
                            <div className="col-md-8 offset-md-2  text-center">
                                <div className="btn-group btn-slide" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary "
                                        onClick={() => { 
                                            window.dataLayer.push({
                                                'event': 'About_Bajaj_Capital_Section',
                                                'eventCategory': 'About_Bajaj_Capital_Section',
                                                'eventAction': 'The_Brand_Click', // {{dynamic}} contains Toggle Click i.e. The_Brand_Click, Milestones_Click
                                                'eventLabel': 'who_we_are_content', // {{dynamic}} contains dynamic Content i.e. who_we_are_content, BCL_Journey_Leadership
                                            });
                                            props.history.push('/about?utm_source=about_us_brand&utm_medium=icon&utm_content=brand') }}>The Brand</button>
                                    <button type="button" className="btn btn-secondary active">Milestones</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Who we are */}
                <div className="pb100">
                    <section className="bajaj-journey pt40">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 sec-heading">
                                    <h2>Bajaj Capital Group–Our Journey</h2>
                                    <p>
                                        Bajaj Capital is among the pioneers in investment services industry in India. For nearly five decades now, Bajaj Capital has been serving Indian investors by helping them create wealth and giving shape to the vision of its founder-chairman, Mr. K.K. Bajaj.
                                        Bajaj Capital has contributed to the growth of the Indian Capital Market at every step. In 1965, we were the first to innovate the Companies Fixed Deposit. Today, we are playing an active role in the growth of the Indian Mutual Fund industry. Here is a glimpse of our journey through the years:
          </p>
                                </div>
                                <div className="col-md-6"> <img src={leadership_journey} alt="leadership_journey" className="img-fluid" /> </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <div className="card-deck journey-card"> */}

                                    <Slider {...settings}>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>
                                                            Bajaj Capital sets up its first Investment Centre® in New Delhi</li>
                                                        <li>  India's first Mutual Fund, Unit Trust of India (UTI) incorporated in the same year</li>
                                                    </ul>
                                                </div>
                                            <div className="year">1964 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>
                                                            Bajaj Capital is incorporated as a Company</li>
                                                        <li>  We introduce an innovative financial instrument – the Company Fixed Deposit (CFD)</li>
                                                        <li>EIL Ltd. (Oberoi Hotels, then known as Associated Hotels of India Ltd.) becomes the first company to raise resources through CFDs</li>
                                                    </ul>
                                                </div>
                                                <div className="year">1965 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>
                                                            Bajaj Capital expands its product range to include all UTI schemes and Government Saving Schemes</li>
                                                    </ul>
                                                </div>
                                            <div className="year">1966 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>
                                                            Bajaj Capital manages its first Equity issue (through an associate company) of Grauer & Wells India Ltd.: right from drafting the prospectus to marketing the issue</li>
                                                    </ul>
                                                </div>
                                                <div className="year">1969 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>
                                                            Bajaj Capital starts offering 'need-based' investment solutions to its clients</li>
                                                        <li>It comes to be known as 'Financial Planning' in the investment world</li>
                                                    </ul>
                                                </div>
                                                <div className="year">1975 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>
                                                            SAIL becomes the first Government Company to accept public deposits, followed by IOC, BHEL, BPCL, HPCL and others</li>
                                                        <li>Opens floodgates for growth of retail investment market in India.</li>
                                                        <li>Bajaj Capital plays an active role in all the schemes as 'Principal Brokers'</li>
                                                    </ul>
                                                </div>
                                                <div className="year">1981 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>
                                                            Public Sector Undertakings (PSUs) begin making public issues of bonds
</li>
                                                        <li>MTNL, NHPC, IRFC offer a series of Bond Issues</li>
                                                        <li>Bajaj Capital is among the top ranks of resource mobilisers</li>
                                                    </ul>
                                                </div>
                                                <div className="year">1986 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>
                                                            SBI leads the launch of Public Sector Mutual Funds in India</li>
                                                        <li>Bajaj Capital plays a significant role in fund mobilisation for all these players</li>
                                                    </ul>
                                                </div>
                                                <div className="year">1987 </div>
                                            </div>
                                        </div>



                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>SBI issues India Development Bonds for NRIs
</li>
                                                        <li>Bajaj Capital becomes the top mobiliser with collections of over US $20 million</li>
                                                    </ul>
                                                </div>
                                                <div className="year">1991 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>The first private sector Mutual Fund – Kothari Pioneer – is launched, followed by Birla and Alliance in the following years</li>
                                                        <li>Bajaj Capital plays an active role and is ranked among the top mobilisers for all their schemes</li>
                                                    </ul>
                                                </div>
                                                <div className="year">1993 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>IDBI and ICICI begin issuing their series of Bonds for retail investors</li>
                                                        <li>Bajaj Capital is the co-manager in all these offerings
</li>
                                                        <li>We are consistently ranked among the top five mobilisers on an all-India basis
</li>
                                                    </ul>
                                                </div>
                                                <div className="year">1995 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>Private sector players lead the revival of Mutual Funds in India through Open-ended Debt schemes
</li>
                                                        <li>Bajaj Capital consolidates its position as India's largest retail distributor of Mutual Funds</li>
                                                    </ul>
                                                </div>
                                                <div className="year">1997 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>Bajaj Capital begins marketing Life and General Insurance products of LIC and GIC (through associate firms) in anticipation of opening up of the Insurance Sector</li>
                                                        <li>Bajaj Capital becomes the top 'Pension Scheme' seller in India and launches marketing of GIC's Health Insurance schemes</li>
                                                    </ul>
                                                </div>
                                                <div className="year">1999 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>Bajaj Capital implements its vision of being a 'One-stop Financial Supermarket'
</li>
                                                        <li>The Company offered all kinds of financial products, through its Investment Centers
</li>
                                                        <li>Bajaj Capital reinvents 'Financial Planning' in its international sense and upgrades its entire team of Investment Experts into Financial Planners</li>
                                                    </ul>
                                                </div>
                                                <div className="year">2000 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>The Company focuses on creating investor awareness for proper Financial Planning and need-based investing</li>
                                                        <li>To achieve this goal, the International College of Financial Planning, is set up</li>
                                                        <li>The graduates of this institute become Certified Financial Planners (CFPs), a coveted professional qualification</li>
                                                    </ul>
                                                </div>
                                                <div className="year">2002 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>Bajaj Capital obtains the All India Insurance Broking Licence</li>
                                                        <li>Simultaneously, a series of wealth creation seminars are launched all over the country, making Bajaj Capital a household name</li>
                                                    </ul>
                                                </div>
                                                <div className="year">2004 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>Bajaj Capital launches its software-based programme aimed at encouraging scientific and holistic investing
</li>
                                                    </ul>
                                                </div>
                                                <div className="year">2005 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>Bajaj Capital launches Stock Broking and Depository (Demat) Services (in one of its group company)
</li>
                                                    </ul>
                                                </div>
                                                <div className="year">2007 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>Bajaj Capital launches Just Trade®, an online Platform for investing in Equities, Mutual Funds, IPO's</li>
                                                    </ul>
                                                </div>
                                                <div className="year">2008 </div>
                                            </div>
                                        </div>
                                        <div className="card-deck journey-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="card-text">
                                                        <li>Bajaj Capital gets recognised as ‘Best Place to Work 2019’ as it aligns people, processes and technology to drive results </li>
                                                        <li>Reaches ₹ 10,000 Cr in Assets under management </li>
                                                        <li>Opens State of Art 🖼 Office as it moves it HQ to Gurgaon</li>
                                                    </ul>
                                                </div>
                                                <div className="year">Now </div>
                                            </div>
                                        </div>
                                    </Slider>

                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>

            {/* Bajaj Capital subsidiry products End*/}

        </main>

    )
}