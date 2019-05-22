import React from 'react';
import { Link } from 'react-router-dom';
// import * as images from '../../assets/images';
// import requestHelper from '../../helpers/request';
import Spinner from '../../components/spinner/spinner';
import blogs from '../../constants/blogs';

export default class BlogDetail extends React.Component {
    constructor(props) {
        super(props);
        const blogId = props.match.params.id || null;
        if (!blogId) {
            // props.history.location.push('/not-found');
        }
        this.state = {
            blog: '',
            blogId,
            loading: false
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const blog = blogs.find(blog => blog.id === this.state.blogId);
        this.setState({ blog, loading: false })
    }

    changeBlog = (event, id) => {
        event.preventDefault();
        const blog = blogs.find(blog => blog.id === id);
        this.setState({ blog, blogId: id });
        window.scrollTo(0,0);
    }



    renderRelated = () => {
        let count = 0
        return blogs.map((blog) => {
            if (count > 2) return null;
            if (blog.id === this.state.blogId) return null;
            count = count + 1;
            const { title, picture } = blog.attributes;

            return (<div className=" col-12 col-md-4 col-lg-4 col-sm-4 mb-4" key={title}>
                <div className="card">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h4>{title}</h4>
                        <span className="float-left pt-1"> Health Insurance</span><button onClick={(e) => this.changeBlog(e, blog.id)} className=" btn stretched-link btn-outline-primary float-right ">Read More</button>
                    </div>
                </div>
            </div>);
        })
    }

    render() {
        const { blog, loading } = this.state;
        if (loading || !blog) {
            return (
                <React.Fragment >
                    <Spinner />
                </React.Fragment>)
        }
        return (
            <main role="main">
                {/*Banner */}
                <section className="aboutbanner blog-header blog-detail">
                    <div className="blog-banner">
                        <img src={blog.attributes.picture} className="img-fluid" alt="..." />
                        <div className="container">
                            <div className="row align-items-center pt40 pb40">
                                <div className="col-12 col-lg-8 offset-lg-2 sec-heading text-center align-self-center">
                                    <h1>{blog.attributes.title}</h1>
                                    <p>{blog.attributes.field_description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-right ">
                                <nav aria-label="breadcrumb" className="blog-breadcumb ">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="/blogs">Blogs</Link></li>
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
                                        {/* <img src={images.blog_list} alt="blog-list" className="img-fluid shadow-sm" /> */}
                                        <h1>{blog.attributes.title}</h1>
                                        <div dangerouslySetInnerHTML={{ __html: blog.attributes.body.value }} />
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-lg-3 blog-side ">
                                <div className="card-body ">
                                    <h4 className="card-title">Tags</h4>
                                    <a className="btn btn-light btn-sm mb-1" href="page-category.html">Mutual Fun</a>
                                    <a className="btn btn-light btn-sm mb-1" href="page-category.html">Term Insurance</a>
                                    <a className="btn btn-light btn-sm mb-1" href="page-category.html">Car Insurance</a>
                                    <a className="btn btn-light btn-sm mb-1" href="page-category.html">Money</a>
                                    <a className="btn btn-light btn-sm mb-1" href="page-category.html">Saving</a>
                                </div>
                                <div className="card  shadow-sm getstarted">
                                    <div className="card-body ">
                                        <p> Lipsum Text Is Dummy Text</p>
                                        <a href="https://onebajaj.capital/onboarding1" className="btn btn-primary btn-block">Get Started Now
    </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* Bajaj Capital Blog Details End */}
                {/* Bajaj Capital Blog Related  */}
                <section className="homeblog pb60 pt60 relatedblog">
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