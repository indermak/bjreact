import React from 'react';
import Spinner from '../../../../../../components/spinner/spinner';

export default class HealthInsurance extends React.Component {

    renderRewards = (rewards) => {
        const data = rewards.split('||');
        return data && data.length && data.map((reward, index) => {
            if (index > 1) {
                return null;
            }
            return (
                <li key={`index${index}`}>{reward}</li>
            )
        })
    }

    renderTrending = () => {
        const { trending } = this.props;
        return trending && trending.length && trending.map((item, index) => {
            let count = 0;
            if (item.field_key === 'motorInsurance' && count < 3) {
                count = count + 1;
                return (
                    <div className="card">
                        <img src={item.field_picture} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.field_title}</h5>
                            <div className="annual-fee">Annual Fee <span>  ₹{item.field_annual_fee}</span></div>
                            <div className="rewards"><h5>Rewards</h5></div>
                            <ul>{this.renderRewards(item.field_rewards)}</ul>
                            <a href="/" className="btn btn-primary block">Apply</a>
                        </div>
                    </div>
                )
            }
            return null;
        })
    }

    render() {
        const { loading } = this.props;
        if (loading) {
            return <Spinner />
        }
        return (
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="card-wrapper">
                    {this.renderTrending()}
                </div>
                <a href="/" className="viewall text-center justify-content-center">
                    View all <i className="fas fa-arrow-right" />
                </a>
            </div>
        )
    }
}