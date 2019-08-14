import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from '../pages/dashboard/dashboard';
import Blogs from '../pages/blogs/blogs';
import BlogDetail from '../pages/blogDetail/blogDetail';
import BranchLocator from '../pages/branchLocator/branchLocator';
import Header from '../components/header/header';
import NoPageFound from '../components/404';
import Footer from '../components/footer/footer';
import ScrollToTop from './component/scrollToTop';
import Terms from '../pages/terms/terms';
import { Helmet } from "react-helmet";

const HeaderRoute = (props) => {
    const { component, path } = props;
    const Component = component;
    return (
        <React.Fragment>
            <Header>
                <Route path={path} {...props} render={(prop) => (
                    <Component {...prop} />
                )} />
            </Header>
            <Footer />
        </React.Fragment>
    )
}

const AppRouter = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Bajaj Capital | One stop solution for all your finance needs.</title>
                <meta name="description" content="Bajaj Capital is your trusted finance partner. Looking for a personal loan, 
      the best mutual fund or a credit card? Head over for exciting insights and the best deals." />
            </Helmet>
            <Router>
                <ScrollToTop>
                    <Switch>
                        <HeaderRoute exact path="/" component={Dashboard} />
                        <HeaderRoute exact path="/terms/:type" component={Terms} />
                        <HeaderRoute exact path="/blogs" component={Blogs} />
                        <HeaderRoute exact path="/blog/:id" component={BlogDetail} />
                        <HeaderRoute exact path="/branch-locator" component={BranchLocator} />
                        <Route exact path="/404" component={NoPageFound} />
                        <Route exact path="*" >
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </ScrollToTop>
            </Router>
        </React.Fragment>

    )
}

export default AppRouter;