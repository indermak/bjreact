import React from 'react';
import { Card } from 'react-bootstrap';
import { the_capital_blog } from '../../../../assets/images';
import { Link } from 'react-router-dom';
import blogs from '../../../../constants/blogs';

export default class Blogs extends React.Component {

    createMarkup = (html) => {
        return { __html: html };
    }

    renderBlogs = () => {
        return blogs.map((blog, index) => {
            const { title, field_description, picture } = blog.attributes;
            if (!(title && field_description)) return null;
            if (index > 2) return null;
            return (
                <Card style={{ width: '23rem' }} key={`index${index}`}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {field_description}
                        </Card.Text>
                        <span className="float-left pt-1">Mutual Fund</span><Link to={`/blog-detail/${blog.id}`} className=" btn stretched-link btn-outline-primary float-right ">Read More</Link>
                    </Card.Body>
                </Card>
            )
        })
    }
    render() {
        // const { blogs } = this.state;

        return (
            <section className="homeblog pt80 pb80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 sec-heading text-center">
                            <img alt="bajaj" src={the_capital_blog} className="blogimg" />
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                {this.renderBlogs()}
                            </div>
                            <Link to="/blogs" className="viewall text-center justify-content-center">View all</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}