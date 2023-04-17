"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[514,972],{9963:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ce}});var a=n(7294),l=n(4334),r=n(1944),o=n(5281),c=n(2802),i=n(3320),s=n(4477),d=n(1116),m=n(2164),u=n(5999),b=n(2466),p=n(5936);var h="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:o,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(r.current?r.current=!1:a>=o?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var v=n(6775),g=n(7524),_=n(6668),k=n(1327),C=n(3117);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var N="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function Z(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",N),onClick:t},a.createElement(I,{className:S}))}var y=n(9689),T=n(902);const x=Symbol("EmptyContext"),L=a.createContext(x);function w(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(L.Provider,{value:r},t)}var M=n(6043),F=n(8596),A=n(9960),B=n(2389);function P(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function H(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),f=function(e){const t=(0,B.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),v=(0,c._F)(t,r),g=(0,F.Mg)(h,r),{collapsed:k,setCollapsed:I}=(0,M.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:N,setExpandedItem:S}=function(){const e=(0,a.useContext)(L);if(e===x)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!k),S(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:v,collapsed:k,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&N&&N!==s&&E&&I(!0)}),[b,N,s,I,E]),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(A.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":v}),onClick:b?e=>{null==n||n(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!k:void 0,href:b?null!=f?f:"#":f},d),u),h&&b&&a.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(q,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:r,level:i+1})))}var W=n(3919),D=n(9471),R="menuExternalLink_NmtK";function z(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{href:m,label:u,className:b}=t,p=(0,c._F)(t,r),h=(0,W.Z)(m);return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(A.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!h&&R,{"menu__link--active":p}),"aria-current":p?"page":void 0,to:m},h&&{onClick:n?()=>n(t):void 0},d),u,!h&&a.createElement(D.Z,null)))}var V="menuHtmlItem_M9Kj";function K(e){let{item:t,level:n,index:r}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),i&&[V,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:c}})}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(H,(0,C.Z)({item:t},n));case"html":return a.createElement(K,(0,C.Z)({item:t},n));default:return a.createElement(z,(0,C.Z)({item:t},n))}}function j(e){let{items:t,...n}=e;return a.createElement(w,null,t.map(((e,t)=>a.createElement(U,(0,C.Z)({key:t,item:e,index:t},n)))))}var q=(0,a.memo)(j),G="menu_SIkG",Y="menuWithAnnouncementBar_GW3s";function O(e){let{path:t,sidebar:n,className:r}=e;const c=function(){const{isActive:e}=(0,y.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",G,c&&Y,r)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:n,activePath:t,level:1})))}var X="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:n,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,_.L)();return a.createElement("div",{className:(0,l.Z)(X,c&&J,o&&Q)},c&&a.createElement(k.Z,{tabIndex:-1,className:$}),a.createElement(O,{path:t,sidebar:n}),i&&a.createElement(Z,{onClick:r}))}var te=a.memo(ee),ne=n(3102),ae=n(2961);const le=e=>{let{sidebar:t,path:n}=e;const r=(0,ae.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return a.createElement(ne.Zo,{component:le,props:e})}var oe=a.memo(re);function ce(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(te,e),l&&a.createElement(oe,e))}var ie="expandButton_m80_",se="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ie,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:se}))}var me="docSidebarContainer_b6E3",ue="docSidebarContainerHidden_b3ry";function be(e){var t;let{children:n}=e;const l=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},n)}function pe(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:c}=(0,v.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),r((e=>!e))}),[r,i]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,me,n&&ue),onTransitionEnd:e=>{e.currentTarget.classList.contains(me)&&n&&s(!0)}},a.createElement(be,null,a.createElement(ce,{sidebar:t,path:c,onCollapse:d,isHidden:i})),i&&a.createElement(de,{toggleSidebar:d}))}var he={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ee(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(he.docMainContainer,(t||!r)&&he.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},n))}var fe="docPage__5DB",ve="docsWrapper_BCFX";function ge(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ve},a.createElement(f,null),a.createElement("div",{className:fe},n&&a.createElement(pe,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(Ee,{hiddenSidebarContainer:l},t)))}var _e=n(4972),ke=n(197);function Ce(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(_e.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=n;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:b},a.createElement(ge,null,m)))))}},4972:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),l=n(5999),r=n(1944),o=n(2164);function c(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4477:function(e,t,n){n.d(t,{E:function(){return c},q:function(){return o}});var a=n(7294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);