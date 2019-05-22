import React from 'react';
import SearchBanner from './components/searchBanner';
import BlogsList from './components/blogsList';
import SocialButton from '../../components/socialButtons/socialButtons';
// import requestHelper from '../../helpers/request';
import blogs from '../../constants/blogs';
export default class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs,
            search: '',
        }
    }

    onSearch = (event) => {
        const search = event.target.value;
        this.setState({ search }, () => {
            const val = search.trim();
            if (val) {
                const matchedBlogs = blogs.map(blog => {
                    const { title, body, field_description } = blog.attributes;
                    const isTitle = title.search(val);
                    const isBody = body.value.search(val);
                    const isDesc = field_description.search(val);
                    if ((isTitle === -1) && (isBody === -1) && (isDesc === -1)) {
                        return null;
                    }
                    return blog;
                }).filter(x=>x);
                this.setState({ blogs: matchedBlogs });
            } else {
                this.setState({ blogs });
            }
        })
    }

    render() {
        const { search, blogs } = this.state;
        return (
            <React.Fragment>
                <main role="main">
                    {/*Banner */}
                    <SearchBanner
                        search={search}
                        onSearch={this.onSearch}
                    />
                    {/* Bajaj Capital Blog List */}
                    <BlogsList
                        blogs={blogs}
                    />
                    <SocialButton />
                </main>

            </React.Fragment>
        )
    }
}
