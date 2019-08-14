import React from 'react';
import { Button } from 'react-bootstrap';
const allowedValues = ['Mutual-Fund', 'Insurance', 'Credit-Card', 'Personal-Loan'];

export default ({ search, onSearch, onCategorySelect, category }) => {
    const isValue = allowedValues.find(item => item === category);
    if(!isValue) category = 'All';
    return (
        <section className="aboutbanner blog-header pt100 pb80">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 sec-heading text-center">
                        <h1><img src={require('../../../../assets/images/the-capital-blog2.png')} alt="capital_blog" width={438} height={138} className="img-fluid" /></h1>
                        <div className="input-group ">
                            <input className="form-control shadow-sm  border-0 " autoComplete="off"
                                type="text" placeholder="Search Blog" aria-label="Search"
                                id="mysearch" onChange={onSearch} value={search} />
                            <div className="input-group-addon">
                                <i className="fa fa-search" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 offset-md-2 btn-badge text-center btn-badges">
                        <Button variant="link" onClick={() => onCategorySelect('All')} className={`btn btn-secondary btn-badge ${(!category || (category==='All')) && 'active'}`}> All Articles</Button>
                        <Button variant="link" onClick={() => onCategorySelect('Mutual-Fund')} className={`btn btn-secondary btn-badge ${category === 'Mutual-Fund' && 'active'}`}> Mutual Fund</Button>
                        <Button variant="link" onClick={() => onCategorySelect('Insurance')} className={`btn btn-secondary btn-badge ${category === 'Insurance' && 'active'}`}> Insurance </Button>
                        <Button variant="link" onClick={() => onCategorySelect('Credit-Card')} className={`btn btn-secondary btn-badge ${category === 'Credit-Card' && 'active'}`}> Credit Card </Button>
                        <Button variant="link" onClick={() => onCategorySelect('Personal-Loan')} className={`btn btn-secondary btn-badge ${category === 'Personal-Loan' && 'active'}`}> Personal Loan </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}