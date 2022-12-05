"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[923],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2734:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],o={id:"string-class",title:"String Class",sidebar_position:1,description:"TBD"},l="String Class",c={unversionedId:"Resources-Appendices/string-class",id:"Resources-Appendices/string-class",isDocsHomePage:!1,title:"String Class",description:"TBD",source:"@site/docs/Resources-Appendices/string-class.md",sourceDirName:"Resources-Appendices",slug:"/Resources-Appendices/string-class",permalink:"/Resources-Appendices/string-class",editUrl:"https://github.com/Seneca-ICTOER/AdvOOP/tree/main/docs/Resources-Appendices/string-class.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"string-class",title:"String Class",sidebar_position:1,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Other Topics",permalink:"/H-Deeper-Detail/other-topics"},next:{title:"Doubly Linked List",permalink:"/Resources-Appendices/doubly-linked-list"}},p=[{value:"Class Definition",id:"class-definition",children:[{value:"Constructors",id:"constructors",children:[],level:3},{value:"Member Functions and Operations",id:"member-functions-and-operations",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Helper Functions",id:"helper-functions",children:[],level:3}],level:2},{value:"STL Related Notes",id:"stl-related-notes",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string-class"},"String Class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Describe the string class and its member functions")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Use vector and string instead of arrays." Sutter, Alexandruscu (2005)')),(0,a.kt)("p",null,"The C++ Standard Library defines the ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," class as the object-oriented alternative to null-terminated character strings of the C language. The member functions of this class that are specialized for direct operations on strings."),(0,a.kt)("h2",{id:"class-definition"},"Class Definition"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," class is defined within the ",(0,a.kt)("inlineCode",{parentName:"p"},"std")," namespace. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<string>")," header file contains the class definition."),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("p",null,"The constructors of the ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," class can initialize an object using:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"a C-style null-terminated string"),(0,a.kt)("li",{parentName:"ol"},"a C-style null-terminated substring"),(0,a.kt)("li",{parentName:"ol"},"another ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," object"),(0,a.kt)("li",{parentName:"ol"},"a substring of another ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," object"),(0,a.kt)("li",{parentName:"ol"},"a sequence of characters")),(0,a.kt)("p",null,"That is,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'string a = "Hello";           // a C-style string\nstring b("Good Bye", 4);      // the 1st 4 characters of C-style string\nstring c = a;                 // another string object\nstring d(b, 5, 3);            // "Bye" - a substring of a string object\nstring e(a.begin(), a.end()); // a sequence of characters\n')),(0,a.kt)("h3",{id:"member-functions-and-operations"},"Member Functions and Operations"),(0,a.kt)("p",null,"Member functions and operations of the string class include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string& operator=(const string& s)")," - assign string ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," to the current object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string& operator+=(const string& s)")," - append string ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," to the current object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string& operator+=(const char* s)")," - append C-style string ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," to the current object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string& operator+=(char c)")," - append character ",(0,a.kt)("inlineCode",{parentName:"li"},"c")," to the current object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"size_t size() const")," - returns number of bytes stored in the current object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"size_t length() const")," - returns number of bytes stored in the current object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool empty() const")," - returns whether the current object is empty"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"char& operator[](size_t i)")," - returns a reference to the character at index ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," (unchecked)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"const char& operator[](size_t i) const")," - read the character at index ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," (unchecked)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"at(size_t i) const")," - read the character at index ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," (checked)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"char& front()")," - returns a modifiable reference to the first character"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"const char& front() const")," - read the first character"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"char& back()")," - returns a modifiable reference to the last character"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"const char& back() const")," - read the last character"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"const char* c_str() const")," - return the address of the C-style null-terminated string equivalent"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"size_t find_first_of(const string& str) const")," - returns the position of the first character that matches a character in ",(0,a.kt)("inlineCode",{parentName:"li"},"str"),"; if no match, returns ",(0,a.kt)("inlineCode",{parentName:"li"},"string::npos")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"size_t find_last_of(const string& str) const")," - returns the position of the last character that matches a character in ",(0,a.kt)("inlineCode",{parentName:"li"},"str"),"; if no match, returns ",(0,a.kt)("inlineCode",{parentName:"li"},"string::npos")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string substr(size_t pos, size_t len = npos)")," - returns a string that contains the portion of the current string starting at character position ",(0,a.kt)("inlineCode",{parentName:"li"},"pos")," and spanning ",(0,a.kt)("inlineCode",{parentName:"li"},"len")," characters (or to the end of the current string)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int compare(const string& str) const")," - compares the current object to ",(0,a.kt)("inlineCode",{parentName:"li"},"str")," and returns ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," if the strings are equal, != 0 otherwise"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void clear()")," - erases the contents of the current object")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npos")," is a class member constant with the greatest possible value for position within the string (",(0,a.kt)("inlineCode",{parentName:"p"},"unsigned(-1)"),")."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// String Class\n// string.cpp\n\n#include <string>\n#include <iostream>\n\nint main()\n{\n  std::string str(\"Good \");\n\n  str += \"day\";\n  str += '!';\n\n  str[5] = 'D';\n  std::cout << str.length() << ' ' << str.c_str() << std::endl;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"9 Good Day!\n")),(0,a.kt)("h3",{id:"helper-functions"},"Helper Functions"),(0,a.kt)("p",null,"Helper functions for the string class include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"std::istream& getline(std::istream&is, string& str, char delimiter)")," - extracts characters from ",(0,a.kt)("inlineCode",{parentName:"li"},"is")," until delimiter; stores the characters in ",(0,a.kt)("inlineCode",{parentName:"li"},"str")," and discards the delimiter"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string operator+(const string& lhs, const string& rhs)")," - concatenates ",(0,a.kt)("inlineCode",{parentName:"li"},"lhs")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"rhs")," and returns the concatenated string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"istream& operator>>(istream& is, string& s)")," - extracts ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"is")," and returns a reference to ",(0,a.kt)("inlineCode",{parentName:"li"},"is")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ostream& operator<<(ostream& os, const string& s)")," - inserts ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," into ",(0,a.kt)("inlineCode",{parentName:"li"},"os")," and returns a reference to ",(0,a.kt)("inlineCode",{parentName:"li"},"os"))),(0,a.kt)("h2",{id:"stl-related-notes"},"STL Related Notes"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," class is the default instantiation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"basic_string")," class template. The ",(0,a.kt)("inlineCode",{parentName:"p"},"basic_string")," class template is similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"vector")," class template. The ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," class provides iterators and can be used with the standard algorithms of the standard template library. Pointer/array equivalence does not hold: if ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," is an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," class, then ",(0,a.kt)("inlineCode",{parentName:"p"},"&s[0]")," is not the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"."))}u.isMDXComponent=!0}}]);