import React from 'react';
import { bajaj_help } from '../../../../assets/images';

export default () => (
    <section className="bajajhelp pb60 pt60">
        <div className="container ">
            <div className=" row justify-content-between ">
                <div className="col-12 col-md-5">
                    <img src={bajaj_help} className="img-fluid" alt="help" /> </div>
                <div className="col-12 col-md-7 align-self-center ">
                    <div className=" sec-heading">
                        <h2>Let’s Get in Touch!</h2>
                        If you would like to ask us anything, we’re always here to help.
          Just drop our customer support team ‘Dia’ a mail at <a href="mailto:dia@bajajcapital.com">dia@bajajcapital.com</a> any time of the day, or call <a href="tel:1800-313-123123"> 1800-313-123123 </a> Mon — Sat (10AM — 6PM).
        </div>
                </div>
            </div>
        </div>
    </section>

)