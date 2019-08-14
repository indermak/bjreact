import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.interval = null;
        this.word = '';
        this.show = true;
        this.state = {
            word: '',
            counter: 0,
            n: 5,
            wordStart: true,
            index: 0,
            imageIndex: 0,
            isZoom: false,
            images: [
                'banner-01.jpg',
            ]
        };
        this.wordStart = true;
        this.words = [
            'life',
            'goal',
            'plan',
            'leap',
        ];
    }

    startWordChange = () => {
        // if (this.interval) return; //if the timer is already running, do nothing.
        this.interval = setInterval(() => {
            this.changeWord();
        }, 50);
    }

    changeWord = () => {
        const { index } = this.state;
        this.word = this.words[index];
        if (this.word.length === this.state.counter) {
            this.show = false;
            clearInterval(this.interval);
            setTimeout(() => {
                this.show = true;
                this.startWordChange();
                this.setState({ wordStart: false, counter: this.state.counter - 1 });
            }, 1500)
        }

        if ((this.word.length > this.state.counter) && this.state.wordStart) {
            let counter = this.state.counter + 1;
            this.setState({
                counter,
                word: this.word.substring(0, counter)
            });
        } else {
            if (this.show) {
                let counter = this.state.counter - 1;
                this.setState({
                    counter,
                    word: this.word.substring(0, counter)
                });
                if (this.state.counter === 0) {
                    if (index === (this.words.length - 1)) {
                        this.setState({ wordStart: true, index: 0 });
                    } else {
                        this.setState({ wordStart: true, index: index + 1 });
                    }
                }
            }
        }

    }

    componentWillUnmount() {
        clearInterval(this.interval); //remove the interval if the component is unmounted.
    }

    componentDidMount() {
        this.startWordChange();
        setTimeout(() => {
            this.setState({ isZoom: true })
        }, 1500);
        setTimeout(() => {
            const newImages = [
                'banner-03.jpg',
                'banner-07.jpg',
                'banner-04.jpg',
            ]
            const images = [...this.state.images, ...newImages];
            this.setState({ images })
        }, 4000)
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            imageIndex: selectedIndex,
            direction: e.direction,
            isZoom: false
        }, () => {
            setTimeout(() => {
                this.setState({ isZoom: true })
            }, 1500)
        });
    }

    scrollLittle = () => {
        window.dataLayer.push({
            'event': 'Scroll_Down_to_explore',
            'eventCategory': 'Scroll_Down_to_explore_click',
            'eventAction': window.location.href, // {{dynamic}} contains current page url i.e www.stage.onebajaj.capital
            'eventLabel': window.location.href, // {{dynamic}} contains the url of page to which user is redirected i.e www.onebajaj.capital
        });
        if(window.innerWidth > 800){
            window.scrollTo(0, 700);
        } else {
            window.scrollTo(0, 575);            
        }
    }

    renderImages = () => {
        const { isZoom, word } = this.state;
        const isMobile = (window.innerWidth < 800);
        const isMac = window.navigator.platform === 'MacIntel';
        return this.state.images.map((image, index) => {
            return (<Carousel.Item key={`index${index}`}
                className={`img-hover-zoom img-hover-zoom--slowmo ${isZoom && 'img-hover-zoom--slowmo-hover'}`}
                alt={`image ${index}`}>
                <img src={require(`../../../../assets/images/${image}`)} className=" img-fluid dashboard-image" alt="..." />
                <Carousel.Caption>
                    <div className="row">
                        <div className={`col-md-6 col-sm-6 col-xs-6 col-6 col-lg-6 one-image-section ${!isMobile && !isMac && 'desktop-padding'}`}>
                            <img src={require(`../../../../assets/images/${isMobile ? 'one' : 'one-ws'}.png`)} 
                            className={`img-fluid float-right one--image `} alt="..." />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-6 col-lg-6 word-section">
                            <span className="one-word">{word}</span>
                            <span className="one-underscore">_</span>
                        </div>
                    </div>
                    <h5 className="one-padding">Join lakhs of people who are shaping their financial freedom with Bajaj Capital.</h5>
                    <Button variant="light" onClick={this.scrollLittle} className="btn btn-primary btn-get-started text-center"> Get Started <i className="styled-link__icon  fa fa-angle-down"></i></Button>
                </Carousel.Caption>
            </Carousel.Item>)
        })
    }

    render() {
        const { direction, imageIndex } = this.state;
        return (
            <div>
                <div className="jumbotron jumbotron-fluid homebanner">
                    <Carousel
                        activeIndex={imageIndex}
                        direction={direction}
                        onSelect={this.handleSelect}
                        controls={false}
                        indicators={false}
                        fade={true}
                        interval={5000}
                        pauseOnHover={false}
                    >
                        {this.renderImages()}
                    </Carousel>
                </div>
                {/* <div className="down-arrow">
                    <div className="text-capitalize text-center white less-opacity">Scroll down to explore</div>
                    <div className="arrow bounce">
                        <Button variant="link" onClick={this.scrollLittle}><img src={require('../../../../assets/images/icon/chevron-down.png')} alt="down" /></Button>
                    </div>
                </div> */}
            </div>
        )
    }
}