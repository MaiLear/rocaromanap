(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9992],{69117:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user-register",function(){return a(43593)}])},43593:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var s=a(85893),n=a(67294),l=a(85715),i=a(6212),o=a(79352),r=a(37054),c=a(69998),d=a(24404);let u=e=>{let{isOpen:t,onClose:a,onSelectLocation:l}=e,u=["places"],[m,x]=(0,n.useState)(!1),[A,p]=(0,n.useState)(!1),[g,h]=(0,n.useState)({city:"",formatted_address:"",lat:parseFloat(0),lng:parseFloat(0)}),v=(0,n.useMemo)(()=>({lat:g.lat,lng:g.lng}),[g.lat,g.lng]),j=()=>{x(!0)},f=async e=>{let t=new window.google.maps.Geocoder;try{let a=await new Promise((a,s)=>{t.geocode({location:{lat:e.latLng.lat(),lng:e.latLng.lng()}},(e,t)=>{"OK"===t?a(e):s(t)})});if(a.length>0){let t=a[0].address_components,s="",n="";for(let e of t)e.types.includes("locality")&&(n=e.long_name);s=a[0].formatted_address?a[0].formatted_address:n,h(t=>({...t,formatted_address:s,city:n,lat:e.latLng.lat(),lng:e.latLng.lng()})),x(!1)}}catch(e){console.error("Error during reverse geocoding:",e)}};(0,n.useEffect)(()=>{if(t){let e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=".concat("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","&libraries=").concat(u.join(",")),e.async=!0,e.onload=()=>{let e=navigator.geolocation;e&&e.getCurrentPosition(async e=>{let{latitude:t,longitude:a}=e.coords,s=new window.google.maps.Geocoder;try{let e=await new Promise((e,n)=>{s.geocode({location:{lat:t,lng:a}},(t,a)=>{"OK"===a?e(t):n(a)})});if(e.length>0){let s=e[0].address_components,n="",l="";for(let e of s)e.types.includes("locality")&&(l=e.long_name);n=e[0].formatted_address?e[0].formatted_address:l,h(e=>({...e,formatted_address:n,city:l,lat:t,lng:a})),x(!1)}}catch(e){console.error("Error during reverse geocoding:",e)}},e=>{console.error("Error getting geolocation:",e)})},document.head.appendChild(e)}},[t]);let y=()=>{l(g),a()};return(0,s.jsx)(s.Fragment,{children:A?(0,s.jsx)(c.Z,{}):(0,s.jsxs)(i.Z,{show:t,onHide:a,size:"md",centered:!0,className:"current_loction_modal",backdrop:"static",keyboard:!1,children:[(0,s.jsxs)(i.Z.Header,{children:[(0,s.jsx)(i.Z.Title,{children:(0,d.Iu)("selectYourCurrentLocation")}),(0,s.jsx)(o.qFC,{className:"close-icon",size:40,onClick:a})]}),(0,s.jsx)(i.Z.Body,{children:(0,s.jsx)("div",{className:"w-100",children:t&&(0,s.jsx)(r.b6,{zoom:11,center:v,mapContainerStyle:{height:"400px"},children:(0,s.jsx)(r.Jx,{position:v,draggable:!0,onDragStart:j,onDragEnd:f})})})}),(0,s.jsx)(i.Z.Footer,{children:(0,s.jsx)("div",{className:"confirm_loc",children:(0,s.jsx)("button",{onClick:y,children:(0,d.Iu)("confirm")})})})]})})};var m=a(11163),x=a(97328),A=a(86501),p=a(9473),g=a(51183),h={src:"/_next/static/media/user_profile.a08e0153.png",height:300,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAb0lEQVR42h3IQQqDMBSE4TlPcmavISQ+N008QhFcC65KCoJoUzIO8sHA/AAGZ8mq5MHjuSUySKR9lSxFvq6Nm1YpY6w9F/5kYc+xwmrgxI9MDDSFFPi+Vq5ahYTOzeXk0Y52ci6dA9D8nve/5OaBG9PZYwp/ciXnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},v=a(25789),j=a(46931),f=a(25675),y=a.n(f),_=a(82267),w=a(45241);let E=()=>{var e,t,a,i,o,r,c,f,E,b,N,k,C,I,S,B,P,F;let Q=(0,m.useRouter)(),D=(0,p.v9)(x.n6),R=(0,p.v9)(_.Ae);(0,n.useEffect)(()=>{null===D.data&&Q.push("/")},[D]);let[Z,L]=(0,n.useState)(!1),[Y,M]=(0,n.useState)(null),[U,T]=(0,n.useState)((null==D?void 0:null===(e=D.data)||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:t.name)?null==D?void 0:null===(a=D.data)||void 0===a?void 0:null===(i=a.data)||void 0===i?void 0:i.name:""),[O,z]=(0,n.useState)((null==D?void 0:null===(o=D.data)||void 0===o?void 0:null===(r=o.data)||void 0===r?void 0:r.email)?null==D?void 0:null===(c=D.data)||void 0===c?void 0:null===(f=c.data)||void 0===f?void 0:f.email:""),[q,G]=(0,n.useState)((null==D?void 0:null===(E=D.data)||void 0===E?void 0:null===(b=E.data)||void 0===b?void 0:b.mobile)?null==D?void 0:null===(N=D.data)||void 0===N?void 0:null===(k=N.data)||void 0===k?void 0:k.mobile:""),[K,H]=(0,n.useState)(),[V,J]=(0,n.useState)(),X=(0,n.useRef)(null),[W,$]=(0,n.useState)((null==D?void 0:null===(C=D.data)||void 0===C?void 0:null===(I=C.data)||void 0===I?void 0:I.profile)?null==D?void 0:null===(S=D.data)||void 0===S?void 0:null===(B=S.data)||void 0===B?void 0:B.profile:null),ee=(0,p.v9)(v.iT);(0,n.useEffect)(()=>{},[ee]);let et=()=>{L(!1)},ea=e=>{M(e)},es=()=>{X.current.click()},en=e=>{let t=e.target.files[0];if(t){let e=new FileReader;e.onload=e=>{J(t),$(e.target.result)},e.readAsDataURL(t)}},el=e=>{if(e.preventDefault(),"1"===D.data.data.logintype){if(!O.trim()){A.Am.error((0,d.Iu)("fillEmail"));return}}else if(!q.trim()){A.Am.error((0,d.Iu)("fillMobile"));return}(0,g.TY)({name:U,email:O,mobile:q,address:K,firebase_id:D.data.data.firebase_id,profile:V,fcm_id:R,notification:"1",city:Y&&Y.city?Y.city:"",state:Y&&Y.state?Y.state:"",country:Y&&Y.country?Y.country:"",onSuccess:e=>{A.Am.success((0,d.Iu)("userRegister")),(0,x.AJ)(e.data),Q.push("/")},onError:e=>{A.Am.error(e)}})};return(0,s.jsxs)(w.Z,{children:[(0,s.jsx)(l.Z,{title:(0,d.Iu)("basicInfo")}),(0,s.jsx)("section",{id:"user_register",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",id:"register_main_card",children:(0,s.jsx)("div",{className:"col-sm-12 col-md-6",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("div",{className:"card-header",children:(0,s.jsx)("div",{className:"card-title",children:(0,d.Iu)("addInfo")})}),(0,s.jsx)("div",{className:"card-body",children:(0,s.jsx)("form",{action:"",children:(0,s.jsx)("div",{className:"form_all_fields",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-sm-12",children:(0,s.jsxs)("div",{className:"add_profile_div",children:[(0,s.jsx)("div",{className:"image_div",children:(0,s.jsx)(y(),{loading:"lazy",src:W||h.src,alt:"no_img",width:200,height:200,onError:d.jM})}),(0,s.jsxs)("div",{className:"add_profile",children:[(0,s.jsx)("input",{type:"file",accept:"image/jpeg, image/png",id:"add_img",ref:X,style:{display:"none"},onChange:en}),(0,s.jsx)("button",{type:"button",onClick:es,children:(0,d.Iu)("uploadImg")}),(0,s.jsx)("p",{children:(0,d.Iu)("Note:")})]})]})}),(0,s.jsx)("div",{className:"col-sm-12 col-md-6",children:(0,s.jsxs)("div",{className:"user_fields",children:[(0,s.jsx)("span",{children:(0,d.Iu)("userName")}),(0,s.jsx)("input",{type:"text",name:"uname",placeholder:"Enter Your Name",value:U,onChange:e=>T(e.target.value),required:!0})]})}),(null==D?void 0:null===(P=D.data)||void 0===P?void 0:null===(F=P.data)||void 0===F?void 0:F.logintype)==="1"?(0,s.jsx)("div",{className:"col-sm-12 col-md-6",children:(0,s.jsxs)("div",{className:"user_fields",children:[(0,s.jsx)("span",{children:(0,d.Iu)("email")}),(0,s.jsx)("input",{type:"email",name:"email",placeholder:"Enter Your Email",value:O,onChange:e=>z(e.target.value),required:!0})]})}):(0,s.jsx)("div",{className:"col-sm-12 col-md-6",children:(0,s.jsxs)("div",{className:"user_fields",children:[(0,s.jsx)("span",{children:(0,d.Iu)("phoneNumber")}),(0,s.jsx)("input",{type:"text",name:"mobile",placeholder:"Enter Your Number",value:q,onChange:e=>G(e.target.value),required:!0})]})}),(0,s.jsx)("div",{className:"col-sm-12 col-md-12",children:(0,s.jsxs)("div",{className:"user_fields",children:[(0,s.jsx)("span",{children:(0,d.Iu)("location")}),(0,s.jsx)(j.Z,{onLocationSelected:ea})]})}),(0,s.jsx)("div",{className:"col-sm-12 col-md-12",children:(0,s.jsxs)("div",{className:"user_fields",children:[(0,s.jsx)("span",{children:(0,d.Iu)("address")}),(0,s.jsx)("textarea",{rows:4,className:"current_address",placeholder:"Enter address",value:K,onChange:e=>H(e.target.value)})]})})]})})})}),(0,s.jsx)("div",{className:"card-footer",children:(0,s.jsx)("div",{className:"basic_submit",children:(0,s.jsx)("button",{onClick:el,children:(0,d.Iu)("submit")})})})]})})})})}),Z&&(0,s.jsx)(u,{isOpen:!0,onClose:et,onSelectLocation:ea})]})};var b=a(34774);let N=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b.Z,{title:"",description:"",keywords:"",ogImage:"",pathName:""}),(0,s.jsx)(E,{})]});var k=N},85715:function(e,t,a){"use strict";a.d(t,{Z:function(){return y}});var s=a(85893),n=a(67294),l={src:"/_next/static/media/Breadcrumbs.1ae0e8e1.jpg",height:1300,width:3840,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALBn/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACBAMREiFS/9oACAEBAAE/AJEqs/C7hscgL//EABkRAAEFAAAAAAAAAAAAAAAAAAIAAQMSMf/aAAgBAgEBPwCIiprr/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAEDAQE/AGUf/9k=",blurWidth:8,blurHeight:3},i=a(38138),o=a(47516),r=a(9473),c=a(82267),d=a(86501),u=a(51183),m=a(8193),x=a(96077),A=a(11163),p=a(68258),g=a(24404),h=a(86455),v=a.n(h),j=a(65295);let f=e=>{let t=(0,A.useRouter)(),{data:a,title:h}=e,f=(0,r.v9)(c.vV),y=f&&f.currency_symbol;f&&f.company_name;let _=(0,r.v9)(e=>e.User_signup),w=_&&_.data?_.data.data.id:null,[E,b]=(0,n.useState)(e.data&&e.data.is_favourite),[N,k]=(0,n.useState)(!1),[C,I]=(0,n.useState)(!1),S=()=>{I(!1)},B=t=>{t.preventDefault(),t.stopPropagation(),w?(0,u.pw)(e.data.propId,"1",e=>{b(!0),k(!1),d.Am.success(e.message)},e=>{console.log(e)}):v().fire({title:(0,g.Iu)("plzLogFirst"),icon:"warning",allowOutsideClick:!1,showCancelButton:!1,allowOutsideClick:!0,customClass:{confirmButton:"Swal-confirm-buttons",cancelButton:"Swal-cancel-buttons"},confirmButtonText:"Ok"}).then(e=>{e.isConfirmed&&I(!0)})},P=t=>{t.preventDefault(),t.stopPropagation(),(0,u.pw)(e.data.propId,"0",e=>{b(!1),k(!0),d.Am.success(e.message)},e=>{console.log(e)})};return"".concat("https://ebrokerweb.wrteam.me").concat(t.asPath),(0,n.useEffect)(()=>{b(e.data&&1===e.data.is_favourite),k(!1)},[e.data&&e.data.is_favourite]),x.Z,x.Z.Item,p.Dk,null==a||a.title,p.Vq,(0,g.Iu)("Facebook"),x.Z.Item,p.B,p.b0,(0,g.Iu)("Twitter"),x.Z.Item,p.N0,null==a||a.title,p.ud,(0,g.Iu)("Whatsapp"),x.Z.Item,i.dmD,(0,g.Iu)("Copy Link"),(0,s.jsxs)("div",{id:"breadcrumb",style:{backgroundImage:"url(".concat(l.src,")")},children:[e.data?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{id:"breadcrumb-content",className:"container",children:(0,s.jsxs)("div",{className:"row",id:"breadcrumb_row",children:[(0,s.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,s.jsxs)("div",{className:"left-side-content",children:[(0,s.jsx)("span",{className:"prop-types",children:a.type}),(0,s.jsx)("span",{className:"prop-name",children:a.title}),(0,s.jsxs)("span",{className:"prop-Location",children:[(0,s.jsx)(i.v2c,{size:25})," ",a.loc]}),(0,s.jsxs)("div",{className:"prop-sell-time",children:[(0,s.jsx)("span",{className:"propertie-sell-tag",children:a.propertyType}),(0,s.jsxs)("span",{children:[" ",(0,s.jsx)(o.YFw,{size:20})," ",a.time]})]})]})}),(0,s.jsx)("div",{className:"col-12 col-md-6 col-lg-6",children:(0,s.jsxs)("div",{className:"right-side-content",children:[(0,s.jsxs)("span",{children:[" ",y," ",(0,g.pw)(a.price)," ","rent"===a.propertyType&&a.rentduration?"/ ".concat(a.rentduration):""]}),(0,s.jsxs)("div",{className:"rightside_buttons",children:[(0,s.jsx)("div",{children:E?(0,s.jsx)("button",{onClick:P,children:(0,s.jsx)(m.M_L,{size:25,className:"liked_property"})}):N?(0,s.jsx)("button",{onClick:B,children:(0,s.jsx)(m.lo,{size:25,className:"disliked_property"})}):(0,s.jsx)("button",{onClick:B,children:(0,s.jsx)(m.lo,{size:25})})}),null]})]})})]})})}):(0,s.jsx)("div",{className:"container",id:"breadcrumb-headline",children:(0,s.jsx)("h3",{className:"headline",children:e.title})}),C&&(0,s.jsx)(j.Z,{isOpen:C,onClose:S})]})};var y=f},46931:function(e,t,a){"use strict";var s=a(85893),n=a(67294),l=a(37054),i=a(24404);let o=e=>{let{onLocationSelected:t,initialLatitude:a,initialLongitude:o,clearfilterLocation:r}=e,c=(0,n.useRef)(),{isLoaded:d}=(0,i._V)(),[u,m]=(0,n.useState)(""),[x,A]=(0,n.useState)(a||null),[p,g]=(0,n.useState)(o||null),[h,v]=(0,n.useState)({name:"",formatted_address:"",lat:null,lng:null,city:"",district:"",state:"",country:""});(0,n.useEffect)(()=>{a&&o&&j(a,o)},[a,o]),(0,n.useEffect)(()=>{r&&!0===r&&m("")},[r]),(0,n.useEffect)(()=>{x&&p&&j(x,p)},[x,p]),(0,n.useEffect)(()=>{window.google},[d]);let j=async(e,a)=>{if(!e||!a)return;let s="https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e,",").concat(a,"&key=").concat("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");try{let n=await fetch(s);if(!n.ok)throw Error("Geocoding API request failed with status: ".concat(n.status));let l=await n.json();if("OK"===l.status&&l.results.length>0){let s=l.results[0],n={name:s.name,formatted_address:s.formatted_address,lat:e,lng:a,city:"",district:"",state:"",country:""};s.address_components.forEach(e=>{e.types.includes("locality")?n.city=e.long_name:e.types.includes("sublocality")?n.district=e.long_name:e.types.includes("administrative_area_level_1")?n.state=e.long_name:e.types.includes("country")&&(n.country=e.long_name)}),v(n),t(n),m(n.formatted_address)}else console.error("No results found for the provided coordinates.")}catch(e){console.error("Error fetching location data:",e)}},f=()=>{let[e]=c.current.getPlaces();if(e){let a={name:e.name,formatted_address:e.formatted_address,lat:e.geometry.location.lat(),lng:e.geometry.location.lng(),city:"",district:"",state:"",country:""},s=e.address_components;s.forEach(e=>{e.types.includes("locality")?a.city=e.long_name:e.types.includes("sublocality")?a.district=e.long_name:e.types.includes("administrative_area_level_1")?a.state=e.long_name:e.types.includes("country")&&(a.country=e.long_name)}),v(a),t(a),m(a.formatted_address)}},y=e=>{"Enter"===e.key&&e.preventDefault()},_=e=>{m(e.target.value)};return d&&(0,s.jsx)("div",{children:(0,s.jsx)(l.Zk,{onLoad:e=>c.current=e,onPlacesChanged:f,children:(0,s.jsx)("input",{type:"text",className:"searchLocationInput",placeholder:"Enter Location",onKeyPress:y,onChange:_,value:u})})})};t.Z=o},34774:function(e,t,a){"use strict";var s=a(85893),n=a(9008),l=a.n(n);let i=e=>{let{title:t,description:a,keywords:n,ogImage:i,pathName:o}=e;return(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:t||"eBroker | Empower Your Real Estate Business"}),(0,s.jsx)("meta",{name:"name",content:t||"eBroker | Empower Your Real Estate Business"}),(0,s.jsx)("meta",{name:"description",content:a||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,s.jsx)("meta",{name:"keywords",content:n||"Unique Properties Search,Tailored Real Estate Experiences,Exclusive Property Deals,Personalised Realty Services,Seamless Property Transactions,Prime Residential Properties,Bespoke Property Search,Exceptional Real Estate Guidance,,Premium Housing Options,Innovative Property Solutions"}),(0,s.jsx)("meta",{name:"image",content:i||null}),(0,s.jsx)("meta",{property:"og:title",content:t||"eBroker | Empower Your Real Estate Business"}),(0,s.jsx)("meta",{property:"og:description",content:a||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,s.jsx)("meta",{property:"og:image",content:i||null}),(0,s.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),(0,s.jsx)("meta",{property:"og:image:width",content:"1080"}),(0,s.jsx)("meta",{property:"og:image:height",content:"608"}),(0,s.jsx)("meta",{property:"og:url",content:o||"https://ebrokerweb.wrteam.me"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{name:"twitter:title",content:t||"eBroker | Empower Your Real Estate Business"}),(0,s.jsx)("meta",{name:"twitter:description",content:a||"Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!"}),(0,s.jsx)("meta",{name:"twitter:image",content:i||null}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("link",{rel:"canonical",href:"".concat("https://ebrokerweb.wrteam.me")}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{name:"robots",content:"index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large"})]})};t.Z=i},9008:function(e,t,a){e.exports=a(42636)}},function(e){e.O(0,[8166,5937,1778,4617,6132,994,4980,3874,3609,9401,5675,3510,6855,3228,5529,155,6958,3887,6077,7466,591,5241,9774,2888,179],function(){return e(e.s=69117)}),_N_E=e.O()}]);