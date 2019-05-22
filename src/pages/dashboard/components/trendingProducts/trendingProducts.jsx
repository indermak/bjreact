import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import CreditCard from './components/creditCard';
import MutualFunds from './components/mutualFund';
import PersonalLoans from './components/personalLoans';
import HealthInsurance from './components/healthInsurance';
import TermInsurance from './components/termInsurance';

export default class TrendingProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPersonal: true,
            isCredit: true
        }
    }

    showTabs = (key, value) => {
        this.setState({ [key]: value });
    }

    render() {
        const { isCredit, isPersonal } = this.state;
        return (
            <section className="trendingcard  pt80 pb80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 sec-heading">
                            <h2> What’s Trending</h2>
                            Besides providing lipsum in exotic charsets and languages, we provide Japanese lipsum with an adequate
                            ratio of kanji, kana, hiragana, and rōmaji. Japanese .
          </div>

                        <div className="col-lg-12">
                            <Tabs defaultActiveKey="mutualFund" id="pills-tab" className="nav nav-pills mb-3">
                                <Tab eventKey="mutualFund" title="Mutual Funds" className="nav-item">
                                    <MutualFunds />
                                </Tab>
                                {isCredit && <Tab eventKey="creditCard" title="Credit Card" className="nav-item">
                                    <CreditCard showTabs={this.showTabs} />
                                </Tab>}
                                {isPersonal && <Tab eventKey="personalLoans" title="Personal Loans" className="nav-item">
                                    <PersonalLoans showTabs={this.showTabs} />
                                </Tab>}
                                <Tab eventKey="healthInsurance" title="Health Insurance" className="nav-item">
                                    <HealthInsurance />
                                </Tab>
                                <Tab eventKey="termInsurance" title="Term Insurance" className="nav-item">
                                    <TermInsurance />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}