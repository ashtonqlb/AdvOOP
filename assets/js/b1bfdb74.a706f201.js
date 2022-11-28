"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[889],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7977:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},c="Title 1",u={unversionedId:"Testing-Features/md_features",id:"Testing-Features/md_features",isDocsHomePage:!1,title:"Title 1",description:"Title 2",source:"@site/docs/Testing-Features/md_features.md",sourceDirName:"Testing-Features",slug:"/Testing-Features/md_features",permalink:"/Testing-Features/md_features",editUrl:"https://github.com/Seneca-ICTOER/AdvOOP/tree/main/docs/Testing-Features/md_features.md",tags:[],version:"current",frontMatter:{},sidebar:"courseNotesSidebar",previous:{title:"How C++ and C Fit Together",permalink:"/Resources-Appendices/c-and-cpp"}},s=[{value:"Title 2",id:"title-2",children:[{value:"Title 3",id:"title-3",children:[{value:"Title 4",id:"title-4",children:[{value:"Title 5",id:"title-5",children:[{value:"Title 6",id:"title-6",children:[],level:6}],level:5}],level:4}],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"title-1"},"Title 1"),(0,i.kt)("h2",{id:"title-2"},"Title 2"),(0,i.kt)("h3",{id:"title-3"},"Title 3"),(0,i.kt)("h4",{id:"title-4"},"Title 4"),(0,i.kt)("h5",{id:"title-5"},"Title 5"),(0,i.kt)("h6",{id:"title-6"},"Title 6"),(0,i.kt)("p",null,"Si asta spune cel ce spune:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Citat din creanga. Oare cum e sa citezi as de talentat")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mermaid"},"  graph TD;\n      A--\x3eB;\n      A--\x3eC;\n      B--\x3eD;\n      C--\x3eD;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD\n    A{Does your flowchart have arrows?} --\x3e B[No]\n    A --\x3e C[yes]\n    B --\x3e D(Add them already)\n    C --\x3e E(Yay, what a great flowchart!)\n    D -.->|you can even add text to them| A\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph LR\n\nA & B--\x3e C & D\nstyle A fill:#f9f,stroke:#333,stroke-width:px\nstyle B fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5\n\nsubgraph beginning\nA & B\nend\n\nsubgraph ending\nC & D\nend\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mermaid"},"gantt\ntitle Writing my thesis\ndateFormat  MM-DD\naxisFormat  %m-%d\nsection Research\nProcrastinate           :a1, 01-01, 59d\nDo it     :after a1  , 10d\nsection Write-up\nShould I start?     :03-01 , 20d\nUgh ok      : 6d\n")))}d.isMDXComponent=!0}}]);