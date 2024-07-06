"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6077],{76529:function(e,t,o){o.d(t,{J:function(){return s}});var n=o(67294),r=o(56790),i=o(89942),l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let a=n.createContext(null),s=n.forwardRef((e,t)=>{let{children:o}=e,s=l(e,["children"]),c=n.useContext(a),d=n.useMemo(()=>Object.assign(Object.assign({},c),s),[c,s.prefixCls,s.mode,s.selectable,s.rootClassName]),m=(0,r.t4)(o),u=(0,r.x1)(t,m?o.ref:null);return n.createElement(a.Provider,{value:d},n.createElement(i.Z,{space:!0},m?n.cloneElement(o,{ref:u}):o))});t.Z=a},96077:function(e,t,o){o.d(t,{Z:function(){return V}});var n=o(67294),r=o(72512),i=o(93967),l=o.n(i);let a=n.createContext({});var s=o(89705),c=o(56790),d=o(98423),m=o(33603),u=o(96159),g=o(53124),p=o(35792);let $=(0,n.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var b=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let f=e=>{let{prefixCls:t,className:o,dashed:i}=e,a=b(e,["prefixCls","className","dashed"]),{getPrefixCls:s}=n.useContext(g.E_),c=s("menu",t),d=l()({[`${c}-item-divider-dashed`]:!!i},o);return n.createElement(r.iz,Object.assign({className:d},a))};var v=o(50344),h=o(5529);let I=e=>{var t;let{className:o,children:i,icon:s,title:c,danger:m}=e,{prefixCls:g,firstLevel:p,direction:b,disableMenuItemTitleTooltip:f,inlineCollapsed:I}=n.useContext($),{siderCollapsed:C}=n.useContext(a),B=c;void 0===c?B=p?i:"":!1===c&&(B="");let S={title:B};C||I||(S.title=null,S.open=!1);let x=(0,v.Z)(i).length,y=n.createElement(r.ck,Object.assign({},(0,d.Z)(e,["title","icon","danger"]),{className:l()({[`${g}-item-danger`]:m,[`${g}-item-only-child`]:(s?x+1:x)===1},o),title:"string"==typeof c?c:void 0}),(0,u.Tm)(s,{className:l()(n.isValidElement(s)?null===(t=s.props)||void 0===t?void 0:t.className:"",`${g}-item-icon`)}),(e=>{let t=n.createElement("span",{className:`${g}-title-content`},i);return(!s||n.isValidElement(i)&&"span"===i.type)&&i&&e&&p&&"string"==typeof i?n.createElement("div",{className:`${g}-inline-collapsed-noicon`},i.charAt(0)):t})(I));return f||(y=n.createElement(h.Z,Object.assign({},S,{placement:"rtl"===b?"left":"right",overlayClassName:`${g}-inline-collapsed-tooltip`}),y)),y};var C=o(76529),B=o(89442),S=o(10274),x=o(14747),y=o(33507),O=o(67771),k=o(50438),w=o(27036),H=o(45503);let j=e=>{let{componentCls:t,motionDurationSlow:o,horizontalLineHeight:n,colorSplit:r,lineWidth:i,lineType:l,itemPaddingInline:a}=e;return{[`${t}-horizontal`]:{lineHeight:n,border:0,borderBottom:`${(0,B.bf)(i)} ${l} ${r}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:a},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:`border-color ${o},background ${o}`},[`${t}-submenu-arrow`]:{display:"none"}}}},E=e=>{let{componentCls:t,menuArrowOffset:o,calc:n}=e;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${(0,B.bf)(n(o).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${(0,B.bf)(o)})`}}}}},T=e=>Object.assign({},(0,x.oN)(e)),z=(e,t)=>{let{componentCls:o,itemColor:n,itemSelectedColor:r,groupTitleColor:i,itemBg:l,subMenuItemBg:a,itemSelectedBg:s,activeBarHeight:c,activeBarWidth:d,activeBarBorderWidth:m,motionDurationSlow:u,motionEaseInOut:g,motionEaseOut:p,itemPaddingInline:$,motionDurationMid:b,itemHoverColor:f,lineType:v,colorSplit:h,itemDisabledColor:I,dangerItemColor:C,dangerItemHoverColor:S,dangerItemSelectedColor:x,dangerItemActiveBg:y,dangerItemSelectedBg:O,popupBg:k,itemHoverBg:w,itemActiveBg:H,menuSubMenuBg:j,horizontalItemSelectedColor:E,horizontalItemSelectedBg:z,horizontalItemBorderRadius:N,horizontalItemHoverBg:M}=e;return{[`${o}-${t}, ${o}-${t} > ${o}`]:{color:n,background:l,[`&${o}-root:focus-visible`]:Object.assign({},T(e)),[`${o}-item-group-title`]:{color:i},[`${o}-submenu-selected`]:{[`> ${o}-submenu-title`]:{color:r}},[`${o}-item, ${o}-submenu-title`]:{color:n,[`&:not(${o}-item-disabled):focus-visible`]:Object.assign({},T(e))},[`${o}-item-disabled, ${o}-submenu-disabled`]:{color:`${I} !important`},[`${o}-item:not(${o}-item-selected):not(${o}-submenu-selected)`]:{[`&:hover, > ${o}-submenu-title:hover`]:{color:f}},[`&:not(${o}-horizontal)`]:{[`${o}-item:not(${o}-item-selected)`]:{"&:hover":{backgroundColor:w},"&:active":{backgroundColor:H}},[`${o}-submenu-title`]:{"&:hover":{backgroundColor:w},"&:active":{backgroundColor:H}}},[`${o}-item-danger`]:{color:C,[`&${o}-item:hover`]:{[`&:not(${o}-item-selected):not(${o}-submenu-selected)`]:{color:S}},[`&${o}-item:active`]:{background:y}},[`${o}-item a`]:{"&, &:hover":{color:"inherit"}},[`${o}-item-selected`]:{color:r,[`&${o}-item-danger`]:{color:x},"a, a:hover":{color:"inherit"}},[`& ${o}-item-selected`]:{backgroundColor:s,[`&${o}-item-danger`]:{backgroundColor:O}},[`&${o}-submenu > ${o}`]:{backgroundColor:j},[`&${o}-popup > ${o}`]:{backgroundColor:k},[`&${o}-submenu-popup > ${o}`]:{backgroundColor:k},[`&${o}-horizontal`]:Object.assign(Object.assign({},"dark"===t?{borderBottom:0}:{}),{[`> ${o}-item, > ${o}-submenu`]:{top:m,marginTop:e.calc(m).mul(-1).equal(),marginBottom:0,borderRadius:N,"&::after":{position:"absolute",insetInline:$,bottom:0,borderBottom:`${(0,B.bf)(c)} solid transparent`,transition:`border-color ${u} ${g}`,content:'""'},"&:hover, &-active, &-open":{background:M,"&::after":{borderBottomWidth:c,borderBottomColor:E}},"&-selected":{color:E,backgroundColor:z,"&:hover":{backgroundColor:z},"&::after":{borderBottomWidth:c,borderBottomColor:E}}}}),[`&${o}-root`]:{[`&${o}-inline, &${o}-vertical`]:{borderInlineEnd:`${(0,B.bf)(m)} ${v} ${h}`}},[`&${o}-inline`]:{[`${o}-sub${o}-inline`]:{background:a},[`${o}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${(0,B.bf)(d)} solid ${r}`,transform:"scaleY(0.0001)",opacity:0,transition:`transform ${b} ${p},opacity ${b} ${p}`,content:'""'},[`&${o}-item-danger`]:{"&::after":{borderInlineEndColor:x}}},[`${o}-selected, ${o}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:`transform ${b} ${g},opacity ${b} ${g}`}}}}}},N=e=>{let{componentCls:t,itemHeight:o,itemMarginInline:n,padding:r,menuArrowSize:i,marginXS:l,itemMarginBlock:a,itemWidth:s}=e,c=e.calc(i).add(r).add(l).equal();return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:o,lineHeight:(0,B.bf)(o),paddingInline:r,overflow:"hidden",textOverflow:"ellipsis",marginInline:n,marginBlock:a,width:s},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:o,lineHeight:(0,B.bf)(o)},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:c}}},M=e=>{let{componentCls:t,iconCls:o,itemHeight:n,colorTextLightSolid:r,dropdownWidth:i,controlHeightLG:l,motionDurationMid:a,motionEaseOut:s,paddingXL:c,itemMarginInline:d,fontSizeLG:m,motionDurationSlow:u,paddingXS:g,boxShadowSecondary:p,collapsedWidth:$,collapsedIconSize:b}=e,f={height:n,lineHeight:(0,B.bf)(n),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":Object.assign({[`&${t}-root`]:{boxShadow:"none"}},N(e))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},N(e)),{boxShadow:p})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:i,maxHeight:`calc(100vh - ${(0,B.bf)(e.calc(l).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:`border-color ${u},background ${u},padding ${a} ${s},padding-inline calc(50% - ${(0,B.bf)(e.calc(m).div(2).equal())} - ${(0,B.bf)(d)})`,[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:f,[`& ${t}-item-group-title`]:{paddingInlineStart:c}},[`${t}-item`]:f}},{[`${t}-inline-collapsed`]:{width:$,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:m,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${(0,B.bf)(e.calc(m).div(2).equal())} - ${(0,B.bf)(d)})`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${o}`]:{margin:0,fontSize:b,lineHeight:(0,B.bf)(n),"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${o}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${o}`]:{display:"none"},"a, a:hover":{color:r}},[`${t}-item-group-title`]:Object.assign(Object.assign({},x.vS),{paddingInline:g})}}]},D=e=>{let{componentCls:t,motionDurationSlow:o,motionDurationMid:n,motionEaseInOut:r,motionEaseOut:i,iconCls:l,iconSize:a,iconMarginInlineEnd:s}=e;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:`border-color ${o},background ${o},padding ${o} ${r}`,[`${t}-item-icon, ${l}`]:{minWidth:a,fontSize:a,transition:`font-size ${n} ${i},margin ${o} ${r},color ${o}`,"+ span":{marginInlineStart:s,opacity:1,transition:`opacity ${o} ${r},margin ${o},color ${o}`}},[`${t}-item-icon`]:Object.assign({},(0,x.Ro)()),[`&${t}-item-only-child`]:{[`> ${l}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},R=e=>{let{componentCls:t,motionDurationSlow:o,motionEaseInOut:n,borderRadius:r,menuArrowSize:i,menuArrowOffset:l}=e;return{[`${t}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:i,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${o} ${n}, opacity ${o}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:e.calc(i).mul(.6).equal(),height:e.calc(i).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:r,transition:`background ${o} ${n},transform ${o} ${n},top ${o} ${n},color ${o} ${n}`,content:'""'},"&::before":{transform:`rotate(45deg) translateY(${(0,B.bf)(e.calc(l).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${(0,B.bf)(l)})`}}}}},A=e=>{let{antCls:t,componentCls:o,fontSize:n,motionDurationSlow:r,motionDurationMid:i,motionEaseInOut:l,paddingXS:a,padding:s,colorSplit:c,lineWidth:d,zIndexPopup:m,borderRadiusLG:u,subMenuItemBorderRadius:g,menuArrowSize:p,menuArrowOffset:$,lineType:b,groupTitleLineHeight:f,groupTitleFontSize:v}=e;return[{"":{[`${o}`]:Object.assign(Object.assign({},(0,x.dF)()),{"&-hidden":{display:"none"}})},[`${o}-submenu-hidden`]:{display:"none"}},{[o]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,x.Wf)(e)),(0,x.dF)()),{marginBottom:0,paddingInlineStart:0,fontSize:n,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${o}-item`]:{flex:"none"}},[`${o}-item, ${o}-submenu, ${o}-submenu-title`]:{borderRadius:e.itemBorderRadius},[`${o}-item-group-title`]:{padding:`${(0,B.bf)(a)} ${(0,B.bf)(s)}`,fontSize:v,lineHeight:f,transition:`all ${r}`},[`&-horizontal ${o}-submenu`]:{transition:`border-color ${r} ${l},background ${r} ${l}`},[`${o}-submenu, ${o}-submenu-inline`]:{transition:`border-color ${r} ${l},background ${r} ${l},padding ${i} ${l}`},[`${o}-submenu ${o}-sub`]:{cursor:"initial",transition:`background ${r} ${l},padding ${r} ${l}`},[`${o}-title-content`]:{transition:`color ${r}`,[`> ${t}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"}},[`${o}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${o}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:c,borderStyle:b,borderWidth:0,borderTopWidth:d,marginBlock:d,padding:0,"&-dashed":{borderStyle:"dashed"}}}),D(e)),{[`${o}-item-group`]:{[`${o}-item-group-list`]:{margin:0,padding:0,[`${o}-item, ${o}-submenu-title`]:{paddingInline:`${(0,B.bf)(e.calc(n).mul(2).equal())} ${(0,B.bf)(s)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:m,borderRadius:u,boxShadow:"none",transformOrigin:"0 0",[`&${o}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${o}`]:Object.assign(Object.assign(Object.assign({borderRadius:u},D(e)),R(e)),{[`${o}-item, ${o}-submenu > ${o}-submenu-title`]:{borderRadius:g},[`${o}-submenu-title::after`]:{transition:`transform ${r} ${l}`}})},[`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]:{transformOrigin:"100% 0"},[`
          &-placement-leftBottom,
          &-placement-topRight,
          `]:{transformOrigin:"100% 100%"},[`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]:{transformOrigin:"0 100%"},[`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]:{transformOrigin:"0 0"},[`
          &-placement-leftTop,
          &-placement-leftBottom
          `]:{paddingInlineEnd:e.paddingXS},[`
          &-placement-rightTop,
          &-placement-rightBottom
          `]:{paddingInlineStart:e.paddingXS},[`
          &-placement-topRight,
          &-placement-topLeft
          `]:{paddingBottom:e.paddingXS},[`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]:{paddingTop:e.paddingXS}}}),R(e)),{[`&-inline-collapsed ${o}-submenu-arrow,
        &-inline ${o}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${(0,B.bf)($)})`},"&::after":{transform:`rotate(45deg) translateX(${(0,B.bf)(e.calc($).mul(-1).equal())})`}},[`${o}-submenu-open${o}-submenu-inline > ${o}-submenu-title > ${o}-submenu-arrow`]:{transform:`translateY(${(0,B.bf)(e.calc(p).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${(0,B.bf)(e.calc($).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${(0,B.bf)($)})`}}})},{[`${t}-layout-header`]:{[o]:{lineHeight:"inherit"}}}]},P=e=>{var t,o,n;let{colorPrimary:r,colorError:i,colorTextDisabled:l,colorErrorBg:a,colorText:s,colorTextDescription:c,colorBgContainer:d,colorFillAlter:m,colorFillContent:u,lineWidth:g,lineWidthBold:p,controlItemBgActive:$,colorBgTextHover:b,controlHeightLG:f,lineHeight:v,colorBgElevated:h,marginXXS:I,padding:C,fontSize:B,controlHeightSM:x,fontSizeLG:y,colorTextLightSolid:O,colorErrorHover:k}=e,w=null!==(t=e.activeBarWidth)&&void 0!==t?t:0,H=null!==(o=e.activeBarBorderWidth)&&void 0!==o?o:g,j=null!==(n=e.itemMarginInline)&&void 0!==n?n:e.marginXXS,E=new S.C(O).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,itemBorderRadius:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,subMenuItemBorderRadius:e.borderRadiusSM,colorItemText:s,itemColor:s,colorItemTextHover:s,itemHoverColor:s,colorItemTextHoverHorizontal:r,horizontalItemHoverColor:r,colorGroupTitle:c,groupTitleColor:c,colorItemTextSelected:r,itemSelectedColor:r,colorItemTextSelectedHorizontal:r,horizontalItemSelectedColor:r,colorItemBg:d,itemBg:d,colorItemBgHover:b,itemHoverBg:b,colorItemBgActive:u,itemActiveBg:$,colorSubItemBg:m,subMenuItemBg:m,colorItemBgSelected:$,itemSelectedBg:$,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:w,colorActiveBarHeight:p,activeBarHeight:p,colorActiveBarBorderSize:g,activeBarBorderWidth:H,colorItemTextDisabled:l,itemDisabledColor:l,colorDangerItemText:i,dangerItemColor:i,colorDangerItemTextHover:i,dangerItemHoverColor:i,colorDangerItemTextSelected:i,dangerItemSelectedColor:i,colorDangerItemBgActive:a,dangerItemActiveBg:a,colorDangerItemBgSelected:a,dangerItemSelectedBg:a,itemMarginInline:j,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:f,groupTitleLineHeight:v,collapsedWidth:2*f,popupBg:h,itemMarginBlock:I,itemPaddingInline:C,horizontalLineHeight:`${1.15*f}px`,iconSize:B,iconMarginInlineEnd:x-B,collapsedIconSize:y,groupTitleFontSize:B,darkItemDisabledColor:new S.C(O).setAlpha(.25).toRgbString(),darkItemColor:E,darkDangerItemColor:i,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:O,darkItemSelectedBg:r,darkDangerItemSelectedBg:i,darkItemHoverBg:"transparent",darkGroupTitleColor:E,darkItemHoverColor:O,darkDangerItemHoverColor:k,darkDangerItemSelectedColor:O,darkDangerItemActiveBg:i,itemWidth:w?`calc(100% + ${H}px)`:`calc(100% - ${2*j}px)`}};var W=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=(0,w.I$)("Menu",e=>{let{colorBgElevated:t,controlHeightLG:o,fontSize:n,darkItemColor:r,darkDangerItemColor:i,darkItemBg:l,darkSubMenuItemBg:a,darkItemSelectedColor:s,darkItemSelectedBg:c,darkDangerItemSelectedBg:d,darkItemHoverBg:m,darkGroupTitleColor:u,darkItemHoverColor:g,darkItemDisabledColor:p,darkDangerItemHoverColor:$,darkDangerItemSelectedColor:b,darkDangerItemActiveBg:f,popupBg:v,darkPopupBg:h}=e,I=e.calc(n).div(7).mul(5).equal(),C=(0,H.TS)(e,{menuArrowSize:I,menuHorizontalHeight:e.calc(o).mul(1.15).equal(),menuArrowOffset:e.calc(I).mul(.25).equal(),menuSubMenuBg:t,calc:e.calc,popupBg:v}),B=(0,H.TS)(C,{itemColor:r,itemHoverColor:g,groupTitleColor:u,itemSelectedColor:s,itemBg:l,popupBg:h,subMenuItemBg:a,itemActiveBg:"transparent",itemSelectedBg:c,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:m,itemDisabledColor:p,dangerItemColor:i,dangerItemHoverColor:$,dangerItemSelectedColor:b,dangerItemActiveBg:f,dangerItemSelectedBg:d,menuSubMenuBg:a,horizontalItemSelectedColor:s,horizontalItemSelectedBg:c});return[A(C),j(C),M(C),z(C,"light"),z(B,"dark"),E(C),(0,y.Z)(C),(0,O.oN)(C,"slide-up"),(0,O.oN)(C,"slide-down"),(0,k._y)(C,"zoom-big")]},P,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:o,unitless:{groupTitleLineHeight:!0}});return n(e,t)},q=o(87263);let Z=e=>{var t;let o;let{popupClassName:i,icon:a,title:s,theme:c}=e,m=n.useContext($),{prefixCls:g,inlineCollapsed:p,theme:b}=m,f=(0,r.Xl)();if(a){let e=n.isValidElement(s)&&"span"===s.type;o=n.createElement(n.Fragment,null,(0,u.Tm)(a,{className:l()(n.isValidElement(a)?null===(t=a.props)||void 0===t?void 0:t.className:"",`${g}-item-icon`)}),e?s:n.createElement("span",{className:`${g}-title-content`},s))}else o=p&&!f.length&&s&&"string"==typeof s?n.createElement("div",{className:`${g}-inline-collapsed-noicon`},s.charAt(0)):n.createElement("span",{className:`${g}-title-content`},s);let v=n.useMemo(()=>Object.assign(Object.assign({},m),{firstLevel:!1}),[m]),[h]=(0,q.Cn)("Menu");return n.createElement($.Provider,{value:v},n.createElement(r.Wd,Object.assign({},(0,d.Z)(e,["icon"]),{title:o,popupClassName:l()(g,i,`${g}-${c||b}`),popupStyle:{zIndex:h}})))};var X=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};function L(e){return null===e||!1===e}let Y={item:I,submenu:Z,divider:f},_=(0,n.forwardRef)((e,t)=>{var o;let i=n.useContext(C.Z),a=i||{},{getPrefixCls:b,getPopupContainer:f,direction:v,menu:h}=n.useContext(g.E_),I=b(),{prefixCls:B,className:S,style:x,theme:y="light",expandIcon:O,_internalDisableMenuItemTitleTooltip:k,inlineCollapsed:w,siderCollapsed:H,rootClassName:j,mode:E,selectable:T,onClick:z,overflowedIndicatorPopupClassName:N}=e,M=X(e,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),D=(0,d.Z)(M,["collapsedWidth"]);null===(o=a.validator)||void 0===o||o.call(a,{mode:E});let R=(0,c.zX)(function(){var e;null==z||z.apply(void 0,arguments),null===(e=a.onClick)||void 0===e||e.call(a)}),A=a.mode||E,P=null!=T?T:a.selectable,q=n.useMemo(()=>void 0!==H?H:w,[w,H]),Z={horizontal:{motionName:`${I}-slide-up`},inline:(0,m.Z)(I),other:{motionName:`${I}-zoom-big`}},_=b("menu",B||a.prefixCls),G=(0,p.Z)(_),[V,F,J]=W(_,G,!i),K=l()(`${_}-${y}`,null==h?void 0:h.className,S),Q=n.useMemo(()=>{var e,t;if("function"==typeof O||L(O))return O||null;if("function"==typeof a.expandIcon||L(a.expandIcon))return a.expandIcon||null;if("function"==typeof(null==h?void 0:h.expandIcon)||L(null==h?void 0:h.expandIcon))return(null==h?void 0:h.expandIcon)||null;let o=null!==(e=null!=O?O:null==a?void 0:a.expandIcon)&&void 0!==e?e:null==h?void 0:h.expandIcon;return(0,u.Tm)(o,{className:l()(`${_}-submenu-expand-icon`,n.isValidElement(o)?null===(t=o.props)||void 0===t?void 0:t.className:void 0)})},[O,null==a?void 0:a.expandIcon,null==h?void 0:h.expandIcon,_]),U=n.useMemo(()=>({prefixCls:_,inlineCollapsed:q||!1,direction:v,firstLevel:!0,theme:y,mode:A,disableMenuItemTitleTooltip:k}),[_,q,v,k,y]);return V(n.createElement(C.Z.Provider,{value:null},n.createElement($.Provider,{value:U},n.createElement(r.ZP,Object.assign({getPopupContainer:f,overflowedIndicator:n.createElement(s.Z,null),overflowedIndicatorPopupClassName:l()(_,`${_}-${y}`,N),mode:A,selectable:P,onClick:R},D,{inlineCollapsed:q,style:Object.assign(Object.assign({},null==h?void 0:h.style),x),className:K,prefixCls:_,direction:v,defaultMotions:Z,expandIcon:Q,ref:t,rootClassName:l()(j,F,a.rootClassName,J,G),_internalComponents:Y})))))}),G=(0,n.forwardRef)((e,t)=>{let o=(0,n.useRef)(null),r=n.useContext(a);return(0,n.useImperativeHandle)(t,()=>({menu:o.current,focus:e=>{var t;null===(t=o.current)||void 0===t||t.focus(e)}})),n.createElement(_,Object.assign({ref:o},e,r))});G.Item=I,G.SubMenu=Z,G.Divider=f,G.ItemGroup=r.BW;var V=G},33507:function(e,t){let o=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}});t.Z=o}}]);