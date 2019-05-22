import React from 'react';
import { bajaj_awards, economic_times } from '../../../../assets/images';

export default () => (<section className="bajajawards pb60">
    <div className="container ">
        <div className=" row justify-content-between pb40">
            <div className="col-12 col-md-6 align-self-center ">
                <div className=" sec-heading">
                    <h2> Awards &amp; Recognition</h2>
                    Bajaj Capital is proud to have been recognised as a national leader in financial services, but don’t just take our word for it.
        </div>
            </div>
            <div className="col-12 col-md-6">
                <img src={bajaj_awards} className="img-fluid" alt="awards" /> </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 ">
                <div className="box">                 <h4><img src={economic_times} className="img-fluid" alt="economic times" /> </h4>
                    <p>
                        Best BFSI Brands 2016
          </p>
                    <span className="quote"><i className="fas fa-quote-left" /></span>If you are going  embarrassing hidden in the middle  Lorem Ipsum the  ted be sure repeat.”
        </div>
            </div>
            <div className="col-12 col-md-4 ">
                <div className="box">                 <h4><img src={economic_times} className="img-fluid" alt="economic times" /> </h4>
                    <p>
                        Best BFSI Brands 2016
          </p>
                    <span className="quote"><i className="fas fa-quote-left" /></span>If you are going    in the middle of text. All the Lorem Ipsum the Internet ted be sure repeat.”
        </div>
            </div>
            <div className="col-12 col-md-4 ">
                <div className="box">                 <h4><img src={economic_times} className="img-fluid" alt="economic times" /> </h4>
                    <p>
                        Best BFSI Brands 2016
          </p>
                    <span className="quote"><i className="fas fa-quote-left" /></span>If you are going   hidden in the middle of text. All the Lorem Ipsum the Internet ted be sure repeat.”
        </div>
            </div>
        </div>
    </div>
</section>

)