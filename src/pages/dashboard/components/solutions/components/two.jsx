import React from 'react';
import Slider from 'react-slick';

const data = [
    {
        title: 'Life Insurance',
        description: 'Ensure your family is protected, even when you are not around. Promise them a secure future.',
        sideImage: 'tax-save-icon-sm.png',
        mobileImage: ''
    },
    {
        title: 'Health Insurance',
        description: 'Get best insurance plans for you and your family with maximum coverage and a comprehensive medical cover.',
        sideImage: 'rs-icon-sm.png',
        mobileImage: ''
    },
    {
        title: 'Car Insurance',
        description: `Get your car covered from any mishaps or theft and ensure peace of mind.`,
        sideImage: 'wc-icon-sm.png',
        mobileImage: ''
    }
]

const pushToDataLayer = () => {
    window.dataLayer.push({
        'event': 'Protect_yourself_and_the_ones_you_love',
        'eventCategory': 'Protect_yourself_and_the_ones_you_love',
        'eventAction': 'Get_Started_Click',
    });
}


export default class Two extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            isChanged: false
        }
        this.timeout = null;
    }


    componentDidMount() {
        this.startAuto();
        this.timeout = setTimeout(() => {
            this.setState({ isChanged: true })
        })
    }

    componentWillUnmount(){
        clearInterval(this.interval);
        clearTimeout(this.timeout);
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

    renderCards = () => {
        const { active } = this.state;
        return data.map((item, index) => {
            const image = (active === index) ? 'ins' : 'ins2';
            return (<div key={`indexrco${index}`} className={`lg-card ${(active === index) && 'hover-bg'}`}
                onMouseEnter={() => {
                    this.setActive(index)
                    clearInterval(this.interval);
                }}
                onMouseLeave={this.startAuto}
            >
                <div className="row grab">
                    <div className="col-md-2">
                        <div className="img-card"><img src={require(`../../../../../assets/images/icon/${image}${index + 1}.svg`)} className="goal-icons" alt="images" /></div>
                    </div>
                    <div className="col-md-10">
                        <div className={`${(active === index) && 'head-div'}`}>{item.title}<br />
                            <span className={`${(active !== index) && 'd-none text-left'}`}>{item.description}</span> </div>
                    </div>
                </div>
            </div>)
        })
    }

    setActive = (active) => {
        this.setState({ active, isChanged: false }, () => {
            this.timeout = setTimeout(() => {
                this.setState({ isChanged: true })
            })
        })
    }

    renderMobileCards = () => {
        return data.map((item, index) => {
            return (
                <React.Fragment key={`indexrmc00sol${index}`}>
                    <div > <img className="m-image" src={require(`../../../../../assets/images/00${index + 1}.png`)} alt="images" /></div>
                    <div key={`indexrmct${index}`} className="lg-card hover-bg">
                        <div className="img-card"><img src={require(`../../../../../assets/images/icon/ins${index + 1}.svg`)} className="goal-icons" alt="icon1" /></div>
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
                    <h5>Protect Yourself and the Ones You Love</h5>
                </div>
                <Slider {...settings} className="text-left">
                    {this.renderMobileCards()}
                </Slider>
                <div className="lg-card m-solution-btn text-center">
                    <a onClick={pushToDataLayer} target="__blank"
                        href="https://bajajcapitalinsurance.com/?utm_source=homepage_protect&utm_medium=button&utm_content=insurance"
                        className="btn btn-primary btn-get-started"> Get Started <i className="styled-link__icon  fa fa-angle-right"></i></a>
                </div>
            </React.Fragment>
        )
    }

    render() {
        const isMobile = (window.innerWidth <= 800);
        const { active, isChanged } = this.state;
        return (
            <section className="solution-life-goal pb50 pt90">
                <div className="container md-done  ver-none">

                    <div className="row mt80">
                        <div className={`col-6 text-left ${isMobile ? 'blogs-section12' : 'blogs-section2'}`}> <img className={` d-final ${isChanged && 'd-solution'}`} src={require(`../../../../../assets/images/00${active + 1}.png`)} alt="images" /></div>
                        <div className="col-6">
                            <React.Fragment>
                                <div className="row pb40">
                                    <div className="col-md-10 col-12">
                                        <h5>Protect Yourself and the Ones You Love</h5>
                                    </div>
                                </div>
                                {this.renderCards()}
                                <div className="lg-card float-left">
                                    <a onClick={pushToDataLayer} href="https://bajajcapitalinsurance.com/?utm_source=homepage_protect&utm_medium=button&utm_content=insurance"
                                        target="__blank"
                                        className="btn btn-primary btn-get-started "> Get Started <i className="styled-link__icon  fa fa-angle-right"></i> </a>
                                </div>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
                <div className="mobileShow  ver-show">
                    {this.renderMobile()}
                </div>

            </section>
        )
    }
}
