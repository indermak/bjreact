import React from 'react';
import policies from '../../../constants/privacyPolicy';
import { Collapse, Button } from 'react-bootstrap';

export default class PrivacyPolicy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        }
    }

    showData = (event, id) => {
        event.preventDefault();
        let val = id;
        if (id === this.state.id) {
            val = null;
        }
        this.setState({ id: val });
    }

    renderItems = () => {
        return policies.map((policy, index) => {
            return (

                <div className="panel panel-default" key={`index${index}`}>
                    <Button variant='link' onClick={(e) => this.showData(e, index)}>
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                {(this.state.id === index) ? '-' : '+'} {policy.title}
                            </h4>
                        </div>
                    </Button>

                    <Collapse in={this.state.id === index}>
                        <div id="example-collapse-text">
                            <div className="panel-body">
                                <ul >
                                    {this.renderBody(policy.body)}
                                </ul>
                            </div>
                        </div>
                    </Collapse>

                </div>
            )
        })
    }

    renderBody = (body) => {
        return body.map((item, index) => {
            return (
                <li key={`indexitem${index}`}>
                    {item}
                </li>
            )
        })
    }

    render() {
        return (
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-body">
                        <div className="panel-group" id="accordion">
                            {this.renderItems()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}