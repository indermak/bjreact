import React, { Suspense, lazy } from 'react';
import Products from './components/products/products';
import SubProducts from './components/subProducts/subProducts';
import Spinner from '../../components/spinner/spinner';
const Solutions = lazy(() => import('./components/solutions/solutions'));
const WhyNumber = lazy(() => import('./components/whyNumber/whyNumber'));
const Blogs = lazy(() => import('./components/blogs/blogs'));
const GetInTouch = lazy(() => import('./components/getInTouch/getInTouch'));
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.timer = false;
        sessionStorage.setItem('onebajaj', 'capital');
        setTimeout(() => {
            sessionStorage.removeItem('onebajaj');
        }, 500)
        this.elements = [
            <WhyNumber key="WhyNumber" />,
            <Solutions key="Solutions" />,
            <Blogs key="Blogs"  />,
            <GetInTouch key="GetInTouch" />
        ];
        this.state = {
            renderElements: [],
            rendered: 0,
            isScroll: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.scrollTo(0, 0);
        this.timer = setTimeout(() => {
            if (!this.state.isScroll) {
                this.setState({
                    renderElements: [...this.elements]
                });
            }
        }, 4000)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
        clearTimeout(this.timer);
    }

    handleScroll = () => {
        this.setState({
            renderElements: [...this.elements], isScroll: true
        });
        window.removeEventListener('scroll', this.handleScroll, false);
    }

    render() {
        const { renderElements } = this.state;
        return (
            <main role="main">
                <Products />
                <SubProducts />
                <Suspense fallback={<Spinner style={{ position: 'fixed' }} />}>
                    {renderElements}
                </Suspense>
            </main>
        )
    }
}