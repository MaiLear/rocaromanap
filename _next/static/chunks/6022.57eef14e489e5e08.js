"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6022],{70861:function(t,e,n){n.d(e,{FT:function(){return u}});var r=n(67294),a=n(85893);let o=["as","disabled"];function u({tagName:t,disabled:e,href:n,target:r,rel:a,role:o,onClick:u,tabIndex:l=0,type:i}){t||(t=null!=n||null!=r||null!=a?"a":"button");let f={tagName:t};if("button"===t)return[{type:i||"button",disabled:e},f];let s=r=>{var a;if(!e&&("a"!==t||(a=n)&&"#"!==a.trim())||r.preventDefault(),e){r.stopPropagation();return}null==u||u(r)},d=t=>{" "===t.key&&(t.preventDefault(),s(t))};return"a"===t&&(n||(n="#"),e&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:e?void 0:l,href:n,target:"a"===t?r:void 0,"aria-disabled":e||void 0,rel:"a"===t?a:void 0,onClick:s,onKeyDown:d},f]}let l=r.forwardRef((t,e)=>{let{as:n,disabled:r}=t,l=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,o),[i,{tagName:f}]=u(Object.assign({tagName:n,disabled:r},l));return(0,a.jsx)(f,Object.assign({},l,i,{ref:e}))});l.displayName="Button",e.ZP=l},35005:function(t,e,n){var r=n(93967),a=n.n(r),o=n(67294),u=n(70861),l=n(76792),i=n(85893);let f=o.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:o=!1,disabled:f=!1,className:s,...d},c)=>{let b=(0,l.vE)(e,"btn"),[p,{tagName:v}]=(0,u.FT)({tagName:t,disabled:f,...d});return(0,i.jsx)(v,{...p,...d,ref:c,disabled:f,className:a()(s,b,o&&"active",n&&`${b}-${n}`,r&&`${b}-${r}`,d.href&&f&&"disabled")})});f.displayName="Button",e.Z=f},220:function(t,e,n){var r=n(67294);e.Z=r.createContext(null)},94578:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(89611);function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,(0,r.Z)(t,e)}}}]);