import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import blogs from '../../constants/blogs';
import { Button } from 'react-bootstrap';
import SocialButtons from '../../components/socialButtons/socialButtons';
import { Helmet } from "react-helmet";
export default class BlogDetail extends React.Component {
    constructor(props) {
        super(props);
        const blogId = props.match.params.id || null;
        if (!blogId) {
            props.history.push('/404');
        }
        this.state = {
            blog: '',
            blogId,
            loading: false,
            id: null
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const blog = blogs.find(blog => blog.id === this.state.blogId);
        if (!blog) {
            this.props.history.push('/404');
        }
        this.setState({ blog, loading: false })
    }

    changeBlog = (event, id) => {
        event.preventDefault();
        window.dataLayer.push({
            'event': 'Blog_related_read_click',
            'eventCategory': 'Blog_related_read_click',
            'eventAction': 'Min_Read_click',
            'eventLabel': id, // {{dynamic}} contains the blog title i.e 7_rules_to_follow_when_taking_a_personal_loan
        });
        this.props.history.push(`/blog/${id}`)
        const blog = blogs.find(blog => blog.id === id);
        this.setState({ blog, blogId: id });
        window.scrollTo(0, 0);
    }

    cardHover = (id) => {
        this.setState({ id })
    }

    renderRelated = () => {
        let count = 0;
        const renderedBlog = this.state.blog;
        return blogs.map((blog, index) => {
            if (count > 2) return null;
            if (blog.id === this.state.blogId) return null;
            if (renderedBlog.category === blog.category) {
                count = count + 1;
                const { title } = blog.attributes;

                return (<div className="related-reading col-12 col-md-6 col-lg-6 col-xl-4 col-sm-12 mb-4" key={title}>
                    <div className="card pointer h-100" onClick={(e) => this.changeBlog(e, blog.id)}
                        onMouseEnter={() => this.cardHover(index)} onMouseLeave={() => { this.setState({ id: null }) }}>
                        <img src={require(`../../assets/images${blog.attributes.imgLink}`)} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <h4>{title}</h4>
                        </div>
                        <div className="blogfooter">
                            <div className="row">
                                <div className="col-6 less-opacity float-left">{blog.displayName}</div>
                                <div className="col-6 text-right txt-red">
                                    {blog.readingTime} min read
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>);
            }
            return null;
        })
    }

    pushToDatalayer = (blogId, url) => {
        window.dataLayer.push({
            'event': 'blog_get_started_click',
            'eventCategory': 'blog_get_started_click',
            'eventAction': blogId, // {{dynamic}} contains blog name i.e 7_rules_to_follow_when_taking_a_personal_loan
            'eventLabel': url, // {{dynamic}} contains the target url i.e  https://www.onebajaj.capital/loans/personal-loan/
        });
    }

    breadCrumbsDataLayer = (url, type) => {
        window.dataLayer.push({
            'event': 'blog_breadcrumbs_click',
            "eventCategory": "blog_breadcrumbs_click", // {{dynamic}} contains breadcrumb name i.e Personal Loan",
            'eventAction': type,
            'eventLabel': `${window.location.host}${url}`, // {{dynamic}} contains the blog url 
        });
    }


    tagsDataLayer = (category, url) => {
        window.dataLayer.push({
            'event': 'blog_tags_click',
            "eventCategory": "blog_tags_click", // {{dynamic}} contains tag name i.e Personal Loan"
            'eventAction': category,
            'eventLabel': `${window.location.host}/blogs`, // {{dynamic}} contains the blog url
        });
    }

    render() {
        const { blog, loading } = this.state;
        if (loading || !blog) {
            return (
                <React.Fragment >
                    <Spinner />
                </React.Fragment>)
        }

        let text = '';
        let link = '';
        let newTab = false;
        if (blog.category === 'Mutual-Fund') {
            link = 'https://www.onebajaj.capital/mutual-fund/?utm_source=blog&utm_medium=button&utm_content=getstarted';
            text = 'Invest in mutual funds today and build an intelligent diversified portfolio that helps you fulfil your dreams.';
        } else if (blog.category === 'Insurance') {
            link = 'https://bajajcapitalinsurance.com/?utm_source=blog&utm_medium=button&utm_content=getstarted';
            newTab = true;
            text = 'Getting yourself and your family insured is the first step towards building your future. Choose your policy today.'
        } else if (blog.category === 'Personal-Loan') {
            link = 'https://www.onebajaj.capital/loans/personal-loan/?utm_source=blog&utm_medium=button&utm_content=getstarted';
            text = 'Avail personal loan online at the most attractive interest rate from top banks in India through Bajaj Capital.'
        } else if (blog.category === 'Credit-Card') {
            link = 'https://www.onebajaj.capital/credit-card/?utm_source=blog&utm_medium=button&utm_content=getstarted';
            text = 'From exciting cashback offers to travel benefits, compare and apply for the credit card that is right for you.'
        }
        return (
            <main role="main">
                <Helmet>
                    <title>Bajaj Capital | {blog.attributes.title}</title>
                    <meta name="description" content={blog.attributes.field_description} />
                </Helmet>
                <SocialButtons text={blog.attributes.title} />
                {/*Banner */}
                <section className="aboutbanner blog-header blog-detail">
                    <div className="blog-banner">
                        <div className="container pt80 pb40">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-4">
                                    <div className="mobileShow ver-show">
                                        <div className="row">
                                            <div className="col-12 text-right ">
                                                <nav aria-label="breadcrumb" className="blog-breadcumb ">
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><Link onClick={() => this.breadCrumbsDataLayer('/', 'Home')} 
                                                            to="/">Home</Link></li>
                                                        <li className="breadcrumb-item"><Link onClick={() => this.breadCrumbsDataLayer('/blogs', 'Blogs')} 
                                                            to="/blogs">Blogs</Link></li>
                                                        <li className="breadcrumb-item"><Link onClick={() => this.breadCrumbsDataLayer(`/blogs?category=${blog.category}`, blog.category)} 
                                                             to={`/blogs?category=${blog.category}`}
                                                        >{blog.displayName}</Link></li>
                                                    </ol>
                                                </nav>
                                            </div>
                                            <div className="col-12 col-lg-9 border-left">
                                            </div>
                                        </div>
                                    </div>
                                    <img src={require(`../../assets/images${blog.attributes.detailImgLink}`)} className="img-fluid" alt="blog" /> </div>
                                <div className="col-12 col-md-8 sec-heading">
                                    <span> {blog.readingTime} min reading</span>
                                    <h1> {blog.attributes.title}</h1>
                                    <p>{blog.attributes.field_description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container md-done ver-none">
                        <div className="row">
                            <div className="col-12 text-right ">
                                <nav aria-label="breadcrumb" className="blog-breadcumb ">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link onClick={() => this.breadCrumbsDataLayer('/', 'Home')}
                                            to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><Link onClick={() => this.breadCrumbsDataLayer('/blogs', 'Blogs')}
                                            to="/blogs">Blogs</Link></li>
                                        <li className="breadcrumb-item"><Link onClick={() => this.breadCrumbsDataLayer(`/blogs?category=${blog.category}`, blog.category)}
                                            to={`/blogs?category=${blog.category}`}
                                        >{blog.displayName}</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{blog.attributes.title}</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-12 col-lg-9 border-left">
                            </div>
                        </div>
                    </div>
                </section>
                {/* Bajaj Capital Blog Details */}
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-9 order-0 order-lg-1 border-left">
                                <article className="blog text-justify ">
                                    <div className=" sec-heading">
                                        {blog.attributes.body}
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-lg-3 blog-side ">
                                <div className="card-body ">
                                    <h4 className="card-title">Tags</h4>
                                    <Button variant="link" onClick={() => {
                                        this.tagsDataLayer('Mutual-Fund');
                                        this.props.history.push({
                                            pathname: '/blogs',
                                            category: 'Mutual-Fund'
                                        })
                                    }
                                    }
                                        className="btn btn-light btn-sm mb-1" >Mutual Fund</Button>
                                    &nbsp;&nbsp;
                                    <Button variant="link" onClick={() => {
                                        this.tagsDataLayer('Insurance');
                                        this.props.history.push({
                                        pathname: '/blogs',
                                        category: 'Insurance'
                                    })}
                                }
                                        className="btn btn-light btn-sm mb-1" >Insurance</Button>
                                    &nbsp;&nbsp;
                                    <Button variant="link" onClick={() => {
                                        this.tagsDataLayer('Personal-Loan');
                                        this.props.history.push({
                                        pathname: '/blogs',
                                        category: 'Personal-Loan'
                                    })}
                                }
                                        className="btn btn-light btn-sm mb-1" >Personal Loan</Button>
                                    &nbsp;&nbsp;
                                    <Button variant="link" onClick={() => {
                                        this.tagsDataLayer('Credit-Card');
                                        this.props.history.push({
                                        pathname: '/blogs',
                                        category: 'Credit-Card'
                                    })}
                                }
                                        className="btn btn-light btn-sm mb-1" >Credit Card</Button>
                                </div>
                                <div className="card  shadow-sm getstarted">
                                    <div className="card-body ">
                                        <p> {text}</p>
                                        <a onClick={() => {
                                            this.pushToDatalayer(blog.id, link)
                                        }} href={link} target={newTab ? 'blank' : undefined} className="btn btn-primary btn-block">Get Started Now
    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Bajaj Capital Blog Details End */}
                {/* Bajaj Capital Blog Related  */}
                <section className="homeblog pt40 pb40 relatedblog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 sec-heading">
                                <h2> Related Reading</h2>
                            </div>
                            {this.renderRelated()}
                        </div>
                    </div>
                </section>
                {/* Bajaj Capital Blog Related End */}
            </main>
        )
    }
}