(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{729:function(e,t,a){"use strict";a.r(t);var n=a(19),l=a(20),o=a(23),i=a(21),c=a(22),s=a(0),r=a.n(s),m=a(701),u=a(703),d=a.n(u),p=a(45),g=a(54),b=a(28),v=a(75),E=function(e){function t(e){var l;return Object(n.a)(this,t),(l=Object(o.a)(this,Object(i.a)(t).call(this,e))).createMarkup=function(e){return{__html:e}},l.cardHover=function(e){l.setState({id:e})},l.renderBlogs=function(){return v.a.map(function(e,t){var n=e.attributes,o=n.title,i=n.field_description,c=n.imgLink;return o&&i?t>2?null:r.a.createElement("div",{key:"index".concat(t)},r.a.createElement(b.b,{onClick:function(){l.pushToDatalayer(e.id)},to:"/blog/".concat(e.id)},r.a.createElement(m.a,{className:"pointer",onMouseEnter:function(){return l.cardHover(t)},onMouseLeave:function(){l.setState({id:null})}},r.a.createElement(m.a.Img,{className:"card-img-top",variant:"top",src:a(175)("./images".concat(c))}),r.a.createElement(m.a.Body,null,r.a.createElement(m.a.Title,null,o),r.a.createElement(m.a.Text,null,i.substr(0,75),"...")),r.a.createElement("div",{className:"blogfooter"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 less-opacity float-left"},e.displayName),r.a.createElement("div",{className:"col-6 text-right txt-red"},e.readingTime," min read")))))):null})},l.pushToDatalayer=function(e){window.dataLayer.push({event:"Capital_Blog",eventCategory:"Capital_Blog_section",eventAction:"Min_Read_click",eventLabel:e})},sessionStorage.getItem("onebajaj")&&window.scrollTo(0,0),l.state={id:null},l}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"homeblog blogging pt50 pb50 blog-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement("img",{className:"pb40 blogimg",alt:"bajaj",src:g.the_capital_blog})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(d.a,{dots:!0,infinite:!0,speed:2500,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:8e3,arrows:!1,swipeToSlide:!0,pauseOnHover:!0,responsive:[{breakpoint:1360,settings:{slidesToShow:3}},{breakpoint:1150,settings:{slidesToShow:2}},{breakpoint:800,settings:{slidesToShow:1}}]},this.renderBlogs()),r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("br",null),r.a.createElement(b.b,{to:"/blogs?utm_source=homepage_blogs&utm_medium=button&utm_content=viewall",className:"text-center justify-content-center no-underline view-btn"},"View all ",r.a.createElement("i",{className:"styled-link__icon fas fa-arrow-right"})))))))}}]),t}(r.a.Component);t.default=Object(p.f)(E)}}]);
//# sourceMappingURL=6.c71240dc.chunk.js.map