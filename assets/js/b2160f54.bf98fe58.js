"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[703],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3246:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"thread-classes",title:"Thread Classes",sidebar_position:2,description:"TBD"},l="Thread Classes",d={unversionedId:"G-Performance/thread-classes",id:"G-Performance/thread-classes",isDocsHomePage:!1,title:"Thread Classes",description:"TBD",source:"@site/docs/G-Performance/thread-classes.md",sourceDirName:"G-Performance",slug:"/G-Performance/thread-classes",permalink:"/G-Performance/thread-classes",editUrl:"https://github.com/Seneca-ICTOER/AdvOOP/tree/main/docs/G-Performance/thread-classes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"thread-classes",title:"Thread Classes",sidebar_position:2,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Multithreading",permalink:"/G-Performance/multithreading"},next:{title:"Pre-processor Directives",permalink:"/H-Deeper-Detail/pre-processor-directives"}},p=[{value:"Thread Class",id:"thread-class",children:[{value:"Example",id:"example",children:[],level:3},{value:"Member Functions",id:"member-functions",children:[{value:"Thread Identifier",id:"thread-identifier",children:[],level:4},{value:"Function Object",id:"function-object",children:[],level:4},{value:"Lambda Expression",id:"lambda-expression",children:[],level:4}],level:3}],level:2},{value:"<code>future</code> Library",id:"future-library",children:[{value:"Futures",id:"futures",children:[{value:"Member Functions",id:"member-functions-1",children:[],level:4}],level:3},{value:"Providers",id:"providers",children:[{value:"<code>promise</code> Objects",id:"promise-objects",children:[],level:4},{value:"<code>packaged_task</code> Object",id:"packaged_task-object",children:[],level:4},{value:"<code>async()</code> function",id:"async-function",children:[],level:4}],level:3},{value:"Examples",id:"examples",children:[{value:"Promise - Future",id:"promise---future",children:[],level:4},{value:"Packaged Task",id:"packaged-task",children:[],level:4},{value:"<code>async()</code>",id:"async",children:[],level:4},{value:"A More Complex Use Case",id:"a-more-complex-use-case",children:[],level:4}],level:3}],level:2},{value:"Thread Local Storage",id:"thread-local-storage",children:[],level:2},{value:"Exercises",id:"exercises",children:[],level:2}],c={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"thread-classes"},"Thread Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Design a concurrent solution using a threading class library"),(0,i.kt)("li",{parentName:"ul"},"Describe how to communicate between tasks executing on different threads")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"The use of RAII to control thread resources ... cannot be over-emphasized. RAII is at the center of the design of the C++ thread library and all of its facilities." Paterno (2011)')),(0,i.kt)("p",null,"The C++11 standard added five multi-threading libraries to the Standard Library Collection. Its ",(0,i.kt)("inlineCode",{parentName:"p"},"thread")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," libraries contain all the templates for simple multi-threaded solutions. The ",(0,i.kt)("inlineCode",{parentName:"p"},"thread")," library provides support for creating and managing threads that execute concurrently. The ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," library provides support for retrieving the result from a function that has executed in the same or a concurrently executing thread. These libraries implement the ",(0,i.kt)("strong",{parentName:"p"},"Resource Allocation Is Initialization")," (RAII) idiom."),(0,i.kt)("p",null,"This chapter describes the ",(0,i.kt)("inlineCode",{parentName:"p"},"thread")," class template in detail and demonstrates how to launch and synchronize threads. It also describes how to communicate data between threads using objects generated from the ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," class, the ",(0,i.kt)("inlineCode",{parentName:"p"},"promise")," class and the ",(0,i.kt)("inlineCode",{parentName:"p"},"packaged_task")," class templates as well as functions generated from the ",(0,i.kt)("inlineCode",{parentName:"p"},"async()")," function template."),(0,i.kt)("h2",{id:"thread-class"},"Thread Class"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"thread")," class defines an object that represents a single thread of execution in a process. The thread class template is defined in the header file ",(0,i.kt)("inlineCode",{parentName:"p"},"<thread>"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"thread")," object is either ",(0,i.kt)("em",{parentName:"p"},"joinable")," or ",(0,i.kt)("em",{parentName:"p"},"not-joinable"),". A joinable object represents an actual thread of execution with a unique id. A non-joinable object represents a potential thread of execution (the object is not associated yet with a hardware thread, or the thread has been already joined). Operations on a thread object can change its joinable/non-joinable state."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"The following program executes three tasks concurrently. It spawns two child threads from its main thread, executes all three tasks and waits in its main thread for the spawned threads to finish."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Run with Threads",src:n(4430).Z})),(0,i.kt)("p",null,"Each thread performs the same task (",(0,i.kt)("inlineCode",{parentName:"p"},"task()"),"). The following program"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Thread Class\n// thread.cpp\n\n#include <iostream>\n#include <string>\n#include <thread>\n\nvoid task(const std::string& str)\n{\n    std::cout << str + " says Hi\\n";\n}\n\nint main()\n{\n    // spawn child thread t1\n    std::thread t1(task, "t1");\n\n    // spawn child thread t2\n    std::thread t2(task, "t2");\n\n    // continue executing main thread\n    task("main");\n\n    // synchronize - IMPORTANT!\n    t2.join();\n    t1.join();\n}\n')),(0,i.kt)("p",null,"could produce the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"main says Hi\nt1 says Hi\nt2 says Hi\n")),(0,i.kt)("p",null,"The synchronization step is necessary. Had we neglected to ",(0,i.kt)("inlineCode",{parentName:"p"},"join()")," the spawned threads to the main thread, the result would be undefined. The main thread could, for instance, finish executing its task and return control to the operating system before one or both of the spawned threads had finished executing their tasks."),(0,i.kt)("h3",{id:"member-functions"},"Member Functions"),(0,i.kt)("p",null,"The member functions of the templated ",(0,i.kt)("inlineCode",{parentName:"p"},"thread")," class include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"thread() noexcept")," - creates a non-joinable thread object (a potential thread of execution)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"thread(thread&& t) noexcept")," - moves the thread handler from thread ",(0,i.kt)("inlineCode",{parentName:"li"},"t")," to the newly constructed thread object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~thread()")," - destroys the current thread object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"thread& operator=(thread&& t) noexcept")," - moves the thread handler from thread ",(0,i.kt)("inlineCode",{parentName:"li"},"t")," to the current not-joinable object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"thread::id get_id() const")," - returns the unique identifier of the current thread object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool joinable() const noexcept")," - returns true if the current object is an actual thread of execution"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void join()")," - returns when the current object has completed executing its task"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void detach()")," - detaches the current object from its parent object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void swap(thread& t)")," - swaps the state of the current object with the state of object ",(0,i.kt)("inlineCode",{parentName:"li"},"t"))),(0,i.kt)("p",null,"This template's copy-constructor and the copy-assignment special member functions are deleted. The ",(0,i.kt)("inlineCode",{parentName:"p"},"thread::id")," type represents a thread identifier. The definition of the ",(0,i.kt)("inlineCode",{parentName:"p"},"thread")," class includes an overload of the insertion operator for a right operand of type ",(0,i.kt)("inlineCode",{parentName:"p"},"thread::id"),"."),(0,i.kt)("p",null,"The class definition also includes a template for constructing objects that execute functions, function objects or lambda expressions. This template takes the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename Fn, typename... Args>\nexplicit thread(Fn&& f, Args&&... args);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Fn")," is the type of the function, function object or lambda expression and ",(0,i.kt)("inlineCode",{parentName:"p"},"Args")," are the arguments passed to the function call itself. See the following for examples."),(0,i.kt)("h4",{id:"thread-identifier"},"Thread Identifier"),(0,i.kt)("p",null,"The thread identifier of a joinable ",(0,i.kt)("inlineCode",{parentName:"p"},"thread")," object is accessible from within the function executing the thread's task. ",(0,i.kt)("inlineCode",{parentName:"p"},"std::this_thread::get_id()")," returns this identifier."),(0,i.kt)("p",null,"The following program launches 10 thread objects and displays their identifiers on standard output. The program creates each object through the constructor template with the address of a function as its sole argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Thread Class - Thread Identifiers\n// thread_id.cpp\n\n#include <iostream>\n#include <thread>\n#include <vector>\n\nconstexpr int NT = 10;\n\nvoid task()\n{\n    std::cout << "Thread id = "\n              << std::this_thread::get_id() << std::endl;\n}\n\nint main()\n{\n    // create a vector of threads\n    std::vector<std::thread> threads;\n\n    // launch execution of each thread\n    for (int i = 0; i < NT; i++)\n        threads.push_back(std::thread(task));\n\n    // synchronize their execution here\n    for (auto& thread : threads)\n        thread.join();\n}\n')),(0,i.kt)("p",null,"A possible output for the program above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Thread id = Thread id = 23620\nThread id = 23596\nThread id = 23608\n23584\nThread id = 23592\nThread id = 23612\nThread id = 23600\nThread id = 23588\nThread id = 23604\nThread id = 23616\n")),(0,i.kt)("p",null,"Note that a thread does not necessarily pass the entire cascaded insertion expression to standard output as a cohesive unit. Some executing threads interleave the constituent operations among themselves."),(0,i.kt)("p",null,"The following program uses the templated constructor to launch a task that takes a single argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Thread Class - Function with Arguments\n// thread_id_arg.cpp\n\n#include <iostream>\n#include <thread>\n#include <vector>\n\nconstexpr int NT = 10;\n\nvoid task(int i)\n{\n    std::cout << i << " Thread id = "\n              << std::this_thread::get_id() << std::endl;\n}\n\nint main()\n{\n    // create a vector of not-joinable threads\n    std::vector<std::thread> threads;\n\n    // launch execution of each thread\n    for (int i = 0; i < NT; i++)\n        threads.push_back(std::thread(task, i));\n\n    // synchronize their execution here\n    for (auto& thread : mythreads)\n        thread.join();\n}\n')),(0,i.kt)("p",null,"A possible output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0 Thread id = 23968\n3 Thread id = 19484\n7 Thread id = 21992\n2 Thread id = 21656\n8 Thread id = 17844\n5 Thread id = 23764\n4 Thread id = 24396\n6 Thread id = 22580\n1 Thread id = 24100\n9 Thread id = 23964\n")),(0,i.kt)("p",null,"In this particular run, the output from different threads happens not to interleave."),(0,i.kt)("h4",{id:"function-object"},"Function Object"),(0,i.kt)("p",null,"The function object version of the above example is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Thread Class - Function Object\n// thread_id_fo.cpp\n\n#include <iostream>\n#include <thread>\n#include <vector>\n\nconstexpr int NT = 10;\n\nclass Task\n{\n  public:\n    Task() = default;\n    void operator()(int i)\n    {\n        std::cout << i << " Thread id = "\n                  << std::this_thread::get_id() << std::endl;\n    }\n};\n\nint main()\n{\n    // create a vector of not-joinable threads\n    std::vector<std::thread> threads;\n\n    // launch execution of each thread\n    for (int i = 0; i < NT; i++)\n        threads.push_back(std::thread(Task(), i));\n\n    // synchronize their execution here\n    for (auto& thread : threads)\n        thread.join();\n}\n')),(0,i.kt)("p",null,"A possible output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"023 Thread id = 25096\n1 Thread id = 22704\n7 Thread id = 24540\n Thread id = 25516\n6 Thread id = 17152\n4 Thread id = 14460\n Thread id = 25024\n9 Thread id = 24632\n8 Thread id = 18060\n5 Thread id = 22796\n")),(0,i.kt)("p",null,"In this particular run, the output from different threads happens to interleave."),(0,i.kt)("h4",{id:"lambda-expression"},"Lambda Expression"),(0,i.kt)("p",null,"The lambda expression version of the above example is more compact and accesses the index ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," by value as a non-local variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Thread Class - Lambda Expression\n// thread_id_lambda.cpp\n\n#include <iostream>\n#include <thread>\n#include <vector>\n\nconstexpr int NT = 10;\n\nint main()\n{\n    // create a vector of not-joinable threads\n    std::vector<std::thread> threads;\n\n    // launch the execution of each thread\n    for (int i = 0; i < NT; i++)\n        threads.push_back(std::thread([=]()\n          {\n              std::cout << i << " Thread id = " <<\n                        << std::this_thread::get_id() << std::endl;\n          }));\n\n    // synchronize their execution here\n    for (auto& thread : threads)\n        thread.join();\n}\n')),(0,i.kt)("p",null,"A possible output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0 Thread id = 23624\n3 Thread id = 24412\n7 Thread id = 20744\n2 Thread id = 9580\n8 Thread id = 18552\n5 Thread id = 23808\n4 Thread id = 24560\n6 Thread id = 24296\n1 Thread id = 21600\n9 Thread id = 19552\n")),(0,i.kt)("p",null,"Note that the order of output differs from that for the other versions."),(0,i.kt)("h2",{id:"future-library"},(0,i.kt)("inlineCode",{parentName:"h2"},"future")," Library"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," library of the thread support category facilitates efficient transfer of values between tasks through ",(0,i.kt)("inlineCode",{parentName:"p"},"shared states"),". The class and function templates that support communications across a shared state are defined in the header file ",(0,i.kt)("inlineCode",{parentName:"p"},"<future>"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," object retrieves a value that a ",(0,i.kt)("em",{parentName:"p"},"provider")," has stored in a shared state. Each provider-future pair establishes a synchronization point for two tasks that are executing concurrently. The provider creates an empty shared state on initialization. Once the provider has supplied a value to that shared state, that state is ready for access by the ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," object associated with that provider. A shared state can survive the lifetime of its provider."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Future",src:n(7543).Z})),(0,i.kt)("h3",{id:"futures"},"Futures"),(0,i.kt)("p",null,"Instantiation of the templated ",(0,i.kt)("inlineCode",{parentName:"p"},"std::future")," class creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," object. A ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," object is either ",(0,i.kt)("em",{parentName:"p"},"valid")," or ",(0,i.kt)("em",{parentName:"p"},"not-valid"),". A valid object is associated with a shared state and can retrieve the value of that shared state once it is ready. Until it is ready, any retrieval request necessarily waits."),(0,i.kt)("h4",{id:"member-functions-1"},"Member Functions"),(0,i.kt)("p",null,"The member functions of the templated future class include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"future() noexcept")," - creates a future object not associated with a shared state"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"future(future&& f) noexcept")," - moves the shared state from future ",(0,i.kt)("inlineCode",{parentName:"li"},"f")," to the current object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~future()")," - disassociates the shared state from the current object and destroys the state if not associated with any other object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"future& operator=(future&& f) noexcept")," - acquires the shared state of future ",(0,i.kt)("inlineCode",{parentName:"li"},"f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"T get()")," - returns the value stored in the current object's shared state, if ready; waits, if not ready"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool valid() const noexcept")," - returns true if the current object is associated with a shared state"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void wait() const")," - waits for the current object's shared state to be ready")),(0,i.kt)("p",null,"This class' copy-constructor and the copy-assignment special member functions are deleted."),(0,i.kt)("h3",{id:"providers"},"Providers"),(0,i.kt)("p",null,"A provider object complements a future object. One of the following templates can instantiate a provider object:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"std::promise")," class template"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"std::packaged_task")," class template"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"std::async()")," function template")),(0,i.kt)("h4",{id:"promise-objects"},(0,i.kt)("inlineCode",{parentName:"h4"},"promise")," Objects"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"promise")," object creates or acquires a shared state in which it can store a value."),(0,i.kt)("p",null,"The templated ",(0,i.kt)("inlineCode",{parentName:"p"},"promise")," class defines a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"set_value()")," counterpart to the ",(0,i.kt)("inlineCode",{parentName:"p"},"get()")," member function of the templated ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," class. The member functions of the templated ",(0,i.kt)("inlineCode",{parentName:"p"},"promise")," class include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promise()")," - a promise object with a new empty shared state"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promise(promise&& p) noexcept")," - moves the shared state from promise ",(0,i.kt)("inlineCode",{parentName:"li"},"p")," to the newly created current object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~promise()")," - abandons the shared state and destroys the promise"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promise& operator=(promise&& p) noexcept")," - moves the shared state from promise ",(0,i.kt)("inlineCode",{parentName:"li"},"p")," to the current object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"future<T> get_future()")," - returns the future object associated with the current object's shared state"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void set_value(const T&)")," - stores a value in the current object's shared state, making it ready for retrieval"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void swap(promise& p)")," - swaps the shared state of the current object with the shared state of object ",(0,i.kt)("inlineCode",{parentName:"li"},"p"))),(0,i.kt)("p",null,"This template's copy-constructor and the copy-assignment operations are deleted."),(0,i.kt)("h4",{id:"packaged_task-object"},(0,i.kt)("inlineCode",{parentName:"h4"},"packaged_task")," Object"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"packaged_task")," object consists of two components: a stored task and a shared state."),(0,i.kt)("p",null,"The templated ",(0,i.kt)("inlineCode",{parentName:"p"},"packaged_task")," class defines a simple wrapper for passing the result of a task to a ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," object; that is, for launching a thread that executes a task and capturing the return value, which a ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," can subsequently retrieve. The member functions of the templated ",(0,i.kt)("inlineCode",{parentName:"p"},"packaged_task")," class include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packaged_task()")," - a packaged_task object with no shared state and no task"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packaged_task(packaged_task&& p) noexcept")," - moves the shared state and stored task from packaged_task ",(0,i.kt)("inlineCode",{parentName:"li"},"p")," to the newly created current object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~packaged_task()")," - abandons the shared state and destroys the packaged_task"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packaged_task& operator=(packaged_task&& p) noexcept")," - acquires the shared state and stored task from packaged_task ",(0,i.kt)("inlineCode",{parentName:"li"},"p")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool valid() const noexcept")," - returns true if the current object is associated with a shared state and a stored task"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"future<T> get_future()")," - returns the future object associated with the current object's shared state"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void operator()(Args...)")," - forwards the function arguments of type ",(0,i.kt)("inlineCode",{parentName:"li"},"Args")," to the stored task and initiates its execution"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void swap(packaged_task& p)")," - swaps the shared state of the current object with that of object ",(0,i.kt)("inlineCode",{parentName:"li"},"p"))),(0,i.kt)("p",null,"This template's copy-constructor and copy-assignment operations are deleted."),(0,i.kt)("h4",{id:"async-function"},(0,i.kt)("inlineCode",{parentName:"h4"},"async()")," function"),(0,i.kt)("p",null,"The templated ",(0,i.kt)("inlineCode",{parentName:"p"},"async()")," function provides an extremely simple pair that spawns a thread to execute a task and creates a future for retrieving the return value from that task."),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"async()")," function"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"accepts the address of the function that defines the task"),(0,i.kt)("li",{parentName:"ul"},"launches the task"),(0,i.kt)("li",{parentName:"ul"},"reverts control to its caller"),(0,i.kt)("li",{parentName:"ul"},"returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"future")," object that can retrieve the value returned on the task's completion")),(0,i.kt)("p",null,"The executing task stores the return value temporarily in a shared state. The ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," object can retrieve the value from this shared state."),(0,i.kt)("p",null,"The template for an ",(0,i.kt)("inlineCode",{parentName:"p"},"async()")," function has the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template<class Fn, class... Args>\nfuture<typename result_of<f(Args...)>::type> async(Fn&& fn, Args&&... args);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fn")," is a pointer to a function or any kind of move-constructable function object of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Fn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," denotes arguments of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Args")," to the function, where type is also move-constructable."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"promise---future"},"Promise - Future"),(0,i.kt)("p",null,"Fulfilling a promise on a child thread and retrieving the promised value on the main thread involves passing the promise object by reference to the thread. In the following program ",(0,i.kt)("inlineCode",{parentName:"p"},"task()")," on thread ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," fulfills the promise by setting a value. The main thread retrieves that value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Promise - Future\n// promise_future.cpp\n\n#include <iostream>\n#include <thread>\n#include <future>\n\nvoid task(std::promise<double>& p)\n{\n    p.set_value(12.34);\n}\n\nint main()\n{\n    std::promise<double> p;\n    std::future<double> f = p.get_future();\n    std::thread t(task, std::ref(p));\n    std::cout << "Value = " << f.get()<< std::endl;\n    t.join();\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Value = 12.34\n")),(0,i.kt)("p",null,"Note that any return value from the function executed by a child thread can be captured by an ",(0,i.kt)("inlineCode",{parentName:"p"},"std::promise")," object. The return value from the function is otherwise ignored."),(0,i.kt)("h4",{id:"packaged-task"},"Packaged Task"),(0,i.kt)("p",null,"The following program packages a task and a shared state. The ",(0,i.kt)("inlineCode",{parentName:"p"},"get_future()")," member function retrieves the future object that will hold the return value generated by execution of the ",(0,i.kt)("inlineCode",{parentName:"p"},"task"),". Calling the packaged_task executes the ",(0,i.kt)("inlineCode",{parentName:"p"},"task"),", while calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"get()")," member function on the ",(0,i.kt)("inlineCode",{parentName:"p"},"future")," object retrieves the return value, which the main function can then display:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Packaged Task\n// packaged_task.cpp\n\n#include <iostream>\n#include <thread>\n#include <future>\n\ndouble task(double x) { return x * 2; }\n\nint main()\n{\n    std::packaged_task<double(double)> pt(task);\n\n    auto f = pt.get_future();\n    pt(10);\n    double r = f.get();\n\n    std::cout << "Result = " << r << std::endl;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Result = 20\n")),(0,i.kt)("h4",{id:"async"},(0,i.kt)("inlineCode",{parentName:"h4"},"async()")),(0,i.kt)("p",null,"The following program launches ",(0,i.kt)("inlineCode",{parentName:"p"},"task()")," asynchronously and returns the future object associated with the shared state. The ",(0,i.kt)("inlineCode",{parentName:"p"},"get()")," member function on the future object retrieves the value of the shared state, which the main function can then display:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Asynchronous Launch\n// async.cpp\n\n#include <iostream>\n#include <thread>\n#include <future>\n\ndouble task(double x) { return x * 2; }\n\nint main()\n{\n    std::future<double> f = std::async(task, 10);\n    double r = f.get();\n    std::cout << "Result = " << r << std::endl;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Result = 20\n")),(0,i.kt)("p",null,"On the three examples, this is the simplest."),(0,i.kt)("h4",{id:"a-more-complex-use-case"},"A More Complex Use Case"),(0,i.kt)("p",null,"The following program demonstrates changes in the validity of future objects as a result of its operations on them. The program:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creates 2 ",(0,i.kt)("inlineCode",{parentName:"li"},"future")," objects - an invalid one (using the default constructor), and a valid one"),(0,i.kt)("li",{parentName:"ul"},"moves the shared state of the ",(0,i.kt)("inlineCode",{parentName:"li"},"future")," object created by asychronously launching the execution of ",(0,i.kt)("inlineCode",{parentName:"li"},"get()")),(0,i.kt)("li",{parentName:"ul"},"moves the shared state from the valid ",(0,i.kt)("inlineCode",{parentName:"li"},"future")," object (",(0,i.kt)("inlineCode",{parentName:"li"},"g"),") to the not-valid one (",(0,i.kt)("inlineCode",{parentName:"li"},"f"),")"),(0,i.kt)("li",{parentName:"ul"},"retrieves the value from the shared state by calling the ",(0,i.kt)("inlineCode",{parentName:"li"},"get()")," member function on the valid ",(0,i.kt)("inlineCode",{parentName:"li"},"future")," object (",(0,i.kt)("inlineCode",{parentName:"li"},"f"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Future Class Template - Explicit Asynchronous Launch\n// future_async.cpp\n\n#include <iostream>\n#include <future>\n\ndouble get() { return 12.34; }\n\nint main()\n{\n    std::future<double> f; // default ctor\n    std::future<double> g = std::async(get); // move-ctor\n\n    std::cout << "After Construction" << std::endl;\n    std::cout << (f.valid() ? "f is valid" : "f is not valid") << std::endl;\n    std::cout << (g.valid() ? "g is valid" : "g is not valid") << std::endl;\n\n    f = std::move(g); // move-assignment\n\n    std::cout << "After Assignment" << std::endl;\n    std::cout << (f.valid() ? "f is valid" : "f is not valid") << std::endl;\n    std::cout << (g.valid() ? "g is valid" : "g is not valid") << std::endl;\n\n    double a = f.get(); // retrieve shared value\n\n    std::cout << "After Retrieval" << std::endl;\n    std::cout << (f.valid() ? "f is valid" : "f is not valid") << std::endl;\n    std::cout << (g.valid() ? "g is valid" : "g is not valid") << std::endl;\n\n    std::cout << "Return Value = " << a << std::endl;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"After Construction\nf is not valid\ng is valid\n\nAfter Assignment\nf is valid\ng is not valid\n\nAfter Retrieval\nf is not valid\ng is not valid\n\nReturn Value = 12.34\n")),(0,i.kt)("p",null,"Note that after retrieval of the value of a shared state associated with a future object that object is no longer valid."),(0,i.kt)("h2",{id:"thread-local-storage"},"Thread Local Storage"),(0,i.kt)("p",null,"The same variable can have a different storage location for each thread in a team of threads. We identify such variables as having ",(0,i.kt)("inlineCode",{parentName:"p"},"thread_local")," storage duration. This storage duration lasts the lifetime of that thread and is the equivalent of static storage duration for a program variable."),(0,i.kt)("p",null,"In the following example, ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," has three separate storage locations: one for the main thread, one for thread ",(0,i.kt)("inlineCode",{parentName:"p"},"t1")," and one for thread ",(0,i.kt)("inlineCode",{parentName:"p"},"t2"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Thread Local Storage Duration\n// thread_local.cpp\n\n#include <iostream>\n#include <sstream>\n#include <thread>\n\nthread_local int k = 0;\n\nvoid task(int i)\n{\n    k = i;\n    std::stringstream s;\n    s << k << " at " << &k << std::endl;\n    std::cout << s.str();\n}\n\nint main()\n{\n    k = 10;\n    std::thread t1(task, 15);\n    std::thread t2(task, 20);\n    t1.join();\n    t2.join();\n    task(k);\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"15 at 00A6730C\n20 at 00A67CCC\n\n10 at 00A5644C\n")),(0,i.kt)("p",null,"Note that the address of the storage location for ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," is different for each thread."),(0,i.kt)("h2",{id:"exercises"},"Exercises"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read ",(0,i.kt)("em",{parentName:"li"},"CPP Reference")," on ",(0,i.kt)("a",{parentName:"li",href:"https://en.cppreference.com/w/cpp/language/raii"},"RAII")),(0,i.kt)("li",{parentName:"ul"},"Read Wikipedia on ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stream_%28computing%29"},"Threads"))))}u.isMDXComponent=!0},7543:function(e,t,n){t.Z=n.p+"assets/images/future-c5a76a02c68df33889aab4d113efddb7.png"},4430:function(e,t,n){t.Z=n.p+"assets/images/thread-fb8a4cf0ac36813533e5659190d6ab08.png"}}]);