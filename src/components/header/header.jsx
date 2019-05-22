import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { bajaj_capital_logo } from '../../assets/images';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isTop: true
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll, false);
    }

    handleScroll = () => {
        const isTop = window.scrollY < 100;
        if (isTop !== this.state.isTop) {
            this.setState({ isTop })
        }
    }

    render(){
        const { isTop } = this.state;
        return(
            <React.Fragment>
            <header>
                <nav className={`navbar navbar-expand-md  navbar-light fixed-top ${!isTop && 'affix'}`} id="header">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><img src={bajaj_capital_logo} alt="bajaj" /></Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="navbar-collapse collapse " id="navbarCollapse" style={{}}>
                            <ul className="navbar-nav  ml-md-auto d-md-flex">
                                <li className="nav-item dropdown">
                                    <NavDropdown title="Investments" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Mutual Fund</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Fixed Deposit</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Portfolio Management System</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className="nav-item dropdown">

                                    <NavDropdown title="Insurance" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Term Insurance</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Health Insurance</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Car Insurance</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavDropdown title="Loans" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Personal Loan</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Home Loan</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"> Credit Cards </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blogs"> Blogs </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/about"> About </Link>
                                </li>
                            </ul>
                            {/* <input type="text" className="nav-search form-control ds-input" placeholder="Search" name="searchKeyword" /> */}
                        </div>
                    </div>
                </nav>
            </header>
            {this.props.children}
            </React.Fragment>
        )
    }
}