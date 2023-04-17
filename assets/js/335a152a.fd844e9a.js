"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[334],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3143:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const i={id:"smart-pointers",title:"Smart Pointers",sidebar_position:2,description:"TBD"},o="Smart Pointers",s={unversionedId:"F-MemoryModel/smart-pointers",id:"F-MemoryModel/smart-pointers",title:"Smart Pointers",description:"TBD",source:"@site/docs/F-MemoryModel/smart-pointers.md",sourceDirName:"F-MemoryModel",slug:"/F-MemoryModel/smart-pointers",permalink:"/F-MemoryModel/smart-pointers",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/AdvOOP/tree/main/docs/F-MemoryModel/smart-pointers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"smart-pointers",title:"Smart Pointers",sidebar_position:2,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Raw Pointers",permalink:"/F-MemoryModel/raw-pointers"},next:{title:"Multithreading",permalink:"/G-Performance/multithreading"}},l={},p=[{value:"Exception Handling",id:"exception-handling",level:2},{value:"A Raw Pointer Case Study",id:"a-raw-pointer-case-study",level:3},{value:"The Memory Leak",id:"the-memory-leak",level:4},{value:"Fixing the Memory Leak",id:"fixing-the-memory-leak",level:4},{value:"Taking Ownership of the Resource",id:"taking-ownership-of-the-resource",level:4},{value:"Exclusive Ownership",id:"exclusive-ownership",level:2},{value:"<code>std::unique_ptr</code>",id:"stdunique_ptr",level:3},{value:"Shared Ownership",id:"shared-ownership",level:2},{value:"<code>std::shared_ptr</code>",id:"stdshared_ptr",level:3},{value:"Exercises",id:"exercises",level:2}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"smart-pointers"},"Smart Pointers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create program components using smart pointers")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Ensure resources are owned by objects. Use explicit RAII and smart pointers." Sutter, Alexandruscu (2005)')),(0,a.kt)("p",null,"One of the principal uses of pointers in C++ applications is to identify resource variables. In a narrow sense, a resource is an object that a program does not possess at load time but acquires and releases during run-time. The most prominent example is memory on the heap (dynamically allocated memory). Other such resources include file handles, device interface objects and states of critical sections in multi-threaded applications. In a broader sense, a resource is any object created and released in a program, including not only an object on the heap as well as one on the stack or in global scope. In this sense, the owner of a resource is an object or piece of code that is responsible for the resource's release. Then, ownership falls into two distinct categories - automatic and explicit. An object is automatically owned if the mechanisms of the language guarantee its release. For example, a C++ object that is composed of other objects guarantees their release at the time of its own release (Milewski, 2001)."),(0,a.kt)("p",null,"Pointers (as well as handles and abstract states) require explicit management of the resources to which they refer. For example, a pointer that holds the address of dynamically allocated memory retrieved using ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," requires the programmer to release that memory using ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),". In other words, in C++, a raw pointer, like a file handle or the state of a critical section, has no owner that would guarantee its eventual release (Milewski, 2001)."),(0,a.kt)("p",null,"A smart pointer offers a mechanism that makes the explicit management of a resource automatic. A smart pointer knows its resource. Unlike a raw pointer, a smart pointer, can manage the memory of the resource to which it points. It is a proxy for a raw pointer to the resource and looks like and feels like a raw pointer. It supports the dereferencing (",(0,a.kt)("inlineCode",{parentName:"p"},"*"),") and indirect member selection (",(0,a.kt)("inlineCode",{parentName:"p"},"->"),") operators. A smart pointer resides on the stack. When it goes out of scope, its destructor deallocates the dynamic memory to which it points or, in the case of a file handle, flushes the stream buffer and closes the stream."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Smart Pointers",src:n(3157).Z,width:"617",height:"198"})),(0,a.kt)("p",null,"Smart pointers implement the Resource Acquisition Is Initialization (RAII) idiom of object-oriented languages. This idiom states that the acquisition of the resource occurs at initialization time; that is, at the same time as the memory for the pointer is created."),(0,a.kt)("p",null,"The need for smart pointers was in part motivated by the introduction of exception handling into the C++ language. The C++ standard library now provides several implementations of smart ownership. This chapter reviews the exception handling case and describes two categories of smart ownership: exclusive and shared."),(0,a.kt)("h2",{id:"exception-handling"},"Exception Handling"),(0,a.kt)("p",null,"Throwing an exception can precipitate a memory leak."),(0,a.kt)("h3",{id:"a-raw-pointer-case-study"},"A Raw Pointer Case Study"),(0,a.kt)("p",null,"Consider the following class that includes a check on the validity of a person's title. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Title")," class holds the title (Mr., Ms., Dr.) in a C-style null-terminated string. The private ",(0,a.kt)("inlineCode",{parentName:"p"},"validTitle()")," member function returns the address of a validated title. If the string is empty, this function throws an exception. The public ",(0,a.kt)("inlineCode",{parentName:"p"},"display()")," query calls this private member function to report a validated title string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// Smart Pointers\n// Title.h\n\n#include <iostream>\n\nclass Title\n{\n    const char* title;\n    const char* validTitle() const\n    {\n        if (!title[0])\n            throw "invalid title";\n\n        return title;\n    }\n\npublic:\n    Title(const char* s) : title(s) {}\n\n    void display() const\n    {\n        std::cout << validTitle() << std::endl;\n    }\n};\n')),(0,a.kt)("p",null,"The throw expression needs to be caught."),(0,a.kt)("h4",{id:"the-memory-leak"},"The Memory Leak"),(0,a.kt)("p",null,"Consider the following application that uses an object of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Title"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"display()")," function allocates dynamic memory for a ",(0,a.kt)("inlineCode",{parentName:"p"},"Title")," object, calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"display()")," function on that object, and deallocates the memory for the object ",(0,a.kt)("inlineCode",{parentName:"p"},"t"),". Note that the private member function ",(0,a.kt)("inlineCode",{parentName:"p"},"validTitle()")," called by member function ",(0,a.kt)("inlineCode",{parentName:"p"},"display()")," may throw an exception and the global ",(0,a.kt)("inlineCode",{parentName:"p"},"display()")," function does not catch any exception:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// Smart Pointers - Unsafe Exception\n// unsafe_exception.cpp\n\n#include <iostream>\n#include "Title.h"\n\nvoid display(const char* s)\n{\n    Title* t = new Title(s);\n    t->display(); // may throw an exception!\n    delete t;\n}\n\nint main()\n{\n    const char* s[] = {"Mr.", "Ms.", "", "Dr."};\n\n    for (auto x : s)\n    {\n        try\n        {\n            display(x);\n        }\n        catch(const char* msg)\n        {\n            std::cerr << msg << std::endl;\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Mr.\nMs.\ninvalid title\nDr.\n")),(0,a.kt)("p",null,"Since the global function only deallocates the memory after the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"display()"),", a memory leak occurs whenever ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," is an empty string."),(0,a.kt)("h4",{id:"fixing-the-memory-leak"},"Fixing the Memory Leak"),(0,a.kt)("p",null,"We could fix the memory leak by wrapping the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"Title::display()")," in a try-catch block:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// Smart Pointers - Safe Exception\n// safe_exception.cpp\n\n#include <iostream>\n#include "Title.h"\n\nvoid display(const char* s)\n{\n    Title* t = new Title(s);\n    try\n    {\n        t->display();\n    }\n    catch(...)\n    {\n        delete t;\n        throw; // continue throwing\n    }\n    delete t;\n}\n\nint main()\n{\n    const char* s[] = {"Mr.", "Ms.", "", "Dr."};\n\n    for (auto x : s)\n    {\n        try\n        {\n            display(x);\n        }\n        catch(const char* msg)\n        {\n            std::cerr << msg << std::endl;\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Mr.\nMs.\ninvalid title\nDr.\n")),(0,a.kt)("p",null,"If the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"t->display()")," throws an exception, the global ",(0,a.kt)("inlineCode",{parentName:"p"},"display()")," function will catch that exception, deallocate the memory and rethrow the exception."),(0,a.kt)("p",null,"This fix involves wrapping every call to ",(0,a.kt)("inlineCode",{parentName:"p"},"Title::display()")," in every application in a try-catch block, which could prove to be quite cumbersome."),(0,a.kt)("h4",{id:"taking-ownership-of-the-resource"},"Taking Ownership of the Resource"),(0,a.kt)("p",null,"The alternative solution to the possibility of a memory leak is simply to take ownership of the resource itself. Such a solution replaces the wrapping of every call to ",(0,a.kt)("inlineCode",{parentName:"p"},"Title::display()")," in a ",(0,a.kt)("inlineCode",{parentName:"p"},"try ... catch")," block with a linkage of the lifetime of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Title")," object to the pointer to it."),(0,a.kt)("p",null,"We link these lifetimes together through smart pointer classes. A smart pointer class acquires ownership of the resource at the same time that it allocates memory for the pointer to the resource (that is, at construction time) and deallocates the memory for the resource at the same time as it deallocates memory for the pointer to that resource (that is, at destruction time)."),(0,a.kt)("p",null,"Consider the following templated class definition. This definition wraps the code for a raw pointer to a resource within a class that manages that resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Smart Pointer\n// SmartPtr.h\n\ntemplate <typename T>\nclass SmartPtr\n{\n    T* p { nullptr };\n\npublic:\n    explicit SmartPtr(T* ptr) : p(ptr) { } ;\n\n    SmartPtr(const SmartPtr&) = delete;\n    SmartPtr& operator=(const SmartPtr&) = delete;\n\n    SmartPtr(SmartPtr&& s) noexcept\n    {\n        p = s.p;\n        s.p = nullptr;\n    }\n    SmartPtr& operator=(SmartPtr&& s) noexcept\n    {\n        if (this != &s)\n        {\n            delete p;\n            p = s.p;\n            s.p = nullptr;\n        }\n        return *this;\n    }\n\n    ~SmartPtr()\n    {\n        delete p;\n    }\n\n    T& operator*()\n    {\n        return *p;\n    }\n\n    T* operator->()\n    {\n        return p;\n    }\n};\n")),(0,a.kt)("p",null,"Deletion of the copy constructor and copy assignment operator bars access to them. The move constructor and move assignment operator facilitate transfer of ownership of the object from one smart pointer to another smart pointer."),(0,a.kt)("p",null,"With this smart pointer to ",(0,a.kt)("inlineCode",{parentName:"p"},"Title")," objects, there is no need for a ",(0,a.kt)("inlineCode",{parentName:"p"},"try ... catch")," solution:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// Smart Pointer for title\n// SmartPtr.cpp\n\n#include <iostream>\n#include "Title.h"\n#include "SmartPtr.h"\n\nvoid display(const char* s)\n{\n    SmartPtr<Title> t(new Title(s));\n    t->display();\n}\n\nint main()\n{\n    const char* s[] = {"Mr.", "Ms.", "", "Dr."};\n\n    for (auto x : s)\n    {\n        try\n        {\n            display(x);\n        }\n        catch(const char* msg)\n        {\n            std::cerr << msg << std::endl;\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Mr.\nMs.\ninvalid title\nDr.\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SmartPtr")," object resides on the stack, is automatically destroyed when it goes out of scope, and destroys its ",(0,a.kt)("inlineCode",{parentName:"p"},"Title")," object at the same time. The indirect selection operator returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"Title")," pointer and through the indirect selection operator calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"display()")," query on the resource. Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"delete t"),"; statement is no longer present in the global ",(0,a.kt)("inlineCode",{parentName:"p"},"display()")," function."),(0,a.kt)("p",null,"In summary, a smart pointer design supports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"automatic initialization"),(0,a.kt)("li",{parentName:"ul"},"safe exception handling"),(0,a.kt)("li",{parentName:"ul"},"automatic destruction of the owned object at the appropriate time")),(0,a.kt)("h2",{id:"exclusive-ownership"},"Exclusive Ownership"),(0,a.kt)("p",null,"The C++ Standard Library includes a smart pointer template for defining classes that manage one-to-one relationships between objects (or resources) and their pointers."),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"unique smart")," pointer satisfies the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"provides exception safety for dynamically allocated memory"),(0,a.kt)("li",{parentName:"ul"},"passes ownership of the object or resource on entering a function"),(0,a.kt)("li",{parentName:"ul"},"passes ownership of the object or resource on returning from a function"),(0,a.kt)("li",{parentName:"ul"},"collects the object or resource inside a container")),(0,a.kt)("p",null,"As ownership passes from one smart pointer to another, the host pointer detaches itself from the object or resource and reattaches the object or resource to the new pointer. This move process does not duplicate or destroy the object or resource. A unique smart pointer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"owns its object or resource"),(0,a.kt)("li",{parentName:"ul"},"stores a raw pointer to its object or resource"),(0,a.kt)("li",{parentName:"ul"},"transfers ownership of the object or resource in move construction and move assignment"),(0,a.kt)("li",{parentName:"ul"},"calls its object's or resource's destructor when it itself is destroyed"),(0,a.kt)("li",{parentName:"ul"},"cannot copy construct or copy assign")),(0,a.kt)("h3",{id:"stdunique_ptr"},(0,a.kt)("inlineCode",{parentName:"h3"},"std::unique_ptr")),(0,a.kt)("p",null,"The library template named ",(0,a.kt)("inlineCode",{parentName:"p"},"std::unique_ptr<>")," associates a smart pointer with a resource of specified type. This template is defined in the header file ",(0,a.kt)("inlineCode",{parentName:"p"},"<memory>"),"."),(0,a.kt)("p",null,"The following example uses this template to create a unique smart pointer for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Title")," object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// Unique Ownership\n// unique_ptr.cpp\n\n#include <iostream>\n#include <memory>\n#include "Title.h"\n\nvoid display(const char* s)\n{\n    std::unique_ptr<Title> t(new Title(s));\n    t->display();\n}\n\nint main()\n{\n    const char* s[] = {"Mr.", "Ms.", "", "Dr."};\n\n    for (auto x : s)\n    {\n        try\n        {\n            display(x);\n        }\n        catch(const char* msg)\n        {\n            std::cerr << msg << std::endl;\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Mr.\nMs.\ninvalid title\nDr.\n")),(0,a.kt)("h2",{id:"shared-ownership"},"Shared Ownership"),(0,a.kt)("p",null,"Several smart pointers can share the same object or resource. Managing such many-to-one relationships for an object or resource requires ",(0,a.kt)("em",{parentName:"p"},"reference-counting"),". A reference counter keeps track of the number of smart pointers currently pointing to the same object or resource. Only if this counter is 1, does a shared smart pointer destroy the object or resource when the pointer goes out of scope."),(0,a.kt)("p",null,"A reference-counted smart pointer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"stores a raw pointer to its object or resource"),(0,a.kt)("li",{parentName:"ul"},"shares ownership of its object or resource with other smart pointers"),(0,a.kt)("li",{parentName:"ul"},"transfers ownership of the resource in move construction and move assignment"),(0,a.kt)("li",{parentName:"ul"},"copies itself in a copy construction"),(0,a.kt)("li",{parentName:"ul"},"releases itself from its object or resource and reattaches itself in a copy assign"),(0,a.kt)("li",{parentName:"ul"},"can be compared for equality"),(0,a.kt)("li",{parentName:"ul"},"calls its object's or resource's destructor only if it itself is being destroyed and no other smart pointer shares ownership of the object or resource")),(0,a.kt)("h3",{id:"stdshared_ptr"},(0,a.kt)("inlineCode",{parentName:"h3"},"std::shared_ptr")),(0,a.kt)("p",null,"The standard library includes a template named ",(0,a.kt)("inlineCode",{parentName:"p"},"std::shared_ptr<>")," that associates a resource-counted smart pointer with an object or resource. This template is defined in the header file ",(0,a.kt)("inlineCode",{parentName:"p"},"<memory>"),"."),(0,a.kt)("p",null,"The following example uses this template to create a resource-counted smart pointer for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Title")," object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// Shared Ownership\n// shared_ptr.cpp\n\n#include <iostream>\n#include <memory>\n#include "Title.h"\n\nvoid display(const char* s)\n{\n    std::shared_ptr<Title> t1(new Title(s));\n    t1->display();\n\n    std::shared_ptr<Title> t2(t1);\n    t2->display();\n}\n\nint main()\n{\n    const char* s[] = {"Mr.", "Ms.", "", "Dr."};\n\n    for (auto x : s)\n    {\n        try\n        {\n            display(x);\n        }\n        catch(const char* msg)\n        {\n            std::cerr << msg << std::endl;\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Mr.\nMr.\nMs.\nMs.\nno title\nDr.\nDr.\n")),(0,a.kt)("p",null,"We prefer the more efficient unique smart pointer over a shared smart pointer where the unique smart pointer does the task. The unique smart pointer is ideal for passing ownership from one owner to another."),(0,a.kt)("h2",{id:"exercises"},"Exercises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read Code Project on ",(0,a.kt)("a",{parentName:"li",href:"https://www.codeproject.com/Articles/541067/Cplusplus-Smart-Pointers"},"C++ Smart Pointers")),(0,a.kt)("li",{parentName:"ul"},"Read informIT on ",(0,a.kt)("a",{parentName:"li",href:"https://www.informit.com/articles/article.aspx?p=2085179"},"Be Smart About C++ Pointers")),(0,a.kt)("li",{parentName:"ul"},"Read Bjarne Stroustrup on ",(0,a.kt)("a",{parentName:"li",href:"https://www.stroustrup.com/C++17FAQ.html#std-unique_ptr"},"unique_ptr")),(0,a.kt)("li",{parentName:"ul"},"Read David Kieras on ",(0,a.kt)("a",{parentName:"li",href:"https://www.umich.edu/~eecs381/handouts/C++17_smart_ptrs.pdf"},"Using C++'s Smart Pointers")),(0,a.kt)("li",{parentName:"ul"},"Read Bartosz Milewski on ",(0,a.kt)("a",{parentName:"li",href:"https://www.informit.com/articles/article.aspx?p=21477"},"Strong Pointers and Resource Management in C++"))))}m.isMDXComponent=!0},3157:function(e,t,n){t.Z=n.p+"assets/images/smart-400a54c5828dfe3a0af7c583defe0937.png"}}]);