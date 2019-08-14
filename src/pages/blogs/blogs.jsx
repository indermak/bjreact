import React from 'react';
import SearchBanner from './components/searchBanner';
import BlogsList from './components/blogsList';
import blogs from '../../constants/blogs';
import { Helmet } from "react-helmet";
export default class Blogs extends React.Component {
    constructor(props) {
        super(props);
        let category = '';
        if(props.location.search){
            const url_string = window.location.href;
            const url = new URL(url_string);
            category = url.searchParams.get("category");
        }
        this.state = {
            blogs,
            search: '',
            category: props.history.location.category || category || ''
        }
    }

    onSearch = (event) => {
        const search = event.target.value;
        this.setState({ search }, () => {
            this.searchBlogs();
        })
    }

    componentDidMount(){
        if (this.state.category) {
            this.searchBlogs();
        }
    }

    searchBlogs = () => {
        const { search } = this.state;
        let val = search.trim();
        let { category } = this.state;
        category = (category === 'All') ? '' : category;
        if (category || (val && val.length > 2)) {
            val = val.toLowerCase();
            const matchedBlogs = blogs.map(blog => {
                let isTitle = -1;
                let isBody = -1;
                let isDesc = -1;
                if (val && val.length > 2) {
                    const { title, body, field_description } = blog.attributes;
                    isTitle = title.toLowerCase().search(val);
                    isBody = JSON.stringify(body).search(val);
                    isDesc = field_description.search(val);
                }
                if (category) {
                    if ((val && val.length > 2)) {
                        if ((category === blog.category) && ((isTitle !== -1) || (isBody !== -1) || (isDesc !== -1))) {
                            return blog;
                        }
                    } else if (category === blog.category) {
                        return blog;
                    }
                    return null;
                }

                if ((isTitle === -1) && (isBody === -1) && (isDesc === -1)) {
                    return null;
                }
                return blog;
            }).filter(x => x);
            this.setState({ blogs: matchedBlogs });
        } else {
            this.setState({ blogs });
        }
    }

    onCategorySelect = (category) => {
        this.props.history.push(`/blogs?category=${category}`);
        window.dataLayer.push({
            'event': 'Blog_category_click',
            'eventCategory': category,
            'eventAction': 'Blog_category_click'
        });
        this.setState({ category }, () => {
            this.searchBlogs();
        })
    }

    render() {
        const { search, blogs, category } = this.state;
        return (
            <React.Fragment>
                <main role="main">
                    <Helmet>
                <title>Bajaj Capital | One stop solution for all your finance needs.</title>
                <meta name="description" content="This is blogs page" />
            </Helmet>
                    {/*Banner */}
                    <SearchBanner
                        search={search}
                        onSearch={this.onSearch}
                        onCategorySelect={this.onCategorySelect}
                        category={category}
                    />
                    {/* Bajaj Capital Blog List */}
                    <BlogsList
                        search={search}
                        blogs={blogs}
                    />
                </main>

            </React.Fragment>
        )
    }
}
