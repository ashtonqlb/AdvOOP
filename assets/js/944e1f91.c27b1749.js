"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[459],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6988:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],o={id:"pointers-references-and-arrays",title:"Pointers, References and Arrays",sidebar_position:2,description:"TBD"},s="Pointers, References and Arrays",p={unversionedId:"B-Types/pointers-references-and-arrays",id:"B-Types/pointers-references-and-arrays",isDocsHomePage:!1,title:"Pointers, References and Arrays",description:"TBD",source:"@site/docs/B-Types/pointers-references-and-arrays.md",sourceDirName:"B-Types",slug:"/B-Types/pointers-references-and-arrays",permalink:"/B-Types/pointers-references-and-arrays",editUrl:"https://github.com/Seneca-ICTOER/AdvOOP/tree/main/docs/B-Types/pointers-references-and-arrays.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"pointers-references-and-arrays",title:"Pointers, References and Arrays",sidebar_position:2,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Fundamental Types",permalink:"/B-Types/fundamental-types"},next:{title:"Classes and Scoped Enumerations",permalink:"/B-Types/classes-and-scoped-enumerations"}},d=[{value:"Pointer Types",id:"pointer-types",children:[{value:"Null Address Constant",id:"null-address-constant",children:[{value:"Good Design Style",id:"good-design-style",children:[],level:4}],level:3},{value:"Synonym Pointer Types",id:"synonym-pointer-types",children:[],level:3},{value:"Generic Pointer Type",id:"generic-pointer-type",children:[{value:"Dereferencing a Generic Pointer",id:"dereferencing-a-generic-pointer",children:[],level:4},{value:"Hexadecimal Dump Example",id:"hexadecimal-dump-example",children:[],level:4}],level:3}],level:2},{value:"References",id:"references",children:[{value:"<em>lvalue</em> References",id:"lvalue-references",children:[],level:3},{value:"<em>rvalue</em> Reference",id:"rvalue-reference",children:[],level:3},{value:"Standard Library",id:"standard-library",children:[],level:3}],level:2},{value:"Array Types",id:"array-types",children:[{value:"One-Dimensional Array",id:"one-dimensional-array",children:[],level:3},{value:"Aggregate Initialization",id:"aggregate-initialization",children:[],level:3},{value:"Range-Based <code>for</code>",id:"range-based-for",children:[],level:3},{value:"Range-Based for with Type Inference",id:"range-based-for-with-type-inference",children:[],level:3}],level:2},{value:"Exercises",id:"exercises",children:[],level:2}],c={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pointers-references-and-arrays"},"Pointers, References and Arrays"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Describe the built-in types available in C++"),(0,r.kt)("li",{parentName:"ul"},"Introduce the generic pointer type"),(0,r.kt)("li",{parentName:"ul"},"Distinguish lvalue and rvalue references"),(0,r.kt)("li",{parentName:"ul"},"Introduce aggregate initialization and range-based for syntax for array types")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"The C++ programming language ... provides powerful and flexible mechanisms for abstraction; that is, language constructs that allow the programmer to introduce and use new types of objects that match the concepts of an application." Stroustrup (1999)')),(0,r.kt)("p",null,"A built-in type is a type that can be constructed from a fundamental type by using qualifiers and operators.  Built-in types access their underlying types through their addresses and are implemented to reflect the hardware capabilities directly and efficiently.  The built-in types in the C++ language are ",(0,r.kt)("em",{parentName:"p"},"pointers"),", ",(0,r.kt)("em",{parentName:"p"},"references")," and ",(0,r.kt)("em",{parentName:"p"},"arrays"),".  A C++ built-in type can be constructed from a fundamental type, the ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," qualifier and the declarator operators (",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"&"),")."),(0,r.kt)("p",null,"This chapter describes the built-in types for the C++ core language in some detail, introduces generic pointers and distinguishes references into lvalue and rvalue categories.  The array section introduces aggregate initialization and range-based iteration syntax."),(0,r.kt)("h2",{id:"pointer-types"},"Pointer Types"),(0,r.kt)("p",null,"A pointer type is a type that holds an address as its value.  Each type, whether fundamental, built-in or user-defined, has a pointer type associated with it.  The pointer types associated with the C++ fundamental types are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signed char*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"short int*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"long int*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"long long int*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"float*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsigned char*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsigned short int*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsigned int*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsigned long int*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsigned long long int*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"double*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"char*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wchar_t*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"char16_t*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"char32_t*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"long double*"))),(0,r.kt)("p",null,"In C++, different pointer types are not assignment compatible."),(0,r.kt)("h3",{id:"null-address-constant"},"Null Address Constant"),(0,r.kt)("p",null,"The null address is an address in memory with special significance.  By convention, ",(0,r.kt)("strong",{parentName:"p"},"the null address cannot be dereferenced"),".  The C++ keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"nullptr")," refers to the constant that stores this address.  Any attempt to dereference a pointer that holds the value ",(0,r.kt)("inlineCode",{parentName:"p"},"nullptr")," causes a run-time error."),(0,r.kt)("h4",{id:"good-design-style"},"Good Design Style"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"wild pointer")," is a pointer that has not been initialized to any valid address.  It is good style to initialize every wild pointer to ",(0,r.kt)("inlineCode",{parentName:"p"},"nullptr"),".  Any run-time attempt to dereference the ",(0,r.kt)("inlineCode",{parentName:"p"},"nullptr")," address will terminate execution rather than allow execution to continue and generate erroneous results."),(0,r.kt)("h3",{id:"synonym-pointer-types"},"Synonym Pointer Types"),(0,r.kt)("p",null,"Each synonym type also has a pointer type associated with it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"typedef unsigned long long int ullint;\nullint* p;\n")),(0,r.kt)("p",null,"A synonym pointer type simplifies repeated definitions of the pointer type.  For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"typedef unsigned long long int* ullint_ptr;\nullint_ptr p; // a pointer to ullint\n")),(0,r.kt)("p",null,"Unlike a pointer declaration, this synonym type does not require an ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," before each identifier.  Compare this syntax to direct-definition syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"unsigned long long int* pp, * qq;  // we need * before each identifier\nullint_ptr p, q;                   // no need for a repeated *\n")),(0,r.kt)("p",null,"Synonym pointer syntax is more readable and less error prone."),(0,r.kt)("h3",{id:"generic-pointer-type"},"Generic Pointer Type"),(0,r.kt)("p",null,"The generic pointer type is distinct from any other pointer type defined in an application:  a pointer of generic type can hold the address of an object without holding the type information of that object itself."),(0,r.kt)("p",null,"A generic pointer type holds an address but is not associated with any object type.  The keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," identifies a generic pointer type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void* p; // generic pointer type\n")),(0,r.kt)("p",null,"Converting a pointer of any type into a generic type and vice versa does not lose its address. The program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Generic Pointer Type\n// void.cpp\n\n#include <iostream>\n\nint main()\n{\n    int i;\n    void* v = &i;\n    int* j;\n    j = static_cast<int*>(v);  // OK - j now holds the address of i\n    std::cout << &i << std::endl;\n    std::cout << j << std::endl;\n}\n")),(0,r.kt)("p",null,"outputs (the values will be different in each run, but both lines will have the same value)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0024FA18\n0024FA18\n")),(0,r.kt)("p",null,"Converting from one pointer type to another requires an explicit cast:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int* i;\nchar* c;\ni = c; // ERROR - Incompatible: Different Pointer Types\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int* i;\nchar* c;\ni = static_cast<int*>(static_cast<void*>(c)); // OK\n")),(0,r.kt)("h4",{id:"dereferencing-a-generic-pointer"},"Dereferencing a Generic Pointer"),(0,r.kt)("p",null,"Since a generic pointer lacks the type information of the object pointed to, the compiler cannot dereference the pointer and interpret the data stored in the region of memory starting at the address pointed to.  To access the information stored at that address, the type of that information is required; we cast a generic pointer to the type that is associated with its address."),(0,r.kt)("h4",{id:"hexadecimal-dump-example"},"Hexadecimal Dump Example"),(0,r.kt)("p",null,"The function ",(0,r.kt)("inlineCode",{parentName:"p"},"hexDump()")," listed below displays the contents of a region of memory regardless of the type associated with that region.  The function receives the region's address and its size in number of bytes.  It casts the generic pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," to a pointer to an ",(0,r.kt)("inlineCode",{parentName:"p"},"unsigned char")," and displays the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"c[i]")," in hexadecimal notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Hexadecimal Representation at an Address\n// hexDump.cpp\n\n#include <iostream>\n#include <iomanip>\n\nvoid hexDump(void*, int);\n\nint main()\n{\n    int i;\n    double x;\n\n    std::cout << "Integer value: ";\n    std::cin >> i;\n    std::cout << "is : ";\n    hexDump(&i, 4);\n    std::cout << std::endl;\n\n    std::cout << "Floating-point value: ";\n    std::cin >> x;\n    std::cout << "is : ";\n    hexDump(&x, 8);\n    std::cout << std::endl;\n}\n\n// Dump the first "n" bytes starting from the address stored in "a"\nvoid hexDump(void* a, int n)\n{\n    unsigned char* c = static_cast<unsigned char*>(a);\n\n    auto oldFill = std::cout.fill(\'0\'); // zero fill\n    std::cout << std::hex;              // hexadecimal output\n\n    for (int i = 0; i < n; i++)\n        std::cout << std::setw(2) << static_cast<int>(c[i]) << \' \';\n\n    std::cout.fill(oldFill);  // restore the filling character\n    std::cout << std::dec;    // restore to decimal output\n}\n')),(0,r.kt)("p",null,"If the user inputs the values ",(0,r.kt)("inlineCode",{parentName:"p"},"2456")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"4.56"),", the output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Integer value: 2456\nis : 98 09 00 00\n\nFloating-point value: 4.56\nis : 3d 0a d7 a3 70 3d 12 40\n")),(0,r.kt)("p",null,"Note that in this example the platform is little-endian (little end first)."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"A reference is an ",(0,r.kt)("strong",{parentName:"p"},"alias")," for an existing object.  That is, it is an alternative name for the entity defined elsewhere.  Each object defined in source code can have a reference associated with it.  C++17 admits two reference declarations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("strong",{parentName:"li"},"*lvalue")," reference* - denoted by ",(0,r.kt)("inlineCode",{parentName:"li"},"&")),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("strong",{parentName:"li"},"*rvalue")," reference* - denoted by ",(0,r.kt)("inlineCode",{parentName:"li"},"&&"))),(0,r.kt)("p",null,"The declaration of an ",(0,r.kt)("em",{parentName:"p"},"lvalue reference")," identifies an accessible region of memory.  The declaration of an ",(0,r.kt)("em",{parentName:"p"},"rvalue reference")," identifies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an object near the end of its lifetime"),(0,r.kt)("li",{parentName:"ul"},"a temporary object or subobject"),(0,r.kt)("li",{parentName:"ul"},"a value not associated with an object")),(0,r.kt)("p",null,"The C++ language does not support references to references, arrays of references, or pointers to references."),(0,r.kt)("h3",{id:"lvalue-references"},(0,r.kt)("em",{parentName:"h3"},"lvalue")," References"),(0,r.kt)("p",null,"An lvalue reference requires an initializer unless it"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"has external linkage"),(0,r.kt)("li",{parentName:"ul"},"is a class member within a class definition"),(0,r.kt)("li",{parentName:"ul"},"is a function parameter or a function return type")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Module B Header\n// B.h\nclass B\n{\n    int b;\npublic:\n    B(int n);\n    void display() const;\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Module B Implementation\n// B.cpp\n#include <iostream>\n#include "B.h"\n\nB::B(int n) : b(n) {}\n\nvoid B::display() const { std::cout << b << std::endl; }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Module A Header\n// A.h\nclass B;\n\nclass A\n{\n    B& d; // no initializer required: class member declaration\npublic:\n    A(B& bb); // no initializer required: function parameter declaration\n};\n\nA& foo(A&);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Module A Implementation\n// A.cpp\n#include <iostream>\n#include "A.h"\n#include "B.h"\n\nextern B& b; // no initializer required: external linkage\n\nA::A(B& bb) : d(bb) // initialization is in constructor definition\n{\n    d.display();\n}\n\nA& foo(A& a) // no initializers required:\n{\n    // parameter and return type declarations\n    A& aa = a; // LVALUE REQUIRES AN INITIALIZER\n    b.display();\n    return aa;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// lvalue References\n// lvalue.cpp\n#include "A.h"\n#include "B.h"\n\nB e(8), f(6);\nB& b = e; // LVALUE REQUIRES INITIALIZER\n\nint main()\n{\n    A a(f);\n    foo(a);\n}\n')),(0,r.kt)("h3",{id:"rvalue-reference"},(0,r.kt)("em",{parentName:"h3"},"rvalue")," Reference"),(0,r.kt)("p",null,"An rvalue reference declaration identifies an object that is less permanent, possibly temporary.  For example, the program"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// rvalue Reference\n// rvalue.cpp\n\n#include <iostream>\n\nclass A\n{\n    int a;\npublic:\n    A(int aa) : a(aa) {}\n    void display(const char* str) const\n    {\n        std::cout << str << \' \' << a << std::endl;\n    }\n};\n\nvoid print(const A& a) { a.display("lvalue "); }\nvoid print(A&& a)      { a.display("rvalue "); }\n\nint main()\n{\n    A a(10);\n    print(a);\n    print(A(20));\n}\n')),(0,r.kt)("p",null,"produces the output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lvalue  10\nrvalue  20\n")),(0,r.kt)("p",null,"Practical uses for ",(0,r.kt)("em",{parentName:"p"},"rvalue")," references include the move-constructors and move-assignment operators described in the chapter entitled ",(0,r.kt)("a",{parentName:"p",href:"/B-Types/classes-and-scoped-enumerations"},"Classes and Scoped Enumerations"),"."),(0,r.kt)("h3",{id:"standard-library"},"Standard Library"),(0,r.kt)("p",null,"The standard library provides two functions for specifying the type of reference when that is important:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"std::ref()")," - returns an ",(0,r.kt)("em",{parentName:"li"},"lvalue")," reference to its argument (important of functions in the standard library)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"std::move()")," - returns an ",(0,r.kt)("em",{parentName:"li"},"rvalue")," reference to its argument")),(0,r.kt)("p",null,"Their prototypes are declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"<utility>")," header."),(0,r.kt)("p",null,"The program"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// rvalue Reference using std::move()\n// std_move.cpp\n\n#include <iostream>\n#include <utility>\n\nclass A\n{\n    int a;\npublic:\n    A(int aa) : a(aa) {}\n    void display(const char* str) const\n    {\n        std::cout << str << \' \' << a << std::endl;\n    }\n};\n\nvoid print(const A& a) { a.display("lvalue "); }\nvoid print(A&& a)      { a.display("rvalue "); }\n\nint main()\n{\n    A a(10), b(20);\n    print(a);\n    print(std::move(b));\n}\n')),(0,r.kt)("p",null,"outputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lvalue  10\nrvalue  20\n")),(0,r.kt)("p",null,"Practical uses of ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ref")," are discussed in the chapter entitled ",(0,r.kt)("a",{parentName:"p",href:"/E-STL/algorithms"},"Algorithms"),"."),(0,r.kt)("h2",{id:"array-types"},"Array Types"),(0,r.kt)("p",null,"An array type is a built-in type that consists of elements of identical type arranged contiguously in memory.  Each element is a subobject of the array type.  We declare an array type using the ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," declarator operator.  An array can be constructed from any one of the"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fundamental types (except ",(0,r.kt)("inlineCode",{parentName:"li"},"void"),")"),(0,r.kt)("li",{parentName:"ul"},"pointer types"),(0,r.kt)("li",{parentName:"ul"},"pointer to member types"),(0,r.kt)("li",{parentName:"ul"},"class types"),(0,r.kt)("li",{parentName:"ul"},"enumeration types (see the chapter entitled ",(0,r.kt)("a",{parentName:"li",href:"B-Types/classes-and-scoped-enumerations"},"Classes and Scoped Enumerations"),")")),(0,r.kt)("p",null,"Note that an array cannot be constructed directly from reference types."),(0,r.kt)("h3",{id:"one-dimensional-array"},"One-Dimensional Array"),(0,r.kt)("p",null,"The definition of a one-dimensional array takes one of the following forms"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Type identifier[ c ];             // allocated on the stack\nType* identifier = new Type[ n ]; // allocated on the heap\n")),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type")," is the type of each of the elements in the array"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"c")," is the number of elements in the array and is an integer constant or constant integer expression."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," is the number of elements in the array and is an integer variable, integer constant or an integer constant expression.")),(0,r.kt)("h3",{id:"aggregate-initialization"},"Aggregate Initialization"),(0,r.kt)("p",null,"We can initialize an array through ",(0,r.kt)("em",{parentName:"p"},"aggregate initilization"),".  Aggregate initialization takes one of the following forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type identifier[ c ] = { initializer-list };")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type identifier[ c ] = {  };")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type identifier[ c ] { initializer-list };")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type identifier[ c ] { };")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type identifier[   ] = { initializer-list };")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type identifier[   ] { initializer-list };")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type* identifier = new Type[ n ] { initializer-list };")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type* identifier = new Type[ n ] {  };"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"initializer-list")," is a comma-separated list of initial values.  If this list is present, ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," is optional.  If ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," exceeds the number of values in the list, the compiler initializes the uninitialized elements to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".  If the initialization list is absent, ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," is required.  If the braces are present but there is no initialization list, the compiler initializes all elements to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("p",null,"For example, the program"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Aggregate Initialization\n// initializers.cpp\n#include <iostream>\n\nint main()\n{\n    const int n = 6;\n    int  a[ ] = { 1,2,3 };\n    int  b[ ]{ 1,2,3 };\n    int  c[5]{ 1,2,3 };\n    int  d[5]{};\n    int* f = new int[n]{ 1,2,3 };\n    int* g = new int[n]{};\n\n    for (int e : a) // range-based for (see below)\n        std::cout << e;\n    std::cout << '|' << std::endl;\n\n    for (int e : b)\n        std::cout << e;\n    std::cout << '|' << std::endl;\n\n    for (int e : c)\n        std::cout << e;\n    std::cout << '|' << std::endl;\n\n    for (int e : d)\n        std::cout << e;\n    std::cout << '|' << std::endl;\n\n    for (int i = 0; i < n; ++i) // cannot use range-based for with pointers\n        std::cout << f[i];\n    std::cout << '|' << std::endl;\n\n    for (int i = 0; i < n; ++i)\n        std::cout << g[i];\n    std::cout << '|' << std::endl;\n\n    delete[] f;\n    delete[] g;\n}\n")),(0,r.kt)("p",null,"produces the output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"123|\n123|\n12300|\n00000|\n123000|\n000000|\n")),(0,r.kt)("h3",{id:"range-based-for"},"Range-Based ",(0,r.kt)("inlineCode",{parentName:"h3"},"for")),(0,r.kt)("p",null,"A range-based ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," is an iteration construct specifically designed for use with collections.  This construct steps sequentially through the elements of a collection; the collection type must carry information about its size or a mechanism to detect when the boundary has been reached (",(0,r.kt)("strong",{parentName:"p"},"statically"),"-allocated array types carry such information, but pointers don't)."),(0,r.kt)("p",null,"The program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Range-Based for\n// for_each.cpp\n\n#include <iostream>\n\nint main ()\n{\n    int a[]{1, 2, 3, 4, 5, 6};\n\n    for (int& e : a)\n        std::cout << e << ' ';\n    std::cout << std::endl;\n}\n")),(0,r.kt)("p",null,"outputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1 2 3 4 5 6\n")),(0,r.kt)("h3",{id:"range-based-for-with-type-inference"},"Range-Based for with Type Inference"),(0,r.kt)("p",null,"A range-based for can infer the type of each element in the array from the array declaration itself. The program"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Range-Based for\n// for_each_auto.cpp\n\n#include <iostream>\n\nint main ()\n{\n    int a[]{1, 2, 3, 4, 5, 6};\n\n    for (auto& e : a) // the type of an element will be inferred by the compiler\n        std::cout << e << ' ';\n    std::cout << std::endl;\n}\n")),(0,r.kt)("p",null,"outputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1 2 3 4 5 6\n")),(0,r.kt)("h2",{id:"exercises"},"Exercises"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read Wikipedia on ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Array_data_structure"},"Array Data Structures"),".")))}u.isMDXComponent=!0}}]);