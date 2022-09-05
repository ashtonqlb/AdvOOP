"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[831],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(n),u=a,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"error-handling",title:"Error Handling",sidebar_position:3,description:"TBD"},s="Error Handling",d={unversionedId:"D-Processing/error-handling",id:"D-Processing/error-handling",isDocsHomePage:!1,title:"Error Handling",description:"TBD",source:"@site/docs/D-Processing/error-handling.md",sourceDirName:"D-Processing",slug:"/D-Processing/error-handling",permalink:"/D-Processing/error-handling",editUrl:"https://github.com/Seneca-ICTOER/AdvOOP/tree/main/docs/D-Processing/error-handling.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"error-handling",title:"Error Handling",sidebar_position:3,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Functions",permalink:"/D-Processing/functions"},next:{title:"Standard Library",permalink:"/E-STL/standard-library"}},p=[{value:"Exceptions",id:"exceptions",children:[{value:"Reporting and Handling",id:"reporting-and-handling",children:[{value:"Reporting an Exception",id:"reporting-an-exception",children:[],level:4},{value:"Handling the Exception",id:"handling-the-exception",children:[],level:4},{value:"Detecting an Exception",id:"detecting-an-exception",children:[],level:4}],level:3},{value:"Standard Exceptions",id:"standard-exceptions",children:[],level:3},{value:"Expressions that Throw Exceptions",id:"expressions-that-throw-exceptions",children:[],level:3},{value:"<code>noexcept</code>",id:"noexcept",children:[],level:3}],level:2},{value:"Standard Exits",id:"standard-exits",children:[{value:"Normal Exits",id:"normal-exits",children:[{value:"<code>atexit()</code>",id:"atexit",children:[],level:4},{value:"<code>exit()</code>",id:"exit",children:[],level:4}],level:3},{value:"Abnormal Exits",id:"abnormal-exits",children:[{value:"<code>terminate()</code>",id:"terminate",children:[],level:4},{value:"<code>abort()</code>",id:"abort",children:[],level:4}],level:3}],level:2},{value:"Exercises",id:"exercises",children:[],level:2}],c={toc:p};function h(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"error-handling"},"Error Handling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introduce exceptions and describe how to report them and how to handle them"),(0,r.kt)("li",{parentName:"ul"},"Describe different ways of terminating an application prematurely")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Prefer exceptions over error codes to report errors. Use status codes for errors when exceptions cannot be used" Sutter, Alexandruscu (2005)')),(0,r.kt)("p",null,"The modularity of object-oriented programs give rise to a separation of the cause of an error from the place where that error can be handled properly.  Object-oriented languages require a specialized mechanism for identifying and handling errors.  Since the designer of an object is not necessarily aware of how their object will be used, the object itself may not be able to handle the error(s) that it identifies.  The preferred strategy in object-oriented programming is to identify the error as an exception to the normal execution process and to handle that error in some other as yet unknown object.  The alternative strategy is to identify the error and call a specific library function, which will handle the error directly and immediately terminate the execution.  These two strategies are illustrated below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Error Handling",src:n(4320).Z})),(0,r.kt)("p",null,"Structured programming requires passing an error code through return values or parameters up the function call stack to the function that handles the error, which presumes a known direct linkage between cause and effect.  Object-oriented languages relax the single-entry single-exit principle of structured programming by uncoupling error reporting and handling.  This automates the transfer of control from the reporting point to the handling point, invoking destructors where necessary."),(0,r.kt)("p",null,"This chapter describes the exception handling facilities supported by the C++ language along with the standard library functions that implement direct exit strategies. "),(0,r.kt)("h2",{id:"exceptions"},"Exceptions"),(0,r.kt)("p",null,"An exception is something that is not done as one would normally expect it to be done.  It may be a response to an initial attempt at a solution, a calculation that triggers a hardware error, or a warning about a questionable outcome.  What is or is not an exception is within our discretion as programmers. "),(0,r.kt)("h3",{id:"reporting-and-handling"},"Reporting and Handling"),(0,r.kt)("p",null,"Exception processing has two distinct parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the exception is reported (or thrown)"),(0,r.kt)("li",{parentName:"ul"},"the exception is caught and handled")),(0,r.kt)("h4",{id:"reporting-an-exception"},"Reporting an Exception"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," expression reports an exception and takes the form"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"     throw expression;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expression")," is an expression of a previously defined type.  A function that includes this statement cannot be identified as a ",(0,r.kt)("inlineCode",{parentName:"p"},"noexcept")," function."),(0,r.kt)("h4",{id:"handling-the-exception"},"Handling the Exception"),(0,r.kt)("p",null,"The code for handling an exception consists of two parts: the set of statements that initiated the process and the set of statements that respond to an exception.  The keywords ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," identify these complementary parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"try")," block contains all of the code that initiates whatever might throw the exception"),(0,r.kt)("li",{parentName:"ul"},"one or more ",(0,r.kt)("inlineCode",{parentName:"li"},"catch")," blocks contain the code that handles any exception that was thrown as a result of executing any statement within the ",(0,r.kt)("inlineCode",{parentName:"li"},"try")," block")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"try ... catch")," combination takes the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"try\n{\n    // code that might generate exceptions\n}\ncatch (Type_1 identifier)\n{\n    // handler code for a specific type of exception\n}\ncatch (Type_2 identifier)\n{\n    // handler code for another specific type of exception\n}\ncatch (...)\n{\n    // handler code for all other types of exception\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Type_1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Type_2")," refers to the type of the expression being handled.  ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," is the name used within the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block to refer to the expression that has been thrown.  The first ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block that receives the type matching the reporting type handles the exception.  The ellipsis (",(0,r.kt)("inlineCode",{parentName:"p"},"..."),") denotes any type not caught by the preceding catch blocks."),(0,r.kt)("p",null,"In the following example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"divide()")," function identifies two possible exceptions to a normal simple division of an element in an array.  The two catch blocks in the ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," function handle these exceptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an array index that is out of bounds"),(0,r.kt)("li",{parentName:"ul"},"an attempt to divide by zero")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Exception Handling\n// exceptions.cpp\n\n#include <iostream>\n\nvoid divide(double a[], int i, int n, double divisor)\n{\n    if(i < 0 || i >= n)\n        throw "Outside bounds";\n    else if(divisor == 0)\n        throw divisor;\n    else\n        a[i] = i / divisor;\n}\n\nint main()\n{\n    bool keepdividing = true;\n    double a[] = {1.1,2.2,3.3,4.4,5.5,6.6}, divisor;\n    int i, n = sizeof a / sizeof a[0];\n\n    do\n    {\n        try\n        {\n            std::cout << "Index: ";\n            std::cin >> i;\n            std::cout << "Divisor: ";\n            std::cin >> divisor;\n            divide(a, i, n, divisor);\n            std::cout << "a[i] = " << a[i] << std::endl; \n            std::cout << "Continuing ..." << std::endl;\n        }\n        catch(const char* msg)\n        {\n            std::cout << msg << std::endl;\n            keepdividing = false;\n        }\n        catch(...)\n        {\n            std::cout << "Zero Division!" << std::endl; \n            std::cout << "a[i] = " << a[i] << std::endl;\n            std::cout << "Continuing ..." << std::endl;\n        }\n    }\n    while (keepdividing);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Index: 1\nDivisor: -1\na[i] = -1\nContinuing ...\n\nIndex: 4\nDivisor: 2\na[i] = 2\nContinuing ...\n\nIndex: 5\nDivisor: 0\nZero Division!\na[i] = 6.6\nContinuing ...\n\nIndex: 45\nDivisor: 3\nOutside bounds \n")),(0,r.kt)("p",null,"The code within the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block is executed statement by statement as long as an exception is not thrown.  Once ",(0,r.kt)("inlineCode",{parentName:"p"},"divide()")," throws an exception, control leaves the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," statement transfers control to the first ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block that receives the type thrown."),(0,r.kt)("p",null,"If an exception is thrown and the run-time does not find any handler for that exception, the run-time calls ",(0,r.kt)("inlineCode",{parentName:"p"},"std::terminate()"),", which terminates execution (see below)."),(0,r.kt)("h4",{id:"detecting-an-exception"},"Detecting an Exception"),(0,r.kt)("p",null,"If an exception has been thrown, but has not yet entered a ",(0,r.kt)("inlineCode",{parentName:"p"},"catch"),", the function ",(0,r.kt)("inlineCode",{parentName:"p"},"int std::uncaught_exceptions()")," utility returns the number of uncaught exceptions in the current thread, during stack unwinding."),(0,r.kt)("h3",{id:"standard-exceptions"},"Standard Exceptions"),(0,r.kt)("p",null,"The standard C++ libraries include a library of exception classes.  The base class for the hierarchy of these classes is called ",(0,r.kt)("inlineCode",{parentName:"p"},"exception")," and is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<exception>")," header file.  Classes derived from this base class include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logic_error")," - handles problems in a program's internal logic, which in theory are preventable.  The following classes are derived from ",(0,r.kt)("inlineCode",{parentName:"li"},"logic_error"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"length_error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domain_error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"out_of_range")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"invalid_argument")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runtime_error")," - handles problems that can only be caught during execution.  The following classes are derived from ",(0,r.kt)("inlineCode",{parentName:"li"},"runtime_error"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"range_error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overflow_error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"underflow_error")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bad_alloc")," - handles the allocation exception thrown by ",(0,r.kt)("inlineCode",{parentName:"li"},"new"),".  This class needs the ",(0,r.kt)("inlineCode",{parentName:"li"},"<new>")," header file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bad_cast")," - handles the exception thrown by ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamic_cast"),".  This class needs the ",(0,r.kt)("inlineCode",{parentName:"li"},"<typeinfo>")," header file")),(0,r.kt)("p",null,"In handling error objects from derived classes, it is important to catch the most derived types first.  For example, the following code catches a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::bad_alloc")," exception before handling a general exception:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'try\n{\n    p = new char[std::strlen(s) + 1];\n    std::strcpy(p, s);\n}\ncatch (std::bad_alloc)\n{\n    std::cout << "Insufficient memory\\n";\n}\ncatch (std::exception& e)\n{\n    std::cout << "Standard Exception\\n";\n}\n')),(0,r.kt)("p",null,"The following handles all exceptions including the ",(0,r.kt)("inlineCode",{parentName:"p"},"std:::bad_alloc")," exception under the first ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'try\n{\n    p = new char[std::strlen(s) + 1];\n    std::strcpy(p, s);\n}\ncatch (std::exception& e) // called by std::bad_alloc also \n{\n    std::cout << "Standard Exception\\n";\n}\ncatch (std::bad_alloc) // UNREACHABLE!\n{\n    std::cout << "Insufficient memory\\n";\n}\n')),(0,r.kt)("h3",{id:"expressions-that-throw-exceptions"},"Expressions that Throw Exceptions"),(0,r.kt)("p",null,"Exceptions may be thrown by the following expressions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"throw")," expression"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamic_cast")," expression"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"type_id")," expression"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"new")," expression")),(0,r.kt)("p",null,"For the exception to be caught, it must be thrown from within a ",(0,r.kt)("inlineCode",{parentName:"p"},"try ... catch")," block where the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," type match the exception type."),(0,r.kt)("h3",{id:"noexcept"},(0,r.kt)("inlineCode",{parentName:"h3"},"noexcept")),(0,r.kt)("p",null,"C++11 introduced the ",(0,r.kt)("inlineCode",{parentName:"p"},"noexcept")," keyword to identify a function as one that will not throw an exception.  This keyword informs the compiler that it can perform certain optimizations that would not be possible if uncaught exceptions could pass through the function."),(0,r.kt)("p",null,"If a function marked ",(0,r.kt)("inlineCode",{parentName:"p"},"noexcept")," allows an uncaught exception to escape at runtime, the program terminates immediately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// No Exceptions - compile on GCC\n// noexceptions.cpp\n\n#include <iostream>\n\nvoid d() { throw "d() throws\\n"; }\nvoid e()\n{\n    try\n    {\n        d();\n    }\n    catch(const char* msg)\n    {\n        std::cout << msg;\n    }\n} \nvoid f() { throw "f() throws\\n"; }\nvoid g() noexcept { e(); }\nvoid h() noexcept { f(); }\n\nint main()\n{\n    std::cout << "Calling g:";\n    g();\n    std::cout << "Calling h:";\n    h();\n    std::cout << "Normal exit\\n";\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Calling g: d() throws \nCalling h:\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"g()")," calls ",(0,r.kt)("inlineCode",{parentName:"p"},"e()"),", which calls ",(0,r.kt)("inlineCode",{parentName:"p"},"d()"),", which throws an exception.  ",(0,r.kt)("inlineCode",{parentName:"p"},"e()")," catches this exception and terminates normally.  ",(0,r.kt)("inlineCode",{parentName:"p"},"h()")," calls ",(0,r.kt)("inlineCode",{parentName:"p"},"f()"),", which throws an exception.  Since this exception is not caught before control reverts to ",(0,r.kt)("inlineCode",{parentName:"p"},"h()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"h()")," has been marked as a function that will not throw an exception; execution terminates abnormally at this point."),(0,r.kt)("h2",{id:"standard-exits"},"Standard Exits"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," function of a program serves as its entry point and returns an integer to the operating system that conveys the program's status at exit time.  This integer is the value of the expression in the ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," statement.  C++ supports standard library functions that provide distinct routes to exiting a program other than through any normal return from the ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," function. "),(0,r.kt)("p",null,"The library functions that augment this normal termination mechanism include functions for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"normal exits"),(0,r.kt)("li",{parentName:"ul"},"abnormal exits")),(0,r.kt)("h3",{id:"normal-exits"},"Normal Exits"),(0,r.kt)("p",null,"Normal exits involve calling the destructors that would be called at the end of each object's lifetime, flushing and closing all input and output streams and returning a status integer to the operating system.  To simulate normal exits, C++ provides two functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int atexit(void (*)(void))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int exit(int)"))),(0,r.kt)("h4",{id:"atexit"},(0,r.kt)("inlineCode",{parentName:"h4"},"atexit()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"atexit()")," function registers a function to be called during any termination initiated by a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"void exit(int)")," function.  Each registered function must be of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"void (*identifier)(void))")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," is the name of the function.  ",(0,r.kt)("inlineCode",{parentName:"p"},"atexit()")," returns 0 if registration succeeds, non-zero otherwise.  C++ supports registration of at least 32 functions."),(0,r.kt)("h4",{id:"exit"},(0,r.kt)("inlineCode",{parentName:"h4"},"exit()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"void exit(int)")," function initiates a termination process that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"destroys objects with thread storage duration and associated with the current thread"),(0,r.kt)("li",{parentName:"ol"},"destroys objects with static storage duration"),(0,r.kt)("li",{parentName:"ol"},"calls functions that have been registered by ",(0,r.kt)("inlineCode",{parentName:"li"},"atexit()")),(0,r.kt)("li",{parentName:"ol"},"flushes and closes all open C streams"),(0,r.kt)("li",{parentName:"ol"},"returns control to the operating system")),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Normal Exits\n// exit.cpp\n\n#include <iostream>\n\nvoid exit_1()\n{\n    std::cerr << "In exit_1\\n";\n}\n\nint main()\n{\n    int i;\n\n    std::cout << "Return(!=1), Exit(1) ? "; \n    std::cin >> i;\n    if (i == 1)\n    {\n        std::atexit(exit_1);\n        std::exit(1);\n    }\n    return i;\n}\n')),(0,r.kt)("p",null,"will output the following (depending on the user input)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Return(!=1), Exit(1) ? 1\nIn exit_1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Return(!=1), Exit(1) ? 2\n")),(0,r.kt)("h3",{id:"abnormal-exits"},"Abnormal Exits"),(0,r.kt)("p",null,"Two functions initiate abnormal termination:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void std::terminate()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void std::abort()"))),(0,r.kt)("h4",{id:"terminate"},(0,r.kt)("inlineCode",{parentName:"h4"},"terminate()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"terminate()")," function terminates program execution as result of an error related to exception handling.  Cases include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the mechanism cannot find a handler for a thrown exception"),(0,r.kt)("li",{parentName:"ul"},"the handler encounters the body of a function with a ",(0,r.kt)("inlineCode",{parentName:"li"},"noexcept")," specification"),(0,r.kt)("li",{parentName:"ul"},"the destruction of an object exits via an exception"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"throw")," with no operand attempts to throw an exception when none exits")),(0,r.kt)("p",null,"This function does not execute destructors for objects of automatic, thread, or static storage duration or call functions at addresses passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"atexit()"),"."),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"terminate()")," does not have access to the exception that was not handled, it is usually better to use ",(0,r.kt)("inlineCode",{parentName:"p"},"catch (std::exception& e)"),"."),(0,r.kt)("h4",{id:"abort"},(0,r.kt)("inlineCode",{parentName:"h4"},"abort()")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"abort()")," function terminates program execution by a ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGABRT")," signal.  This function, like ",(0,r.kt)("inlineCode",{parentName:"p"},"terminate()"),", does not execute destructors for objects of automatic, thread, or static storage duration or call functions at addresses passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"atexit()"),"."),(0,r.kt)("h2",{id:"exercises"},"Exercises"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read Wikipedia on ",(0,r.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Exception_handling"},"Exception handling"))))}h.isMDXComponent=!0},4320:function(e,t,n){t.Z=n.p+"assets/images/error-2ea3858a802593e0ffb0c81debcc89ec.bmp"}}]);