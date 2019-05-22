import React from 'react';
import { bajaj_capital_logo } from '../../assets/images';

export default () => (
    <footer className="pt60">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md footer-logo">
                    <img alt="bajaj logo" className="logo" src={bajaj_capital_logo} />
                    <p>
                        Bajaj Capital Limited (“CIN U67120DI1965PLC004338”) is India’s premier “Investment Services” Company, with
                        over 50 years
                        of experience in helping people protect and grow their wealth. We’ve helped to create more millionaires
                        than
                        any other firm in India. But it is our deep personal relationships with clients that truly set us apart.
        </p>
                </div>
                <div className="col-12 col-md ulitem">
                    <h5>Offerings</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <a href="https://www.bajajcapital.com/bonds/introduction-bonds.aspx" target="_blank" rel="noopener noreferrer">Insurance</a>
                        </li>
                        <li>
                            <a href="https://www.bajajcapital.com/IPOs/introduction.aspx" target="_blank" rel="noopener noreferrer">Mutual Funds</a>
                        </li>
                        <li>
                            <a href="https://www.bajajcapital.com/national-pension-scheme/pension-scheme.aspx" rel="noopener noreferrer" target="_blank">Personal Loan</a>
                        </li>
                        <li>
                            <a href="https://www.bajajcapital.com/financial-assessment/introduction.aspx" rel="noopener noreferrer" target="_blank">Credit
              Cards</a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md ulitem">
                    <h5>Miscellaneous</h5>
                    <ul className="list-unstyled text-small">
                        <li className="d-none">
                            <a href="/">Branch Locator</a>
                        </li>
                        <li>
                            <a href="https://onebajaj.capital/investment">The Capital Blog
            </a>
                        </li>
                        <li>
                            <a href="https://onebajaj.capital/whoWeAre">About</a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md ulitem">
                    <h5>Contact</h5>
                    <ul className="list-unstyled text-small contact">
                        <li>
                            <a href="tel:1800-313-123123"> 1800-313-123123 </a>
                            <p className="time">
                                <strong>Mon — Sat</strong>
                                (10AM — 6PM)
            </p>
                            <p className="time"><strong>In case of any queries, feel free to call or write to us.
                We will be very happy to assist you.</strong></p>
                        </li>
                        <li>
                            <a href="dia@bajajcapital.com">dia@bajajcapital.com</a>
                        </li>
                        <li>
                            <a className="social" href="https://www.facebook.com/bajajcapital" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="social" href="https://twitter.com/mybajajcapital" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter" target="_blank" />
                            </a>
                            <a className="social" href="https://www.linkedin.com/company/bajaj-capital-ltd" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" target="_blank" /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row footer-text">
                <div className="col-12 col-md-3">
                    <h5>Registered Office</h5>
                    Mezzanine Floor, Bajaj House, 97, Nehru Place, New Delhi 110019.
      </div>
                <div className="col-12 col-md-9">
                    <h5>Disclaimer</h5>
                    Mutual fund investments are subject to market risks. Please read scheme related documents carefully before
                    investing. Past
                    performance is not indicative of future returns. Please consider your specific investment requirements
                    before choosing
                    a fund or designing a portfolio that suits your needs. Bajaj Capital Limited (ARN 0010) makes no warranties
                    or
                    representations, express or implied, on products offered through the platform. It accepts no liability for
                    any
                    damage or losses, however caused, in connection with the use of, or by reliance of its platforms or related
                    services.
                    Terms and conditions of the website are applicable.
        <p>
                        SEBI Category I Merchant Banker CoR - INM000010544 | ARN 0010 | DP of NSDL – IN-DP-NSDL-267-2006 | PoP of
          PFRDA – POP50022016 | Stockbrokers of BSE (Cash Segment) – INZ000007732</p>
                </div>
            </div>
            <div className="row footer-link">
                <div className="col-12 col-md-3">
                    Copyright © 2018 Bajaj Capital Limited
      </div>
                <div className="col-12 col-md-9 ">
                    <a href="/">Legal Disclaimer </a>
                    <a href="/">Privacy Policy </a>
                    <a href="/">Terms and Conditions </a>
                    <a href="/">Company Disclosures </a>
                </div>
            </div>
        </div>
    </footer>


)