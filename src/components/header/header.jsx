import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Button } from 'react-bootstrap';
import { bajaj_capital_logo } from '../../assets/images';
import { withRouter } from "react-router";
import urlConstants from '../../constants/url';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.isMobile = (window.innerWidth <= 700);
        this.state = {
            isTop: true,
            isOpen: false
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
    }

    handleScroll = () => {
        const isTop = window.scrollY < 100;
        if (isTop !== this.state.isTop) {
            this.setState({ isTop })
        }
    }

    openNavbar = () => {
        this.setState({ isOpen: !this.state.isOpen });
        if(this.state.isOpen){
            document.getElementById("myBody").style.overflow = "";
        } else {
            document.getElementById("myBody").style.overflow = "hidden";
        }
    }

    redirect = (e, url, menu, subMenu) => {
        e.preventDefault();
        this.setState({ isOpen: false });
        document.getElementById("myBody").style.overflow = "";
        window.scrollTo(0, 0);
        this.pushToDataLayer({ url, menu, subMenu, home: true });
    }

    shiftUrl = (e, url, menu, subMenu) => {
        e.preventDefault();
        this.pushToDataLayer({ url, menu, subMenu });
    }

    pushToDataLayer = ({ url, menu, subMenu, home = false }) => {
        const route = home ? `${window.location.href}${url}` : url;
        window.dataLayer.push({
            'event': 'Navigation_Tab_Click',
            'eventCategory': 'Navigation_Tab_Click',
            'eventAction': `${menu}|${subMenu}`, // first {{dynamic}} contains the navigation tab selected. Second {{dynamic}} conatins drop down selected i.e i.e. Investments_Click|Mutual Funds_select, Investments_Click|Fixed Deposit_select'eventLabel': '{{dynamic}}', // {{dynamic}} contains the url of page to which user is redirected i.e stage.onebajaj.capital/about
            'eventLabel': route, // {{dynamic}} contains the url of page to which user is redirected i.e stage.onebajaj.capital/about  
        });
        if (home) {
            this.props.history.push(url);
        } else {
            if(menu === 'Insurance'){
                window.open(url, '_blank');
                // win.focus();
            } else {
                window.location.href = url;
            }
        }
    }



    render() {
        const { isTop, isOpen } = this.state;
        const collapseClass = `navbar-toggler ${!isOpen && "collapsed"}`;
        let { location: { pathname } } = this.props;
        if (pathname === '/') {
            pathname = 'homepage_header'
        } else {
            pathname = `${pathname.substr(1, pathname.length)}_header`;
        }

        return (
            <React.Fragment>
                <header>
                    <Navbar expanded={isOpen} expand="lg" onToggle={this.openNavbar}
                        className={`navbar navbar-expand-md fixed-top ${(!isTop || this.isMobile || (pathname !== 'homepage_header')) && 'affix navbar2 navbar-light2'}`} id="header">
                        <div className="container">
                            <Link onClick={() => window.scrollTo(0,0)} className="navbar-brand" to={`/?utm_source=${pathname}&utm_medium=logo&utm_content=home_logo`}><img src={bajaj_capital_logo} alt="bajaj" /></Link>
                            <button className={collapseClass} type="button" data-toggle="collapse"
                                onClick={this.openNavbar}
                                data-target="#navbar-collapse"
                                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span> </span>
                                <span> </span>
                                <span> </span>
                            </button>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <ul className="navbar-nav  ml-md-auto d-md-flex">
                                    {pathname !== "homepage_header" && (<li className={`nav-item ${(!isTop || this.isMobile) && 'dropdown-toggle2'}`}>
                                        <Button variant="link" className="nav-link btn btn-link" onClick={(e) => this.redirect(e, `/?utm_source=${pathname}&utm_medium=button&utm_content=home`, 'Home')}> Home </Button>
                                    </li>)}
                                    <li className="nav-item dropdown">
                                        <NavDropdown title="Investments" id="basic-nav-dropdown">
                                            <Button variant="link" className="dropdown-item"
                                                onClick={(e) => this.shiftUrl(e, `${urlConstants.mutualFund.link}?utm_source=${pathname}&utm_medium=button&utm_content=mf`, 'Investments', urlConstants.mutualFund.text)}> {urlConstants.mutualFund.text} </Button>
                                            <Button variant="link" className="dropdown-item"
                                                onClick={(e) => this.shiftUrl(e, `${urlConstants.fixedDeposit.link}?utm_source=${pathname}&utm_medium=button&utm_content=fd`, 'Investments', urlConstants.fixedDeposit.text)}> {urlConstants.fixedDeposit.text} </Button>
                                        </NavDropdown>
                                    </li>
                                    <li className="nav-item">
                                        <Button variant="link" className="nav-link btn btn-link alink"
                                            onClick={(e) => this.shiftUrl(e, `${urlConstants.insurance.link}?utm_source=${pathname}&utm_medium=button&utm_content=insurance`, urlConstants.insurance.text)}> {urlConstants.insurance.text} </Button>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavDropdown title="Loans" id="basic-nav-dropdown">
                                            <Button variant="link" className="dropdown-item"
                                                onClick={(e) => this.shiftUrl(e, `${urlConstants.personalLoan.link}?utm_source=${pathname}&utm_medium=button&utm_content=pl`, 'Loans', urlConstants.personalLoan.text)}> {urlConstants.personalLoan.text} </Button>
                                            <Button variant="link" className="dropdown-item"
                                                onClick={(e) => this.shiftUrl(e, `${urlConstants.homeLoan.link}?utm_source=${pathname}&utm_medium=button&utm_content=hl`, 'Loans', urlConstants.homeLoan.text)}> {urlConstants.homeLoan.text} </Button>
                                        </NavDropdown>
                                    </li>
                                    <li className="nav-item">
                                        <Button variant="link" className="nav-link btn btn-link alink"
                                            onClick={(e) => this.shiftUrl(e, `${urlConstants.creditCard.link}?utm_source=${pathname}&utm_medium=button&utm_content=cc`, urlConstants.creditCard.text)}> {urlConstants.creditCard.text} </Button>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Button variant="link" className="nav-link btn btn-link last-item alink" onClick={(e) => this.redirect(e, `/about?utm_source=${pathname}&utm_medium=button&utm_content=about`, 'About')}> About </Button>
                                    </li> */}
                                </ul>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </header>
                {this.props.children}
            </React.Fragment>
        )
    }
};

export default withRouter(Header);