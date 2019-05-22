import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from '../pages/dashboard/dashboard';
import About from '../pages/about/about';
import AboutLeadership from '../pages/aboutLeadership/aboutLeadership';
import Blogs from '../pages/blogs/blogs';
import BlogDetail from '../pages/blogDetail/blogDetail';
import BranchLocator from '../pages/branchLocator/branchLocator';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ScrollToTop from './component/scrollToTop';

const AppRouter = () => {
    return (
        <React.Fragment>
            <Router>
                <ScrollToTop>
                    <Header>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/about-leadership" component={AboutLeadership} />
                            <Route exact path="/blogs" component={Blogs} />
                            <Route exact path="/blog-detail/:id" component={BlogDetail} />
                            <Route exact path="/branch-locator" component={BranchLocator} />
                            <Route exact path="*" >
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                    </Header>
                    <Footer />
                </ScrollToTop>
            </Router>
        </React.Fragment>

    )
}

export default AppRouter;