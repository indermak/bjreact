(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{714:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return w});var n=a(360),s=a(20),l=a(21),r=a(24),c=a(22),i=a(23),o=a(0),u=a.n(o),d=a(705),m=a(701),b=a(114),h=Object(o.lazy)(function(){return a.e(9).then(a.bind(null,711))}),f=Object(o.lazy)(function(){return a.e(10).then(a.bind(null,712))}),v=Object(o.lazy)(function(){return a.e(11).then(a.bind(null,713))}),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).showTabs=function(e,t){a.setState(Object(n.a)({},e,t))},a.setTab=function(e){a.setState({key:e});var t="";"mutualFund"===e?t="Mutual_Funds":"creditCard"===e?t="Credit_Card":"personalLoans"===e&&(t="Personal_Loan"),window.dataLayer.push({event:"Trending_Offers_Section",eventCategory:"Trending_Offers_Section_click",eventAction:t,eventLabel:window.location.href})},a.state={isPersonal:!0,isCredit:!0,key:"mutualFund"},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isCredit,a=e.isPersonal,n=e.key;return u.a.createElement("section",{className:"trendingcard  pt40 pb40"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-12 sec-heading"},u.a.createElement("h2",null," Trending Offers"),u.a.createElement("span",{className:"d-none d-sm-block"}," We know just how important it is to you that we answer all your financial needs. That's why we look at what our users have been recommending to get you the best offers of the moment.")),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement(o.Suspense,{fallback:u.a.createElement(b.a,null)},u.a.createElement(d.a,{activeKey:n,onSelect:this.setTab,id:"pills-tab",className:"nav nav-pills mb-3 justify-content-center"},u.a.createElement(m.a,{eventKey:"mutualFund",title:"Mutual Funds",className:"nav-item"},u.a.createElement(f,null)),t&&u.a.createElement(m.a,{eventKey:"creditCard",title:"Credit Cards",className:"nav-item"},u.a.createElement(h,{showTabs:this.showTabs})),a&&u.a.createElement(m.a,{eventKey:"personalLoans",title:"Personal Loans",className:"nav-item"},u.a.createElement(v,{showTabs:this.showTabs}))))))))}}]),t}(u.a.Component)}}]);
//# sourceMappingURL=12.58a8afcc.chunk.js.map