import React from 'react';
import { rajive_bajaj, sanjiv_bajaj, ceo_rahul_parikh, kk_bajaj, leadership_journey } from '../../assets/images';
import Slider from 'react-slick';

export default (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };
    return (
        <main role="main">
            {/*Banner */}
            <div>
                <section className="aboutbanner pb60 pt60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 sec-heading text-center">
                                <h1>About Bajaj Capital</h1>
                                Fundamentals form the foundation of our work ethic. Trust, commitment, skill and innovation form a golden braid that runs through the very core of our business.  Every small detail
          of our enterprise is continuously upgraded to create value for clients. </div>
                            <div className="col-md-8 offset-md-2  text-center">
                                <div className="btn-group btn-slide" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary "
                                        onClick={() => { props.history.push('/about') }}>The Brand</button>
                                    <button type="button" className="btn btn-secondary active">Milestones</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Who we are */}
                <div>
                    <section className="bajaj-journey pt60">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 sec-heading">
                                    <h2>Bajaj Capital Group – Our Journey So Far</h2>
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
                                                            Bajaj Capital sets up its first Investment Centre® in New Delhi</li>
                                                        <li>  India's first Mutual Fund, Unit Trust of India (UTI) incorporated in the same year</li>
                                                    </ul>
                                                </div>
                                            <div className="year">1964 </div>
                                            </div>
                                        </div>
                                    </Slider>

                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Bajaj Leadership  */}
                    <section className="bajaj-leadership">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 sec-heading ">
                                    <h2 className="mb-0"> Bajaj Leadership</h2>
                                </div>
                            </div>
                        </div>
                        <div className="leader-section kk-bajaj  pb60 pt60">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={kk_bajaj} alt="kk_bajaj" className="img-fluid" />
                                        <p>Mr. K.K. Bajaj<span>Founder Chairman</span></p>
                                    </div>
                                    <div className="col-md-9">Mr. K K Bajaj is M.A (English) and LLB, and is the Founder Chairman of Bajaj Capital Ltd. He established Bajaj Capital about 52 years ago and has vast experience in the field of financial services. Today, Bajaj Capital Group has about 230 offices in 100 cities across India. Its investment guidance has touched the lives of millions of investors. Mr. Bajaj, a prolific writer, has contributed over 800 articles in leading newspapers like Economic Times, Financial Express, Business Standard, Times of India, Hindustan Times and various other magazines like Investors India, Eternal Life etc. He is also the author of book titled "Smart Living", a guide dedicated to good health as he feels there is no use of wealth unless one has good health. Mr. Bajaj is also the Founder of “International College of Financial Planning” that is the leading in Financial education institute in India and has so far imparted education to over 10,000 Financial Experts who are now gainfully employed. Mr. Bajaj also heads the Board of Editors of the monthly magazine “Investors India” - India's leading magazine on Wealth Creation. Mr. Bajaj was given Lifetime Achievement Award by State Bank of India Mutual Fund at a specially organized function in Melbourne, Australia and also by ICICI Prudential Life Insurance for his significant contribution to the Life insurance industry.
          </div>
                                </div>
                            </div>
                        </div>
                        <div className="leader-section rajiv-bajaj  pb60 pt60">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 order-md-2">
                                        <img src={rajive_bajaj} alt="ceo_rahul_parikh" className="img-fluid" />
                                        <p>Mr. Rajiv Bajaj
              <span>Chairman &amp; Managing Director</span></p>
                                    </div>
                                    <div className="col-md-9 order-md-1">
                                        Mr. Rajiv Bajaj is the Vice Chairman &amp; Managing Director of Bajaj Capital Ltd. He is also the Founding Chairman of Financial Planning Standards Board, India and has been one of the key people involved in bringing the globally recognized Certified Financial PlannerTM professional designation to India.
            <p>
                                            Mr. Bajaj has over 22 years of strategic management experience in the fields of Investment Banking, Investment Advisory, Insurance Brokerage and Financial Planning. He had spent his initial years in setting up of the investment banking business for Bajaj Capital. He also played an important role in expanding the distribution reach of Bajaj Capital Group from 20 offices in 1990 to around 200 now.
            </p>
                                        <p>
                                            In the last few years, Mr. Bajaj has spent a lot of time in upgrading the operating system and processes of the Group. Under his leadership, Bajaj Capital has won various category awards and recognition nationally like,'Best Financial Advisor – Retail' Award for 2009, 2011 and 2012 by CNBC TV18 and Great Places to Work (2008 and 2009).
            </p>
                                        <p>
                                            Mr. Bajaj has done his MBA (International Wealth Management) from University of Geneva, Switzerland and an Executive MBA (International Wealth Management) from Carnegie Mellon University, Pittsburgh, USA. He holds an 'International Certificate for Financial Advisors' from the Chartered Insurance Institute (CII), London, UK. He is also amongst the first batch of 25 Certified Financial Planner (CFPTM ) designation holders in India.
            </p>
                                        Mr. Bajaj is a member of CII Mutual Fund Committee, Entrepreneurs' Organization (Delhi Chapter) and a Council Member of European Business Group. An active speaker and writer on Investment Strategy and Financial Planning in leading print and electronic media, Mr. Bajaj is extremely passionate about spreading financial literacy among the masses. His interests include Golf, Yoga,Fitness Training and Meditation
          </div>
                                </div>
                            </div>
                        </div>
                        <div className="leader-section sanjiv-bajaj  pb60 pt60">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={sanjiv_bajaj} alt="sanjiv_bajaj" className="img-fluid" />
                                        <p>Mr. Sanjiv Bajaj
              <span>Vice Chairman &amp; Managing Director</span></p>
                                    </div>
                                    <div className="col-md-9">
                                        Mr. Sanjiv Bajaj is the Managing Director of Bajaj Capital Ltd. In his role, he is involved in planning and implementing of several important future projects for the Company and the Group. He has been instrumental in conceptualizing and implementing a highly successful distribution model for Life and General Insurance, through what are known as 'Insurance Planning Centres'.
            <p>
                                            Under the able guidance of Mr. Sanjiv Bajaj, Bajaj Capital Insurance Broking Limited, has emerged as one of India's leading Insurance Broking Houses within a short span since its inception in January 2004. He also has keen interest in the Information Technology area and heads the function for the Company/Group.</p>
                                        <p>
                                            Mr. Sanjiv Bajaj started his career in 1995, when he worked on various projects which included developing Alternate channels of distribution like Associate Model, etc. From here, he moved on to Investment Advisory services, which included understanding the clients needs and offering them solutions to meet their requirements by using various planning tools.
            </p>
                                        <p>
                                            Apart from being a Post Graduate in Business Management, Mr. Sanjiv Bajaj also holds an International Certificate for Financial Advisor's from the Chartered Insurance Institute (CII), London, and is a certified Financial Planner from Financial Planning Standards Board India (FPSB).
            </p>
                                        <p>
                                            Mr. Bajaj is an active speaker on Financial Planning, Investments, Insurance Planning and Careers in the Financial Services Industry.
            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leader-section ceo-bajaj  pb60 pt60">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 order-md-2">
                                        <img src={ceo_rahul_parikh} alt="rahul_parikh" className="img-fluid" />
                                        <p>Mr. Rahul Parikh
              <span>Chief Executive Officer, Bajaj Capital Limited</span></p>
                                    </div>
                                    <div className="col-md-9 order-md-1 ">
                                        Rahul Parikh has joined as Chief Executive Officer, Bajaj Capital Limited in April 2017. His experience in the digital domain will support the company's strategy of combining face to face relationship with Digital Advisory, Transactions and Servicing.
            <p> Rahul Parikh has around 17 years of experience in the financial services. In his last assignment as Head Aditya Birla Money My Universe since April 2012, he has been spearheading the category creation of Online Personal Finance Space in India for digitally savvy but financially not so savvy young Indians.</p> His past experience has seen him become Vice President, in charge of Strategic Initiatives and Business Development at Aditya Birla Financial Services Group (ABFSG). He has also worked as Head Business Development with Birla SunLife AMC where he managed distribution channels across India and was instrumental in building the retail business. Prior to the Birla Group, he has worked as an Associate Vice President – Strategy &amp; Business Development in his last role at ICICI Prudential AMC.
            <p>He is passionate about digital and the solutions it can bring to access problems, especially the role it can play in improving personal finances &amp; wealth creation of individuals and the positive impact it can create in their lives.</p>
                                        <p> He has a holistic understanding of consumer behavior, financial products, marketing, distribution, technology and digital with strong strategizing, business development, execution and relationship management skills. Early in his career, he has also worked with Tata Motors and Larsen &amp; Toubro in strategy, corporate and line roles.</p>
                                        <p> Rahul holds Master of Management Studies (MMS) – Marketing degree from Narsee Monjee Institute of Management Studies (NMIMS), Mumbai and has a Production Engineering degree from
              Fr. Conceicao Rodrigues College of Engineering, Mumbai.</p>
                                        He has also done short management courses from IIM, Ahmedabad and Harvard Business School, Boston.
          </div>
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