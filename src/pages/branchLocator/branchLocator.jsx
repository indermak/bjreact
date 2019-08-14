import React from 'react';
import requestHelper from '../../helpers/request';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityOptions: [],
            branchOptions: [],
            branches: [],
            loading: false,
            city: '',
            branch: '',
            type: 'Retail Branhes'
        }
    }

    componentDidMount() {
        this.getBranches();
    }

    getBranches = async () => {
        this.setState({ loading: true });
        const retVal = await requestHelper.getBranches({ type: 'Mutualfund' });
        if (retVal && retVal.status === 200) {
            let branchOptions = retVal.data.Data;
            branchOptions = branchOptions.sort(function (a, b) {
                if (a.CityName < b.CityName) { return -1; }
                if (a.CityName > b.CityName) { return 1; }
                return 0;
            })
            this.setState({ branchOptions, loading: false })
        } else {
            this.setState({ loading: false });
        }
    }

    renderCityOptions = () => {
        const { branchOptions, loading, type } = this.state;
        if (!(branchOptions && branchOptions.length) && loading) {
            return null;
        }
        let branchCity = [];
        branchOptions.forEach(branch => {
            if (branch.ChannelName === type) {
                branchCity.push(branch.CityName);
            }
        });
        branchCity = new Set(branchCity);
        let branches = [];
        branchCity.forEach(branch => {
            branches.push(<option key={branch} value={branch}>{branch}</option>)
        })
        return branches;
    }

    handleCityChange = (event) => {
        const city = event.target.value;
        this.setState({ city, branch: '' })
    }

    renderBranchOptions = () => {
        const { branchOptions, city, type } = this.state;
        if (!city) {
            return null;
        }
        let branches = [];
        branchOptions.forEach(branch => {
            if ((branch.CityName === city) && (branch.ChannelName === type)) {
                branches.push(branch);
            }
        });
        branches = new Set(branches);
        const branchesOptions = [];
        branches.forEach(branch => {
            branchesOptions.push(<option key={branch.BranchName} value={branch.BranchName}>{branch.BranchName}</option>)
        });
        return branchesOptions;
    }

    handleBranchChange = (event) => {
        this.setState({ branch: event.target.value });
    }

    renderBranch = () => {
        const { branchOptions, city, branch, type } = this.state;
        if (!(city || branch)) {
            return null;
        }
        const branches = [];
        branchOptions.forEach(item => {
            if ((item.CityName === city) && (item.BranchName === branch) && (item.ChannelName === type)) {
                branches.push(item);
            }
        });
        return !!branches.length && branches.map(branch => {
            return (
                <div className=" col-12 col-md-6 col-lg-6 col-sm-6 mb-6" key={branch.BranchName}>
                    <div className="card">
                        <div className="card-body ">
                            <div className="card-text pt40">
                                {branch.Address && (<p><strong>Address: </strong><span className="address ">{branch.Address}</span></p>)}
                                {/* <p><strong>Hours: </strong><span>10:00 - 22:00, Monday to Sunday</span></p> */}
                                {branch.CityName && (<p><strong>City: </strong>{branch.CityName}</p>)}
                                {branch.Mobile && (<p><strong>Mobile: </strong><a href={`tel:${branch.Mobile}`}>{branch.Mobile}</a>
                                </p>)}
                                {branch.Email && (<p><strong>Email: </strong>{branch.Email}</p>)}
                            </div>
                            {branch.ChannelName && (<span className="float-left pt-1"> {branch.ChannelName === 'Retail Branhes' ? 'Retail Branches' : branch.ChannelName }</span>)}
                        </div>
                    </div>
                </div>
            )
        });
    }

    changeType = (e, type) => {
        e.preventDefault();
        this.setState({ type, city: '', branch: '' });
    }

    handleChange = (event) => {
        this.setState({ type: event.target.value, city: '', branch: '' });
    }

    render() {
        const { type, city, branch } = this.state;
        return (
            <main role="main">
                {/*Banner */}
                <section className="aboutbanner branch-banner pt100 pb80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2  sec-heading text-center">
                                <h1> Branch Locator</h1>
                                Over 110 locations all over India </div>
                            <div className="col-lg-8 offset-lg-2  text-center">
                                <div className="  d-none d-sm-block mt-2">
                                <div className="btn-group btn-slide" role="group" aria-label="Basic example">
                                    <button type="button" className={(type === 'Retail Branhes') ? 'btn btn-secondary active' : 'btn btn-secondary'}
                                        onClick={(e) => this.changeType(e, 'Retail Branhes')}>Investment Centres</button>
                                    <button type="button" className={(type === 'Wealth Mamagement Center') ? 'btn btn-secondary active' : 'btn btn-secondary'}
                                        onClick={(e) => this.changeType(e, 'Wealth Mamagement Center')}>Wealth Management Centres </button>
                                    <button type="button" className={(type === 'Advisor Network Group') ? 'btn btn-secondary active' : 'btn btn-secondary'}
                                        onClick={(e) => this.changeType(e, 'Advisor Network Group')}>Advisor Network Group</button>
                                </div>
                                </div>
                                <div className="row branchselect">
                                    <div className=" col-md d-block d-sm-none mt-2">
                                        <div className="form-group">
                                            <select className="form-control"
                                                value={type} onChange={this.handleChange}>
                                                <option value="Retail Branhes">Investment Centers</option>
                                                <option value="Wealth Mamagement Center">Wealth Management Centers</option>
                                                <option value="Advisor Network Group">Advisor Network Group</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-group">
                                            <select className="form-control"
                                                value={city}
                                                id="exampleFormControlSelect1" onChange={this.handleCityChange}>
                                                <React.Fragment>
                                                    <option>Select City</option>
                                                    {this.renderCityOptions()}
                                                </React.Fragment>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-group">
                                            <select className="form-control" value={branch}
                                                id="exampleFormControlSelect1" onChange={this.handleBranchChange}>
                                                <React.Fragment>
                                                    <option>Select Branch</option>
                                                    {this.renderBranchOptions()}
                                                </React.Fragment>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Bajaj Capital Branch Locator */}
                <section className="homeblog branch-main pb80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 sec-heading text-center d-none d-sm-block">
                                {(type === 'Retail Branhes') && (
                                    <React.Fragment>
                                        <h2> Investment Centres</h2>
                                            These facilities enable clients who are looking for investment solutions for various purposes such as wealth creation, and goal-based investments like retirement, child's education etc.
                                    </React.Fragment>)}
                                {(type === 'Advisor Network Group') && (
                                    <React.Fragment>
                                        <h2> Advisor Network Group</h2>
                                        Advisor Network Group is a business channel that works on a sub-broking model with their active agents offering all kinds of financial solutions.
                                    </React.Fragment>)}
                                {(type === 'Wealth Mamagement Center') && (
                                    <React.Fragment>
                                        <h2> Wealth Management Centres</h2>
                                        These facilities primarily cater to corporate  and  HNI clientele.  They  have selective clients who are aiming for wealth creation and/or wealth protection.
                                    </React.Fragment>)}

                            </div>
                            {this.renderBranch()}
                        </div>
                    </div>
                </section>
                {/* Bajaj Capital Brach Locator End */}
            </main>

        )
    }
}