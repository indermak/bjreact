import React from 'react';
import { Card, Button } from 'react-bootstrap';
// import Spinner from '../../../../components/spinner/spinner';
import { Link } from 'react-router-dom';
// import requestHelper from '../../../../helpers/request';
export default class Blogs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 6
        }
    }

    createMarkup = (html) => {
        return { __html: html };
    }

    renderBlogs = () => {
        const { show } = this.state;
        const { blogs } = this.props;

        if (!(blogs && blogs.length)) {
            return (<div><h1>No Blogs Found</h1></div>)
        } else {
            return blogs.map((blog, index) => {
                if (!(blog.attributes && blog.attributes.status)) return null;
                if (index >= show) return null;

                const { title, field_description, picture } = blog.attributes;
                return (
                    <div className=" col-12 col-md-4 col-lg-4 col-sm-4 mb-4" key={`index${index}`}>
                        <Card style={{ width: '23rem' }} >
                            <Card.Img variant="top" src={picture} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {field_description}
                                </Card.Text>
                                <span className="float-left pt-1">Mutual Fund</span><Link to={`/blog-detail/${blog.id}`} className=" btn stretched-link btn-outline-primary float-right ">Read More</Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        }
    }

    loadMore = () => {
        this.setState({ show: this.state.show + 6 });
    }

    render() {
        const { blogs } = this.props;
        const { show } = this.state;
        return (
            <section className="homeblog pb80">
                <div className="container">
                    <div className="row">
                        {this.renderBlogs()}
                        <div className="col-lg-12">
                            {(blogs.length > show) && <Button onClick={this.loadMore} className="viewall text-center justify-content-center">
                                Load More <i className="fas fa-arrow-down" />
                            </Button>}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}