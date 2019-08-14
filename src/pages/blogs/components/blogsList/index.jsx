import React from 'react';
import { Card } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
class Blogs extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         show: sessionStorage.getItem('showBlogs') || 6,
    //         id: null
    //     };
    //     this.bottomOffset = (window.innerWidth < 475) ? 550 : 300;
    //     this.timer = null;
    // }

    // componentDidMount() {
    //     this.timer = setTimeout(() => {
    //         window.addEventListener('scroll', this.handleScroll);
    //     }, 1000)
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll, false);
    //     clearTimeout(this.timer);
    // }

    // handleScroll = () => {
    //     const { body } = document;
    //     const docHeight = Math.max(body.scrollHeight, body.offsetHeight);
    //     if ((window.pageYOffset >= docHeight - window.innerHeight - this.bottomOffset)) {
    //         const { blogs } = this.props;
    //         const { show } = this.state;
    //         const blogsLength = blogs.length;
    //         if (blogsLength > show) {
    //             this.loadMore();
    //         } else {
    //             window.removeEventListener('scroll', this.handleScroll, false);
    //         }

    //     }
    // }

    createMarkup = (html) => {
        return { __html: html };
    }

    // cardHover = (id) => {
    //     this.setState({ id })
    // }

    pushToDataLayer = (id, category) => {
        window.dataLayer.push({
            'event': 'blog_min_read_click',
            'eventCategory': 'blog_min_read_click',
            'eventAction': id, // {{dynamic}} contains blog name i.e 7_rules_to_follow_when_taking_a_personal_loan
            'eventLabel': category, // {{dynamic}} contains the blog title i.e Personal_Loan, Mutual_fund
        });
    }

    renderBlogs = () => {
        // const { show } = this.state;
        const { blogs } = this.props;

        if (!(blogs && blogs.length)) {
            return (<h1 className="col-lg-12 text-center">No results found.</h1>)
        } else {
            return blogs.map((blog, index) => {
                if (!(blog.attributes && blog.attributes.status)) return null;
                // if (index >= show) return null;
                const { title, field_description, picture, imgLink } = blog.attributes;
                const image = {
                    src: imgLink ? require(`../../../../assets/images${imgLink}`) : picture
                }
                return (
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-sm-12 mb-5" key={`index${index}`}>
                        <Link onClick={() => {
                            this.pushToDataLayer(blog.id, blog.category);
                        }
                        } to={`/blog/${blog.id}`}>
                        <Card
                             className="pointer h-100"
                        >
                            <Card.Img variant="top" {...image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {field_description.substr(0, 75)}...
                                </Card.Text>
                            </Card.Body>
                            <div className="blogfooter">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-6 col-lg-6 less-opacity float-left">{blog.displayName}</div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-6 col-lg-6 text-right txt-red">
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
    }

    // loadMore = () => {
    //     this.setState({ show: this.state.show + 6 }, () => {
    //         sessionStorage.setItem('showBlogs', this.state.show);
    //         this.timer = setTimeout(() => {
    //             window.addEventListener('scroll', this.handleScroll);
    //         }, 1000)
    //     });
    // }

    render() {
        const { blogs, search } = this.props;
        const blogsLength = blogs.length;
        return (
            <section className="homeblog pb80">
                <div className="container">
                    {(search && (search.length > 2) && blogsLength) ? (<div className="text-center">
                        <h4>
                            {blogsLength} {(blogsLength === 1) ? 'result' : 'results'} found.
                        </h4>
                        <br />
                    </div>) : null}
                    <div className="row">
                        {this.renderBlogs()}
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(Blogs);