import React from 'react';
import Spinner from '../../../../../../components/spinner/spinner';
import requestHelper from '../../../../../../helpers/request';

export default class CreditCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingCards: [],
            loading: true
        }
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const retVal = await requestHelper.getCreditCardTrending();
        if (retVal.status === 200) {
            this.setState({ trendingCards: retVal.data && retVal.data.data, loading: false })
        } else {
            this.props.showTabs('isCredit', false);
            this.setState({ loading: false });
        }
    }

    renderRewards = (rewards) => {
        return rewards && rewards.length && rewards.map((reward, index) => {
            if (index > 1) {
                return null;
            }
            return (<li key={`index${index}`}>{reward}</li>
            )
        })
    }

    renderCards = () => {
        const { trendingCards } = this.state;
        const cards = ['Rewards', 'Travel', 'Lifestyle'];
        const renderElements = [];
        let count = 0;
        cards.forEach(item => {
            let itemCount = false;
            trendingCards[item].forEach(element => {
                if (itemCount) return null;
                if (count > 2) return null;
                const isFound = renderElements.find(x => (x.title === element.title));
                if (!isFound) {
                    renderElements.push(element);
                    count = count + 1;
                    itemCount = true;
                }
            })
        });
        return renderElements.length && renderElements.map(item => {
            return (<div className="card" key={item.title}>
                <img src={item.picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <div className="annual-fee">Annual Fee <span>  ₹{item.annual_fee}</span></div>
                    <div className="rewards"><h5>Rewards</h5></div>
                    <ul>{this.renderRewards(item.rewards)}</ul>
                    <a href="/" className="btn btn-primary block">Apply</a>
                </div>
            </div>)
        })
    }

    render() {
        const { loading } = this.state;
        if (loading) {
            return <Spinner />
        }
        return (
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="card-wrapper">
                    {this.renderCards()}
                </div>
                <a href="/" className="viewall text-center justify-content-center">
                    View all <i className="fas fa-arrow-right" />
                </a>
            </div>
        )
    }
}