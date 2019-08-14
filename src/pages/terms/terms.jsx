import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import LegalDisclaimer from './components/legalDisclaimer';
import PrivacyPolicy from './components/privacyPolicy';
import TnC from './components/tnc';


export default class Terms extends React.Component {
    constructor(props) {
        super(props);
        const key = props.match.params.type || 'legalDisclaimer';
        if (!(key === 'legal-disclaimer' || key === 'privacy-policy' || key === 'tnc')){
            props.history.push('/');
        }        
        this.state = {
            key
        }
    }

    selectTab = (key) => {
        this.setState({ key });
        this.props.history.push(`/terms/${key}`)
    }

    componentDidUpdate(prevProps){
        if(prevProps.location.pathname !== this.props.location.pathname){
            this.setState({ key: this.props.match.params.type});
        }
    }

    render() {
        return (
            <section className="trendingcard privacy  pt80 pb80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Tabs activeKey={this.state.key}
                                onSelect={this.selectTab} id="pills-tab" className="nav nav-pills mb-3 justify-content-center">
                                <Tab eventKey="legal-disclaimer" title="Legal Disclaimer" className="nav-item">
                                    <LegalDisclaimer />
                                </Tab>
                                <Tab eventKey="privacy-policy" title="Privacy Policy" className="nav-item">
                                    <PrivacyPolicy />
                                </Tab>
                                <Tab eventKey="tnc" title="Terms and Conditions" className="nav-item">
                                    <TnC />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}