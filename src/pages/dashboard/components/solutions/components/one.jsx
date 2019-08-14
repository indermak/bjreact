import React from 'react';
import Slider from 'react-slick';

const data = [
    {
        title: 'Tax Saving Solutions',
        description: 'Saving tax will help you save money and provide for your future requirements. Invest in ELSS schemes that suit you best.',
        sideImage: 'tax-save-icon-sm.png',
        mobileImage: ''
    },
    {
        title: 'Retirement Solutions',
        description: 'For a comfortable retired life tomorrow, you need to start planning today. We ensure that you enjoy the financial freedom you deserve.',
        sideImage: 'rs-icon-sm.png',
        mobileImage: ''
    },
    {
        title: 'Wealth Creation Solutions',
        description: `You don't need to inherit wealth to be wealthy. We find opportunities to create wealth in all kinds of market conditions.`,
        sideImage: 'wc-icon-sm.png',
        mobileImage: ''
    },
    {
        title: 'Emergency Fund',
        description: 'Solutions for life events that can seriously derail your financial health and are hard to anticipate.',
        sideImage: 'rs-icon-sm.png',
        mobileImage: ''
    }
]

const pushToDataLayer = () => {
    window.dataLayer.push({
        'event': 'Investment_solutions_for_your_life_goals',
        'eventCategory': 'Investment_solutions_for_your_life_goals',
        'eventAction': 'Get_Started_Click',
    });
}

export default class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            isChanged: false
        };
        this.timeout = null;
    }

    componentDidMount() {
        this.startAuto();
        this.timeout = setTimeout(() => {
            this.setState({ isChanged: true })
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearTimeout(this.timeout);
    }

    setActive = (active) => {
        this.setState({ active, isChanged: false }, () => {
            this.timeout = setTimeout(() => {
                            this.setState({ isChanged: true })
                        })
        })
    }

    startAuto = () => {
        const isMobile = (window.innerWidth <= 800);
        if (!isMobile) {
            this.interval = setInterval(() => {
                const { active } = this.state;
                if (active === data.length - 1) {
                    this.setState({ active: 0, isChanged: false }, () => {
                        this.timeout = setTimeout(() => {
                            this.setState({ isChanged: true })
                        })
                    })
                } else {
                    this.setState({ active: active + 1, isChanged: false }, () => {
                        this.timeout = setTimeout(() => {
                            this.setState({ isChanged: true })
                        })
                    })
                }
            }, 3000);
        }
    }

    renderMobileCards = () => {
        return data.map((item, index) => {
            return (
                <React.Fragment key={`indexrmc00${index}`}>
                    <div > <img className={`m-image entry-image`} src={require(`../../../../../assets/images/mf-00${index + 1}.png`)} alt="images" /></div>
                    <div key={`indexrmc${index}`} className="lg-card hover-bg">
                        <div className="img-card"><img src={require(`../../../../../assets/images/icon/goal${index + 1}.svg`)} className="goal-icons" alt="icon1" /></div>
                        <div className="head-div">{item.title}<br />
                            <span className="text-description text-left">{item.description}</span> </div>
                    </div>
                </React.Fragment>
            )
        })
    }

    renderMobile = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            swipeToSlide: true,
            pauseOnHover: true
        };
        return (
            <React.Fragment>
                <div className="col-md-10 col-12 text-center">
                    <h5>Investment Solutions for Your Life Goals</h5>
                </div>
                <Slider {...settings} className="text-left">
                    {this.renderMobileCards()}
                </Slider>
                <div className="lg-card m-solution-btn text-center">
                    <a onClick={pushToDataLayer} href="https://www.onebajaj.capital/mutual-fund/onboarding1?utm_source=homepage_goals&utm_medium=button&utm_content=mf" className="btn btn-primary btn-get-started"> Get Started <i className="styled-link__icon  fa fa-angle-right"></i></a>
                </div>
            </React.Fragment>
        )
    }

    renderCards = () => {
        const { active } = this.state;
        return data.map((item, index) => {
            const image = (active === index) ? 'goal' : 'goal_2';
            return (<div key={`indexrc${index}`} className={`lg-card ${(active === index) && 'hover-bg'}`}
                onMouseEnter={() => {
                    this.setActive(index);
                    clearInterval(this.interval);
                }}
                onMouseLeave={this.startAuto}
            >
                <div className="row grab">
                    <div className="col-md-2">
                        <div className="img-card"><img src={require(`../../../../../assets/images/icon/${image}${index + 1}.svg`)} className="goal-icons" alt="images" /></div>
                    </div>
                    <div className="col-md-10 ">
                        <div className={`${(active === index) && 'head-div'}`}>{item.title}<br />
                            <span className={`${(active !== index) && 'd-none text-left'}`}>{item.description}</span> </div>
                    </div>
                </div>
            </div>)
        })
    }

    render() {
        const isMobile = (window.innerWidth <= 800);
        const { active, isChanged } = this.state;

        return (
            <section className="solution-life-goal pt40 pb100">
                <div className="container md-done ver-none">
                    <div className="row mt80">
                        <div className="col-6">
                            <React.Fragment>
                                <div className="row pb40">
                                    <div className="col-md-10 col-12">
                                        <h5>Investment Solutions for Your Life Goals</h5>
                                    </div>
                                </div>
                                {this.renderCards()}
                                <div className="lg-card float-left">
                                    <a onClick={pushToDataLayer} href="https://www.onebajaj.capital/mutual-fund/onboarding1?utm_source=homepage_goals&utm_medium=button&utm_content=mf" className="btn btn-primary btn-get-started"> Get Started <i className="styled-link__icon  fa fa-angle-right"></i></a>
                                </div>
                            </React.Fragment>
                        </div>
                        <div className={`col-6 ${isMobile ? 'blogs-section11' : 'blogs-section1'} text-center`}>
                            <img src={require(`../../../../../assets/images/mf-00${active + 1}.png`)} className={`d-final ${isChanged && 'd-solution'} float-right entry-image`} alt="images" /></div>
                    </div>
                </div>
                <div className="mobileShow ver-show">
                    {this.renderMobile()}
                </div>

            </section>
        )
    }
}

