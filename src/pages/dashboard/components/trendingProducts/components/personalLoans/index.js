import React from 'react';
import Spinner from '../../../../../../components/spinner/spinner';
import requestHelper from '../../../../../../helpers/request';

export default class PersonalLoans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingLoans: [],
            loading: true
        }
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const retVal = await requestHelper.getPersonalLoansTrending();
        if (retVal.status === 200) {
            this.setState({ trendingLoans: retVal.data && retVal.data.data, loading: false })
        } else {
            this.props.showTabs('isPersonal', false);
            this.setState({ loading: false });
        }
    }

    renderFacts = (facts) => {
        return facts && facts.length && facts.map((fact, index) => {
            if (index > 1) {
                return null;
            }
            return (<li key={`index${index}`}>{fact}</li>
            )
        })
    }

    renderCards = () => {
        const { trendingLoans } = this.state;
        const cards = ['Salaried', 'Professionals', 'Business Owner'];
        const renderElements = [];
        let count = 0;
        cards.forEach(item => {
            let itemCount = false;
            trendingLoans[item].forEach(element => {
                if (itemCount) return null;
                if (count > 2) return null;
                const isFound = renderElements.find(x => x.title === element.title);
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
                    <div className="annual-fee">Monthly EMI <span>  ₹{item.monthly_emi}</span></div>
                    <div className="rewards"><h5>Features</h5></div>
                    <ul>{this.renderFacts(item.key_facts)}</ul>
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