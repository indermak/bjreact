(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{248:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return h});var a=r(48),n=r.n(a),s=r(49),c=r(39),u=r(40),i=r(42),o=r(41),l=r(43),p=r(0),d=r.n(p),f=r(14),m=r(56),h=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(i.a)(this,Object(o.a)(t).call(this,e))).renderRewards=function(e){return e&&e.length&&e.map(function(e,t){return t>1?null:d.a.createElement("li",{key:"index".concat(t)},e)})},r.renderCards=function(){var e=r.state.trendingCards,t=[],a=0;return["Rewards","Travel","Lifestyle"].forEach(function(r){var n=!1;e[r].forEach(function(e){return n?null:a>2?null:void(t.find(function(t){return t.title===e.title})||(t.push(e),a+=1,n=!0))})}),t.length&&t.map(function(e){return d.a.createElement("div",{className:"card",key:e.title},d.a.createElement("img",{src:e.picture,className:"card-img-top",alt:"..."}),d.a.createElement("div",{className:"card-body"},d.a.createElement("h5",{className:"card-title"},e.title),d.a.createElement("div",{className:"annual-fee"},"Annual Fee ",d.a.createElement("span",null,"  \u20b9",e.annual_fee)),d.a.createElement("div",{className:"rewards"},d.a.createElement("h5",null,"Rewards")),d.a.createElement("ul",null,r.renderRewards(e.rewards)),d.a.createElement("a",{href:"/",className:"btn btn-primary block"},"Apply")))})},r.state={trendingCards:[],loading:!0},r}return Object(l.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,m.a.getCreditCardTrending();case 3:200===(t=e.sent).status?this.setState({trendingCards:t.data&&t.data.data,loading:!1}):(this.props.showTabs("isCredit",!1),this.setState({loading:!1}));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?d.a.createElement(f.a,null):d.a.createElement("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"},d.a.createElement("div",{className:"card-wrapper"},this.renderCards()),d.a.createElement("a",{href:"/",className:"viewall text-center justify-content-center"},"View all ",d.a.createElement("i",{className:"fas fa-arrow-right"})))}}]),t}(d.a.Component)},56:function(e,t,r){"use strict";var a=r(48),n=r.n(a),s=r(75),c=r(49),u=r(76),i=r.n(u),o={development:{drupalUrl:"http://192.168.93.60"},production:{drupalUrl:"http://192.168.93.60"}}.production.drupalUrl,l={getBlogs:function(){var e=Object(c.a)(n.a.mark(function e(t){var r,a,c;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.filters,a=void 0===r?{}:r,e.prev=1,a["fields[node--article]"]="status,title,body,created,comment,field_image,field_description,field_tags",e.next=5,i.a.get("".concat(o,"/drupal/jsonapi/node/article"),{params:Object(s.a)({},a)});case 5:return c=e.sent,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,error:!0});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),getBlog:function(){var e=Object(c.a)(n.a.mark(function e(t){var r,a,c,u;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.filters,a=void 0===r?{}:r,c=t.blogId,e.prev=1,a["fields[node--article]"]="status,title,body,created,comment,field_image,field_description,field_tags",e.next=5,i.a.get("".concat(o,"/drupal/jsonapi/node/article/").concat(c),{params:Object(s.a)({},a)});case 5:return u=e.sent,e.abrupt("return",u);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,error:!0});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),getBlogsDashboard:function(){var e=Object(c.a)(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(o,"/drupal/api/v1.0/mutualfund"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{message:e.t0.message,error:!0});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),getBranches:function(){var e=Object(c.a)(n.a.mark(function e(t){var r,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.type,e.prev=1,e.next=4,i()({method:"post",url:"https://portfolio.wealthmaker.in/wmapi/WealthMakerAPIKit.svc/GetBranch",data:{BusinessType:r},config:{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}});case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,error:!0});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),getCategoriesDashboard:function(){var e=Object(c.a)(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(o,"/drupal/api/v1.0/categories"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{message:e.t0.message,error:!0});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),getCreditCardTrending:function(){var e=Object(c.a)(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("https://pre-prod-cms.onebajaj.capital/services/api/category-node-list?_format=json");case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{message:e.t0.message,error:!0});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),getPersonalLoansTrending:function(){var e=Object(c.a)(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(" https://pre-prod-cms.onebajaj.capital/services/api/offer-node-list");case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{message:e.t0.message,error:!0});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),getTrending:function(){var e=Object(c.a)(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(o,"/drupal/api/v1.0/feature_products"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{message:e.t0.message,error:!0});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}()};t.a=l}}]);
//# sourceMappingURL=15.fed07c4a.chunk.js.map