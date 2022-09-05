"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[22],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9341:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"compilation-and-execution",title:"Compliation and Execution",sidebar_position:3,description:"TBD"},s="Compilation and Execution",c={unversionedId:"A-Introduction/compilation-and-execution",id:"A-Introduction/compilation-and-execution",isDocsHomePage:!1,title:"Compliation and Execution",description:"TBD",source:"@site/docs/A-Introduction/compilation-and-execution.md",sourceDirName:"A-Introduction",slug:"/A-Introduction/compilation-and-execution",permalink:"/A-Introduction/compilation-and-execution",editUrl:"https://github.com/Seneca-ICTOER/AdvOOP/tree/main/docs/A-Introduction/compilation-and-execution.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"compilation-and-execution",title:"Compliation and Execution",sidebar_position:3,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"C++ Building Blocks",permalink:"/A-Introduction/cpp-building-blocks"},next:{title:"Fundamental Types",permalink:"/B-Types/fundamental-types"}},p=[{value:"Compilation Process",id:"compilation-process",children:[],level:2},{value:"Platforms and Compilers",id:"platforms-and-compilers",children:[{value:"Microsoft Visual Studio - <code>cl</code>",id:"microsoft-visual-studio---cl",children:[{value:"Compiler Options",id:"compiler-options",children:[],level:4}],level:3},{value:"Linux - <code>gcc</code>",id:"linux---gcc",children:[{value:"Compiler Options",id:"compiler-options-1",children:[],level:4}],level:3}],level:2},{value:"Interface with the Operating System",id:"interface-with-the-operating-system",children:[{value:"Command-Line Arguments",id:"command-line-arguments",children:[],level:3},{value:"Returning Control",id:"returning-control",children:[],level:3}],level:2},{value:"Compile-time Evaluations",id:"compile-time-evaluations",children:[{value:"Constant Expressions",id:"constant-expressions",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Static Assertions",id:"static-assertions",children:[],level:3}],level:2}],m={toc:p};function u(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compilation-and-execution"},"Compilation and Execution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Review the stages of compilation"),(0,o.kt)("li",{parentName:"ul"},"Describe the platforms used in this course"),(0,o.kt)("li",{parentName:"ul"},"Introduce constant expressions and static assertions")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Prefer the compiler to the pre-processor." ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Scott Meyers (2005)")))),(0,o.kt)("p",null,"Program compilation is a multi-stage process.  The initial stage collates the source code for compilation into translation units.  It inserts into the implementation file the source code of all the header files referred to by the implementation file.  The intermediate stage compiles the translation units individually.  The final stage creates a single binary executable from all the compiled translation units.  The intermediate stage uses the language's type system to evaluate the source code for syntactic errors and to construct the binary instructions that form the executable.  A user can run the executable multiple times without recompiling the source code. "),(0,o.kt)("p",null,"This chapter reviews the stages of the C++ compilation process, describes the platforms used in this course and introduces the syntax for communicating with the operating system.  This chapter also describes the syntax for expressions that the compiler itself can evaluate directly and the syntax for custom checking assumptions and reporting breaches of those assumptions at compile-time. "),(0,o.kt)("h2",{id:"compilation-process"},"Compilation Process"),(0,o.kt)("p",null,"The source code for a typical C++ application may be distributed across many modules.  A module's header file (",(0,o.kt)("inlineCode",{parentName:"p"},"*.h"),") exposes its names to other modules.  Its implementation file (",(0,o.kt)("inlineCode",{parentName:"p"},"*.cpp"),") contains the definitions associated with declarations in the header files."),(0,o.kt)("p",null,"Transforming the original source code for an application into a binary executable involves three distinct stages:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pre-Processing Stage - the pre-processor creates a separate ",(0,o.kt)("em",{parentName:"li"},"translation unit")," from the original source files for each module by inserting the header files into the implementation file and replacing or expanding any macros (lines starting with ",(0,o.kt)("inlineCode",{parentName:"li"},"#"),")"),(0,o.kt)("li",{parentName:"ol"},"Compilation Stage - the compiler creates a separate binary file from each translation unit"),(0,o.kt)("li",{parentName:"ol"},"Linking Stage - the linker creates a single relocatable file from the binary files for all translation units and the binary files for any referenced libraries.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pre-Processing, Compilation and Linking Stages of the Compilation Process",src:n(8164).Z})),(0,o.kt)("p",null,"To run the executable, the user instructs the operating system to load the relocatable file into memory.  The loader copies the relocatable file into RAM, arranges the storage locations for the data and the code and transfers control to the entry point of the executable (the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function)."),(0,o.kt)("p",null,"After the initial build, only those translation units that have been changed need to be re-compiled. "),(0,o.kt)("h2",{id:"platforms-and-compilers"},"Platforms and Compilers"),(0,o.kt)("p",null,"The platform used in this course is Windows and the development compiler is that shipped with Visual Studio."),(0,o.kt)("h3",{id:"microsoft-visual-studio---cl"},"Microsoft Visual Studio - ",(0,o.kt)("inlineCode",{parentName:"h3"},"cl")),(0,o.kt)("p",null,"Visual Studio is an Integrated Development Environment (IDE) supported by Microsoft.  Instructions for installing this IDE on a Windows platform are listed in the ",(0,o.kt)("a",{parentName:"p",href:"https://scs.senecac.on.ca/~chris.szalwinski/resources/cl.html"},"resources section")," of the course web site."),(0,o.kt)("h4",{id:"compiler-options"},"Compiler Options"),(0,o.kt)("p",null,"To list the options available on this compiler, open a Visual Studio command-prompt window and enter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cl /?\n")),(0,o.kt)("p",null,"Notable options are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/c")," compile only without a link stage - create a ",(0,o.kt)("inlineCode",{parentName:"li"},".obj")," binary file. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/E")," pre-process only - send the output to ",(0,o.kt)("inlineCode",{parentName:"li"},"stdout"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/P")," pre-process only - send the output to ",(0,o.kt)("inlineCode",{parentName:"li"},"*.i")," file. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/Wall")," enable all warnings. ")),(0,o.kt)("p",null,"To disable warning C4996 (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"strcpy")," is unsafe - use ",(0,o.kt)("inlineCode",{parentName:"p"},"strcpy_s"),"), add the following macro definition before the ",(0,o.kt)("inlineCode",{parentName:"p"},"#include")," for the 'unsafe' function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#define _CRT_SECURE_NO_WARNINGS\n")),(0,o.kt)("h3",{id:"linux---gcc"},"Linux - ",(0,o.kt)("inlineCode",{parentName:"h3"},"gcc")),(0,o.kt)("p",null,"The GNU Compiler Collection (gcc) is a comprehensive open-source collection of compilers available on all Linux based platforms.  The version for C++ source code is called ",(0,o.kt)("inlineCode",{parentName:"p"},"g++"),".  To access this compiler remotely from a Windows machine, we open a terminator emulator.  Instructions for configuring an ssh terminal emulator are listed in the ",(0,o.kt)("a",{parentName:"p",href:"https://scs.senecac.on.ca/~chris.szalwinski/resources/putty.html"},"resources section"),". "),(0,o.kt)("p",null,"To access version 9.1.0 of the GCC compiler on matrix, enter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export LD_LIBRARY_PATH=/usr/local/gcc/9.1.0/lib64:$LD_LIBRARY_PATH\n/usr/local/gcc/9.1.0/bin/g++ -std=c++17 mySource.cpp\n")),(0,o.kt)("h4",{id:"compiler-options-1"},"Compiler Options"),(0,o.kt)("p",null,"To list the options available on the GCC compiler, enter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/gcc/9.1.0/bin/g++ --help\n")),(0,o.kt)("p",null,"Notable options are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-c")," pre-process and compile without a link stage - create a .o binary file. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-E")," pre-process only - send the output to ",(0,o.kt)("inlineCode",{parentName:"li"},"stdout"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-g")," produce information for the debugger (",(0,o.kt)("inlineCode",{parentName:"li"},"gdb"),").")),(0,o.kt)("h2",{id:"interface-with-the-operating-system"},"Interface with the Operating System"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function of a C++ program is its entry point to its executable version.  This function's return type is an ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),".  This function accepts as its parameters either no information or a set of command-line arguments.  The corresponding prototypes are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"int main();                       // no command-line arguments\nint main(int argc, char *argv[]); // two command-line arguments\n")),(0,o.kt)("h3",{id:"command-line-arguments"},"Command-Line Arguments"),(0,o.kt)("p",null,"The first parameter (",(0,o.kt)("inlineCode",{parentName:"p"},"argc"),") in the command-line-arguments version of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function receives the number of arguments supplied on the command line from the operating system.  This number includes the name of the relocatable file.  The second parameter (",(0,o.kt)("inlineCode",{parentName:"p"},"argv"),") receives the address of an array of pointers to C-style null-terminated strings.  Each pointer holds the address of a string that holds one command-line argument.  ",(0,o.kt)("inlineCode",{parentName:"p"},"argv[0]")," holds the address of the name of the relocatable file.  ",(0,o.kt)("inlineCode",{parentName:"p"},"argv[i]")," holds the address of the C-style null-terminated string that holds the ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),"-th command-line argument. "),(0,o.kt)("p",null,"Consider the following command-line instruction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"my_prg Assignments Workshops Tests Exam\n")),(0,o.kt)("p",null,"The source code listed below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Interfacing with the Host Platform\n// my_prg.cpp\n\n#include <iostream>\n\nint main (int argc, char *argv[])\n{\n    int i;\n\n    std::cout << "Application: " << argv[0] << std::endl; \n    for (i = 1; i < argc; i++)\n        std::cout << "- " << argv[i] << std::endl;\n}\n')),(0,o.kt)("p",null,"produces the output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Application: my_prg\n- Assignments\n- Workshops\n- Test\n- Exam\n")),(0,o.kt)("p",null,"On some operating systems the first argument includes the absolute path to the relocatable."),(0,o.kt)("h3",{id:"returning-control"},"Returning Control"),(0,o.kt)("p",null,"Upon completion of the program's execution, the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function returns control to the operating system.  This function's return value is that of the expression on its ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," statement.  If this statement is missing, ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," returns the value ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to the operating system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"int main()\n{\n    return 0; // inserted by the C++ compiler if the return statement is missing \n}\n")),(0,o.kt)("h2",{id:"compile-time-evaluations"},"Compile-time Evaluations"),(0,o.kt)("p",null,"Modern compilers are sophisticated enough to perform calculations that will not change during the execution of a program and store the results of those calculations in the executable code.  C++ provides specialized syntax for evaluations at compile-time and for reporting custom error messages during the translation unit compilation stage. "),(0,o.kt)("h3",{id:"constant-expressions"},"Constant Expressions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"constexpr")," keyword declares that the value of its identifier is a run-time constant and can be evaluated at compile time. "),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"In this example, the factorial calculation expressed in the form of a recursive function (a function that calls itself) does not depend on the rest of the program and is identified as a constant expression.  An constant expression can only refer to variables that are also constant expressions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Compiler-Evaluated Expressions\n// constexpr.cpp\n#include <iostream>\n\nconstexpr int N = 8; // constant variable\n\nconstexpr int factorial(int i) // constant function\n{\n    return i > 1 ? i * factorial(i - 1) : 1;\n}\n\nint main()\n{\n    std::cout << N << "! = " << factorial(N) << std::endl; \n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"8! = 40320 \n")),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," and the function ",(0,o.kt)("inlineCode",{parentName:"p"},"factorial()")," are evaluated at compile-time and the result is stored as a constant value in the output stream expression. "),(0,o.kt)("h3",{id:"static-assertions"},"Static Assertions"),(0,o.kt)("p",null,"The C++ language supports messaging at compile time prompted by custom checks in addition to messaging prompted by inconsistencies in the source code caught by the C++ type system. "),(0,o.kt)("p",null,"These custom programmer-inserted checks are called ",(0,o.kt)("em",{parentName:"p"},"assertions"),".  The ",(0,o.kt)("inlineCode",{parentName:"p"},"static_assert()")," mechanism generates a custom compiler error message if the specified condition is not met. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"static_assert(bool condition, const char* message);\n")),(0,o.kt)("p",null,"In the example below, the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function checks the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," (which has been specified earlier in the translation stream) and reports an error if the value is outside practical bounds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Static Assertion\n// static_assert.cpp\n#include <iostream>\n\nconstexpr int N = 0;\n\nconstexpr int factorial(int i)\n{\n    return i > 1 ? i * factorial(i - 1) : 1;\n}\n\nint main()\n{\n    static_assert (N >  0, "N <=  0");\n    static_assert (N < 20, "N >= 20");\n\n    std::cout << N << "! = " << factorial(N) << std::endl; \n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'N <= 0\nstatic assertion failed with "N <= 0"\n')))}u.isMDXComponent=!0},8164:function(e,t,n){t.Z=n.p+"assets/images/compile_link-34029fc124e56e275b31d5a1fa19424a.png"}}]);