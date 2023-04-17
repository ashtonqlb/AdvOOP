"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[978],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(n),k=i,g=m["".concat(p,".").concat(k)]||m[k]||u[k]||r;return n?a.createElement(g,l(l({ref:e},s),{},{components:n})):a.createElement(g,l({ref:e},s))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1066:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return d}});var a=n(3117),i=(n(7294),n(3905));const r={id:"bit-wise-expressions",title:"Bit-Wise Expressions",sidebar_position:4,description:"TBD"},l="Bit-Wise Expressions",o={unversionedId:"H-Deeper-Detail/bit-wise-expressions",id:"H-Deeper-Detail/bit-wise-expressions",title:"Bit-Wise Expressions",description:"TBD",source:"@site/docs/H-Deeper-Detail/bit-wise-expressions.md",sourceDirName:"H-Deeper-Detail",slug:"/H-Deeper-Detail/bit-wise-expressions",permalink:"/H-Deeper-Detail/bit-wise-expressions",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/AdvOOP/tree/main/docs/H-Deeper-Detail/bit-wise-expressions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"bit-wise-expressions",title:"Bit-Wise Expressions",sidebar_position:4,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Multiple Inheritance",permalink:"/H-Deeper-Detail/multiple-inheritance"},next:{title:"Linked List Technology",permalink:"/H-Deeper-Detail/linked-list-technology"}},p={},d=[{value:"Operator Precedence",id:"operator-precedence",level:2},{value:"Order of Evaluation",id:"order-of-evaluation",level:3},{value:"Unary Expression",id:"unary-expression",level:2},{value:"Bit-Wise Negation",id:"bit-wise-negation",level:3},{value:"Good Design Practice",id:"good-design-practice",level:3},{value:"Binary Expressions",id:"binary-expressions",level:2},{value:"Bit-Shifting",id:"bit-shifting",level:3},{value:"Left-Shift Operator",id:"left-shift-operator",level:4},{value:"Right-Shift Operator",id:"right-shift-operator",level:4},{value:"Multiplying and Dividing by Powers of 2",id:"multiplying-and-dividing-by-powers-of-2",level:4},{value:"Bit-Wise and",id:"bit-wise-and",level:3},{value:"Masking",id:"masking",level:4},{value:"Oddness Test",id:"oddness-test",level:4},{value:"Fast Remainder",id:"fast-remainder",level:4},{value:"Bit-Wise or",id:"bit-wise-or",level:3},{value:"Turn-on a Bit",id:"turn-on-a-bit",level:4},{value:"Bit-Wise Exclusive or",id:"bit-wise-exclusive-or",level:3},{value:"Flipping Selected Bits",id:"flipping-selected-bits",level:4},{value:"Assignment Expressions",id:"assignment-expressions",level:3},{value:"Compound Assignment",id:"compound-assignment",level:4},{value:"Bit Fields",id:"bit-fields",level:2},{value:"Exercises",id:"exercises",level:2}],s={toc:d};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bit-wise-expressions"},"Bit-Wise Expressions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Classify bit-wise operation order among other operations"),(0,i.kt)("li",{parentName:"ul"},"Describe how to access and manipulate the individual bits of a type"),(0,i.kt)("li",{parentName:"ul"},"Declare bit fields in a class type")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"C ',"[and hence C++]",' has an unusually rich set of operators that provide access to most of the operations provided by the underlying hardware." Harbison and Steele (2002)')),(0,i.kt)("p",null,"Bit-wise expressions provide the mechanism for accessing individual bits within a type and creating new values by operating on the individual bits of the operands. Each bit-wise expression has its own value and type. The C++ bit-wise operators define the language facilities for accessing and manipulating the bits within the bytes of integral and enumerated types. These operators follow the rules of precedence of the language."),(0,i.kt)("p",null,"This chapter completes the chapter entitled ",(0,i.kt)("a",{parentName:"p",href:"/D-Processing/expressions"},"Expressions")," by reviewing the precedence rules for the bit-wise operators and describing the bit-wise expressions that C++ supports on integral and enumerated types. This chapter also shows how to declare bit fields in a class type."),(0,i.kt)("h2",{id:"operator-precedence"},"Operator Precedence"),(0,i.kt)("h3",{id:"order-of-evaluation"},"Order of Evaluation"),(0,i.kt)("p",null,"A compound expression evaluates according to rules defined through the precedence table below. These rules cannot be changed. The compiler evaluates the expression with the operator that has a higher precedence before evaluating any other expression. Some operators associate from left to right, while other operators associate from right to left. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Precedence"),(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Operator"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Associates"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"18"),(0,i.kt)("td",{parentName:"tr",align:null},"primary"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"name, literal"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"18"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"::")),(0,i.kt)("td",{parentName:"tr",align:null},"scope resolution"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"17"),(0,i.kt)("td",{parentName:"tr",align:null},"postfix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"array subscripting"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"17"),(0,i.kt)("td",{parentName:"tr",align:null},"postfix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"( )")),(0,i.kt)("td",{parentName:"tr",align:null},"function call"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"17"),(0,i.kt)("td",{parentName:"tr",align:null},"postfix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".")),(0,i.kt)("td",{parentName:"tr",align:null},"direct selection"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"17"),(0,i.kt)("td",{parentName:"tr",align:null},"postfix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"->")),(0,i.kt)("td",{parentName:"tr",align:null},"indirect selection"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"17"),(0,i.kt)("td",{parentName:"tr",align:null},"postfix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"++")," ",(0,i.kt)("inlineCode",{parentName:"td"},"--")),(0,i.kt)("td",{parentName:"tr",align:null},"postfix increment, decrement"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"17"),(0,i.kt)("td",{parentName:"tr",align:null},"postfix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"typeid()")),(0,i.kt)("td",{parentName:"tr",align:null},"type name"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"17"),(0,i.kt)("td",{parentName:"tr",align:null},"postfix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"const_cast")),(0,i.kt)("td",{parentName:"tr",align:null},"constant type conversion"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"17"),(0,i.kt)("td",{parentName:"tr",align:null},"postfix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dynamic_cast")),(0,i.kt)("td",{parentName:"tr",align:null},"dynamic type conversion"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"17"),(0,i.kt)("td",{parentName:"tr",align:null},"postfix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"reinterpret_cast")),(0,i.kt)("td",{parentName:"tr",align:null},"reinterpreted type conversion"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"17"),(0,i.kt)("td",{parentName:"tr",align:null},"postfix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"static_cast")),(0,i.kt)("td",{parentName:"tr",align:null},"static type conversion"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"prefix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"++")," ",(0,i.kt)("inlineCode",{parentName:"td"},"--")),(0,i.kt)("td",{parentName:"tr",align:null},"prefix increment, decrement"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sizeof")),(0,i.kt)("td",{parentName:"tr",align:null},"size"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"!")),(0,i.kt)("td",{parentName:"tr",align:null},"logical negation"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"~")),(0,i.kt)("td",{parentName:"tr",align:null},"bit-wise negation"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-")," ",(0,i.kt)("inlineCode",{parentName:"td"},"+")),(0,i.kt)("td",{parentName:"tr",align:null},"arithmetic negation, plus"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"&")),(0,i.kt)("td",{parentName:"tr",align:null},"address of"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*")),(0,i.kt)("td",{parentName:"tr",align:null},"indirection"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"new")," ",(0,i.kt)("inlineCode",{parentName:"td"},"new[]")),(0,i.kt)("td",{parentName:"tr",align:null},"dynamic memory allocation"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"delete")," ",(0,i.kt)("inlineCode",{parentName:"td"},"delete[]")),(0,i.kt)("td",{parentName:"tr",align:null},"dynamic memory deallocation"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"alignof(type)")),(0,i.kt)("td",{parentName:"tr",align:null},"alignment requirement"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"noexcept()")),(0,i.kt)("td",{parentName:"tr",align:null},"controls exception throwing"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(type)")),(0,i.kt)("td",{parentName:"tr",align:null},"type casting"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"15"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".*")),(0,i.kt)("td",{parentName:"tr",align:null},"object to member pointer"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"15"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"->*")),(0,i.kt)("td",{parentName:"tr",align:null},"pointer to member pointer"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"14"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*")," ",(0,i.kt)("inlineCode",{parentName:"td"},"/")," ",(0,i.kt)("inlineCode",{parentName:"td"},"%")),(0,i.kt)("td",{parentName:"tr",align:null},"multiplicative"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"13"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"+")," ",(0,i.kt)("inlineCode",{parentName:"td"},"-")),(0,i.kt)("td",{parentName:"tr",align:null},"additive"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"12"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<<")," ",(0,i.kt)("inlineCode",{parentName:"td"},">>")),(0,i.kt)("td",{parentName:"tr",align:null},"left and right bit shifting"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"11"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<")," ",(0,i.kt)("inlineCode",{parentName:"td"},">")," ",(0,i.kt)("inlineCode",{parentName:"td"},"<=")," ",(0,i.kt)("inlineCode",{parentName:"td"},">=")),(0,i.kt)("td",{parentName:"tr",align:null},"relational"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"==")," ",(0,i.kt)("inlineCode",{parentName:"td"},"!=")),(0,i.kt)("td",{parentName:"tr",align:null},"equality, inequality"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"&")),(0,i.kt)("td",{parentName:"tr",align:null},"bit-wise logical and"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"^")),(0,i.kt)("td",{parentName:"tr",align:null},"bit-wise logical exclusive or"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u01c0")),(0,i.kt)("td",{parentName:"tr",align:null},"bit-wise logical or"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"&&")),(0,i.kt)("td",{parentName:"tr",align:null},"logical and"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u01c0\u01c0")),(0,i.kt)("td",{parentName:"tr",align:null},"logical or"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"ternary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"?:")),(0,i.kt)("td",{parentName:"tr",align:null},"conditional"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"+=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"-=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"*=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"/=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"%=")),(0,i.kt)("td",{parentName:"tr",align:null},"compound type-wise assignment"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"~=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"&=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"^=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"\u01c0=")," ",(0,i.kt)("inlineCode",{parentName:"td"},">>=")," ",(0,i.kt)("inlineCode",{parentName:"td"},"<<=")),(0,i.kt)("td",{parentName:"tr",align:null},"compound bit-wise assignment"),(0,i.kt)("td",{parentName:"tr",align:null},"right-to-left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"unary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"throw")),(0,i.kt)("td",{parentName:"tr",align:null},"transfers control to exception handler"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"binary"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},",")),(0,i.kt)("td",{parentName:"tr",align:null},"sequencing"),(0,i.kt)("td",{parentName:"tr",align:null},"left-to-right")))),(0,i.kt)("p",null,"To override the order defined in this table, we enclose the expressions to be evaluated first within parentheses."),(0,i.kt)("h2",{id:"unary-expression"},"Unary Expression"),(0,i.kt)("h3",{id:"bit-wise-negation"},"Bit-Wise Negation"),(0,i.kt)("p",null,"The bit-wise negation operator (",(0,i.kt)("inlineCode",{parentName:"p"},"~"),") converts its operand to its one's complement. The operand may be of integral or unscoped enumerated type. The result of the operation is a ",(0,i.kt)("em",{parentName:"p"},"prvalue"),"."),(0,i.kt)("p",null,"For instance, applying the negation operator to the following bit pattern"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"01011001 11001101 11101011 11100010\n")),(0,i.kt)("p",null,"yields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"10100110 00110010 00010100 00011101\n")),(0,i.kt)("p",null,"The following program yields the output shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Bitwise Expressions - Negation\n// negation.cpp\n\n#include <iostream>\n#include <iomanip>\nusing namespace std;\ntypedef unsigned char  uc;\ntypedef signed   char  sc;\ntypedef unsigned short us;\ntypedef signed   short ss;\ntypedef unsigned int   ui;\ntypedef signed   int   si;\n\nint main ()\n{\n  ui u = 27u;\n  us s = (us)27u;\n  uc c = (uc)27;\n\n  si i = 27;\n  ss t = (ss)27;\n  sc d = (sc)27;\n\n  cout << "u:" << u << ",~u:" << setw(10) << ~u\n       << ",~~u:" << setw(3) << ~~u << endl;\n  cout << "s:" << s << ",~s:" << setw(10) << (us)~s\n       << ",~~s:" << setw(3) << ~~s << endl;\n  cout << "c:" << (ui)c << ",~c:" << setw(10) << (ui)(uc)~c\n       << ",~~c:" << setw(3) << ~~c << endl;\n\n  cout << "i:" << i << ",~i:" << setw(10) << ~i\n       << ",~~i:" << setw(3) << ~~i << endl;\n  cout << "t:" << t << ",~t:" << setw(10) << ~t\n       << ",~~t:" << setw(3) << ~~t << endl;\n  cout << "d:" << (si)d << ",~d:" << setw(10) << ~d\n       << ",~~d:" << setw(3) << ~~d << endl;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"u:27,~u:4294967268,~~u:27\ns:27,~s:     65508,~~s:27\nc:27,~c:       228,~~c:27\ni:27,~i:       -28,~~i:27\nt:27,~t:       -28,~~t:27\nd:27,~d:       -28,~~d:27\n")),(0,i.kt)("p",null,"Negation is self-inverting: the negation of the negation of a value is the original value."),(0,i.kt)("p",null,"The negation of an ",(0,i.kt)("inlineCode",{parentName:"p"},"unsigned")," variable is the largest number that an ",(0,i.kt)("inlineCode",{parentName:"p"},"unsigned")," type can store less its original value."),(0,i.kt)("h3",{id:"good-design-practice"},"Good Design Practice"),(0,i.kt)("p",null,"Representation of negative integers is not defined in the language standard and different platforms may use different rules. Since the result of a bit-wise negation on a ",(0,i.kt)("inlineCode",{parentName:"p"},"signed")," integral value is not fully portable, it is better to limit the use of bit-wise negation expressions to ",(0,i.kt)("inlineCode",{parentName:"p"},"unsigned")," integral types."),(0,i.kt)("h2",{id:"binary-expressions"},"Binary Expressions"),(0,i.kt)("p",null,"Binary expressions consist of two operands and one operator. They include bit-shifting, bit-wise and, bit-wise or and bit-wise exclusive or operators. They evaluate to ",(0,i.kt)("em",{parentName:"p"},"prvalues"),"."),(0,i.kt)("h3",{id:"bit-shifting"},"Bit-Shifting"),(0,i.kt)("p",null,"Bit-shifting expressions shift the bit pattern of the left operand towards its left or right end. The right operand specifies the number of bit positions by which to shift the pattern. The left operand is of integral or unscoped enumeration type. The right operand is of integral or unscoped enumeration type and non-negative in value. The expression evaluates to the result, is of the same type as the left operand, and is a ",(0,i.kt)("em",{parentName:"p"},"prvalue"),"."),(0,i.kt)("h4",{id:"left-shift-operator"},"Left-Shift Operator"),(0,i.kt)("p",null,"The left-shift operator (",(0,i.kt)("inlineCode",{parentName:"p"},"<<"),") shifts the bits in the left operand to the left by the value of the right operand and fills the vacated bits with 0 values."),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Bitwise Expressions - Left Shift\n// left.cpp\n\n#include <iostream>\n\nint main ()\n{\n  unsigned u = 27u;  // 0...00011011\n\n  std::cout << u << " << " << 2 << " = " << (u << 2) << std::endl;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"27 << 2 = 108\n")),(0,i.kt)("p",null,"For an ",(0,i.kt)("inlineCode",{parentName:"p"},"unsigned")," left operand, the result is the left operand multiplied by 2 to the power of the right operand."),(0,i.kt)("h4",{id:"right-shift-operator"},"Right-Shift Operator"),(0,i.kt)("p",null,"The right-shift operator (",(0,i.kt)("inlineCode",{parentName:"p"},">>"),") shifts the bits in the left operand to the right by the value of the right operand and fills the vacated bits with the value of the highest order bit."),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Bitwise Expressions - Right Shift\n// right.cpp\n\n#include <iostream>\n#include <climits>\n\nint main ()\n{\n  unsigned u, v;\n  int w;\n\n  u = 27u;                                   // 0...0011011\n  v = 1u << sizeof(unsigned) * CHAR_BIT - 1; // 10..0000000\n  w = -1;                                    // 1...1111111\n\n  std::cout << u << " >> " << 2 << " = " << (u >> 2) << std::endl;\n  std::cout << v << " >> " << 8 << " = " << (v >> 8) << std::endl;\n  std::cout << w << " >> " << 2 << " = " << (w >> 2) << std::endl;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"27 >> 2 = 6\n2147483648 >> 8 = 8388608\n-1 >> 2 = -1\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CHAR_BIT")," holds the number of bits in a byte and is defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"<climits>"),"."),(0,i.kt)("p",null,"For an ",(0,i.kt)("inlineCode",{parentName:"p"},"unsigned")," left operand, the result is the left operand divided by 2 to the power of the right operand."),(0,i.kt)("h4",{id:"multiplying-and-dividing-by-powers-of-2"},"Multiplying and Dividing by Powers of 2"),(0,i.kt)("p",null,"Bit-shifting expressions provide fast multiplication or division by powers of 2. That is,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"27 << 0 is equal to 27 * 1 = 27  // 0...00011011\n27 << 1 is equal to 27 * 2 = 54  // 0...00110110\n27 << 2 is equal to 27 * 4 = 108 // 0...01101100\n27 << 3 is equal to 27 * 8 = 216 // 0...11011000\n")),(0,i.kt)("p",null,"and"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"27 >> 0 is equal to 27 / 1 = 27 // 0...00011011\n27 >> 1 is equal to 27 / 2 = 13 // 0...00001101\n27 >> 2 is equal to 27 / 4 = 6  // 0...00000110\n27 >> 3 is equal to 27 / 8 = 3  // 0...00000011\n")),(0,i.kt)("h3",{id:"bit-wise-and"},"Bit-Wise and"),(0,i.kt)("p",null,"The bit-wise 'and' operator (",(0,i.kt)("inlineCode",{parentName:"p"},"&"),") compares every bit of the left and right operands and returns a value of the same type that consists of the bit by bit results of the comparison. The operands are of integral or unscoped enumeration type. The rules for an 'and' comparison are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if both bit values are 1, the resultant bit value is 1"),(0,i.kt)("li",{parentName:"ul"},"otherwise, the resultant bit value is 0")),(0,i.kt)("h4",{id:"masking"},"Masking"),(0,i.kt)("p",null,"We can use bit-wise 'and' expressions to extract individual bits from a variable. Consider the following two operands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"01011001 11001101 11101011 11100010\n00000000 00000000 00001111 00000000\n")),(0,i.kt)("p",null,"The bit-wise 'and' operator applied to these two operands yields the following result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"00000000 00000000 00001011 00000000\n")),(0,i.kt)("p",null,"That is, we retrieve the 8th-11th bit values (the rightmost bit being bit 0) of the left operand. The right operand ignores all but bits 8 through 11. We call the operand that defines the bits to extract the ",(0,i.kt)("em",{parentName:"p"},"mask"),"."),(0,i.kt)("p",null,"The following example yields the output shown below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Bit-wise and\n// and.cpp\n\n#include <iostream>\n\nint main ()\n{\n  unsigned char u = 27u;  // 00011011 = 27\n  unsigned char v = 14u;  // 00001110 = 14 - mask\n                          // -------------\n                          // 00001010 = 10\n\n  std::cout << (unsigned)u << " & " << (unsigned)v << " = " << (u & v) << \'\\n\';\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"27 & 14 = 10\n")),(0,i.kt)("p",null,"The parentheses are necessary since the insertion operator (",(0,i.kt)("inlineCode",{parentName:"p"},"<<"),") is of higher precedence than the bit-wise 'and' operator."),(0,i.kt)("h4",{id:"oddness-test"},"Oddness Test"),(0,i.kt)("p",null,"The bit-wise 'and' operator with a right operand of 1 returns the oddness of the left operand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"bool odd = (bool)(value & 1)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"odd")," has the value ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if value is odd, ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if value is even."),(0,i.kt)("h4",{id:"fast-remainder"},"Fast Remainder"),(0,i.kt)("p",null,"The bit-wise 'and' operator can extract the remainder of a division by powers of 2 more efficiently than the modulus operator. The bit-wise 'and' expression on a left operand with the right operand set to one less than the divisor gives the remainder directly"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"unsigned char u = 27u; // 00011011\n\n27 & (1 - 1) is equal to 00000000 or 0 which is 27 % 1\n27 & (2 - 1) is equal to 00000001 or 1 which is 27 % 2\n27 & (4 - 1) is equal to 00000011 or 3 which is 27 % 4\n27 & (8 - 1) is equal to 00000011 or 3 which is 27 % 8\n")),(0,i.kt)("h3",{id:"bit-wise-or"},"Bit-Wise or"),(0,i.kt)("p",null,"The bit-wise 'or' operator (",(0,i.kt)("inlineCode",{parentName:"p"},"|"),") compares every bit of the left and right operands and returns a value of the same type that is the bit by bit result of the comparison. The operands are of integral or unscoped enumeration type. The rules for an 'or' comparison are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if either bit value is 1, the resultant bit value is 1"),(0,i.kt)("li",{parentName:"ul"},"otherwise, the resultant bit value is 0")),(0,i.kt)("h4",{id:"turn-on-a-bit"},"Turn-on a Bit"),(0,i.kt)("p",null,"A bit-wise 'or' expression can turn on an individual bit or a set of bits in a variable. Consider the following two operands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"01011001 11001101 11101011 11100010\n00000000 00000000 00001111 00000000\n")),(0,i.kt)("p",null,"The bit-wise 'or' operator applied to these operands yields the result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"01011001 11001101 11101111 11100010\n")),(0,i.kt)("p",null,"The following program produces the output shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Bit-wise or\n// or.cpp\n\n#include <iostream>\n\nint main ()\n{\n  unsigned char u = 27u;  // 00011011 = 27\n  unsigned char v = 14u;  // 00001110 = 14\n                          // -------------\n                          // 00011111 = 31\n\n  std::cout << (unsigned)u << " | " << (unsigned)v << " = " << (u | v) << \'\\n\';\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"27 | 14 = 31\n")),(0,i.kt)("h3",{id:"bit-wise-exclusive-or"},"Bit-Wise Exclusive or"),(0,i.kt)("p",null,"The bit-wise 'exclusive or' operator (",(0,i.kt)("inlineCode",{parentName:"p"},"^"),") compares every bit of the left and right operands for exclusivity. The operands are of integral or unscoped enumeration type. The rules for an 'exclusive-or' comparison are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if the bit values are different, the resultant bit value is 1"),(0,i.kt)("li",{parentName:"ul"},"if the bit values are the same, the resultant bit value is 0")),(0,i.kt)("h4",{id:"flipping-selected-bits"},"Flipping Selected Bits"),(0,i.kt)("p",null,"A bit-wise 'exclusive or' expression to flip an individual bit or a set of bit values in a variable. Consider the following two operands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"01011001 11001101 11101011 11100010\n00000000 00000000 00001111 00000000\n")),(0,i.kt)("p",null,"The bit-wise 'exclusive-or' operator applied to these operands yields the result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"01011001 11001101 11100100 11100010\n")),(0,i.kt)("p",null,"The following program produces the output shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Bitwise Exclusive or\n// xor.cpp\n\n#include <iostream>\n\nint main ()\n{\n  unsigned char u = 27u;  // 00011011\n  unsigned char v = 14u;  // 00001110\n                          // --------\n                          // 00010101\n\n  std::cout << (unsigned)u << " ^ " << (unsigned)v << " = " << (u ^ v) << \'\\n\';\n  std::cout << (unsigned)u << " ^ " << (unsigned)v << " ^ " << (unsigned)v\n            << " = " << (u ^ v ^ v) << \'\\n\';\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"27 ^ 14 = 21\n27 ^ 14 ^ 14 = 27\n")),(0,i.kt)("p",null,"The 'exclusive or' operator is self-inverting."),(0,i.kt)("h3",{id:"assignment-expressions"},"Assignment Expressions"),(0,i.kt)("p",null,"An assignment expression copies from the right operand to the left one. The left operand must be a modifiable lvalue. Assignment expressions associate from right to left, which enables cascading. They may be simple or compound."),(0,i.kt)("h4",{id:"compound-assignment"},"Compound Assignment"),(0,i.kt)("p",null,"The compound operators (",(0,i.kt)("inlineCode",{parentName:"p"},">>="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<<="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"~="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"&="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"|="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"^="),") perform the operation specified by the first character(s) in the operator on the two operands before copying the result into the left operand."),(0,i.kt)("h2",{id:"bit-fields"},"Bit Fields"),(0,i.kt)("p",null,"A member declaration of a class type can include a bit field. C++ lets us allocate a specific number of bits to a data member, provided that that member is of integral or unscoped enumeration type. The declaration of a bit field takes the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Type identifier : constant-expression;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"constant-expression")," is positive-valued and specifies the number of bits to be allocated. C++ does not allow a non-",(0,i.kt)("inlineCode",{parentName:"p"},"const")," reference to a bit field."),(0,i.kt)("p",null,"To include bit-padding between adjacent data members, we insert an unnamed bit field that specifies the number of padding bits:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class A\n{\n  unsigned a : 5;\n  unsigned   : 3;  // padding\n  unsigned b : 6;\n};\n")),(0,i.kt)("p",null,"To ensure alignment of the next member at an alignment boundary, we insert a bit field of 0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class A\n{\n  unsigned a : 5;\n  unsigned   : 0;  // align b at alignment boundary\n  unsigned b : 6;\n};\n")),(0,i.kt)("p",null,"Bit-field allocation is implementation defined. Packing strategies are typically implementation-dependent and not portable. Each platform has"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"its own constraints on the alignment of bit fields and members"),(0,i.kt)("li",{parentName:"ol"},"its own maximum size that a bit field cannot exceed"),(0,i.kt)("li",{parentName:"ol"},"its own method of packing several bit fields")),(0,i.kt)("h2",{id:"exercises"},"Exercises"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read the Wikipedia article on ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Bitwise_operators"},"Bit-wise operations"))))}u.isMDXComponent=!0}}]);