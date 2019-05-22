import React from 'react';
import { the_capital_blog } from '../../../../assets/images';

export default ({ search, onSearch }) => {
    return (
        <section className="aboutbanner blog-header   pb60 pt60">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 sec-heading text-center">
                        <h1><img src={the_capital_blog} alt="capital_blog" width={438} height={138} className="img-fluid" /></h1>
                        <form className="form ">
                            <div className="input-group ">
                                <input className="form-control shadow-sm  border-0 " 
                                    type="text" placeholder="Search Blog" aria-label="Search" 
                                    id="mysearch" onChange={onSearch} value={search} />
                                <div className="input-group-addon">
                                    <i className="fa fa-search" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}