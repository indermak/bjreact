import React from 'react';
import { Card } from 'react-bootstrap';
import Slider from "react-slick";
import { withRouter } from 'react-router-dom';
import { the_capital_blog } from '../../../../assets/images';
import { Link } from 'react-router-dom';
import blogs from '../../../../constants/blogs';
class Blogs extends React.Component {
    constructor(props) {
        super(props);
        if (sessionStorage.getItem('onebajaj')) {
            window.scrollTo(0, 0);
        }
        this.state = {
            id: null
        }
    }


    createMarkup = (html) => {
        return { __html: html };
    }

    cardHover = (id) => {
        this.setState({ id })
    }

    renderBlogs = () => {
        return blogs.map((blog, index) => {
            const { title, field_description, imgLink } = blog.attributes;
            if (!(title && field_description)) return null;
            if (index > 2) return null;
            return (
                <div key={`index${index}`}>
                    <Link onClick={() => {
                        this.pushToDatalayer(blog.id)
                    }
                    } to={`/blog/${blog.id}`}>
                    <Card className="pointer" onMouseEnter={() => this.cardHover(index)} onMouseLeave={() => { this.setState({ id: null }) }} >
                        <Card.Img className="card-img-top" variant="top" src={require(`../../../../assets/images${imgLink}`)} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {field_description.substr(0, 75)}...
                            </Card.Text>
                        </Card.Body>
                        <div className="blogfooter">
                            <div className="row">
                                <div className="col-6 less-opacity float-left">{blog.displayName}</div>
                                <div className="col-6 text-right txt-red">
                                    {blog.readingTime} min read
                                    </div>
                            </div>
                        </div>
                    </Card>
                    </Link>
                </div>
            )
        })
    }

    pushToDatalayer = (id) => {
        window.dataLayer.push({
            'event': 'Capital_Blog',
            'eventCategory': 'Capital_Blog_section',
            'eventAction': 'Min_Read_click',
            'eventLabel': id, // {{dynamic}} contains the blog title i.e 7_rules_to_follow_when_taking_a_personal_loan
        });
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 2500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 8000,
            arrows: false,
            swipeToSlide: true,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1360,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (
            <section className="homeblog blogging pt50 pb50 blog-section">
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-12 text-center`}>
                            <img className="pb40 blogimg" alt="bajaj" src={the_capital_blog} />
                        </div>
                        <div className="col-lg-12">
                            <Slider {...settings}>
                                {this.renderBlogs()}
                            </Slider>
                            <div className="text-center mt-2">
                                <br />
                                <Link to="/blogs?utm_source=homepage_blogs&utm_medium=button&utm_content=viewall" className="text-center justify-content-center no-underline view-btn">View all <i className="styled-link__icon fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(Blogs);