import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { bajaj_logo } from '../../assets/images';

const pushToDataLayer = ({ menu, key, subMenu }) => {
    if (key === 'social') {
        window.dataLayer.push({
            'event': 'social_link_click',
            'pageType': 'web-index', // {{dynamic}} contains page type i.e web-index page, web-who-we-are page
            'socialPlatform': subMenu, // {{dynamic}} contains social platform i.e facebook,twitter,linkedin
        });
    } else {
        window.dataLayer.push({
            'event': 'footer_link_click',
            'pageType': 'index page',
            'sectionName': menu,
            'clickText': subMenu
        });
    }
}



const Footer = (props) => {
    let { location: { pathname } } = props;
    if (pathname === '/') {
        pathname = '/homepage_footer'
    }
    pathname = pathname.substr(1, pathname.length);
    return (
        <footer className="pt40">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md footer-logo">
                        <img alt="bajaj logo" className="logo" src={bajaj_logo} />
                        <p>
                            Bajaj Capital is India’s premier investment services group engaged inter-alia in the distribution of mutual funds, insurance, fixed deposits, bonds, loans et al.
        </p>
                    </div>
                    <div className="col-6 col-md ulitem">
                        <h5>Offerings</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a href={`https://www.onebajaj.capital/mutual-fund/?utm_source=${pathname}&utm_medium=button&utm_content=mf`}
                                    onClick={() => pushToDataLayer({
                                        url: `https://www.onebajaj.capital/mutual-fund/?utm_source=${pathname}&utm_medium=button&utm_content=mf`,
                                        menu: 'Offerings',
                                        subMenu: 'Mutual Funds'
                                    })}  >Mutual Funds</a>
                            </li>
                            <li>
                                <a href={`https://www.onebajaj.capital/fixed-deposit/campaign/001/apply-now.html?utm_source=${pathname}&utm_medium=button&utm_content=fd`}
                                    onClick={() => pushToDataLayer({
                                        url: `https://www.onebajaj.capital/fixed-deposit/campaign/001/apply-now.html?utm_source=${pathname}&utm_medium=button&utm_content=fd`,
                                        menu: 'Offerings',
                                        subMenu: 'Fixed Deposits'
                                    })}  >Fixed Deposits</a>
                            </li>
                            <li>
                                <a href={`https://bajajcapitalinsurance.com/?utm_source=${pathname}&utm_medium=button&utm_content=insurance`}
                                    target="_blank" rel="noopener noreferrer"
                                    onClick={() => pushToDataLayer({
                                        url: `https://bajajcapitalinsurance.com/?utm_source=${pathname}&utm_medium=button&utm_content=insurance`,
                                        menu: 'Offerings',
                                        subMenu: 'Insurance'
                                    })}  >Insurance</a>
                            </li>
                            <li>
                                <a href={`https://www.onebajaj.capital/loans/personal-loan/?utm_source=${pathname}&utm_medium=button&utm_content=pl`}
                                    onClick={() => pushToDataLayer({
                                        url: `https://www.onebajaj.capital/loans/personal-loan/?utm_source=${pathname}&utm_medium=button&utm_content=pl`,
                                        menu: 'Offerings',
                                        subMenu: 'Personal Loan'
                                    })}  >Personal Loan</a>
                            </li>

                            <li>
                                <a href={`https://www.onebajaj.capital/loans/home-loan/campaign/002/apply-now.html?utm_source=${pathname}&utm_medium=button&utm_content=hl`}
                                    onClick={() => pushToDataLayer({
                                        url: `https://www.onebajaj.capital/loans/home-loan/campaign/002/apply-now.html?utm_source=${pathname}&utm_medium=button&utm_content=hl`,
                                        menu: 'Offerings',
                                        subMenu: 'Home Loan'
                                    })}  >Home Loan</a>
                            </li>


                            <li>
                                <a href={`https://www.onebajaj.capital/credit-card/?utm_source=${pathname}&utm_medium=button&utm_content=cc`}
                                    onClick={() => pushToDataLayer({
                                        url: `https://www.onebajaj.capital/credit-card/?utm_source=${pathname}&utm_medium=button&utm_content=cc`,
                                        menu: 'Offerings',
                                        subMenu: 'Credit Cards'
                                    })}  >Credit Cards</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md ulitem">
                        <h5>Miscellaneous</h5>
                        <ul className="list-unstyled text-small">
                            <li className="d-none">
                                <a href="/branch-locator">Branch Locator</a>
                            </li>
                            <li>

                                <Link to={`/blogs?utm_source=${pathname}&utm_medium=button&utm_content=blog`}
                                    onClick={() => pushToDataLayer({
                                        url: `${window.location.href}/blogs?utm_source=${pathname}&utm_medium=button&utm_content=blog`,
                                        menu: 'Miscellaneous',
                                        subMenu: 'The Capital Blog'
                                    })}>The Capital Blog
            </Link>
                            </li>
                            <li>
                                <Link to={`/branch-locator?utm_source=${pathname}&utm_medium=button&utm_content=locator`}
                                    onClick={() => pushToDataLayer({
                                        url: `${window.location.href}/branch-locator?utm_source=${pathname}&utm_medium=button&utm_content=locator`,
                                        menu: 'Miscellaneous',
                                        subMenu: 'Branch Locator'
                                    })}>Branch Locator
            </Link>
                            </li>
                            {/* <li>
                                <Link to={`/about?utm_source=${pathname}&utm_medium=button&utm_content=about`}
                                    onClick={() => pushToDataLayer({
                                        url: `${window.location.href}/about?utm_source=${pathname}&utm_medium=button&utm_content=about`,
                                        menu: 'Miscellaneous',
                                        subMenu: 'About'
                                    })}>About</Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="col-12 col-md ulitem">
                        <h5>Contact</h5>
                        <ul className="list-unstyled text-small contact">
                            <li>
                                <a href="tel:1800-313-123123" onClick={() => pushToDataLayer({
                                    menu: 'contact',
                                    subMenu: '1800-313-123123'
                                })}> 1800-313-123123 </a>
                                <p className="time">
                                    <strong>Mon — Sat</strong>
                                    (10AM — 6PM)
            </p>
                                <p className="time"><strong>In case of any queries, feel free to call or write to us.
                We will be very happy to assist you.</strong></p>
                            </li>
                            <li>
                                <a href="mailto:contactus@bajajcapital.com"
                                    onClick={() => pushToDataLayer({
                                        menu: 'contact',
                                        subMenu: 'contactus@bajajcapital.com'
                                    })}>contactus@bajajcapital.com</a>
                            </li>
                            <li>
                                <a className="social" href="https://www.facebook.com/bajajcapital"
                                    onClick={() => pushToDataLayer({
                                        key: 'social',
                                        subMenu: 'facebook'
                                    })} >
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="social" href="https://twitter.com/mybajajcapital" onClick={() => pushToDataLayer({
                                    key: 'social',
                                    subMenu: 'twitter'
                                })} >
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="social" href="https://www.linkedin.com/company/bajaj-capital-ltd"
                                    onClick={() => pushToDataLayer({
                                        key: 'social',
                                        subMenu: 'linkedin-in'
                                    })} ><i className="fab fa-linkedin-in" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row footer-link">
                    <div className="col-12 col-md-3">
                        Copyright © 2019 Bajaj Capital Limited
      </div>
                    <div className="col-12 col-md-9 link11">
                        <Link to="/terms/legal-disclaimer">Legal Disclaimer</Link>
                        <Link to="/terms/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms/tnc">Terms and Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default withRouter(Footer);