(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2911],{60138:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/properties/city/[slug]",function(){return t(5808)}])},5808:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSP:function(){return k},default:function(){return N}});var r=t(85893),n=t(67294);t(49824);var i=t(34774),s=t(41664),l=t.n(s),o=t(85715),c=t(58474),p=t(80864),u=t(11163),d=t(90086),g=t(38565),f=t(51183),v=t(77399),h=t(25789),b=t(9473);t(82618);var m=t(7134),y=t(87713),C=t(45241);let P=()=>{let[e,a]=(0,n.useState)(!1),[t,i]=(0,n.useState)(!1),[s,P]=(0,n.useState)([]),[x,k]=(0,n.useState)({propType:"",category:"",minPrice:"",maxPrice:"",postedSince:"",selectedLocation:null}),[N,L]=(0,n.useState)(),[j,_]=(0,n.useState)(0),[E,O]=(0,n.useState)(!0),R=(0,u.useRouter)(),w=R.query,S=(0,b.v9)(e=>e.User_signup);S&&S.data&&S.data.data.id;let A=(0,b.v9)(h.iT),T=(0,b.v9)(y.A3);(0,n.useEffect)(()=>{},[A]),(0,n.useEffect)(()=>{},[e]),(0,n.useEffect)(()=>{i(!0),(0,f.RO)({city:w.slug,offset:j.toString(),limit:"8",onSuccess:e=>{L(e.total);let a=e.data;i(!1),P(a),O(8===a.length)},onError:e=>{i(!1),console.log(e)}})},[j,S]);let D=e=>{let{name:a,value:t,type:r}=e.target;if("number"===r){let e=Math.max(0,parseInt(t));k({...x,[a]:e})}else k({...x,[a]:t})},B=e=>{k({...x,propType:"sell"===e?0:1})},I=e=>{k({...x,postedSince:e.target.value})},H=e=>{e.preventDefault();let a="";"yesterday"===x.postedSince?a="0":"lastWeek"===x.postedSince&&(a="1"),(0,f.RO)({category_id:x?null==x?void 0:x.category:"",city:w,offset:"0",limit:"8",property_type:x?null==x?void 0:x.propType:"",max_price:x?null==x?void 0:x.maxPrice:"",min_price:x?null==x?void 0:x.minPrice:"",posted_since:a,onSuccess:e=>{L(e.total);let a=e.data;P(a),i(!1),_(0),O(8===a.length)},onError:e=>{i(!1),console.log(e)}})},Z=()=>{k({propType:"",category:"",minPrice:"",maxPrice:"",postedSince:"",selectedLocation:null}),(0,f.RO)({city:w.slug,offset:"0",limit:"8",onSuccess:e=>{L(e.total);let a=e.data;i(!1),P(a),O(8===a.length)},onError:e=>{i(!1),console.log(e)}})},q=()=>{_(j+8)};return(0,r.jsxs)(C.Z,{children:[(0,r.jsx)(o.Z,{title:w.slug?"Properties Listed in ".concat(w.slug," "):"No Properties in ".concat(w.slug)}),(0,r.jsx)("div",{id:"all-prop-containt",children:(0,r.jsx)("div",{className:"all-properties container",children:(0,r.jsxs)("div",{className:"row ",id:"main-all-prop",children:[(0,r.jsx)("div",{className:"col-12 col-md-12 col-lg-3",children:(0,r.jsx)(p.Z,{filterData:x,getCategories:T,handleInputChange:D,handleTabClick:B,handlePostedSinceChange:I,cityName:w.slug,handleApplyfilter:H,handleClearFilter:Z})}),(0,r.jsx)("div",{className:"col-12 col-md-12 col-lg-9",children:(0,r.jsxs)("div",{className:"all-prop-rightside",children:[s&&s.length>0?(0,r.jsx)(d.Z,{total:N,setGrid:a}):null,s&&s.length>0?e?(0,r.jsx)("div",{id:"columnCards",children:(0,r.jsx)("div",{className:"row",id:"all-prop-col-cards",children:s.map((e,a)=>(0,r.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:(0,r.jsx)(l(),{href:"/properties-details/[slug]",as:"/properties-details/".concat(e.slug_id),passHref:!0,children:(0,r.jsx)(c.Z,{ele:e})})},a))})}):(0,r.jsx)("div",{className:"all-prop-cards",id:"rowCards",children:t?Array.from({length:8}).map((e,a)=>(0,r.jsx)("div",{className:"col-sm-12  loading_data",children:(0,r.jsx)(v.Z,{})})):s.map(e=>(0,r.jsx)(l(),{href:"/properties-details/[slug]",as:"/properties-details/".concat(e.slug_id),passHref:!0,children:(0,r.jsx)(g.Z,{ele:e})}))}):(0,r.jsx)("div",{className:"noDataFoundDiv",children:(0,r.jsx)(m.Z,{})}),s&&s.length>0&&E?(0,r.jsx)("div",{className:"col-12 loadMoreDiv",id:"loadMoreDiv",children:(0,r.jsx)("button",{className:"loadMore",onClick:q,children:translate("loadmore")})}):null]})})]})})})]})},x=e=>{let{seoData:a,currentURL:t,citySlug:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{title:(null==a?void 0:a.data)&&a.data.length>0&&a.data[0].meta_title,description:(null==a?void 0:a.data)&&a.data.length>0&&a.data[0].meta_description,keywords:(null==a?void 0:a.data)&&a.data.length>0&&a.data[0].meta_keywords,ogImage:(null==a?void 0:a.data)&&a.data.length>0&&a.data[0].meta_image,pathName:t}),(0,r.jsx)(P,{})]})};var k=!0,N=x},82618:function(e,a,t){"use strict";var r=t(85893);t(67294);var n=t(11358),i=t.n(n);let s=e=>{let{pageCount:a,onPageChange:t}=e;return(0,r.jsx)("div",{children:(0,r.jsx)(i(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:a,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:t,containerClassName:"pagination",previousLinkClassName:"pagination__link",nextLinkClassName:"pagination__link",disabledClassName:"pagination__link--disabled",activeClassName:"pagination__link--active"})})};a.Z=s},11358:function(e,a,t){var r;e.exports=(r=t(67294),(()=>{var e={703:(e,a,t)=>{"use strict";var r=t(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,s){if(s!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},697:(e,a,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:e=>{"use strict";e.exports=r}},a={};function t(r){var n=a[r];if(void 0!==n)return n.exports;var i=a[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";t.r(n),t.d(n,{default:()=>m});var e=t(98),a=t.n(e),r=t(697),i=t.n(r);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l=function(e){var t=e.pageClassName,r=e.pageLinkClassName,n=e.page,i=e.selected,l=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,v=e.ariaLabel||"Page "+n+(d?" "+d:""),h=null;return i&&(h="page",v=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+l:l,void 0!==r?void 0!==o&&(r=r+" "+o):r=o),a().createElement("li",{className:t},a().createElement("a",s({rel:f,role:u?void 0:"button",className:r,href:u,tabIndex:i?"-1":"0","aria-label":v,"aria-current":h,onKeyPress:p},c(p)),g(n)))};function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}l.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var c=function(e){var t=e.breakLabel,r=e.breakAriaLabel,n=e.breakClassName,i=e.breakLinkClassName,s=e.breakHandler,l=e.getEventListener;return a().createElement("li",{className:n||"break"},a().createElement("a",o({className:i,role:"button",tabIndex:"0","aria-label":r,onKeyPress:s},l(s)),t))};function p(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:a}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function g(e,a){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e})(e,a)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}c.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var b=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&g(e,a)}(i,e);var t,r,n=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=v(i);if(r){var t=v(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return function(e,a){if(a&&("object"===u(a)||"function"==typeof a))return a;if(void 0!==a)throw TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function i(e){var t,r;return function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,i),h(f(t=n.call(this,e)),"handlePreviousPage",function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})}),h(f(t),"handleNextPage",function(e){var a=t.state.selected,r=t.props.pageCount;t.handleClick(e,null,a<r-1?a+1:void 0,{isNext:!0})}),h(f(t),"handlePageSelected",function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)}),h(f(t),"handlePageChange",function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))}),h(f(t),"getEventListener",function(e){return h({},t.props.eventListener,e)}),h(f(t),"handleClick",function(e,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.isPrevious,s=n.isNext,l=n.isBreak,o=n.isActive;e.preventDefault?e.preventDefault():e.returnValue=!1;var c=t.state.selected,p=t.props.onClick,u=r;if(p){var d=p({index:a,selected:c,nextSelectedPage:r,event:e,isPrevious:void 0!==i&&i,isNext:void 0!==s&&s,isBreak:void 0!==l&&l,isActive:void 0!==o&&o});if(!1===d)return;Number.isInteger(d)&&(u=d)}void 0!==u&&t.handlePageChange(u)}),h(f(t),"handleBreakClick",function(e,a){var r=t.state.selected;t.handleClick(a,e,r<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})}),h(f(t),"callCallback",function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})}),h(f(t),"callActiveCallback",function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})}),h(f(t),"getElementPageRel",function(e){var a=t.state.selected,r=t.props,n=r.nextPageRel,i=r.prevPageRel,s=r.selectedPageRel;return a-1===e?i:a===e?s:a+1===e?n:void 0}),h(f(t),"pagination",function(){var e=[],r=t.props,n=r.pageRangeDisplayed,i=r.pageCount,s=r.marginPagesDisplayed,l=r.breakLabel,o=r.breakClassName,p=r.breakLinkClassName,u=r.breakAriaLabels,d=t.state.selected;if(i<=n)for(var g=0;g<i;g++)e.push(t.getPageElement(g));else{var f=n/2,v=n-f;d>i-n/2?f=n-(v=i-d):d<n/2&&(v=n-(f=d));var h,b,m=function(e){return t.getPageElement(e)},y=[];for(h=0;h<i;h++){var C=h+1;if(C<=s)y.push({type:"page",index:h,display:m(h)});else if(C>i-s)y.push({type:"page",index:h,display:m(h)});else if(h>=d-f&&h<=d+(0===d&&n>1?v-1:v))y.push({type:"page",index:h,display:m(h)});else if(l&&y.length>0&&y[y.length-1].display!==b&&(n>0||s>0)){var P=h<d?u.backward:u.forward;b=a().createElement(c,{key:h,breakAriaLabel:P,breakLabel:l,breakClassName:o,breakLinkClassName:p,breakHandler:t.handleBreakClick.bind(null,h),getEventListener:t.getEventListener}),y.push({type:"break",index:h,display:b})}}y.forEach(function(a,t){var r=a;"break"===a.type&&y[t-1]&&"page"===y[t-1].type&&y[t+1]&&"page"===y[t+1].type&&y[t+1].index-y[t-1].index<=2&&(r={type:"page",index:a.index,display:m(a.index)}),e.push(r.display)})}return e}),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:r},t}return t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,i=e.forcePage;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==a&&a>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(n-1,").")),void 0!==i&&i>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount,n=a.hrefAllControls;if(t)return n||e>=0&&e<r?t(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var t=this.state.selected,r=this.props,n=r.pageClassName,i=r.pageLinkClassName,s=r.activeClassName,o=r.activeLinkClassName,c=r.extraAriaContext,p=r.pageLabelBuilder;return a().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,r=t.disabledClassName,n=t.disabledLinkClassName,i=t.pageCount,s=t.className,l=t.containerClassName,o=t.previousLabel,c=t.previousClassName,u=t.previousLinkClassName,g=t.previousAriaLabel,f=t.prevRel,v=t.nextLabel,h=t.nextClassName,b=t.nextLinkClassName,m=t.nextAriaLabel,y=t.nextRel,C=this.state.selected,P=0===C,x=C===i-1,k="".concat(p(c)).concat(P?" ".concat(p(r)):""),N="".concat(p(h)).concat(x?" ".concat(p(r)):""),L="".concat(p(u)).concat(P?" ".concat(p(n)):""),j="".concat(p(b)).concat(x?" ".concat(p(n)):"");return a().createElement("ul",{className:s||l,role:"navigation","aria-label":"Pagination"},a().createElement("li",{className:k},a().createElement("a",d({className:L,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":P?"true":"false","aria-label":g,rel:f},this.getEventListener(this.handlePreviousPage)),o)),this.pagination(),a().createElement("li",{className:N},a().createElement("a",d({className:j,href:this.getElementHref(C+1),tabIndex:x?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x?"true":"false","aria-label":m,rel:y},this.getEventListener(this.handleNextPage)),v)))}}],function(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(i.prototype,t),Object.defineProperty(i,"prototype",{writable:!1}),i}(e.Component);h(b,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),h(b,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});let m=b})(),n})())}},function(e){e.O(0,[8166,5937,1778,4617,6132,994,4980,3874,3609,9401,5675,3510,6855,3228,5529,155,6958,3887,6077,7466,591,5241,150,9774,2888,179],function(){return e(e.s=60138)}),_N_E=e.O()}]);