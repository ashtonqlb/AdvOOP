"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[966],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),u=r,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5330:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"arrays-and-pointers",title:"Arrays and Pointers",sidebar_position:2,description:"TBD"},s="Arrays and Pointers to Arrays",d={unversionedId:"H-Deeper-Detail/arrays-and-pointers",id:"H-Deeper-Detail/arrays-and-pointers",isDocsHomePage:!1,title:"Arrays and Pointers",description:"TBD",source:"@site/docs/H-Deeper-Detail/arrays-and-pointers.md",sourceDirName:"H-Deeper-Detail",slug:"/H-Deeper-Detail/arrays-and-pointers",permalink:"/H-Deeper-Detail/arrays-and-pointers",editUrl:"https://github.com/Seneca-ICTOER/AdvOOP/tree/main/docs/H-Deeper-Detail/arrays-and-pointers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"arrays-and-pointers",title:"Arrays and Pointers",sidebar_position:2,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Pre-processor Directives",permalink:"/H-Deeper-Detail/pre-processor-directives"},next:{title:"Multiple Inheritance",permalink:"/H-Deeper-Detail/multiple-inheritance"}},p=[{value:"One-Dimensional Arrays",id:"one-dimensional-arrays",children:[{value:"Compile-Time Memory",id:"compile-time-memory",children:[],level:3},{value:"Run-Time Memory",id:"run-time-memory",children:[],level:3}],level:2},{value:"Multi-Dimensional Arrays",id:"multi-dimensional-arrays",children:[{value:"Row-Major Order",id:"row-major-order",children:[],level:3},{value:"Compile-Time Memory",id:"compile-time-memory-1",children:[],level:3},{value:"Run-Time Memory",id:"run-time-memory-1",children:[],level:3},{value:"n-Dimensional Arrays",id:"n-dimensional-arrays",children:[],level:3}],level:2},{value:"Ragged Arrays",id:"ragged-arrays",children:[],level:2},{value:"Pointer to a One-Dimensional Array",id:"pointer-to-a-one-dimensional-array",children:[],level:2},{value:"Pointer to a Two-Dimensional Array",id:"pointer-to-a-two-dimensional-array",children:[],level:2},{value:"Exercises",id:"exercises",children:[],level:2}],m={toc:p};function c(e){var n=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"arrays-and-pointers-to-arrays"},"Arrays and Pointers to Arrays"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Describe allocation of arrays in different segments of memory"),(0,i.kt)("li",{parentName:"ul"},"Define ragged arrays"),(0,i.kt)("li",{parentName:"ul"},"Introduce pointers to arrays")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"The interaction of pointers and arrays can be confusing but here are two fundamental statements about it: a) A variable declared as an array of some type acts as a pointer to that type. When used by itself, it points to the first element of the array. b) A pointer can be indexed like an array name." Wikibooks (2016)')),(0,i.kt)("p",null,"An array may have one or more dimensions and may occupy data, stack or freestore (heap) memory. An array type is a built-in type that represents a data structure of identical types stored contiguously in memory and provides an efficient layout for random access to its data values. We refer to each data value in an array as an ",(0,i.kt)("strong",{parentName:"p"},"element"),". The C++ language does not specify how the allocation of an array is implemented. The name of an array is a pointer to the start of its region of memory. A pointer can not only store the address of a single object but also the address of an array of objects of identical type."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Memory Organization",src:t(1086).Z})),(0,i.kt)("p",null,"The size of an array in data and stack memory is determined at compile-time, while the size of an array in freestore memory is determined at run-time. Sizes of arrays allocated in data or stack memory cannot be modified at run-time."),(0,i.kt)("p",null,"This chapter describes one-dimensional and multi-dimensional arrays in these different regions of memory. This chapter also describes ragged arrays and introduces the syntax for pointing to arrays of objects."),(0,i.kt)("h2",{id:"one-dimensional-arrays"},"One-Dimensional Arrays"),(0,i.kt)("h3",{id:"compile-time-memory"},"Compile-Time Memory"),(0,i.kt)("p",null,"The size of an array in the data or stack region of memory is known at compile-time. The definition of a one-dimensional array in data or stack memory takes the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Type identifier[ c ] = initial;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Type")," is the type of every element in the array. ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," is the number of elements in the array and is an integer constant or constant integer expression. ",(0,i.kt)("inlineCode",{parentName:"p"},"= initial")," is an optional, braces-enclosed, comma-separated list of initial values. If this initialization list is present, ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," is optional. If ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," exceeds the number of values in the list, the compiler initializes the uninitialized elements to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),". If the initialization list is absent, ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," is required."),(0,i.kt)("h3",{id:"run-time-memory"},"Run-Time Memory"),(0,i.kt)("p",null,"The definition of a one-dimensional array allocated at run-time consists of three statements:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the definition of a pointer to hold the address of the array"),(0,i.kt)("li",{parentName:"ol"},"the allocation of memory for the array"),(0,i.kt)("li",{parentName:"ol"},"the de-allocation of the allocated memory")),(0,i.kt)("p",null,"The pointer definition takes the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Type* identifier;\n")),(0,i.kt)("p",null,"The allocation of dynamic memory uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"new[]")," operator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"new Type[ c ]\n")),(0,i.kt)("p",null,"The allocation reserves a contiguous region of memory for ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," elements and returns the address of the start of the region. We store the address in the previously defined pointer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"identifier = new type[ c ];\n")),(0,i.kt)("p",null,"We de-allocate the memory before our pointer's name goes out of scope:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"delete [] identifier;\n")),(0,i.kt)("p",null,"The following example shows the dynamic allocation and de-allocation of a one-dimensional array"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Dynamic Allocations of an Array\n// dynamic.cpp\n\n#include <iostream>\n#include <iomanip>\n\nint main ()\n{\n  int c;\n  int *a;  // pointer to array a\n\n  std::cout << "Number of elements : ";\n  std::cin >> c;\n\n  a = new int[c]; // allocate memory\n\n  for (i = 0; i < c; i++)\n    a[i] = (i + 1) * (i + 1);\n\n  for (i = 0; i < c; i++)\n    std::cout << std::setw(3) << i + 1\n              << std::setw(6) << a[i] << std::endl;\n\n  delete [] a; // de-allocate memory\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Number of elements : 5\n  1     1\n  2     4\n  3     9\n  4    16\n  5    25\n")),(0,i.kt)("h2",{id:"multi-dimensional-arrays"},"Multi-Dimensional Arrays"),(0,i.kt)("p",null,"Multi-dimensional arrays are arrays of two or more dimensions. A two-dimensional array uses two independent indices to refer to its elements. The indices of a two-dimensional array identify the row and column positions in a table of elements. Indexing is zero-based."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rows and Columns",src:t(4104).Z})),(0,i.kt)("p",null,"The left index is the row index and the right index is the column index."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"identifier[ row ][ column ]\n")),(0,i.kt)("h3",{id:"row-major-order"},"Row-Major Order"),(0,i.kt)("p",null,"The compiler stores the elements of a two-dimensional array in ",(0,i.kt)("strong",{parentName:"p"},"row-major order"),": the first row, column-element by column-element, then the second row, column-element by column-element, then the third row, etc.. For example, it stores the elements of the array"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int a[2][3];\n")),(0,i.kt)("p",null,"as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"a[0][0] a[0][1] a[0][2] a[1][0] a[1][1] a[1][2]\n")),(0,i.kt)("p",null,"We may interpret a two-dimensional array as an array of one-dimensional arrays"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"a[0][0] a[0][1] a[0][2] first row or 1-d array\na[1][0] a[1][1] a[1][2] second row or 1-d array\n")),(0,i.kt)("h3",{id:"compile-time-memory-1"},"Compile-Time Memory"),(0,i.kt)("p",null,"The definition of a two-dimensional array determined at compile-time takes the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"type identifier[ r ][ c ] = initial;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"r")," is the number of rows in the array and ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," is the number of columns. ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," are integer constants or constant integer expressions. The total number of elements in the array is ",(0,i.kt)("inlineCode",{parentName:"p"},"r * c"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"= initial")," is an optional initialization list. ",(0,i.kt)("inlineCode",{parentName:"p"},"= initial")," is a braces-enclosed, comma-separated list of initial values for the elements. Each subset of initial values for a row of elements may be enclosed in its own braces. If an initialization list is present, we may omit the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"r"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"r * c")," exceeds the number of values in the initialization list, the compiler initializes the uninitialized elements to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),". If we omit the initialization list, we must specify ",(0,i.kt)("inlineCode",{parentName:"p"},"r"),". We must always specify ",(0,i.kt)("inlineCode",{parentName:"p"},"c"),"."),(0,i.kt)("p",null,"To pass a two-dimensional array to a function, we use the name of the array as the argument in the function call. The corresponding function parameter receives the address of the array. The parameter's declaration includes the array's column dimension. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Two-Dimensional Arrays\n// pass2DArray.cpp\n\n#include <iostream>\n\n#define NCOLS 3\n\nvoid foo(int a[][NCOLS], int r, int c);\n\nint main ()\n{\n  int a[2][NCOLS] = {{11, 12, 13}, {21, 22, 23}};\n  foo (a, 2, 3);\n}\n\nvoid foo(int a[][NCOLS], int r, int c)\n{\n  for (int i = 0; i < r; i++)\n  {\n    for (int j = 0; j < c; j++)\n      std::cout << a[i][j] << ' ';\n    std::cout << std::endl;\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"11 12 13\n21 22 23\n")),(0,i.kt)("p",null,"The compiler determines the start of each row within the array from the column dimension (",(0,i.kt)("inlineCode",{parentName:"p"},"NCOLS"),"). Since the compiler assumes row-major order, the function does not require the row dimension."),(0,i.kt)("p",null,"To work with a particular row from within a function, we pass the row as the argument in the function call. We refer to a row of a two-dimensional array by the name of the array followed by the row number within brackets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"identifier[ row ]\n")),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Two-Dimensional Arrays\n// passRow.cpp\n\n#include <iostream>\n\n#define NCOLS 3\n\nvoid foo(int a[], int c);\n\nint main ()\n{\n  int a[2][NCOLS] = {{11, 12, 13}, {21, 22, 23}};\n  foo (a[0], NCOLS); // pass first row\n  foo (a[1], NCOLS); // pass second row\n}\n\nvoid foo(int a[], int c)\n{\n  for (int i = 0; i < c; i++)\n    std::cout << a[i] << ' ';\n  std::cout << std::endl;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"11 12 13\n21 22 23\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"a[0]")," points to the first row of a and holds the address of the first element of that row. ",(0,i.kt)("inlineCode",{parentName:"p"},"a[1]")," points to the second row of a and holds the address of the first element of that row."),(0,i.kt)("p",null,"Note the difference in type between ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"&a[0][0]"),". Although both refer to the same address, ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"int**")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"&a[0][0]")," is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"int*"),"."),(0,i.kt)("h3",{id:"run-time-memory-1"},"Run-Time Memory"),(0,i.kt)("p",null,"Allocating a two-dimensional array at run-time involves five steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"allocating stack memory for a pointer to a 1-D array of pointers to the rows of the 2-D array"),(0,i.kt)("li",{parentName:"ol"},"allocating memory dynamically for a 1-D array of pointers to hold the addresses of the rows of the 2-D array"),(0,i.kt)("li",{parentName:"ol"},"allocating memory dynamically for each row of the 2-D array"),(0,i.kt)("li",{parentName:"ol"},"de-allocating the dynamically allocated memory for each row of the 2-D array"),(0,i.kt)("li",{parentName:"ol"},"de-allocating the dynamically allocated memory for the array of pointers")),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Dynamically Allocated 2d Arrays\n// dynamic2D.cpp\n\n#include <iostream>\n#include <iomanip>\n\nint main ()\n{\n  int c, r;\n  int **a;  // points to row addresses\n\n  std::cout << "Number of rows : ";\n  std::cin >> r;\n  std::cout << "Number of columns : ";\n  std::cin >> c;\n\n  a = new int*[r]; // for row addresses\n\n  for (int i = 0; i < r; i++)\n    a[i] = new int[c]; // for elements of row i\n\n  for (int i = 0; i < r; i++)\n    for (int j = 0; j < c; j++)\n      a[i][j] = (i + 1) * (j + 1);\n\n  std::cout << "   ";\n\n  for (int j = 0; j < nc; j++)\n    std::cout << std::setw(4) << j + 1;\n  std::cout << std::endl;\n\n  for (int i = 0; i < r; i++)\n  {\n    std::cout << std::setw(3) << i + 1;\n    for (int j = 0; j < c; j++)\n      std::cout << std::setw(4) << a[i][j];\n    std::cout << std::endl;\n  }\n\n  for (int i = 0; i < nr; i++)\n    delete [] a[i]; // de-allocate row i\n  delete [] a; // de-allocate pointers to rows\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Number of rows : 4\nNumber of columns : 5\n    1   2   3   4   5\n1   1   2   3   4   5\n2   2   4   6   8  10\n3   3   6   9  12  15\n4   4   8  12  16  20\n")),(0,i.kt)("h3",{id:"n-dimensional-arrays"},"n-Dimensional Arrays"),(0,i.kt)("p",null,"C++ does not restrict the number of dimensions in a multi-dimensional array."),(0,i.kt)("p",null,"The name of an n-dimensional array holds the address of the first (n-1)-dimensional (sub)array within the n-dimensional array. For example, the name of a three-dimensional array holds the address of the first two-dimensional (sub)array within that three-dimensional array. The name of a two-dimensional array holds the address of the first row of that array. The name of a one-dimensional array holds the address of the first element of that array."),(0,i.kt)("h2",{id:"ragged-arrays"},"Ragged Arrays"),(0,i.kt)("p",null,"Ragged arrays are commonly used to store sets of strings. A ",(0,i.kt)("strong",{parentName:"p"},"ragged")," array is an array of addresses. Each element of the array holds an address. The data stored at each address may be of different size. For example, C-style null terminated strings may differ in length, but the size of the pointer to each string is the same for every string."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ragged Array",src:t(969).Z})),(0,i.kt)("p",null,"The ragged array in the following program holds the list of names without wasting space"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Ragged Arrays\n// raggedArray.cpp\n\n#include <iostream>\n#include <iomanip>\n\nint main ()\n{\n  char *name[] = { "Marg", "Jeremy", "Christopher", "Homer" };\n\n  for (int i = 0; i < 4; i++)\n    std::cout << std::setw(7) << &name[i] << std::setw(7) << std::hex\n              << (int)&name[i][0] << std::dec << \' \' << name[i] << \'\\n\';\n  std::cout << std::endl;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"12FF44 41b188 Marg\n12FF48 41b18d Jeremy\n12FF4C 41b194 Christopher\n12FF50 41b1a0 Homer\n")),(0,i.kt)("p",null,"Each output line displays two addresses:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the address of the pointer to the string"),(0,i.kt)("li",{parentName:"ol"},"the address of the string itself")),(0,i.kt)("p",null,"Note that in this example each string is of a different length."),(0,i.kt)("h2",{id:"pointer-to-a-one-dimensional-array"},"Pointer to a One-Dimensional Array"),(0,i.kt)("p",null,"A pointer can hold the address of an array type. The definition of a pointer to a one-dimensional array takes the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Type (*pointer)[ n ]; // pointer to an array with n columns\n")),(0,i.kt)("p",null,"The parentheses in this definition distinguish the pointer to a 1-d array type from a definition of an array of pointers. Parentheses are necessary since the bracket operator ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," has higher precedence than the indirection operator ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),". Without the parentheses the compiler evaluates the brackets first and creates an array of pointers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int (*ptr)[ n ]; // pointer to a 1-d int array with n columns\nint*  ptr [ n ]; // 1-d array of n pointers to int types\n")),(0,i.kt)("p",null,"The following program defines a pointer to a one-dimensional array of 3 ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),"s, allocates memory for the array, initializes three elements in it, displays their values, and finally de-allocates the memory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Pointer to a 1D Array\n// ptr_1D_Array.cpp\n\nconst int size = 3;\n\nint main ()\n{\n  int i;\n  int (*ptr)[size] = (int(*)[size]) new int[size];\n  (*ptr)[0] = 10;\n  (*ptr)[1] = 20;\n  (*ptr)[2] = 30;\n\n  for (i = 0; i < size; i++)\n    std::cout << (*ptr)[i] << ' ';\n  std::cout << std::endl;\n\n  delete [] ptr;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"10 20 30\n")),(0,i.kt)("p",null,"Note the parentheses around the dereferenced pointer in the declaration, in the cast and in accessing the element values."),(0,i.kt)("h2",{id:"pointer-to-a-two-dimensional-array"},"Pointer to a Two-Dimensional Array"),(0,i.kt)("p",null,"A pointer can also hold the address of a two-dimensional array which has a fixed number of columns and dynamically allocated memory for a user-defined number of rows."),(0,i.kt)("p",null,"The following example defines a pointer to a two-dimensional array with 5 columns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Pointer to a 2D Array\n// ptr_2D_Array.cpp\n\n#include <iostream>\n#include <iomanip>\n\nconst int c = 5; // preset number of columns\n\nint main ()\n{\n  int r, i, j;\n  int (*a)[c];  // pointer to a 2D array\n\n  std::cout << "Number of rows : ";\n  std::cin >> r;\n\n  a = new int[r][c]; // allocate array\n\n  for (i = 0; i < r; i++)\n    for (j = 0; j < c; j++)\n      a[i][j] = (i + 1) * (j + 1);\n\n  std::cout << "   ";\n\n  for (j = 0; j < c; j++)\n    std::cout << std::setw(4) << j + 1;\n  std::cout << std::endl;\n\n  for (i = 0; i < r; i++)\n  {\n    std::cout << std::setw(3) << i + 1;\n    for (j = 0; j < c; j++)\n      std::cout << std::setw(4) << a[i][j];\n    std::cout << std::endl;\n  }\n\n  delete [] a; // de-allocate array\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Number of rows : 4\n    1   2   3   4   5\n1   1   2   3   4   5\n2   2   4   6   8  10\n3   3   6   9  12  15\n4   4   8  12  16  20\n")),(0,i.kt)("p",null,"Note that we allocate memory for the two-dimensional array in a single statement and de-allocate memory in a single statement as well. A dynamically allocated array with a user-defined number of rows and a user-defined number of columns requires two steps for allocation and two for de-allocation - one step in each involving an iteration. (See the section on ",(0,i.kt)("a",{parentName:"p",href:"#multi-dimensional-arrays"},"Multi-Dimensional Arrays")," above.)"),(0,i.kt)("h2",{id:"exercises"},"Exercises"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read Wikipedia on ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Array_data_structure"},"Array Data Structures"))))}c.isMDXComponent=!0},4104:function(e,n,t){n.Z=t.p+"assets/images/2darray-74139ff309f6d4c04b2dc7115e75c9ac.png"},1086:function(e,n,t){n.Z=t.p+"assets/images/memory_organization-68aacb2b898703372f787f9d74aee847.png"},969:function(e,n,t){n.Z=t.p+"assets/images/ragged-84057acac116a299bea66a5dbb3f3ae3.png"}}]);