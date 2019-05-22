import React from 'react';
import SubProducts from './components/subProducts/subProducts';
import TrendingProducts from './components/trendingProducts/trendingProducts';
import WhyBajaj from './components/whyBajaj/whyBajaj';
import WhyNumber from './components/whyNumber/whyNumber';
import ClientSayings from './components/clientSayings/clientSayings';
import Partners from './components/partners/partners';
import Blogs from './components/blogs/blogs';
import Awards from './components/awards/awards';
import GetInTouch from './components/getInTouch/getInTouch';
import Products from './components/products/products';
export default class Bajaj extends React.Component {
    showItems = (window.innerWidth <= 480) ? 1 : 3;

    render() {
        return (
            <div>
                <main role="main">
                    <Products
                        showItems={this.showItems}
                    />
                    <SubProducts
                        showItems={this.showItems}
                    />
                    <TrendingProducts />
                    <WhyBajaj />
                    <WhyNumber />
                    <ClientSayings />
                    <Partners />
                    <Blogs />
                    <Awards />
                    <GetInTouch />
                </main></div>

        )
    }
}