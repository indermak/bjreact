import React from 'react';
import { about_whatweca, who_we_are } from '../../assets/images';

const pushToDataLayer = ({ url, eventAction }) => {
    window.dataLayer.push({
        'event': 'How_we_empower_section',
        'eventCategory': 'How_we_empower_section',
        eventAction, // {{dynamic}} contains Dynamic Product Click i.e. Personal_Loan_Click
        'eventLabel': url, // {{dynamic}} contains the url of page to which user is redirected i.e www.onebajaj.capital/loans/personal-loan/
    });
}

export default (props) => (
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
                                <button type="button" className="btn btn-secondary active">The Brand</button>
                                <button type="button" className="btn btn-secondary"
                                    onClick={() => {
                                        window.dataLayer.push({
                                            'event': 'About_Bajaj_Capital_Section',
                                            'eventCategory': 'About_Bajaj_Capital_Section',
                                            'eventAction': 'Milestones_Click', // {{dynamic}} contains Toggle Click i.e. The_Brand_Click, Milestones_Click
                                            'eventLabel': 'BCL_Journey_Leadership', // {{dynamic}} contains dynamic Content i.e. who_we_are_content, BCL_Journey_Leadership
                                        });
                                        props.history.push('/about-leadership?utm_source=about_us_switch&utm_medium=icon&utm_content=milestones')
                                    }}>Milestones</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Who we are */}
            <section className="who-what  pt40 pb40">
                <div className="container">
                    <div className="row pb40">
                        <div className="col-md-6 sec-heading">
                            <h2>Who we are</h2>
                            <p>Being one of India’s premier investment companies, we found our purpose in helping people protect and grow their wealth. Here at Bajaj Capital Limited, we offer personalized investment solutions to individual investors, Non-Resident Indians (NRIs), and High Networth clients, among others.</p>
                            <p>Over the last 54 years, we have secured more futures and helped create more millionaires than any other firm in India. But our true pride lies in the trust that our clients show in us. It is our deep personal relationship with each client that sets us apart. </p>
                        </div>
                        <div className="col-md-6"> <img alt="alt" src={who_we_are} className="img-fluid" /> </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 order-md-2 sec-heading">
                            <h2>How we empower you</h2>
                            <p>Our financial experts have guided people, hand-held them in their financial journey and have helped them fulfil their financial needs. Nothing makes us happier than seeing our users get the financial freedom they deserve.</p>
                            <p className="mb-1">
                                <strong> We offer need-based financial solutions like:</strong></p>
                            <div className="row">
                                <div className="col-md-6">
                                    <a href="https://www.onebajaj.capital/mutual-fund/onboarding1?utm_source=about_us_empower&utm_medium=icon&utm_content=mf"
                                        onClick={() => {
                                            pushToDataLayer({
                                                url: "https://www.onebajaj.capital/mutual-fund/onboarding1?utm_source=about_us_empower&utm_medium=icon&utm_content=mf",
                                                eventAction: 'Wealth_Creation_Click'
                                            })
                                        }}>
                                        <span className=" badge badge-pill badge-light">Wealth Creation</span></a>
                                </div>
                                <div className="col-md-6">
                                    <a href="https://getquote.bajajcapitalinsurance.com/health-insurance/health-profile/profile-needs?utm_source=about_us_empower&utm_medium=icon&utm_content=hi"
                                        onClick={() => {
                                            pushToDataLayer({
                                                url: "https://getquote.bajajcapitalinsurance.com/health-insurance/health-profile/profile-needs?utm_source=about_us_empower&utm_medium=icon&utm_content=hi",
                                                eventAction: 'Health_Insurance_Click'
                                            })
                                        }}
                                        rel="noopener noreferrer" target="_blank"> <span className=" badge badge-pill badge-light">Health Insurance</span></a>
                                </div>
                                <div className="col-md-6">
                                    <a href="https://www.onebajaj.capital/loans/personal-loan/?utm_source=about_us_empower&utm_medium=icon&utm_content=pl"
                                        onClick={() => {
                                            pushToDataLayer({
                                                url: "https://www.onebajaj.capital/loans/personal-loan/?utm_source=about_us_empower&utm_medium=icon&utm_content=pl",
                                                eventAction: 'Personal_Loan_Click'
                                            })
                                        }}> <span className=" badge badge-pill badge-light">Personal Loan</span></a>
                                </div>
                                <div className="col-md-6">
                                    <a href="https://www.onebajaj.capital/credit-card/?utm_source=about_us_empower&utm_medium=icon&utm_content=cc" 
                                        onClick={() => {
                                            pushToDataLayer({
                                                url: "https://www.onebajaj.capital/credit-card/?utm_source=about_us_empower&utm_medium=icon&utm_content=cc",
                                                eventAction: 'Credit_Card_Click'
                                            })
                                        }} > <span className=" badge badge-pill badge-light">Credit Card</span></a>
                                </div>
                                <div className="col-md-6">
                                    <a href="https://getquote.bajajcapitalinsurance.com/car-insurance/car-profile/car-registration-info?utm_source=about_us_empower&utm_medium=icon&utm_content=ci"
                                        onClick={() => {
                                            pushToDataLayer({
                                                url: "https://getquote.bajajcapitalinsurance.com/car-insurance/car-profile/car-registration-info?utm_source=about_us_empower&utm_medium=icon&utm_content=ci",
                                                eventAction: 'Motor_Insurance_Click'
                                            })
                                        }}
                                        rel="noopener noreferrer" target="_blank">  <span className=" badge badge-pill badge-light">Motor Insurance</span></a>
                                </div>
                                <div className="col-md-6">
                                    <a href="https://getquote.bajajcapitalinsurance.com/life-insurance/profile/term/gender?utm_source=about_us_empower&utm_medium=icon&utm_content=li"
                                        onClick={() => {
                                            pushToDataLayer({
                                                url: "https://getquote.bajajcapitalinsurance.com/life-insurance/profile/term/gender?utm_source=about_us_empower&utm_medium=icon&utm_content=li",
                                                eventAction: 'Life_Insurance_Click'
                                            })
                                        }}
                                        rel="noopener noreferrer" target="_blank">  <span className=" badge badge-pill badge-light">Life Insurance</span></a>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 order-md-1"> <img alt="alt" src={about_whatweca} className="img-fluid" /> </div>
                    </div>  </div>
            </section>
            <section className="whybajaj-capital  pt40 pb40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 sec-heading">
                            <h2> Why choose us</h2>
                            <p> We have an unparalleled streak of being indispensable in our users’ lives for over 54 years. Our physical presence in over 230 offices in 100 cities across the country, maintains a consistency of relationship and experience. Our financial expertise stems from a headstrong team of qualified and experienced professionals including CA's, MBA's, MBE's, CFP's, CS's, Legal Experts, and 700 Relationship Managers who offer an incredibly diverse range
          of personalized services.</p>
                            <p>Moreover, we’ve won the CNBC TV 18 Financial Advisor Award (Retail) six times, that itself boasts of our capabilities.</p>
                            <p> Our Group Companies include Bajaj Capital Insurance Broking Limited, which is an IRDA-licensed Composite Insurance Broker; Just Trade Securities Limited, member of NSE and BSE; Bajaj Capital Investment Centre Limited, which facilitates realty solutions.
</p>

                        </div>
                    </div>
                    <div className="row whybajaj">
                        <div className="col-md-4 text-center whynumber"> Investors
          <h5>27 Lakhs</h5>
                        </div>
                        <div className="col-md-4 text-center whynumber"> Assets
          <h5> ₹22,700 Cr</h5>
                        </div>
                        <div className="col-md-4 text-center whynumber"> Experience
          <h5> 54 Years</h5>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Bajaj */}
            <section className="whybajaj bajajmission bg-white pt40 pb40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 sec-heading ">
                            <h2 className="mb-0"> Our Aims &amp; Objectives</h2>
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