const quizData = [{
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    options: [
        "string",
        "boolean",
        "array",
        "number"
    ],
    answer: "array",
    reason: "In JavaScript, primitive data types include string, boolean, number, undefined, symbol, and bigint. An array is a non-primitive data type; it's an object that holds multiple values."
},
{
    question: "What will the following code output? console.log(1 + '2' + 3);",
    options: [
       
        "6",
        "123",
        "15",
        "1undefined3"
    ],
    answer: "123",
    reason: "The + operator concatenates strings and adds numbers. The number 1 is converted to a string and concatenated with '2', resulting in '12'. Adding 3 to this string results in '123'."
},
{
    question: "What does the typeof operator return for null?",
    options: [
        "null",
        "undefined",
        "object",
        "boolean"
    ],
    answer: "object",
    reason: "The typeof operator returns 'object' for null due to a historical bug in JavaScript. Although null is a special value representing 'no value', it is technically of type object."
},
{
    question: "Which statement correctly declares a function in JavaScript?",
    options: [
        "function add(x, y) { return x + y; }",
        "var add = function(x, y) { return x + y; };",
        "def add(x, y) { return x + y; }",
        "add = function(x, y) { return x + y; };"
    ],
    answer: "function add(x, y) { return x + y; }",
    reason: "The syntax function add(x, y) { return x + y; } is the standard way to declare a function in JavaScript. The other options either use incorrect syntax or do not include the function keyword."
},
{
    question: "What is the result of typeof NaN?",
    options: [
        "number",
        "NaN",
        "undefined",
        "NaN is not defined"
    ],
    answer: "number",
    reason: "The typeof operator returns 'number' for NaN because NaN (Not-a-Number) is a special numeric value in JavaScript that represents an invalid number. It is still of type 'number'."
},
{
    question: "Which event is triggered when a form element loses focus?",
    options: [
        "onblur",
        "onchange",
        "onfocus",
        "onsubmit"
    ],
    answer: "onblur",
    reason: "The onblur event is triggered when a form element loses focus, meaning the user has clicked or tabbed away from the element. The onfocus event is triggered when the element gains focus."
},
{
    question: "How do you write a comment in JavaScript that spans multiple lines?",
    options: [
        "// This is a multi-line comment",
        "/* This is a multi-line comment */",
        "# This is a multi-line comment",
        "&lt;!-- This is a multi-line comment -->"
    ],
    answer: "/* This is a multi-line comment */",
    reason: "In JavaScript, multi-line comments are written between /* and */. Single-line comments use //, while # and <!-- --> are not valid comment syntax in JavaScript."
},
{
    question: "Which method is used to add an element at the end of an array?",
    options: [
        "push()",
        "unshift()",
        "pop()",
        "shift()"
    ],
    answer: "push()",
    reason: "The push() method adds one or more elements to the end of an array and returns the new length of the array. unshift() adds elements to the beginning, pop() removes the last element, and shift() removes the first element."
},
{
    question: "What does the isNaN() function in JavaScript do?",
    options: [
        "Checks if a value is a number",
        "Converts a string to a number",
        "Checks if a value is not a number",
        "Checks if a value is null"
    ],
    answer: "Checks if a value is not a number",
    reason: "The isNaN() function checks whether a value is NaN (Not-a-Number). It returns true if the value is not a number and false if it is."
},
{
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: [
        "let",
        "var",
        "const",
        "static"
    ],
    answer: "const",
    reason: "The const keyword is used to declare variables whose values cannot be reassigned. let and var are used for variables that can be reassigned, and static is used in classes for static methods and properties."
},
{
    question: "Which company developed JavaScript?",
    options: [
        "Microsoft",
        "Netscape",
        "Sun Microsystems",
        "IBM"
    ],
    answer: "Netscape",
    reason: "JavaScript was developed by Netscape Communications. It was originally introduced as a client-side scripting language for web browsers."
},
{
    question: "What does the '===' operator do in JavaScript?",
    options: [
        "Assigns a value",
        "Compares values and types",
        "Compares only values",
        "Checks for null"
    ],
    answer: "Compares values and types",
    reason: "The === operator compares both the value and the type of two operands, ensuring both are of the same type and value. The == operator only compares values after type coercion."
},
{
    question: "Which method is used to remove the last element from an array?",
    options: [
        "pop()",
        "push()",
        "shift()",
        "unshift()"
    ],
    answer: "pop()",
    reason: "The pop() method removes the last element from an array and returns that element. push() adds elements to the end, shift() removes the first element, and unshift() adds elements to the beginning."
},
{
    question: "Which built-in method combines the text of two strings and returns a new string?",
    options: [
        "append()",
        "concat()",
        "attach()",
        "None of the above"
    ],
    answer: "concat()",
    reason: "The concat() method is used to combine two or more strings into a single string. Methods like append() and attach() do not exist in JavaScript for this purpose."
},
{
    question: "How do you find the minimum of x and y using JavaScript?",
    options: [
        "min(x,y);",
        "Math.min(x,y)",
        "Math.min(xy)",
        "minimum(x,y)"
    ],
    answer: "Math.min(x,y)",
    reason: "The Math.min() method returns the smallest of zero or more numbers. min(x,y) and minimum(x,y) are not valid methods in JavaScript."
},
{
    question: "Which JavaScript method is used to access an HTML element by its ID?",
    options: [
        "getElementById()",
        "getElement(id)",
        "getElementByClass()",
        "getId()"
    ],
    answer: "getElementById()",
    reason: "The getElementById() method returns the element that has the ID attribute with the specified value. The other methods listed do not exist."
},
{
    question: "What is the output of the following code: console.log(typeof '42');",
    options: [
        "number",
        "string",
        "boolean",
        "undefined"
    ],
    answer: "string",
    reason: "The typeof operator returns 'string' for string values. Even though '42' represents a number, it is a string in this case."
},
{
    question: "Which method adds an element to the beginning of an array?",
    options: [
        "unshift()",
        "push()",
        "pop()",
        "shift()"
    ],
    answer: "unshift()",
    reason: "The unshift() method adds one or more elements to the beginning of an array and returns the new length."
},
{
    question: "What does the `String()` function do?",
    options: [
        "Converts to string",
        "Converts to number",
        "Checks string length",
        "Trims a string"
    ],
    answer: "Converts to string",
    reason: "The String() function converts a value to a string."
},
{
    question: "Which method removes all elements from an array?",
    options: [
        "splice()",
        "pop()",
        "shift()",
        "remove()"
    ],
    answer: "splice()",
    reason: "The splice() method can remove all elements from an array when used with appropriate parameters."
},
{
    question: "What does `Math.ceil(4.1)` return?",
    options: [
       
        "4",
        "4.1",
        "undefined",
        "5"
    ],
    answer: "5",
    reason: "Math.ceil() rounds a number up to the nearest integer."
},
{
    question: "Which method returns a new array with all elements in reverse order?",
    options: [
        
        "flip()",
        "reverse()",
        "invert()",
        "back()"
    ],
    answer: "reverse()",
    reason: "The reverse() method returns a new array with the elements in reverse order."
},
{
    question: "How do you convert a string to an array?",
    options: [
       
        "toArray()",
        "array()",
        "convert()",
        "split()"
    ],
    answer: "split()",
    reason: "The split() method splits a string into an array of substrings."
},
{
    question: "What does `Array.isArray([])` return?",
    options: [
       
        "false",
        "undefined",
        "true",
        "null"
    ],
    answer: "true",
    reason: "Array.isArray() checks if the value is an array and returns true for arrays."
},
{
    question: "Which method joins all elements of an array into a string?",
    options: [
        "join()",
        "concat()",
        "combine()",
        "merge()"
    ],
    answer: "join()",
    reason: "The join() method joins all elements of an array into a single string."
},
{
    question: "How do you define an object in JavaScript?",
    options: [
      
        "[]",
        "()",
        "{}",
        "object"
    ],
    answer: "{}",
    reason: "Objects are defined using curly braces {} in JavaScript."
},
{
    question: "What is the purpose of the `this` keyword?",
    options: [
        "Refers to the current object",
        "Defines a new object",
        "Creates a function",
        "Declares a variable"
    ],
    answer: "Refers to the current object",
    reason: "The `this` keyword refers to the current object in context."
},
{
    question: "Which method removes the first array element and 'shifts' all other elements to a lower index?",
    options: [
       
        "pop()",
        "shift()",
        "push()",
        "reduce()"
    ],
    answer: "shift()",
    reason: "The shift() method removes the first element from an array and shifts the remaining elements to a lower index. The pop() method removes the last element, and push() adds elements."
},
{
    question: "Which symbol is used for single line comments in JavaScript?",
    options: [
        "&lt;!--",
        "//",
        "#",
        "/*"
    ],
    answer: "//",
    reason: "The // symbol is used for single-line comments in JavaScript. The # symbol is used in some other languages, and /* is used for multi-line comments."
},
{
    question: "Which method returns the string representation of the number's value?",
    options: [
        "toString()",
        "valueOf()",
        "toLocaleString()",
        "toPrecision()"
    ],
    answer: "toString()",
    reason: "The `toString()` method returns a string representing the number. `valueOf()` returns the primitive value, while `toLocaleString()` formats it according to locale, and `toPrecision()` formats it to a specific precision."
},
{
    question: "Which method returns a new array with all elements that pass the test implemented by the provided function?",
    options: [
        "map()",
        "reduce()",
        "filter()",
        "some()"
    ],
    answer: "filter()",
    reason: "The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. `map()` creates a new array with the results of calling a function on every element, `reduce()` reduces the array to a single value, and `some()` checks if at least one element passes the test."
}
,
{
    question: "Which method is used to return the length of a string?",
    options: [
        "size()",
        "index()",
        "length",
        "length()"
    ],
    answer: "length",
    reason: "The `length` property returns the number of characters in a string. Methods like `length()` or `size()` do not exist for strings."
},
{
    question: "How can you add a comment in a JavaScript?",
    options: [
        "// This is a comment",
        "** This is a comment **",
        "# This is a comment",
        "&lt;!-- This is a comment -->"
    ],
    answer: "// This is a comment",
    reason: "Single-line comments in JavaScript use `//`. The other options are not valid for JavaScript comments."
},
{
    question: "Which JavaScript method can be used to convert an array into a string?",
    options: [
        "concat()",
        "join()",
        "toString()",
        "pop()"
    ],
    answer: "toString()",
    reason: "The `toString()` method converts an array to a string. `concat()` is used to combine arrays, `join()` is similar but allows custom separators, and `pop()` removes the last element."
},
{
    question: "Which of the following is an example of a JavaScript framework?",
    options: [
        "Python",
        "C++",
        "HTML",
        "Angular"
    ],
    answer: "Angular",
    reason: "Angular is a JavaScript framework used for building web applications. Python, C++, and HTML are not JavaScript frameworks."
},
{
    question: "How do you declare a JavaScript variable?",
    options: [
        "v carName;",
        "variable carName;",
        "var carName;",
        "carName var;"
    ],
    answer: "var carName;",
    reason: "The `var` keyword is used to declare a variable in JavaScript. The other options are not valid for variable declaration."
},
{
    question: "Which of the following is a correct way to write a JavaScript array?",
    options: [
        "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        "var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = ['red', 'green', 'blue']",
        "var colors = 'red', 'green', 'blue'"
    ],
    answer: "var colors = ['red', 'green', 'blue']",
    reason: "The correct syntax for an array in JavaScript is `[]`. The other options do not correctly represent an array."
},
{
    question: "Which operator is used to assign a value to a variable?",
    options: [
        "*",
        "=",
        "==",
        "/"
    ],
    answer: "=",
    reason: "The `=` operator is used for assignment. The `==` operator is used for equality comparison, while `*` and `/` are arithmetic operators."
},
{
    question: "How do you round the number 7.25 to the nearest integer?",
    options: [
       
        "Math.rnd(7.25)",
        "round(7.25)",
        "Math.round(7.25)",
        "rnd(7.25)"
    ],
    answer: "Math.round(7.25)",
    reason: "The `Math.round()` method rounds a number to the nearest integer. The other methods do not exist in JavaScript."
},
{
    question: "How can you detect the client's browser name?",
    options: [
     
        "client.navName",
        "browser.name",
        "window.navigator",
        "navigator.appName",
    ],
    answer: "navigator.appName",
    reason: "The `navigator.appName` property provides the name of the browser. Other options are not valid for detecting browser information."
},
{
    question: "What is the output of the following code: console.log(Boolean(10 > 9));",
    options: [
        "false",
        "true",
        "undefined",
        "0"
    ],
    answer: "true",
    reason: "The expression `10 > 9` evaluates to `true`, and `Boolean(true)` remains `true`."
},
{
    question: "How do you create a function in JavaScript?",
    options: [
        "function:myFunction()",
        "function myFunction()",
        "function = myFunction()",
        "function => myFunction()"
    ],
    answer: "function myFunction()",
    reason: "The correct syntax for defining a function in JavaScript is `function myFunction()`. The other options are incorrect syntaxes."
},
{
    question: "How do you call a function named 'myFunction'?",
    options: [
        "Call.myFunction()",
        "myFunction()",
        "call myFunction()",
        "call function myFunction",
        
    ],
    answer: "myFunction()",
    reason: "To call a function named `myFunction`, you use `myFunction()`. The other options are not valid function call syntaxes."
},
{
    question: "Which statement is used to stop a loop?",
    options: [
      
        "stop",
        "exit",
        "break",
        "return"
    ],
    answer: "break",
    reason: "The `break` statement is used to exit a loop. The other options are not valid for stopping a loop."
},
{
    question: "What will the following code return: Boolean('')?",
    options: [
        "false",
        "true",
        "null",
        "undefined"
    ],
    answer: "false",
    reason: "An empty string `''` is falsy, so `Boolean('')` returns `false`."
},
{
    question: "How do you check if a variable is an array?",
    options: [
        "Array.isArray()",
        "typeof",
        "instanceof",
        "checkArray()"
    ],
    answer: "Array.isArray()",
    reason: "The Array.isArray() method determines whether the passed value is an array."
},
{
    question: "Which operator checks for both value and type?",
    options: [
        "===",
        "==",
        "!=",
        "&&"
    ],
    answer: "===",
    reason: "The === operator checks for both value and type equality."
},
{
    question: "What is the result of 2 + '2' in JavaScript?",
    options: [
        "'22'",
        "4",
        "NaN",
        "undefined"
    ],
    answer: "'22'",
    reason: "2 + '2' results in string concatenation, producing '22'."
},
{
    question: "Which method converts a string to uppercase?",
    options: [
        "toUpperCase()",
        "toUpper()",
        "makeUpper()",
        "upperCase()"
    ],
    answer: "toUpperCase()",
    reason: "The toUpperCase() method converts a string to uppercase letters."
},
{
    question: "What does JSON.stringify() do?",
    options: [
        "Converts objects to strings",
        "Parses JSON",
        "Creates a JSON object",
        "Transforms data"
    ],
    answer: "Converts objects to strings",
    reason: "JSON.stringify() converts a JavaScript object or value to a JSON string."
},
{
    question: "Which function is used to parse a string to an integer?",
    options: [
      
        "parse()",
        "toInt()",
        "convertToInt()",
        "parseInt()",
    ],
    answer: "parseInt()",
    reason: "The parseInt() function parses a string argument and returns an integer."
},
{
    question: "What does the '!' operator do?",
    options: [
        "Checks equality",
        "Performs addition",
        "Negates a value",
        "Modifies a value"
    ],
    answer: "Negates a value",
    reason: "The '!' operator is used to negate a boolean value."
},
{
    question: "How to check if a value is NaN?",
    options: [
        "isNaN()",
        "checkNaN()",
        "NaN()",
        "validateNaN()"
    ],
    answer: "isNaN()",
    reason: "The isNaN() function checks if a value is NaN."
},
{
    question: "Which keyword creates a block-scoped variable?",
    options: [
        "const",
        "static",
        "let",
        "var"
    ],
    answer: "let",
    reason: "The let keyword creates block-scoped variables, while var is function-scoped."
},
{
    question: "Which method can be used to create a new array from an existing array or array-like object?",
    options: [
        "Array.concat()",
        "Array.of()",
        "Array.slice()",
        "Array.from()"
    ],
    answer: "Array.from()",
    reason: "The `Array.from()` method creates a new array from an array-like or iterable object. `Array.of()` creates a new array with a variable number of arguments, `Array.slice()` creates a shallow copy of a portion of an array, and `Array.concat()` combines arrays."
},
{
    question: "Which of the following methods adds one or more elements to the end of an array and returns the new length of the array?",
    options: [
        "unshift()",
        "pop()",
        "push()",
        "shift()"
    ],
    answer: "push()",
    reason: "The `push()` method adds one or more elements to the end of an array and returns the new length. `pop()` removes the last element, `shift()` removes the first element, and `unshift()` adds elements to the beginning."
},
{
    question: "Which of the following will write 'Hello World' in an alert box?",
    options: [
        "msg('Hello World');",
        "msgBox('Hello World');",
        "alertBox('Hello World');",
        "alert('Hello World');"
    ],
    answer: "alert('Hello World');",
    reason: "The `alert()` method displays a dialog box with a specified message. The other options do not exist for displaying alerts."
},
{
    question: "Which operator returns true if the two compared values are not equal?",
    options: [
        "===",
        "<>",
        "==",
        "!="
    ],
    answer: "!=",
    reason: "The `!=` operator returns true if the values are not equal. The `==` operator checks for equality, `===` checks for strict equality, and `<>' is not a valid operator in JavaScript."
},
{
    question: "Which of the following function of String object returns the calling string value converted to lower case?",
    options: [
        "toString()",
        "toLocaleLowerCase()",
        "substring()",
        "toLowerCase()"
    ],
    answer: "toLowerCase()",
    reason: "The `toLowerCase()` method returns the calling string value converted to lower case. `toLocaleLowerCase()` does similar work but considers locale. `toString()` returns a string representation, and `substring()` extracts parts of a string."
},
{
    question: "Which method removes all elements from an array?",
    options: [
        "clear()",
        "pop()",
        "splice()",
        "shift()"
    ],
    answer: "splice()",
    reason: "The splice() method can remove all elements from an array when used with appropriate parameters."
},
{
    question: "How do you declare a variable with block scope?",
    options: [
        "static",
        "var",
        "const",
        "let"
    ],
    answer: "let",
    reason: "The let keyword is used to declare variables with block scope."
},
{
    question: "Which method converts a number to a string?",
    options: [
        "convert()",
        "toString()",
        "valueOf()",
        "toNumber()"
    ],
    answer: "toString()",
    reason: "The toString() method converts a number to a string."
},
{
    question: "What does `Math.random()` return?",
    options: [
        "A fixed number",
        "A random integer",
        "A string",
        "A random number between 0 and 1"
    ],
    answer: "A random number between 0 and 1",
    reason: "Math.random() returns a pseudo-random number between 0 (inclusive) and 1 (exclusive)."
},
{
    question: "Which method checks if an array contains a specific element?",
    options: [
        "exists()",
        "has()",
        "includes()",
        "contains()"
    ],
    answer: "includes()",
    reason: "The includes() method checks if an array contains a specific element."
},
{
    question: "How do you create a new date object?",
    options: [
        "Date()",
        "new Date()",
        "create Date()",
        "new DateTime()"
    ],
    answer: "new Date()",
    reason: "The new Date() constructor creates a new date object."
},
{
    question: "Which method is used to remove whitespace from both ends of a string?",
    options: [
        "clear()",
        "strip()",
        "remove()",
        "trim()"
    ],
    answer: "trim()",
    reason: "The trim() method removes whitespace from both ends of a string."
},
{
    question: "What does `JSON.parse()` do?",
    options: [
        "Converts object to JSON",
        "Parses JSON string into an object",
        "Creates a JSON file",
        "Validates JSON"
    ],
    answer: "Parses JSON string into an object",
    reason: "JSON.parse() parses a JSON string and returns the corresponding JavaScript object."
},
{
    question: "Which operator checks for inequality without type coercion?",
    options: [
        "==",
        "!==",
        "===",
        "!="
    ],
    answer: "!==",
    reason: "The !== operator checks for inequality without type coercion."
},
{
    question: "How do you get the character at a specific index in a string?",
    options: [
        "indexOf()",
        "charAt()",
        "at()",
        "getChar()"
    ],
    answer: "charAt()",
    reason: "The charAt() method returns the character at a specified index."
},
{
    question: "What does `Array.concat()` do?",
    options: [
        "Slices an array",
        "Combines arrays",
        "Removes elements",
        "Filters elements"
    ],
    answer: "Combines arrays",
    reason: "The concat() method combines two or more arrays into one array."
},
{
    question: "Which method is used to execute a function for each element in an array?",
    options: [
        "map()",
        "forEach()",
        "filter()",
        "reduce()"
    ],
    answer: "forEach()",
    reason: "The forEach() method executes a provided function once for each array element."
},
{
    question: "How do you create a new empty object?",
    options: [
        "new Object()",
        "{}",
        "object()",
        "create Object()"
    ],
    answer: "{}",
    reason: "You can create a new empty object using curly braces {} or new Object()."
},
{
    question: "Which method converts a number to a fixed-point notation string?",
    options: [
        "toPrecision()",
        "toFixed()",
        "toExponential()",
        "format()"
    ],
    answer: "toFixed()",
    reason: "The toFixed() method formats a number using fixed-point notation."
},
{
    question: "How do you define a class in JavaScript?",
    options: [
        "class: MyClass {}",
        "function MyClass() {}",
        "define MyClass() {}",
        "class MyClass {}"
    ],
    answer: "class MyClass {}",
    reason: "The class keyword is used to define a class in JavaScript."
},
{
    question: "What does `Array.length` return?",
    options: [
        "Maximum element value",
        "Size of array in bytes",
        "Number of elements in the array",
        "Array index"
    ],
    answer: "Number of elements in the array",
    reason: "The length property returns the number of elements in an array."
},
{
    question: "Which method is used to execute a function on each element of an array and return a new array?",
    options: [
        "filter()",
        "reduce()",
        "map()",
        "forEach()"
    ],
    answer: "map()",
    reason: "The map() method creates a new array with the results of calling a function on every element."
},
{
    question: "What does `Object.keys(obj)` return?",
    options: [
        "Object's prototype",
        "Array of key-value pairs",
        "Array of property names",
        "Array of property values"
    ],
    answer: "Array of property names",
    reason: "Object.keys() returns an array of the enumerable property names of an object."
},
{
    question: "How do you create a new array with values multiplied by 2?",
    options: [
        "array.filter(x => x * 2)",
        "array.map(x => x * 2)",
        "array.reduce(x => x * 2)",
        "array.forEach(x => x * 2)"
    ],
    answer: "array.map(x => x * 2)",
    reason: "The map() method creates a new array with each element being the result of the provided function."
},
{
    question: "What does `Object.values(obj)` return?",
    options: [
        "Array of property names",
        "Object's prototype",
        "Array of key-value pairs",
        "Array of property values"
    ],
    answer: "Array of property values",
    reason: "Object.values() returns an array of the values of an object's enumerable properties."
},
{
    question: "How do you create a function that returns a constant value?",
    options: [
        "const func = () => 42;",
        "function() { return 42; }",
        "const func = function() { return 42; }",
        "() => 42"
    ],
    answer: "() => 42",
    reason: "An arrow function () => 42 returns a constant value 42."
},
{
    question: "Which method is used to execute a function for each element in an array?",
    options: [
        "map()",
        "forEach()",
        "filter()",
        "reduce()"
    ],
    answer: "forEach()",
    reason: "The forEach() method executes a function once for each array element."
},
{
    question: "How do you round a number to two decimal places?",
    options: [
        "Math.round(2)",
        "round(2)",
        "toFixed(2)",
        "roundTo(2)"
    ],
    answer: "toFixed(2)",
    reason: "The toFixed(2) method rounds a number to two decimal places."
},
{
    question: "Which method returns a shallow copy of an array?",
    options: [
        "copy()",
        "duplicate()",
        "slice()",
        "clone()"
    ],
    answer: "slice()",
    reason: "The slice() method returns a shallow copy of a portion of an array."
},
{
    question: "What is the default value of an uninitialized variable?",
    options: [
        "undefined",
        "null",
        "false",
        "0"
    ],
    answer: "undefined",
    reason: "Uninitialized variables have the default value of undefined."
},
{
    question: "How do you concatenate two strings?",
    options: [
        "concat(str2)",
        "merge(str2)",
        "str1.concat(str2)",
        "str1 + str2"
    ],
    answer: "str1 + str2",
    reason: "The + operator or concat() method can be used to concatenate two strings."
},
{
    question: "Which method converts a string to lowercase?",
    options: [
        "convertLower()",
        "toSmall()",
        "toLowerCase()",
        "lower()"
    ],
    answer: "toLowerCase()",
    reason: "The toLowerCase() method converts a string to lowercase."
},
{
    question: "What does `Array.join(',')` do?",
    options: [
        "Joins elements with a comma",
        "Creates a new array",
        "Splits the array by commas",
        "Removes commas"
    ],
    answer: "Joins elements with a comma",
    reason: "The join() method joins all elements of an array into a single string separated by a comma."
},
{
    question: "How do you check if a value is an array?",
    options: [
        "Array.isArray()",
        "typeof value === 'array'",
        "value.isArray()",
        "value instanceof Array"
    ],
    answer: "Array.isArray()",
    reason: "Array.isArray() determines whether the value is an array."
},
{
    question: "Which operator is used for logical AND?",
    options: [
        "and",
        "||",
        "&&",
        "!"
    ],
    answer: "&&",
    reason: "The && operator is used for logical AND operations."
},
{
    question: "How do you define a function that does not return a value?",
    options: [
        "function myFunc() { return null; }",
        "function myFunc() { return; }",
        "function myFunc() {}",
        "function myFunc() { void 0; }"
    ],
    answer: "function myFunc() {}",
    reason: "A function with no return statement or value defined does not return anything."
},
{
    question: "What is the result of `0 == '0'`?",
    options: [
        "undefined",
        "NaN",
        "false",
        "true"
    ],
    answer: "true",
    reason: "The == operator performs type coercion, so 0 == '0' evaluates to true."
},
{
    question: "Which method removes the last element of an array?",
    options: [
        "pop()",
        "remove()",
        "shift()",
        "slice()"
    ],
    answer: "pop()",
    reason: "The pop() method removes the last element from an array and returns that element."
},
{
    question: "How do you find the index of an element in an array?",
    options: [
        "findIndex()",
        "search()",
        "indexOf()",
        "position()"
    ],
    answer: "indexOf()",
    reason: "The indexOf() method returns the first index at which a given element can be found in the array."
},
{
    question: "Which method adds new elements to the end of an array?",
    options: [
        "push()",
        "pop()",
        "shift()",
        "unshift()"
    ],
    answer: "push()",
    reason: "The push() method adds new elements to the end of an array and returns the new length."
},
{
    question: "What does `Object.assign()` do?",
    options: [
        "Copies properties from one object to another",
        "Creates a new object",
        "Assigns values to an object",
        "Deletes properties from an object"
    ],
    answer: "Copies properties from one object to another",
    reason: "The Object.assign() method copies the values of all enumerable own properties from one or more source objects to a target object."
},
{
    question: "How do you create a new object?",
    options: [
        "var obj = createObject()",
        "var obj = new Object()",
        "var obj = []",
        "var obj = {}"
    ],
    answer: "var obj = {}",
    reason: "The simplest way to create a new object is using the object literal syntax: var obj = {}."
},
{
    question: "Which method is used to find the highest number in an array?",
    options: [
        "Array.max()",
        "Math.max()",
        "Math.highest()",
        "Array.high()"
    ],
    answer: "Math.max()",
    reason: "Math.max() returns the highest number from a list of numbers, or from an array if used with the spread operator."
},
{
    question: "Which operator is used for logical OR?",
    options: [
        "or",
        "||",
        "&&",
        "!"
    ],
    answer: "||",
    reason: "The || operator is used for logical OR operations."
},
{
    question: "What is the result of `[] + []`?",
    options: [
        "0",
        "NaN",
        "''",
        "undefined"
    ],
    answer: "''",
    reason: "The + operator concatenates arrays into strings. [] + [] results in an empty string."
},
{
    question: "How do you access the first character of a string?",
    options: [
        "str.get(0)",
        "str.charAt(0)",
        "str.first()",
        "str[0]"
    ],
    answer: "str[0]",
    reason: "You can access the first character of a string using bracket notation: str[0] or str.charAt(0)."
},
{
    question: "Which method is used to sort an array?",
    options: [
        "arrange()",
        "sequence()",
        "order()",
        "sort()"
    ],
    answer: "sort()",
    reason: "The sort() method sorts the elements of an array in place and returns the sorted array."
},
{
    question: "What does `String.trim()` do?",
    options: [
        "Removes whitespace from both ends",
        "Converts to lowercase",
        "Trims the string length",
        "Replaces whitespace with a hyphen"
    ],
    answer: "Removes whitespace from both ends",
    reason: "The trim() method removes whitespace from both ends of a string."
},
{
    question: "Which method adds one or more elements to the beginning of an array?",
    options: [
        "shift()",
        "pop()",
        "unshift()",
        "push()"
    ],
    answer: "unshift()",
    reason: "The unshift() method adds one or more elements to the beginning of an array and returns the new length."
},
{
    question: "How do you declare a function in an ES6+ way?",
    options: [
        "let myFunc = function() {}",
        "function myFunc() {}",
        "const myFunc = () => {}",
        "var myFunc = function() {}"
    ],
    answer: "const myFunc = () => {}",
    reason: "The arrow function syntax (const myFunc = () => {}) is a modern way to declare functions in ES6+."
},
{
    question: "How do you check if a property exists in an object?",
    options: [
        "obj.hasOwnProperty('property')",
        "obj.propertyExists('property')",
        "'property' in obj",
        "obj.includes('property')"
    ],
    answer: "'property' in obj",
    reason: "The 'property' in obj syntax checks if the property exists in the object."
},
{
    question: "Which method combines two arrays into one?",
    options: [
        "concat()",
        "merge()",
        "combine()",
        "append()"
    ],
    answer: "concat()",
    reason: "The concat() method is used to combine two or more arrays into a single array."
},
{
    question: "What does `Number.isNaN()` check?",
    options: [
        "Whether a value is NaN",
        "Whether a value is a number",
        "Whether a value is null",
        "Whether a value is undefined"
    ],
    answer: "Whether a value is NaN",
    reason: "The Number.isNaN() method determines whether the value is NaN and its type is Number."
},
{
    question: "What does `Math.random()` return?",
    options: [
        "A random number between 0 and 1",
        "A random integer",
        "A random boolean",
        "A random string"
    ],
    answer: "A random number between 0 and 1",
    reason: "Math.random() returns a floating-point number between 0 (inclusive) and 1 (exclusive)."
},
{
    question: "Which method removes a specific item from an array?",
    options: [
        "splice()",
        "remove()",
        "delete()",
        "pop()"
    ],
    answer: "splice()",
    reason: "The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements."
},
{
    question: "How do you get the current date and time?",
    options: [
        "new Date()",
        "currentDateTime()",
        "now()",
        "getDate()"
    ],
    answer: "new Date()",
    reason: "The new Date() constructor returns a Date object representing the current date and time."
},
{
    question: "Which method converts an array to a string with elements separated by a specified delimiter?",
    options: [
        "join()",
        "toString()",
        "split()",
        "concat()"
    ],
    answer: "join()",
    reason: "The join() method creates and returns a new string by concatenating all of the elements in an array, separated by a specified delimiter."
},
{
    question: "What does `Array.slice()` do?",
    options: [
        "Extracts a portion of an array",
        "Sorts the array",
        "Combines arrays",
        "Removes elements"
    ],
    answer: "Extracts a portion of an array",
    reason: "The slice() method returns a shallow copy of a portion of an array into a new array object."
},
{
    question: "What is the default value of an uninitialized variable?",
    options: [
        "undefined",
        "null",
        "0",
        "NaN"
    ],
    answer: "undefined",
    reason: "An uninitialized variable in JavaScript is automatically assigned the value undefined."
},
{
    question: "How do you create a new array from an existing one with a modification?",
    options: [
        "map()",
        "modify()",
        "filter()",
        "reduce()"
    ],
    answer: "map()",
    reason: "The map() method creates a new array with the results of calling a provided function on every element in the calling array."
},
{
    question: "Which method checks if every element in an array meets a condition?",
    options: [
        "every()",
        "some()",
        "filter()",
        "map()"
    ],
    answer: "every()",
    reason: "The every() method tests whether all elements in the array pass the test implemented by the provided function."
},
{
    question: "What does `parseInt('10.5')` return?",
    options: [
        "10",
        "10.5",
        "NaN",
        "undefined"
    ],
    answer: "10",
    reason: "The parseInt() function parses a string argument and returns an integer of the specified radix."
},
{
    question: "How do you check if a value is of type 'string'?",
    options: [
        "typeof value === 'string'",
        "value instanceof String",
        "String.isString(value)",
        "value.type === 'string'"
    ],
    answer: "typeof value === 'string'",
    reason: "The typeof operator returns 'string' for string values."
},
{
    question: "Which method returns the character code of the first character in a string?",
    options: [
        "charCodeAt()",
        "codeAt()",
        "getCharCode()",
        "firstCharCode()"
    ],
    answer: "charCodeAt()",
    reason: "The charCodeAt() method returns the Unicode value of the character at a specified index."
},
{
    question: "What does `Object.keys()` return?",
    options: [
        "An array of an object's own enumerable property names",
        "An array of property values",
        "The number of properties",
        "A string of property names"
    ],
    answer: "An array of an object's own enumerable property names",
    reason: "The Object.keys() method returns an array of a given object's own enumerable property names."
},
{
    question: "What is the result of `typeof NaN`?",
    options: [
        "number",
        "NaN",
        "undefined",
        "object"
    ],
    answer: "number",
    reason: "The typeof operator returns 'number' for NaN, as NaN is considered a numeric type."
},
{
    question: "Which method creates a new array with all elements that pass a test?",
    options: [
        "filter()",
        "map()",
        "reduce()",
        "find()"
    ],
    answer: "filter()",
    reason: "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
},
{
    question: "How do you create a new empty array?",
    options: [
        "const arr = []",
        "const arr = {}",
        "const arr = new Array()",
        "const arr = new Object()"
    ],
    answer: "const arr = []",
    reason: "You can create a new empty array using array literal syntax: const arr = []."
},
{
    question: "What is the default value of an undeclared variable?",
    options: [
        "ReferenceError",
        "undefined",
        "null",
        "0"
    ],
    answer: "ReferenceError",
    reason: "Accessing an undeclared variable results in a ReferenceError in JavaScript."
},
{
    question: "Which method removes the last element from an array?",
    options: [
        "pop()",
        "shift()",
        "splice()",
        "remove()"
    ],
    answer: "pop()",
    reason: "The pop() method removes the last element from an array and returns that element."
},
{
    question: "Which operator is used for strict equality?",
    options: [
        "===",
        "==",
        "!=",
        "!=="
    ],
    answer: "===",
    reason: "The === operator checks for strict equality, meaning both value and type must match."
},
{
    question: "How do you convert a string to a number?",
    options: [
        "Number()",
        "parseInt()",
        "parseFloat()",
        "All of the above"
    ],
    answer: "All of the above",
    reason: "Number(), parseInt(), and parseFloat() can all be used to convert a string to a number."
},
{
    question: "What does `String.toUpperCase()` do?",
    options: [
        "Converts the string to uppercase",
        "Converts the string to lowercase",
        "Trims whitespace",
        "Reverses the string"
    ],
    answer: "Converts the string to uppercase",
    reason: "The toUpperCase() method returns the calling string value converted to uppercase."
},
{
    question: "What is the result of `Boolean('false')`?",
    options: [
        "true",
        "false",
        "undefined",
        "NaN"
    ],
    answer: "true",
    reason: "The Boolean() function converts a value to a Boolean. 'false' is a non-empty string, so it's truthy and converted to true."
},
{
    question: "Which method removes the first element from an array?",
    options: [
        "shift()",
        "pop()",
        "splice()",
        "delete()"
    ],
    answer: "shift()",
    reason: "The shift() method removes the first element from an array and returns that removed element."
}, {
    question: "What does `console.log('Hello World' + 1 + 2)` print?",
    options: [
        "Hello World12",
        "Hello World3",
        "Hello World12",
        "undefined"
    ],
    answer: "Hello World12",
    reason: "In JavaScript, string concatenation happens before addition. Thus, 'Hello World' is concatenated with '1' to form 'Hello World1', and then with '2' to form 'Hello World12'."
},
{
    question: "What will `typeof NaN` return?",
    options: [
        "number",
        "NaN",
        "object",
        "undefined"
    ],
    answer: "number",
    reason: "NaN stands for 'Not-a-Number', but its type is actually 'number' in JavaScript."
},
{
    question: "What is the result of `0.1 + 0.2 == 0.3`?",
    options: [
        "true",
        "false",
        "NaN",
        "undefined"
    ],
    answer: "false",
    reason: "Due to floating-point precision issues, `0.1 + 0.2` does not exactly equal `0.3`, so the comparison returns false."
},
{
    question: "Which method can be used to get a random integer between 1 and 10?",
    options: [
        "Math.random()",
        "Math.floor(Math.random() * 10) + 1",
        "Math.round(Math.random() * 10)",
        "Math.intRandom(1, 10)"
    ],
    answer: "Math.floor(Math.random() * 10) + 1",
    reason: "Math.floor(Math.random() * 10) + 1 generates a random integer between 1 and 10, inclusive."
},
{
    question: "What will `alert(2 + '2')` display?",
    options: [
        "4",
        "22",
        "NaN",
        "undefined"
    ],
    answer: "22",
    reason: "The `+` operator concatenates the number 2 with the string '2', resulting in the string '22'."
},{
    question: "What does `console.log([] == [])` return?",
    options: [
        "true",
        "false",
        "undefined",
        "NaN"
    ],
    answer: "false",
    reason: "In JavaScript, comparing two different array instances using `==` or `===` returns `false` because arrays are reference types and the comparison checks for object identity, not content."
}



];


console.log("Total basic Questions : " ,quizData.length)