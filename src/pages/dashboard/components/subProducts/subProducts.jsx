import React from 'react';
// import Slider from "react-slick";
export default class SubProducts extends React.Component {
    renderSubProducts = () => {
        const elements = [
            {
                image: 'mutual-funds.png',
                title: 'Mutual Fund',
                key: 'Mutual_Fund',
                description: 'Invest in mutual funds today and build an intelligent diversified portfolio that helps you fulfil your dreams.',
                link: 'https://www.onebajaj.capital/mutual-fund/?utm_source=homepage_products&utm_medium=card&utm_content=mf'
            },
            {
                image: 'term-insurance.png',
                title: 'Life Insurance',
                key: 'Life_Insurance',
                newtab: true,
                description: 'Getting your loved ones insured even when you are not around is the first step towards building a secure future.',
                link: 'https://getquote.bajajcapitalinsurance.com/term-life-insurance/life-profile/?utm_source=homepage_products&utm_medium=card&utm_content=li'
            },
            {
                image: 'personal-loan.png',
                title: 'Personal Loan',
                key: 'Personal_Loan',
                description: 'Avail personal loan online at the most attractive interest rate from top banks in India through Bajaj Capital.',
                link: 'https://www.onebajaj.capital/loans/personal-loan/?utm_source=homepage_products&utm_medium=card&utm_content=pl'
            },
            {
                image: 'credit-card.png',
                key: 'Credit_Card',
                title: 'Credit Cards',
                description: 'From exciting cashback offers to travel benefits, compare and apply for the credit card that is right for you.',
                link: 'https://www.onebajaj.capital/credit-card/?utm_source=homepage_products&utm_medium=card&utm_content=cc'
            },
            {
                image: 'fixed-deposit.png',
                title: 'Fixed Deposit',
                key: 'Fixed_Deposit',
                description: 'Invest in fixed deposits today and get attractive fixed returns. Start now to ensure your wealth keeps on growing.',
                link: 'https://www.onebajaj.capital/fixed-deposit/campaign/001/apply-now.html?utm_source=homepage_products&utm_medium=card&utm_content=fd'
            },
            {
                image: 'life-insurance.png',
                title: 'Health Insurance',
                key: 'Health_Insurance',
                newtab: true,
                description: 'Get best insurance plans for yourself and your family with a comprehensive medical cover. Choose your policy today.',
                link: 'https://getquote.bajajcapitalinsurance.com/health-insurance/health-profile/profile-needs?utm_source=homepage_products&utm_medium=card&utm_content=hi'
            },
            {
                image: 'home-loan.png',
                key: 'Home_Loan',
                title: 'Home Loan',
                description: 'Your dream home awaits. Apply for a hassle-free home loan with Bajaj Capital to turn your dreams to reality.',
                link: 'https://www.onebajaj.capital/loans/home-loan/campaign/002/apply-now.html?utm_source=homepage_products&utm_medium=card&utm_content=hl'
            },
            {
                image: 'car-insurance.png',
                title: 'Motor Insurance',
                newtab: true,
                key: 'Motor_Insurance',
                description: 'Ensure your peace of mind by getting your car covered against damage or theft. Choose your policy today.',
                link: 'https://getquote.bajajcapitalinsurance.com/car-insurance/car-profile/car-registration-info?utm_source=homepage_products&utm_medium=card&utm_content=mi'
            },
        ];
        return elements.map((item) => {
            return (<div className="col-lg-3 col-md-3 col-sm-6 col-6 sub-products mb-3" key={item.title}>
                <a href={item.link} target={item.newtab && '__blank'} variant="link"
                    onClick={() => this.pushToDataLayer({
                        url: item.link,
                        menu: item.key
                    })}>
                    <div className="card h-100"> <img src={require(`../../../../assets/images/icon/${item.image}`)} className="card-img-top" alt="..." />
                        <h5 className="card-title">{item.title}</h5>
                        <div className="card-body md-done">
                            <div className="md-done">
                                <p>{item.description} </p>
                            </div>
                            <p><span className="md-done">Know more</span> <i className="styled-link__icon fas fa-arrow-right m-arrow" /> </p>
                        </div>
                    </div> </a>
            </div>)
        })
    }

    pushToDataLayer = ({ url, menu }) => {
        window.dataLayer.push({
            'event': 'Corousel_click',
            'eventCategory': `${menu}_Click`, // {{dynamic}} contains Corousel_Name i.e. Corousel_Portfolio_Management_Services_Click, Corousel_Fixed_Deposit_Click, Corousel_Alternative_Investment_Fund_Click
            'eventAction': window.location.href, // {{dynamic}} contains current page url i.e stage.onebajaj.capital
            'eventLabel': url, // {{dynamic}} contains the url of page to which user is redirected i.e  www.onebajaj.capital/loans/home-loan/campaign/002/apply-now.html
        });
    }

    render() {
        return (
            <section className={`bcl-credit-report ${window.innerWidth > 800 ? 'pt120' : 'pt80'}  pb40`}>
                <div className="container">
                    <div className="row sub-products">
                        {this.renderSubProducts()}
                    </div>
                </div>
            </section>
        );
    }
}