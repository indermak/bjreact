import React from 'react';
import { Platinum_Travel_Card } from '../../../../../../assets/images';
export default class TermInsurance extends React.Component {

    render() {
        return (
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="card-wrapper">
                    <div className="card" >
                        <img src={Platinum_Travel_Card} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The American Express® Platinum Travel Credit Card</h5>
                            <div className="annual-fee">Annual Fee <span>  ₹5000</span></div>
                            <div className="rewards"><h5>Rewards</h5></div>
                            <ul>
                                <li>5000 bonus MR points redeemable for travel voucher</li>
                                <li>4 complimentary visits per year to 11 airport lounge</li>
                            </ul>
                            <a href="/" className="btn btn-primary block">Apply</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src={Platinum_Travel_Card} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The American Express® Platinum Travel Credit Card</h5>
                            <div className="annual-fee">Annual Fee <span>  ₹5000</span></div>
                            <div className="rewards"><h5>Rewards</h5></div>
                            <ul>
                                <li>5000 bonus MR points redeemable for travel voucher</li>
                                <li>4 complimentary visits per year to 11 airport lounge</li>
                            </ul>
                            <a href="/" className="btn btn-primary block">Apply</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src={Platinum_Travel_Card} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The American Express® Platinum Travel Credit Card</h5>
                            <div className="annual-fee">Annual Fee <span>  ₹5000</span></div>
                            <div className="rewards"><h5>Rewards</h5></div>
                            <ul>
                                <li>5000 bonus MR points redeemable for travel voucher</li>
                                <li>4 complimentary visits per year to 11 airport lounge</li>
                            </ul>
                            <a href="/" className="btn btn-primary block">Apply</a>
                        </div>
                    </div>

                </div>
                <a href="/" className="viewall text-center justify-content-center">
                    View all <i className="fas fa-arrow-right" />
                </a>
            </div>
        )
    }
}