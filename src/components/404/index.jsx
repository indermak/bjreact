import React from 'react';
import { Link } from "react-router-dom";
import Header from '../header/header';
import { Helmet } from "react-helmet";

export default () => (
    <Header>
        <Helmet>
            <title>Bajaj Capital | 404</title>
        </Helmet>
        <section className="aboutbanner errorpage pt40">
            <img src={require(`../../assets/images/${(window.innerWidth <= 575) ? '404-error-m.svg' : '404-error.svg'}`)}
                alt="404_error" className="img-fluid" />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 sec-heading text-center pt100">
                        Seems like you're lost.<h1>  Let's take you back </h1></div>
                    <div className="col-md-8 offset-md-2  text-center">
                        <Link to="/" className="btn btn-primary">  HOME </Link>
                    </div>
                </div>
            </div>
        </section>

    </Header>
)