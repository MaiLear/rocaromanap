(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[150],{38565:function(e,a,t){"use strict";var s=t(85893),l=t(51183),i=t(82267),r=t(24404),n=t(25675),o=t.n(n),c=t(67294),d=t(28837),u=t(86501),m=t(8193),p=t(9473),h=t(26990),x=t(65295),v=t(86455),f=t.n(v);let g=e=>{let{ele:a}=e,t=(0,p.v9)(i.vV),n=t&&t.currency_symbol,v=(0,r.$W)(),g=(0,p.v9)(e=>e.User_signup),[j,y]=(0,c.useState)(1===a.is_favourite),[_,A]=(0,c.useState)(!1),[N,b]=(0,c.useState)(!1),w=()=>{b(!1)},k=e=>{e.preventDefault(),e.stopPropagation(),g&&g.data&&g.data.token?(0,l.pw)(a.id,"1",e=>{y(!0),A(!1),u.Am.success(e.message)},e=>{console.log(e)}):f().fire({title:(0,r.Iu)("plzLogFirst"),icon:"warning",allowOutsideClick:!1,showCancelButton:!1,customClass:{confirmButton:"Swal-confirm-buttons",cancelButton:"Swal-cancel-buttons"},confirmButtonText:"Ok"}).then(e=>{e.isConfirmed&&b(!0)})},C=e=>{e.preventDefault(),e.stopPropagation(),(0,l.pw)(a.id,"0",e=>{y(!1),A(!0),u.Am.success(e.message)},e=>{console.log(e)})};return(0,c.useEffect)(()=>{y(1===a.is_favourite),A(!1)},[a.is_favourite]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.Z,{id:"all_prop_main_card",className:"row",children:[(0,s.jsxs)("div",{className:"col-md-4 img_div",id:"all_prop_main_card_rows_cols",children:[(0,s.jsx)(o(),{loading:"lazy",className:"card-img",id:"all_prop_card_img",src:null==a?void 0:a.title_image,alt:"no_img",width:20,height:20,onError:r.jM}),a.promoted?(0,s.jsx)("span",{className:"all_prop_feature",children:(0,r.Iu)("feature")}):null,(0,s.jsx)("span",{className:"all_prop_like",children:j?(0,s.jsx)(m.M_L,{size:25,className:"liked_property",onClick:C}):_?(0,s.jsx)(m.lo,{size:25,className:"disliked_property",onClick:k}):(0,s.jsx)(m.lo,{size:25,onClick:k})}),(0,s.jsx)("span",{className:"all_prop_sell",children:a.property_type}),(0,s.jsxs)("span",{className:"all_prop_price",children:[n," ",(0,r.ze)(a.price)]})]}),(0,s.jsx)("div",{className:"col-md-8",id:"all_prop_main_card_rows_cols",children:(0,s.jsxs)(d.Z.Body,{id:"all_prop_card_body",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{id:"all_prop_sub_body",children:[(0,s.jsx)("div",{className:"cate_image",children:v?(0,s.jsx)(h.t,{imageUrl:a.category&&a.category.image,className:"custom-svg"}):(0,s.jsx)(o(),{loading:"lazy",src:null==a?void 0:a.category.image,alt:"no_img",width:20,height:20,onError:r.jM})}),(0,s.jsxs)("span",{className:"sub_body_title",children:[" ",a.category.category]})]}),(0,s.jsxs)("div",{id:"sub_body_middletext",children:[(0,s.jsx)("span",{children:a.title}),(0,s.jsxs)("p",{children:[a.city,a.city?",":null," ",a.state,a.state?",":null," ",a.country]})]})]}),(0,s.jsx)(d.Z.Footer,{id:"all_prop_card_footer",children:(0,s.jsx)("div",{className:"row",children:a.parameters&&a.parameters.slice(0,4).map((e,a)=>""!==e.value&&0!==e.value&&(0,s.jsx)("div",{className:"col-sm-12 col-md-3",children:(0,s.jsxs)("div",{id:"all_footer_content",children:[(0,s.jsxs)("div",{className:"footer_img_value",children:[v?(0,s.jsx)(h.t,{imageUrl:null==e?void 0:e.image,className:"custom-svg"}):(0,s.jsx)(o(),{src:null==e?void 0:e.image,alt:"no_img",width:20,height:20,onError:r.jM}),(0,s.jsx)("p",{className:"text_footer",children:Array.isArray(null==e?void 0:e.value)?(0,r.$G)(e.value.slice(0,1),6):(0,r.$G)(e.value,5)})]}),(0,s.jsxs)("p",{className:"text_footer",children:[" ",e.name]})]},a)},a))})})]})})]},a.id),N&&(0,s.jsx)(x.Z,{isOpen:N,onClose:w})]})};a.Z=g},80864:function(e,a,t){"use strict";var s=t(85893);t(67294);var l=t(24404),i=t(2086),r=t(79352),n=t(46931);t(87713);let o=e=>{var a;return(0,s.jsxs)("div",{className:"card",id:"filter-card",children:[(0,s.jsxs)("div",{className:"card title",id:"filter-title",children:[(0,s.jsx)("span",{children:(0,l.Iu)("filterProp")}),(0,s.jsx)("button",{onClick:e.handleClearFilter,children:(0,l.Iu)("clearFilter")})]}),(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("div",{className:"filter-button-box",children:(0,s.jsx)(i.Z,{id:"propertie_button_grup",children:(0,s.jsxs)("ul",{className:"nav nav-tabs",id:"props-tabs",children:[(0,s.jsx)("li",{className:"",children:(0,s.jsx)("a",{className:"nav-link ".concat(0===e.filterData.propType?"active":""),"aria-current":"page",id:"prop-sellbutton",onClick:()=>e.handleTabClick("sell"),children:(0,l.Iu)("forSell")})}),(0,s.jsx)("li",{className:"",children:(0,s.jsx)("a",{className:"nav-link ".concat(1===e.filterData.propType?"active":""),onClick:()=>e.handleTabClick("rent"),"aria-current":"page",id:"prop-rentbutton",children:(0,l.Iu)("forRent")})})]})})}),!e.cateName&&(0,s.jsxs)("div",{className:"prop-type filter_label_title",children:[(0,s.jsx)("span",{children:(0,l.Iu)("propTypes")}),(0,s.jsxs)("select",{className:"form-select","aria-label":"Default select",name:"category",value:e.filterData.category,onChange:e.handleInputChange,children:[(0,s.jsx)("option",{value:"",children:(0,l.Iu)("selectPropType")}),e.getCategories&&(null===(a=e.getCategories)||void 0===a?void 0:a.map((e,a)=>(0,s.jsx)("option",{value:e.id,children:e.category},a)))]})]}),!e.cityName&&(0,s.jsxs)("div",{className:"prop-location filter_label_title",children:[(0,s.jsx)("span",{children:(0,l.Iu)("selectYourLocation")}),(0,s.jsx)(n.Z,{onLocationSelected:e.handleLocationSelected,selectedLocation:null==e?void 0:e.selectedLocation,clearfilterLocation:null==e?void 0:e.clearfilterLocation})]}),(0,s.jsxs)("div",{className:"budget-price filter_label_title",children:[(0,s.jsx)("span",{children:(0,l.Iu)("budget")}),(0,s.jsxs)("div",{className:"budget-inputs",children:[(0,s.jsx)("input",{className:"price-input",type:"number",placeholder:"Min Price",name:"minPrice",value:e.filterData.minPrice,onChange:e.handleInputChange}),(0,s.jsx)("input",{className:"price-input",type:"number",placeholder:"Max Price",name:"maxPrice",value:e.filterData.maxPrice,onChange:e.handleInputChange})]})]}),(0,s.jsxs)("div",{className:"posted-since filter_label_title",children:[(0,s.jsx)("span",{children:(0,l.Iu)("postedSince")}),(0,s.jsxs)("div",{className:"posted-duration",children:[(0,s.jsxs)("div",{className:"form-check",children:[(0,s.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",value:"anytime",checked:"anytime"===e.filterData.postedSince,onChange:e.handlePostedSinceChange}),(0,s.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:(0,l.Iu)("anytime")})]}),(0,s.jsxs)("div",{className:"form-check",children:[(0,s.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",value:"lastWeek",checked:"lastWeek"===e.filterData.postedSince,onChange:e.handlePostedSinceChange}),(0,s.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault2",children:(0,l.Iu)("lastWeek")})]}),(0,s.jsxs)("div",{className:"form-check",children:[(0,s.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault3",value:"yesterday",checked:"yesterday"===e.filterData.postedSince,onChange:e.handlePostedSinceChange}),(0,s.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault3",children:(0,l.Iu)("yesterday")})]})]})]}),(0,s.jsxs)("div",{className:"apply-filter",onClick:e.handleApplyfilter,children:[(0,s.jsx)(r.Pw9,{size:25}),(0,s.jsx)("button",{id:"apply-filter-button",children:(0,l.Iu)("applyFilter")})]})]})]})};a.Z=o},90086:function(e,a,t){"use strict";var s=t(85893),l=t(24404),i=t(67294),r=t(8193),n=t(79352);let o=e=>{let{total:a,setGrid:t}=e,[o,c]=(0,i.useState)(!1),d=()=>{t(!o),c(!o)};return(0,i.useEffect)(()=>{},[o]),(0,s.jsx)("div",{className:"card",children:(0,s.jsxs)("div",{className:"card-body",id:"all-prop-headline-card",children:[(0,s.jsx)("div",{children:(0,s.jsx)("span",{children:a&&"".concat(a," ").concat((0,l.Iu)("propFound"))})}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"mx-3",id:"layout-buttons",onClick:d,children:o?(0,s.jsx)(r.t5C,{size:25}):(0,s.jsx)(n.fl4,{size:25})})})]})})};a.Z=o},85715:function(e,a,t){"use strict";t.d(a,{Z:function(){return _}});var s=t(85893),l=t(67294),i={src:"/_next/static/media/Breadcrumbs.1ae0e8e1.jpg",height:1300,width:3840,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALBn/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACBAMREiFS/9oACAEBAAE/AJEqs/C7hscgL//EABkRAAEFAAAAAAAAAAAAAAAAAAIAAQMSMf/aAAgBAgEBPwCIiprr/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAEDAQE/AGUf/9k=",blurWidth:8,blurHeight:3},r=t(38138),n=t(47516),o=t(9473),c=t(82267),d=t(86501),u=t(51183),m=t(8193),p=t(96077),h=t(11163),x=t(68258),v=t(24404),f=t(86455),g=t.n(f),j=t(65295);let y=e=>{let a=(0,h.useRouter)(),{data:t,title:f}=e,y=(0,o.v9)(c.vV),_=y&&y.currency_symbol;y&&y.company_name;let A=(0,o.v9)(e=>e.User_signup),N=A&&A.data?A.data.data.id:null,[b,w]=(0,l.useState)(e.data&&e.data.is_favourite),[k,C]=(0,l.useState)(!1),[E,I]=(0,l.useState)(!1),S=()=>{I(!1)},B=a=>{a.preventDefault(),a.stopPropagation(),N?(0,u.pw)(e.data.propId,"1",e=>{w(!0),C(!1),d.Am.success(e.message)},e=>{console.log(e)}):g().fire({title:(0,v.Iu)("plzLogFirst"),icon:"warning",allowOutsideClick:!1,showCancelButton:!1,allowOutsideClick:!0,customClass:{confirmButton:"Swal-confirm-buttons",cancelButton:"Swal-cancel-buttons"},confirmButtonText:"Ok"}).then(e=>{e.isConfirmed&&I(!0)})},D=a=>{a.preventDefault(),a.stopPropagation(),(0,u.pw)(e.data.propId,"0",e=>{w(!1),C(!0),d.Am.success(e.message)},e=>{console.log(e)})};return"".concat("https://ebrokerweb.wrteam.me").concat(a.asPath),(0,l.useEffect)(()=>{w(e.data&&1===e.data.is_favourite),C(!1)},[e.data&&e.data.is_favourite]),p.Z,p.Z.Item,x.Dk,null==t||t.title,x.Vq,(0,v.Iu)("Facebook"),p.Z.Item,x.B,x.b0,(0,v.Iu)("Twitter"),p.Z.Item,x.N0,null==t||t.title,x.ud,(0,v.Iu)("Whatsapp"),p.Z.Item,r.dmD,(0,v.Iu)("Copy Link"),(0,s.jsxs)("div",{id:"breadcrumb",style:{backgroundImage:"url(".concat(i.src,")")},children:[e.data?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{id:"breadcrumb-content",className:"container",children:(0,s.jsxs)("div",{className:"row",id:"breadcrumb_row",children:[(0,s.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,s.jsxs)("div",{className:"left-side-content",children:[(0,s.jsx)("span",{className:"prop-types",children:t.type}),(0,s.jsx)("span",{className:"prop-name",children:t.title}),(0,s.jsxs)("span",{className:"prop-Location",children:[(0,s.jsx)(r.v2c,{size:25})," ",t.loc]}),(0,s.jsxs)("div",{className:"prop-sell-time",children:[(0,s.jsx)("span",{className:"propertie-sell-tag",children:t.propertyType}),(0,s.jsxs)("span",{children:[" ",(0,s.jsx)(n.YFw,{size:20})," ",t.time]})]})]})}),(0,s.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,s.jsxs)("div",{className:"right-side-content",children:[(0,s.jsxs)("span",{children:[" ",_," ",(0,v.pw)(t.price)," ","rent"===t.propertyType&&t.rentduration?"/ ".concat(t.rentduration):""]}),(0,s.jsxs)("div",{className:"rightside_buttons",children:[(0,s.jsx)("div",{children:b?(0,s.jsx)("button",{onClick:D,children:(0,s.jsx)(m.M_L,{size:25,className:"liked_property"})}):k?(0,s.jsx)("button",{onClick:B,children:(0,s.jsx)(m.lo,{size:25,className:"disliked_property"})}):(0,s.jsx)("button",{onClick:B,children:(0,s.jsx)(m.lo,{size:25})})}),null]})]})})]})})}):(0,s.jsx)("div",{className:"container",id:"breadcrumb-headline",children:(0,s.jsx)("h3",{className:"headline",children:e.title})}),E&&(0,s.jsx)(j.Z,{isOpen:E,onClose:S})]})};var _=y},26990:function(e,a,t){"use strict";t.d(a,{t:function(){return i}});var s=t(85893);t(82267);var l=t(67294);t(9473);let i=e=>{let{imageUrl:a,className:t}=e,[i,r]=(0,l.useState)("");return(0,l.useEffect)(()=>{let e=async()=>{try{let e=await fetch(a),t=await e.text(),s=t.replace(/<defs>([\s\S]*?)<\/defs>/,"");r(s)}catch(e){console.error("Error converting image to SVG:",e)}};e()},[a]),(0,s.jsx)("div",{className:t,dangerouslySetInnerHTML:{__html:i}})}},58474:function(e,a,t){"use strict";var s=t(85893),l=t(51183),i=t(82267),r=t(24404),n=t(67294),o=t(86501),c=t(8193),d=t(9473),u=t(25675),m=t.n(u),p=t(26990),h=t(86455),x=t.n(h),v=t(65295);a.Z=function(e){let{ele:a,removeCard:t,onImageLoad:u}=e,h=(0,d.v9)(i.vV),f=h&&h.currency_symbol,g=(0,d.v9)(e=>e.User_signup),j=()=>{u&&u()},[y,_]=(0,n.useState)((null==a?void 0:a.is_favourite)===1),[A,N]=(0,n.useState)(!1),[b,w]=(0,n.useState)(!1),k=()=>{w(!1)},C=e=>{e.stopPropagation(),e.preventDefault(),g&&g.data&&g.data.token?(0,l.pw)(null==a?void 0:a.id,"1",e=>{_(!0),N(!1),o.Am.success(e.message)},e=>{console.log(e)}):x().fire({title:(0,r.Iu)("plzLogFirst"),icon:"warning",allowOutsideClick:!1,showCancelButton:!1,allowOutsideClick:!0,customClass:{confirmButton:"Swal-confirm-buttons",cancelButton:"Swal-cancel-buttons"},confirmButtonText:"Ok"}).then(e=>{e.isConfirmed&&w(!0)})},E=e=>{e.preventDefault(),e.stopPropagation(),(0,l.pw)(null==a?void 0:a.id,"0",e=>{_(!1),N(!0),o.Am.success(e.message),t&&(_(!0),t(null==a?void 0:a.id))},e=>{console.log(e)})};(0,n.useEffect)(()=>{_((null==a?void 0:a.is_favourite)===1),N(!1)},[null==a?void 0:a.is_favourite]);let I=(0,d.v9)(i.vV);null==I||I.web_placeholder_logo;let S=(0,r.$W)();return(0,s.jsxs)("div",{className:"verticle_card",children:[(0,s.jsxs)("div",{className:"card verticle_main_card",children:[(0,s.jsxs)("div",{className:"verticle_card_img_div",children:[(0,s.jsx)(m(),{loading:"lazy",className:"card-img",id:"verticle_card_img",src:null==a?void 0:a.title_image,alt:"no_img",width:200,height:200,onLoad:j,onError:r.jM}),(null==a?void 0:a.promoted)?(0,s.jsx)("span",{className:"feature_tag",children:(0,r.Iu)("feature")}):null,(0,s.jsx)("span",{className:"like_tag",children:y?(0,s.jsx)(c.M_L,{size:25,className:"liked_property",onClick:E}):A?(0,s.jsx)(c.lo,{size:25,className:"disliked_property",onClick:C}):(0,s.jsx)(c.lo,{size:25,onClick:C})}),(0,s.jsx)("span",{className:"sell_teg",children:null==a?void 0:a.property_type}),(0,s.jsxs)("span",{className:"price_teg",children:[f," ",(0,r.ze)(null==a?void 0:a.price)]})]}),(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsxs)("div",{className:"feature_card_mainbody",children:[(0,s.jsx)("div",{className:"cate_image",children:S?(0,s.jsx)(p.t,{imageUrl:(null==a?void 0:a.category)&&(null==a?void 0:a.category.image),className:"custom-svg"}):(0,s.jsx)(m(),{loading:"lazy",src:(null==a?void 0:a.category)&&(null==a?void 0:a.category.image),alt:"no_img",width:20,height:20,onError:r.jM})}),(0,s.jsxs)("span",{className:"feature_body_title",children:[" ",(null==a?void 0:a.category)&&(null==a?void 0:a.category.category)," "]})]}),(0,s.jsxs)("div",{className:"feature_card_middletext",children:[(0,s.jsx)("span",{children:null==a?void 0:a.title}),(0,s.jsxs)("p",{children:[null==a?void 0:a.city," ",(null==a?void 0:a.city)?",":null," ",null==a?void 0:a.state," ",(null==a?void 0:a.state)?",":null," ",null==a?void 0:a.country]})]})]}),(0,s.jsx)("div",{className:"card-footer",id:"feature_card_footer",children:(0,s.jsx)("div",{className:"row",children:(null==a?void 0:a.parameters)&&(null==a?void 0:a.parameters.slice(0,4).map((e,a)=>(null==e?void 0:e.value)!==""&&(null==e?void 0:e.value)!=="0"&&(0,s.jsx)("div",{div:!0,className:"col-12 col-sm-6 col-md-6 ",children:(0,s.jsxs)("div",{className:"footer_content",children:[(0,s.jsxs)("div",{className:"footer_img_value",children:[S?(0,s.jsx)(p.t,{imageUrl:null==e?void 0:e.image,className:"custom-svg"}):(0,s.jsx)(m(),{loading:"lazy",src:null==e?void 0:e.image,alt:"no_img",width:20,height:16,onError:r.jM}),(0,s.jsx)("p",{className:"text_footer",children:Array.isArray(null==e?void 0:e.value)?e.value.slice(0,2).join(", "):e.value})]}),(0,s.jsxs)("p",{className:"text_footer_name",children:[" ",null==e?void 0:e.name]})]},a)},a)))})})]}),b&&(0,s.jsx)(v.Z,{isOpen:b,onClose:k})]})}},46931:function(e,a,t){"use strict";var s=t(85893),l=t(67294),i=t(37054),r=t(24404);let n=e=>{let{onLocationSelected:a,initialLatitude:t,initialLongitude:n,clearfilterLocation:o}=e,c=(0,l.useRef)(),{isLoaded:d}=(0,r._V)(),[u,m]=(0,l.useState)(""),[p,h]=(0,l.useState)(t||null),[x,v]=(0,l.useState)(n||null),[f,g]=(0,l.useState)({name:"",formatted_address:"",lat:null,lng:null,city:"",district:"",state:"",country:""});(0,l.useEffect)(()=>{t&&n&&j(t,n)},[t,n]),(0,l.useEffect)(()=>{o&&!0===o&&m("")},[o]),(0,l.useEffect)(()=>{p&&x&&j(p,x)},[p,x]),(0,l.useEffect)(()=>{window.google},[d]);let j=async(e,t)=>{if(!e||!t)return;let s="https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e,",").concat(t,"&key=").concat("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");try{let l=await fetch(s);if(!l.ok)throw Error("Geocoding API request failed with status: ".concat(l.status));let i=await l.json();if("OK"===i.status&&i.results.length>0){let s=i.results[0],l={name:s.name,formatted_address:s.formatted_address,lat:e,lng:t,city:"",district:"",state:"",country:""};s.address_components.forEach(e=>{e.types.includes("locality")?l.city=e.long_name:e.types.includes("sublocality")?l.district=e.long_name:e.types.includes("administrative_area_level_1")?l.state=e.long_name:e.types.includes("country")&&(l.country=e.long_name)}),g(l),a(l),m(l.formatted_address)}else console.error("No results found for the provided coordinates.")}catch(e){console.error("Error fetching location data:",e)}},y=()=>{let[e]=c.current.getPlaces();if(e){let t={name:e.name,formatted_address:e.formatted_address,lat:e.geometry.location.lat(),lng:e.geometry.location.lng(),city:"",district:"",state:"",country:""},s=e.address_components;s.forEach(e=>{e.types.includes("locality")?t.city=e.long_name:e.types.includes("sublocality")?t.district=e.long_name:e.types.includes("administrative_area_level_1")?t.state=e.long_name:e.types.includes("country")&&(t.country=e.long_name)}),g(t),a(t),m(t.formatted_address)}},_=e=>{"Enter"===e.key&&e.preventDefault()},A=e=>{m(e.target.value)};return d&&(0,s.jsx)("div",{children:(0,s.jsx)(i.Zk,{onLoad:e=>c.current=e,onPlacesChanged:y,children:(0,s.jsx)("input",{type:"text",className:"searchLocationInput",placeholder:"Enter Location",onKeyPress:_,onChange:A,value:u})})})};a.Z=n},7134:function(e,a,t){"use strict";t.d(a,{Z:function(){return c}});var s=t(85893);t(67294);var l={src:"/_next/static/media/no_data_found_illustrator.c5c383a7.svg",height:255,width:255,blurWidth:0,blurHeight:0},i=t(24404),r=t(25675),n=t.n(r);let o=()=>(0,s.jsxs)("div",{className:"col-12 text-center",children:[(0,s.jsx)("div",{children:(0,s.jsx)(n(),{loading:"lazy",src:l.src,alt:"no_img",width:200,height:200,onError:i.jM})}),(0,s.jsxs)("div",{className:"no_data_found_text",children:[(0,s.jsx)("h3",{children:(0,i.Iu)("noData")}),(0,s.jsx)("span",{children:(0,i.Iu)("noDatatext")})]})]});var c=o},34774:function(e,a,t){"use strict";var s=t(85893),l=t(9008),i=t.n(l);let r=e=>{let{title:a,description:t,keywords:l,ogImage:r,pathName:n}=e;return(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:a||"eBroker | Empower Your Real Estate Business"}),(0,s.jsx)("meta",{name:"name",content:a||"eBroker | Empower Your Real Estate Business"}),(0,s.jsx)("meta",{name:"description",content:t||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,s.jsx)("meta",{name:"keywords",content:l||"Unique Properties Search,Tailored Real Estate Experiences,Exclusive Property Deals,Personalised Realty Services,Seamless Property Transactions,Prime Residential Properties,Bespoke Property Search,Exceptional Real Estate Guidance,,Premium Housing Options,Innovative Property Solutions"}),(0,s.jsx)("meta",{name:"image",content:r||null}),(0,s.jsx)("meta",{property:"og:title",content:a||"eBroker | Empower Your Real Estate Business"}),(0,s.jsx)("meta",{property:"og:description",content:t||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,s.jsx)("meta",{property:"og:image",content:r||null}),(0,s.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),(0,s.jsx)("meta",{property:"og:image:width",content:"1080"}),(0,s.jsx)("meta",{property:"og:image:height",content:"608"}),(0,s.jsx)("meta",{property:"og:url",content:n||"https://ebrokerweb.wrteam.me"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{name:"twitter:title",content:a||"eBroker | Empower Your Real Estate Business"}),(0,s.jsx)("meta",{name:"twitter:description",content:t||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,s.jsx)("meta",{name:"twitter:image",content:r||null}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("link",{rel:"canonical",href:"".concat("https://ebrokerweb.wrteam.me")}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{name:"robots",content:"index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large"})]})};a.Z=r},77399:function(e,a,t){"use strict";var s=t(85893);t(67294);var l=t(50549);let i=()=>(0,s.jsx)("div",{className:"horizontal_card skeleton",children:(0,s.jsxs)("div",{className:"card",id:"main_prop_card",children:[(0,s.jsx)("div",{className:"image_div col-md-4",children:(0,s.jsx)(l.Z,{width:"100%",height:"100%",className:"horizontal_skeleton_img"})}),(0,s.jsxs)("div",{className:"card-body",id:"main_prop_card_body",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"prop_card_mainbody",children:[(0,s.jsx)("div",{className:"cate_image",children:(0,s.jsx)(l.Z,{width:20,height:20})}),(0,s.jsx)("div",{className:"body_title",children:(0,s.jsx)(l.Z,{width:100,height:20})})]}),(0,s.jsxs)("div",{id:"prop_card_middletext",children:[(0,s.jsx)("div",{children:(0,s.jsx)(l.Z,{width:"100%",height:20})}),(0,s.jsx)("div",{children:(0,s.jsx)(l.Z,{width:"100%",height:16})})]})]}),(0,s.jsx)("div",{className:"card-footer",id:"prop_card_footer",children:(0,s.jsx)("div",{className:"row",children:Array.from({length:4}).map((e,a)=>(0,s.jsx)("div",{className:"col-sm-12 col-md-6",children:(0,s.jsxs)("div",{className:"footer_content",children:[(0,s.jsx)("div",{children:(0,s.jsx)(l.Z,{width:20,height:16})}),(0,s.jsx)("div",{className:"text_footer",children:(0,s.jsx)(l.Z,{width:80,height:16})})]})},a))})})]})]})});a.Z=i},9008:function(e,a,t){e.exports=t(42636)},2086:function(e,a,t){"use strict";var s=t(93967),l=t.n(s),i=t(67294),r=t(76792),n=t(85893);let o=i.forwardRef(({bsPrefix:e,size:a,vertical:t=!1,className:s,role:i="group",as:o="div",...c},d)=>{let u=(0,r.vE)(e,"btn-group"),m=u;return t&&(m=`${u}-vertical`),(0,n.jsx)(o,{...c,ref:d,role:i,className:l()(s,m,a&&`${u}-${a}`)})});o.displayName="ButtonGroup",a.Z=o},28837:function(e,a,t){"use strict";t.d(a,{Z:function(){return A}});var s=t(93967),l=t.n(s),i=t(67294),r=t(76792),n=t(85893);let o=i.forwardRef(({className:e,bsPrefix:a,as:t="div",...s},i)=>(a=(0,r.vE)(a,"card-body"),(0,n.jsx)(t,{ref:i,className:l()(e,a),...s})));o.displayName="CardBody";let c=i.forwardRef(({className:e,bsPrefix:a,as:t="div",...s},i)=>(a=(0,r.vE)(a,"card-footer"),(0,n.jsx)(t,{ref:i,className:l()(e,a),...s})));c.displayName="CardFooter";let d=i.createContext(null);d.displayName="CardHeaderContext";let u=i.forwardRef(({bsPrefix:e,className:a,as:t="div",...s},o)=>{let c=(0,r.vE)(e,"card-header"),u=(0,i.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,n.jsx)(d.Provider,{value:u,children:(0,n.jsx)(t,{ref:o,...s,className:l()(a,c)})})});u.displayName="CardHeader";let m=i.forwardRef(({bsPrefix:e,className:a,variant:t,as:s="img",...i},o)=>{let c=(0,r.vE)(e,"card-img");return(0,n.jsx)(s,{ref:o,className:l()(t?`${c}-${t}`:c,a),...i})});m.displayName="CardImg";let p=i.forwardRef(({className:e,bsPrefix:a,as:t="div",...s},i)=>(a=(0,r.vE)(a,"card-img-overlay"),(0,n.jsx)(t,{ref:i,className:l()(e,a),...s})));p.displayName="CardImgOverlay";let h=i.forwardRef(({className:e,bsPrefix:a,as:t="a",...s},i)=>(a=(0,r.vE)(a,"card-link"),(0,n.jsx)(t,{ref:i,className:l()(e,a),...s})));h.displayName="CardLink";var x=t(39602);let v=(0,x.Z)("h6"),f=i.forwardRef(({className:e,bsPrefix:a,as:t=v,...s},i)=>(a=(0,r.vE)(a,"card-subtitle"),(0,n.jsx)(t,{ref:i,className:l()(e,a),...s})));f.displayName="CardSubtitle";let g=i.forwardRef(({className:e,bsPrefix:a,as:t="p",...s},i)=>(a=(0,r.vE)(a,"card-text"),(0,n.jsx)(t,{ref:i,className:l()(e,a),...s})));g.displayName="CardText";let j=(0,x.Z)("h5"),y=i.forwardRef(({className:e,bsPrefix:a,as:t=j,...s},i)=>(a=(0,r.vE)(a,"card-title"),(0,n.jsx)(t,{ref:i,className:l()(e,a),...s})));y.displayName="CardTitle";let _=i.forwardRef(({bsPrefix:e,className:a,bg:t,text:s,border:i,body:c=!1,children:d,as:u="div",...m},p)=>{let h=(0,r.vE)(e,"card");return(0,n.jsx)(u,{ref:p,...m,className:l()(a,h,t&&`bg-${t}`,s&&`text-${s}`,i&&`border-${i}`),children:c?(0,n.jsx)(o,{children:d}):d})});_.displayName="Card";var A=Object.assign(_,{Img:m,Title:y,Subtitle:f,Body:o,Link:h,Text:g,Header:u,Footer:c,ImgOverlay:p})},50549:function(e,a,t){"use strict";t.d(a,{Z:function(){return i}});var s=t(67294);let l=s.createContext({});function i({count:e=1,wrapper:a,className:t,containerClassName:i,containerTestId:r,circle:n=!1,style:o,...c}){var d,u,m;let p=s.useContext(l),h={...c};for(let[e,a]of Object.entries(c))void 0===a&&delete h[e];let x={...p,...h,circle:n},v={...o,...function({baseColor:e,highlightColor:a,width:t,height:s,borderRadius:l,circle:i,direction:r,duration:n,enableAnimation:o=!0}){let c={};return"rtl"===r&&(c["--animation-direction"]="reverse"),"number"==typeof n&&(c["--animation-duration"]=`${n}s`),o||(c["--pseudo-element-display"]="none"),("string"==typeof t||"number"==typeof t)&&(c.width=t),("string"==typeof s||"number"==typeof s)&&(c.height=s),("string"==typeof l||"number"==typeof l)&&(c.borderRadius=l),i&&(c.borderRadius="50%"),void 0!==e&&(c["--base-color"]=e),void 0!==a&&(c["--highlight-color"]=a),c}(x)},f="react-loading-skeleton";t&&(f+=` ${t}`);let g=null!==(d=x.inline)&&void 0!==d&&d,j=[],y=Math.ceil(e);for(let a=0;a<y;a++){let t=v;if(y>e&&a===y-1){let a=null!==(u=t.width)&&void 0!==u?u:"100%",s=e%1,l="number"==typeof a?a*s:`calc(${a} * ${s})`;t={...t,width:l}}let l=s.createElement("span",{className:f,style:t,key:a},"‌");g?j.push(l):j.push(s.createElement(s.Fragment,{key:a},l,s.createElement("br",null)))}return s.createElement("span",{className:i,"data-testid":r,"aria-live":"polite","aria-busy":null===(m=x.enableAnimation)||void 0===m||m},a?j.map((e,t)=>s.createElement(a,{key:t},e)):j)}}}]);