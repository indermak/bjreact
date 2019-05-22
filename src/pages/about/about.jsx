import React from 'react';
import { about_whatweca, about_whoweare } from '../../assets/images';

export default (props) => (
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
                                <button type="button" className="btn btn-secondary active">The Brand</button>
                                <button type="button" className="btn btn-secondary"
                                    onClick={() => { props.history.push('/about-leadership') }}>Milestones</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Who we are */}
            <section className="who-what  pt80 pb80">
                <div className="container">
                    <div className="row pb60">
                        <div className="col-md-6 sec-heading">
                            <h2>Who we are</h2>
                            <p>Being one of India’s premier investment companies, we found our purpose in helping people protect and grow their wealth. Here at Bajaj Capital Limited, we offer personalized investment solutions to individual investors, Non-Resident Indians (NRIs), and High Networth clients, among others.</p>
                            <p>Over the last 53 years, we have secured more futures and helped create more millionaires than any other firm in India. But our true pride lies in the trust that our clients show in us. It is our deep personal relationship with each client that sets us apart. </p>
                        </div>
                        <div className="col-md-6"> <img alt="alt" src={about_whoweare} className="img-fluid" /> </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 order-md-2 sec-heading">
                            <h2>What can we do for you?</h2>
                            <p>We are the leading authority on personalized investment solutions in India. We offer need based investment solutions for all your dreams, be it:</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <span className=" badge badge-pill badge-light">Retirement</span>
                                </div>
                                <div className="col-md-6">
                                    <span className=" badge badge-pill badge-light">Wealth Creation</span>
                                </div>
                                <div className="col-md-6">
                                    <span className=" badge badge-pill badge-light">Tax Saving</span>
                                </div>
                                <div className="col-md-6">
                                    <span className=" badge badge-pill badge-light">Children’s Future</span>
                                </div>
                                <div className="col-md-6">
                                    <span className=" badge badge-pill badge-light">Buying property</span>
                                </div>
                                <div className="col-md-6">
                                    <span className=" badge badge-pill badge-light">Owning a car</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1"> <img alt="alt" src={about_whatweca} className="img-fluid" /> </div>
                    </div>
                </div>
            </section>
            <section className="whybajaj-capital  pt80 pb80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 sec-heading">
                            <h2> Why Bajaj Capital</h2>
                            <p> SEBI licensed Category I Merchant Banker, ARN Holder, DP of NSDL.</p>
                            <p>Over 53 years of experience in helping people protect and grow their wealth.</p>
                            <p> We help in need analysis, scheme selection and efficient execution through our proprietary 360 degree financial assessment tool.</p>
                            <p> We offer an incredibly diverse range of financial products and personalized services. </p>
                            <p> Over 230 offices in 100 cities, to maintain a consistency of relationship and experience.</p>
                            <p> Strong team of qualified and experienced professionals including CA's, MBA's, MBE's, CFP's, CS's, Legal Experts, 700 Relationship Managers and others.</p>
                            <p> Six times winner of CNBC TV 18 Financial Advisor Award (Retail)</p>
                            <p> Our Group Company(ies) include, Bajaj Capital Insurance Broking Limited, is an IRDA-licensed Composite Insurance Broker; Just Trade Securities Limited, member of NSE and BSE; Bajaj Capital Investment Centre Limited, which facilitates realty solutions.</p>
                            <p> Serving over 10 lakh clients and managing assets worth Rs. 12,000 crores </p>
                        </div>
                    </div>
                    <div className="row whybajaj">
                        <div className="col-md-4 text-center whynumber"> Investors
          <h5>27 Lakhs +</h5>
                        </div>
                        <div className="col-md-4 text-center whynumber"> Assets
          <h5> ₹ 22,700 Cr +</h5>
                        </div>
                        <div className="col-md-4 text-center whynumber"> Experince
          <h5> 50+ Years</h5>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Bajaj */}
            <section className="whybajaj bajajmission bg-white pt60 pb60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 sec-heading ">
                            <h2 className="mb-0"> Our Mission, Aims &amp; Objectives</h2>
                        </div>
                        <div className="col-lg-4">
                            <h4>Promise</h4>
                            We promise to provide our clients -
                            research based, unbiased, independent and need based services/advice with honest
        and ethical dealings. </div>
                        <div className="col-lg-4">
                            <h4>Mission</h4>
                            Provide need based solutions at the right value,
                            gaining lifetime client relationships through a happy team
        &amp; service excellence.</div>
                        <div className="col-lg-4">
                            <h4>Vision</h4>
                            India's most admired &amp; recommended wealth creation &amp; protection brand. </div>
                    </div>
                </div>
            </section>
            {/* Why Bajaj End*/}
        </div>

        {/* Bajaj Capital subsidiry products End*/}

    </main>

)