const quizDataAdvanced = [
    {
        question: "What will be the output of the following code?\n\n```javascript\nconsole.log(2 + '2' - 1);\n```",
        options: ["3", "21", "NaN", "4"],
        answer: "21",
        reason: "The `2 + '2'` operation results in the string '22'. Subtracting 1 from '22' converts '22' to a number and performs the subtraction, resulting in 21."
    },
    {
        question: "What will be the result of `typeof NaN`?",
        options: ["number", "NaN", "undefined", "object"],
        answer: "number",
        reason: "In JavaScript, `NaN` is of type `number`, despite representing a non-numeric value."
    },
    {
        question: "What is the output of `0.1 + 0.2 === 0.3`?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "false",
        reason: "Due to floating-point precision issues, `0.1 + 0.2` does not exactly equal `0.3`. Instead, it evaluates to a value slightly different from `0.3`."
    },
    {
        question: "What does `console.log([] + {})` print?",
        options: ["[object Object]", "undefined", "[]", "[object Object]"],
        answer: "[object Object]",
        reason: "The `[] + {}` operation first converts `[]` to an empty string and then adds `{}` to it. Since `{}` is converted to its string representation '[object Object]', the output is '[object Object]'."
    },
    {
        question: "What will `console.log([] == ![])` output?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true",
        reason: "The `![]` operation converts the empty array `[]` to `false`, and `[] == false` evaluates to true due to type coercion."
    },
    {
        question: "What is the result of `('5' - 3)`?",
        options: ["2", "53", "undefined", "NaN"],
        answer: "2",
        reason: "The `-` operator converts the string '5' to the number 5 and performs subtraction with 3, resulting in 2."
    },
    {
        question: "What does `typeof null` return?",
        options: ["object", "null", "undefined", "number"],
        answer: "object",
        reason: "In JavaScript, `null` is incorrectly classified as an `object` due to a historical bug in the language."
    },
    {
        question: "What will be the output of `console.log(1 + '1' - 1)`?",
        options: ["10", "11", "1", "NaN"],
        answer: "10",
        reason: "The `1 + '1'` operation results in the string '11'. Subtracting 1 from '11' converts '11' to a number and performs the subtraction, resulting in 10."
    },
    {
        question: "What is the result of `[] == false`?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true",
        reason: "In JavaScript, `[]` is coerced to `false` in a loose equality comparison with `false`, so `[] == false` evaluates to true."
    },
    {
        question: "What does `console.log('a' - 'b')` print?",
        options: ["NaN", "undefined", "0", "a-b"],
        answer: "NaN",
        reason: "Subtracting two non-numeric strings results in `NaN`, as they cannot be converted to numbers."
    },
    {
        question: "What will `console.log({} + [])` output?",
        options: ["[object Object]", "undefined", "NaN", "{}"],
        answer: "[object Object]",
        reason: "The `{} + []` operation results in the `+` operator being applied to an object `{}` and an empty array `[]`. `{}` is treated as an empty block, so the `+` operator results in `[object Object]`."
    },
    {
        question: "What will `console.log([] + [1])` output?",
        options: ["1", "01", "[1]", "undefined"],
        answer: "1",
        reason: "The `[] + [1]` operation converts both arrays to strings and concatenates them. `[]` converts to an empty string, and `[1]` converts to '1', so the result is '1'."
    },
    {
        question: "What is the output of `console.log(!!'false')`?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true",
        reason: "The `!!` operator converts a value to a boolean. `'false'` is a non-empty string, which is truthy, so `!!'false'` evaluates to `true`."
    },
    {
        question: "What will `console.log(0 == '0')` return?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true",
        reason: "In a loose equality comparison, the string '0' is coerced to the number 0, so `0 == '0'` evaluates to true."
    },
    {
        question: "What is the result of `console.log(2 + 3 + '5')`?",
        options: ["55", "10", "NaN", "23"],
        answer: "55",
        reason: "The `2 + 3` operation results in 5. Adding the string '5' to this number converts the result to '55'."
    },
    {
        question: "What does `console.log(1 + '1' - 1)` produce?",
        options: ["10", "11", "1", "NaN"],
        answer: "10",
        reason: "The `1 + '1'` operation results in the string '11'. Subtracting 1 from '11' converts '11' to a number and performs the subtraction, resulting in 10."
    },
    {
        question: "What is the output of `console.log('a' - 1)`?",
        options: ["NaN", "a-1", "undefined", "0"],
        answer: "NaN",
        reason: "Subtracting a number from a non-numeric string results in `NaN`, as the string 'a' cannot be converted to a number."
    },
    {
        question: "What does `console.log({} + 1)` print?",
        options: ["[object Object]1", "1", "NaN", "{}1"],
        answer: "NaN",
        reason: "The `{} + 1` operation results in `NaN` because `{}` is treated as an empty block and `+ 1` is invalid in this context."
    },
    {
        question: "What will `console.log(3 + '3' - 3)` return?",
        options: ["30", "33", "3", "NaN"],
        answer: "30",
        reason: "The `3 + '3'` operation results in the string '33'. Subtracting 3 from '33' converts '33' to a number and performs the subtraction, resulting in 30."
    },
    {
        question: "What is the result of `console.log([] + false)`?",
        options: ["false", "0", "NaN", "[object Object]"],
        answer: "false",
        reason: "The `[] + false` operation first converts `[]` to an empty string and then adds `false` to it. Since `false` converts to 'false', the result is 'false'."
    }
    ,
    {
        question: "What does `console.log(null == undefined)` produce?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true",
        reason: "In JavaScript, `null` and `undefined` are considered equal when using loose equality (`==`), so `null == undefined` evaluates to true."
    },
    {
        question: "What does `await Promise.resolve(1)` return?",
        options: ["1", "Promise", "undefined", "NaN"],
        answer: "1",
        reason: "The `await` keyword resolves the promise and returns its result. So `await Promise.resolve(1)` returns 1."
    },
    {
        question: "What will `async function test() { return 1; }` return?",
        options: ["Promise.resolve(1)", "1", "Promise", "undefined"],
        answer: "Promise.resolve(1)",
        reason: "An `async` function always returns a promise. If the function returns a value (e.g., 1), it is wrapped in a resolved promise. Therefore, `async function test() { return 1; }` returns `Promise.resolve(1)`."
    },
    {
        question: "What will `Promise.all([Promise.resolve(1), Promise.resolve(2)])` resolve to?",
        options: ["[1, 2]", "1", "2", "Promise"],
        answer: "[1, 2]",
        reason: "`Promise.all` takes an array of promises and resolves to an array of their results. Since both promises resolve to 1 and 2, respectively, the result is `[1, 2]`."
    },
    {
        question: "What will `Promise.race([Promise.resolve(1), Promise.resolve(2)])` resolve to?",
        options: ["1", "2", "Promise", "undefined"],
        answer: "1",
        reason: "`Promise.race` resolves to the result of the first promise that resolves or rejects. In this case, the promise resolving to 1 resolves first, so `Promise.race` resolves to 1."
    },
    {
        question: "What does `async function foo() { throw new Error('error'); }` return when called?",
        options: ["Promise.reject('error')", "Promise.resolve('error')", "Error", "undefined"],
        answer: "Promise.reject('error')",
        reason: "When an `async` function throws an error, it returns a rejected promise with that error. Therefore, `async function foo() { throw new Error('error'); }` returns `Promise.reject('error')`."
    },
    {
        question: "What will `await fetch('url')` return?",
        options: ["Response object", "Promise", "undefined", "Error"],
        answer: "Response object",
        reason: "The `fetch` function returns a promise that resolves to a `Response` object. Using `await` on this promise, you get the `Response` object."
    },
    {
        question: "What does `try { await Promise.reject(); } catch (e) { return e; }` return?",
        options: ["Error", "undefined", "Promise", "0"],
        answer: "Error",
        reason: "The `Promise.reject()` creates a rejected promise. The `await` expression causes the `catch` block to handle the rejection, and the error is returned."
    },
    {
        question: "What will `console.log(typeof (async () => {}).constructor)` output?",
        options: ["Function", "AsyncFunction", "Promise", "Object"],
        answer: "AsyncFunction",
        reason: "An `async` function is of type `AsyncFunction`, which is the constructor function for `async` functions."
    },
    {
        question: "What is the output of `Promise.resolve().then(() => console.log('A')).then(() => console.log('B'))`?",
        options: ["A B", "B A", "undefined", "Promise"],
        answer: "A B",
        reason: "The `then` method adds handlers to the promise and returns a new promise. Therefore, 'A' is logged first followed by 'B' after the promise resolves."
    },
    {
        question: "What does `await Promise.reject('error')` throw?",
        options: ["'error'", "Error", "undefined", "Promise"],
        answer: "'error'",
        reason: "Using `await` on a rejected promise causes the promise to throw the rejection reason. Here, `'error'` is the rejection reason."
    },
    {
        question: "What does `Promise.resolve().finally(() => console.log('done'))` output?",
        options: ["done", "Promise", "undefined", "NaN"],
        answer: "done",
        reason: "The `finally` method executes the provided callback after the promise is settled, regardless of its outcome. Thus, 'done' is logged to the console."
    },
    {
        question: "What will `await new Promise((resolve, reject) => { setTimeout(resolve, 1000); })` return after 1 second?",
        options: ["undefined", "Promise", "1", "void"],
        answer: "undefined",
        reason: "The `resolve` function is called with no arguments after 1 second, so the resolved value of the promise is `undefined`. Thus, `await` returns `undefined`."
    },
    {
        question: "What does `async function foo() { return Promise.resolve('foo'); }` resolve to?",
        options: ["'foo'", "Promise.resolve('foo')", "Promise", "undefined"],
        answer: "Promise.resolve('foo')",
        reason: "An `async` function returns a promise. If the function returns a promise, it is returned as-is. Hence, `async function foo() { return Promise.resolve('foo'); }` resolves to `Promise.resolve('foo')`."
    },
    {
        question: "What is the result of `Promise.all([Promise.resolve('a'), Promise.resolve('b')])`?",
        options: ["['a', 'b']", "['b', 'a']", "Promise", "undefined"],
        answer: "['a', 'b']",
        reason: "The `Promise.all` method resolves to an array of the results from the input promises in the same order. Here, it resolves to `['a', 'b']`."
    },
    {
        question: "What does `await (async () => 1)()` return?",
        options: ["1", "Promise", "undefined", "NaN"],
        answer: "1",
        reason: "The `async` function immediately returns the value 1 wrapped in a promise. Using `await` on this promise results in returning the value 1."
    }
    ,
    {
    question: "What will `Promise.allSettled([Promise.resolve(1), Promise.reject(2)])` resolve to?",
    options: ["[{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 2 }]", "[{ status: 'fulfilled', value: 1 }, { status: 'fulfilled', value: 2 }]", "Promise", "undefined"],
    answer: "[{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 2 }]",
    reason: "The `Promise.allSettled` method returns a promise that resolves after all of the given promises have either resolved or rejected. The result is an array of objects describing the outcome of each promise."
},
{
    question: "What is the output of `Promise.resolve(5).then(() => { throw new Error('oops'); }).catch(e => e.message)`?",
    options: ["'oops'", "Error", "undefined", "Promise"],
    answer: "'oops'",
    reason: "The `then` handler throws an error, which is caught by the `catch` handler. `e.message` extracts the error message, resulting in 'oops'."
},
{
    question: "What does `async function foo() { return 1; }` and `foo().then(console.log)` output?",
    options: ["1", "Promise", "undefined", "NaN"],
    answer: "1",
    reason: "An `async` function always returns a promise. The promise resolves to the value returned by the function. Therefore, `foo().then(console.log)` logs 1."
},
{
    question: "What does `Promise.reject('error').finally(() => console.log('done'))` output?",
    options: ["done", "error", "Promise", "undefined"],
    answer: "done",
    reason: "The `finally` method executes its callback after the promise settles, regardless of the outcome. So, 'done' is logged to the console."
},
{
    question: "What will `await (async () => { throw 'error'; })()` throw?",
    options: ["'error'", "Error", "undefined", "Promise"],
    answer: "'error'",
    reason: "The `await` expression will throw the error that is thrown by the async function. In this case, it throws the string 'error'."
},
{
    question: "What is the result of `console.log(0 === -0)`?",
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
    reason: "In JavaScript, `0` and `-0` are considered equal using the strict equality operator (`===`)."
},
{
    question: "What will `console.log([1] == [1])` return?",
    options: ["false", "true", "undefined", "NaN"],
    answer: "false",
    reason: "In JavaScript, arrays are objects. Comparing two different array objects using `==` will always return false, even if they have the same content."
},
{
    question: "What does `async function bar() { await Promise.reject('fail'); }` return when called?",
    options: ["Promise.reject('fail')", "undefined", "Error", "Promise"],
    answer: "Promise.reject('fail')",
    reason: "An `async` function always returns a promise. If it awaits a rejected promise, the resulting promise is rejected with the same reason."
},
{
    question: "What is the output of `console.log(typeof (async () => 2)())`?",
    options: ["Promise", "number", "function", "undefined"],
    answer: "Promise",
    reason: "An `async` function returns a promise, so `typeof (async () => 2)()` will be 'object', but `object` refers to promises in JavaScript."
},
{
    question: "What will `Promise.all([Promise.resolve(1), 2, Promise.resolve(3)])` resolve to?",
    options: ["[1, 2, 3]", "Promise", "undefined", "Error"],
    answer: "Error",
    reason: "`Promise.all` requires all elements in the array to be promises. Since `2` is not a promise, `Promise.all` will reject with a `TypeError`."
},
{
    question: "What does `async function baz() { return await Promise.resolve('baz'); }` return?",
    options: ["'baz'", "Promise.resolve('baz')", "Promise", "undefined"],
    answer: "'baz'",
    reason: "Using `await` inside an async function results in the function returning the resolved value of the awaited promise."
},
{
    question: "What is the result of `console.log(async () => { return 1; })`?",
    options: ["AsyncFunction", "Promise", "1", "undefined"],
    answer: "AsyncFunction",
    reason: "The result of `async () => { return 1; }` is a function of type `AsyncFunction`."
},
{
    question: "What will `await (async () => { await new Promise(resolve => setTimeout(resolve, 1000)); return 3; })()` return after 1 second?",
    options: ["3", "1", "undefined", "Promise"],
    answer: "3",
    reason: "The async function waits for the promise to resolve before returning 3. After 1 second, the function returns 3."
},
{
    question: "What does `Promise.resolve().then(() => { throw 'error'; }).catch(e => e)` output?",
    options: ["'error'", "undefined", "Error", "Promise"],
    answer: "'error'",
    reason: "The `then` handler throws an error which is caught by the `catch` handler. `e` is the error message 'error'."
},
{
    question: "What is the result of `console.log(1 + 2 + '3')`?",
    options: ["33", "6", "12", "NaN"],
    answer: "33",
    reason: "In JavaScript, `1 + 2` is 3, and concatenating this with the string '3' results in '33'."
},
{
    question: "What does `console.log((async () => 1)() instanceof Promise)` output?",
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
    reason: "An `async` function returns a promise, so `(async () => 1)()` is an instance of `Promise`."
},
{
    question: "What will `Promise.all([Promise.resolve(1), Promise.resolve(2), new Promise((_, reject) => reject('error'))])` return?",
    options: ["Error", "[1, 2, 'error']", "[1, 2]", "Promise"],
    answer: "Error",
    reason: "The `Promise.all` method will reject as soon as any of the promises reject. Since one of the promises rejects with 'error', `Promise.all` will reject with that error."
},
{
    question: "What is the output of `console.log((async () => { await new Promise(resolve => setTimeout(resolve, 0)); return 1; })())`?",
    options: ["1", "Promise", "undefined", "NaN"],
    answer: "1",
    reason: "The async function will return 1 after the promise resolves. Therefore, the result is 1."
},
{
    question: "What does `console.log(typeof Promise.all)` return?",
    options: ["function", "object", "undefined", "Promise"],
    answer: "function",
    reason: "`Promise.all` is a static method and is of type 'function'."
},
{
    question: "What is the result of `await Promise.all([Promise.resolve(1), new Promise((_, reject) => setTimeout(reject, 1000))])`?",
    options: ["Promise", "Error", "undefined", "[1]"],
    answer: "Error",
    reason: "The `Promise.all` method will reject if any promise in the array rejects. Since the second promise rejects after 1 second, the result is an error."
},
{
    question: "What will `console.log(1 + '2' + 3)` produce?",
    options: ["123", "6", "32", "NaN"],
    answer: "123",
    reason: "In JavaScript, `1 + '2'` results in '12', and concatenating this with `3` results in '123'."
},
{
    question: "What does `async function foo() { return await Promise.resolve('foo'); }` and `foo().then(console.log)` output?",
    options: ["'foo'", "Promise.resolve('foo')", "undefined", "Promise"],
    answer: "'foo'",
    reason: "The `await` expression will cause the async function to return the resolved value of the promise, which is 'foo'."
},
{
    question: "What will `console.log(Promise.resolve(1).finally(() => { throw 'error'; }))` output?",
    options: ["'error'", "Promise", "undefined", "Error"],
    answer: "Error",
    reason: "The `finally` method executes its callback and then returns the original promise. If the callback throws an error, the promise is rejected with that error."
},
{
    question: "What is the result of `console.log([1, 2] + [3])`?",
    options: ["'1,23'", "'1,2,3'", "'[1,2][3]'", "undefined"],
    answer: "'1,23'",
    reason: "When adding arrays, JavaScript converts them to strings and concatenates them. Therefore, `[1, 2] + [3]` results in '1,23'."
}
,
{
    question: "What does `console.log(await (async () => { let a = 1; a += await new Promise(resolve => setTimeout(() => resolve(2), 1000)); return a; })())` return after 1 second?",
    options: ["3", "1", "2", "undefined"],
    answer: "3",
    reason: "The `await` keyword pauses execution until the promise resolves. Here, `await` pauses until `new Promise(resolve => setTimeout(() => resolve(2), 1000))` resolves after 1 second, adding 2 to `a`, resulting in 3."
},
{
    question: "What does `Promise.all()` do?",
    options: ["Waits for all promises", "Resolves the first promise", "Rejects if any promise fails", "Returns a single promise"],
    answer: "Waits for all promises",
    reason: "`Promise.all()` waits for all promises to resolve and returns a promise that resolves with an array of the resolved values. If any promise rejects, the entire promise returned by `Promise.all()` will reject."
},
{
    question: "What is the purpose of `Promise.race()`?",
    options: ["Returns the first promise to settle", "Waits for all promises", "Rejects if any promise fails", "Returns an array of results"],
    answer: "Returns the first promise to settle",
    reason: "`Promise.race()` returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise."
},
{
    question: "What will `async function foo() { throw 'error'; }` return?",
    options: ["Promise.reject('error')", "undefined", "Error", "Promise.resolve('error')"],
    answer: "Promise.reject('error')",
    reason: "An async function returns a promise. If it throws an error, the returned promise is rejected with that error."
},
{
    question: "What does `await` do in an `async` function?",
    options: ["Pauses execution", "Immediately resolves", "Converts to promise", "Rejects if value is not a promise"],
    answer: "Pauses execution",
    reason: "`await` pauses the execution of the `async` function until the promise is resolved or rejected, allowing asynchronous code to behave more like synchronous code."
},
{
    question: "What is the result of `Promise.allSettled()`?",
    options: ["Returns all promises' results", "Resolves the first promise", "Rejects if any promise fails", "Waits for all promises"],
    answer: "Returns all promises' results",
    reason: "`Promise.allSettled()` returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise."
},

{
    question: "What does `Promise.any()` do?",
    options: ["Returns the first fulfilled promise", "Rejects if any promise fails", "Returns the first settled promise", "Waits for all promises"],
    answer: "Returns the first fulfilled promise",
    reason: "`Promise.any()` returns a promise that resolves as soon as one of the promises in the iterable fulfills. If no promises fulfill, it rejects with an `AggregateError`."
},

{
    question: "What does `Promise.all()` return if one of the promises rejects?",
    options: ["Rejects immediately", "Resolves with all values", "Returns an array with all results", "Waits for all promises"],
    answer: "Rejects immediately",
    reason: "`Promise.all()` rejects as soon as one of the promises in the array rejects, and does not wait for the rest of the promises to settle."
},
{
    question: "What will `Promise.resolve(1).then(x => x + 1).catch(() => 'error')` output?",
    options: ["2", "'error'", "1", "undefined"],
    answer: "2",
    reason: "The `catch` block is not executed because no error is thrown. The `then` handler adds 1 to the resolved value 1, resulting in 2."
},
{
    question: "What is the purpose of `Promise.finally()`?",
    options: ["Executes after promise settles", "Resolves the promise", "Rejects the promise", "Returns a new promise"],
    answer: "Executes after promise settles",
    reason: "`Promise.finally()` executes a callback when the promise settles (either resolved or rejected), allowing you to clean up or execute code after the promise operation."
},

{
    question: "What happens when you use `await` with a non-promise value?",
    options: ["Converts it to a resolved promise", "Throws an error", "Returns the value directly", "Resolves immediately"],
    answer: "Converts it to a resolved promise",
    reason: "`await` will convert a non-promise value to a resolved promise, and the `await` expression will return that value directly."
},

{
    question: "What is the behavior of `Promise.any()` when all promises reject?",
    options: ["Throws an AggregateError", "Returns the first rejected promise", "Resolves with the first promise", "Returns an empty array"],
    answer: "Throws an AggregateError",
    reason: "`Promise.any()` throws an `AggregateError` if all of the given promises reject. This error contains all individual errors from the rejected promises."
},
{
    question: "What does `Promise.resolve().then(() => { return new Error('test'); })` return?",
    options: ["Promise with Error", "Error", "undefined", "Promise with 'test'"],
    answer: "Promise with Error",
    reason: "The `.then()` callback returns a new `Error('test')` object, which is not a rejected promise. The promise returned by `Promise.resolve()` is fulfilled with this error, so the promise resolves with the `Error` object."
},
{
    question: "What is the output of `console.log(2 ** 3)`?",
    options: ["8", "6", "9", "undefined"],
    answer: "8",
    reason: "`2 ** 3` is the exponentiation operator, which raises 2 to the power of 3, resulting in 8."
},

{
    question: "What does `console.log(typeof (function*() {}))` return?",
    options: ["Function", "GeneratorFunction", "Object", "undefined"],
    answer: "GeneratorFunction",
    reason: '`function*() {}` defines a generator function. The `typeof` operator returns `"GeneratorFunction"` for generator functions.'
},
{
    question: "What is the result of `console.log('5' - 1)`?",
    options: ["4", "51", "undefined", "NaN"],
    answer: "4",
    reason: "The `-` operator performs arithmetic subtraction, so `'5'` (a string) is converted to a number and subtracted by 1, resulting in 4."
},
{
    question: "What does `console.log(() => {} instanceof Function)` output?",
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
    reason: "`() => {}` is an arrow function, and arrow functions are instances of `Function`, so the `instanceof Function` check returns `true`."
},
{
    question: "Why use promises instead of callbacks?",
    options: ["Avoid callback hell", "Faster execution", "More memory usage", "Simpler syntax"],
    answer: "Avoid callback hell",
    reason: "Promises help manage asynchronous code and avoid callback hell by providing a more readable and manageable way to handle asynchronous operations."
},
{
    question: "Why use `async/await` over plain promises?",
    options: ["Cleaner syntax", "Better performance", "More flexible", "Fewer bugs"],
    answer: "Cleaner syntax",
    reason: "`async/await` provides a more synchronous-looking syntax for handling asynchronous code, making it easier to read and maintain compared to plain promises with `.then()` chains."
},
{
    question: "Why do we use `Promise.all()`?",
    options: ["To wait for multiple promises", "To race promises", "To handle single promise", "To reject all promises"],
    answer: "To wait for multiple promises",
    reason: "`Promise.all()` is used to wait for multiple promises to resolve and returns a single promise that resolves when all promises in the array have resolved."
},
{
    question: "Why prefer `async/await` for asynchronous code?",
    options: ["Easier to read", "Less error-prone", "Faster execution", "Requires less code"],
    answer: "Easier to read",
    reason: "`async/await` simplifies the syntax for handling asynchronous code, making it easier to understand and maintain compared to using only promises with `.then()` and `.catch()`."
},
{
    question: "Why use `Promise.allSettled()`?",
    options: ["To handle both resolved and rejected promises", "To get the first settled promise", "To ignore all errors", "To resolve the fastest promise"],
    answer: "To handle both resolved and rejected promises",
    reason: "`Promise.allSettled()` is used when you want to wait for all promises to settle (resolve or reject) and get the result of each promise, regardless of whether they were fulfilled or rejected."
},
{
    question: "Why use `async function`?",
    options: ["To enable `await` inside functions", "To return synchronous results", "To optimize code", "To handle single promises"],
    answer: "To enable `await` inside functions",
    reason: "`async function` allows the use of `await` inside the function, making it easier to work with asynchronous code and handle promises more gracefully."
},
{
    question: "Why use `Promise.race()`?",
    options: ["To get the first promise to settle", "To resolve all promises", "To wait for all promises", "To reject all promises"],
    answer: "To get the first promise to settle",
    reason: "`Promise.race()` returns a promise that resolves or rejects as soon as the first promise in the iterable resolves or rejects, giving you the result of the fastest promise."
},
{
    question: "Why prefer `Object.freeze()`?",
    options: ["To prevent object modification", "To enhance performance", "To create copies", "To add new properties"],
    answer: "To prevent object modification",
    reason: "`Object.freeze()` is used to prevent modifications to an object, making it immutable. This can be useful for maintaining consistent state and ensuring that objects are not inadvertently changed."
}
,
{
    question: "Why use `Map` over plain objects for key-value pairs?",
    options: ["To maintain insertion order", "To handle larger datasets", "To optimize memory", "To provide better syntax"],
    answer: "To maintain insertion order",
    reason: "`Map` maintains the insertion order of its keys, which is not guaranteed in plain objects. This makes `Map` more suitable for scenarios where the order of keys is important."
},
{
    question: "Why use `let` and `const` instead of `var`?",
    options: ["Block scope vs. function scope", "Better performance", "More memory", "Legacy support"],
    answer: "Block scope vs. function scope",
    reason: "`let` and `const` provide block-level scope, while `var` provides function-level scope. This helps avoid issues with variable hoisting and scope leakage."
},
{
    question: "Why use `Symbol` for unique identifiers?",
    options: ["To avoid name collisions", "For better performance", "To store private data", "To simplify code"],
    answer: "To avoid name collisions",
    reason: "`Symbol` creates unique identifiers that prevent name collisions in object properties, which can be useful for adding properties that do not conflict with other properties."
},
{
    question: "Why is `Array.prototype.reduce()` used?",
    options: ["To accumulate values", "To iterate over arrays", "To filter arrays", "To sort arrays"],
    answer: "To accumulate values",
    reason: "`Array.prototype.reduce()` is used to accumulate values from an array into a single result, such as summing numbers or combining objects."
},
{
    question: "Why use `Proxy` in JavaScript?",
    options: ["To intercept and customize operations", "To optimize performance", "To enhance security", "To create new objects"],
    answer: "To intercept and customize operations",
    reason: "`Proxy` allows you to intercept and customize operations performed on an object, such as property access and assignment, making it useful for creating custom behaviors."
},
{
    question: "Why prefer `const` over `let` for variables?",
    options: ["To ensure immutability", "For block scope", "To improve performance", "To simplify debugging"],
    answer: "To ensure immutability",
    reason: "`const` ensures that a variable's reference cannot be reassigned, which helps maintain immutability and avoids accidental reassignments."
},
{
    question: "Why use `Set` instead of an array for unique values?",
    options: ["To automatically handle duplicates", "For better performance", "To sort values", "To map values"],
    answer: "To automatically handle duplicates",
    reason: "`Set` automatically handles duplicates by only allowing unique values, making it ideal for storing unique elements without additional checks."
},
{
    question: "Why use `Function.prototype.bind()`?",
    options: ["To set `this` context", "To optimize function calls", "To create new functions", "To bind arguments"],
    answer: "To set `this` context",
    reason: "`Function.prototype.bind()` is used to set the `this` context of a function and optionally bind arguments, which allows you to create a new function with a fixed `this` value."
},
{
    question: "Why use `async/await` over `.then()` chaining?",
    options: ["For better readability", "For better performance", "To handle synchronous code", "To avoid race conditions"],
    answer: "For better readability",
    reason: "`async/await` provides a more synchronous-looking syntax for handling asynchronous operations, making the code easier to read and write compared to `.then()` chaining."
},
{
    question: "Why use `Object.create()`?",
    options: ["To create objects with a specified prototype", "To clone objects", "To enhance performance", "To add properties"],
    answer: "To create objects with a specified prototype",
    reason: "`Object.create()` allows you to create a new object with a specified prototype, which is useful for inheritance and prototype-based object creation."
},
{
    question: "Why use `new Promise()`?",
    options: ["To create custom promise logic", "To handle async operations", "To optimize performance", "To simplify error handling"],
    answer: "To create custom promise logic",
    reason: "`new Promise()` allows you to create custom promise logic by defining how the promise should be resolved or rejected, which is essential for handling asynchronous operations."
},
{
    question: "Why use `WeakMap` over `Map`?",
    options: ["To prevent memory leaks", "For better performance", "To store primitive keys", "For faster lookups"],
    answer: "To prevent memory leaks",
    reason: "`WeakMap` holds weak references to keys, which allows for garbage collection of keys when there are no other references to them, preventing memory leaks in certain use cases."
},
{
    question: "Why use `default` parameters in functions?",
    options: ["To handle missing arguments", "To optimize performance", "To simplify code", "To enforce argument types"],
    answer: "To handle missing arguments",
    reason: "`default` parameters provide default values for function arguments when no value is passed, making it easier to handle cases where arguments are missing."
},
{
    question: "Why use `Object.entries()`?",
    options: ["To get key-value pairs", "To iterate keys", "To get values only", "To create objects"],
    answer: "To get key-value pairs",
    reason: "`Object.entries()` returns an array of key-value pairs from an object, which is useful for iterating over both keys and values."
},
{
    question: "Why use `Array.prototype.flat()`?",
    options: ["To flatten nested arrays", "To filter elements", "To sort arrays", "To map values"],
    answer: "To flatten nested arrays",
    reason: "`Array.prototype.flat()` is used to flatten nested arrays into a single array, making it easier to work with deeply nested array structures."
},
{
    question: "Why use `Array.prototype.find()`?",
    options: ["To find the first matching element", "To filter elements", "To map values", "To sort arrays"],
    answer: "To find the first matching element",
    reason: "`Array.prototype.find()` is used to find and return the first element in an array that satisfies a given condition, making it useful for locating specific items."
},
{
    question: "Why use `try...catch` in error handling?",
    options: ["To handle runtime errors", "To optimize performance", "To validate input", "To handle async operations"],
    answer: "To handle runtime errors",
    reason: "`try...catch` is used to handle runtime errors that occur during the execution of code, allowing you to manage errors and prevent application crashes."
},
{
    question: "Why prefer `Map` over plain objects for collections?",
    options: ["To use any type of key", "For better performance", "For simpler syntax", "To automatically handle duplicates"],
    answer: "To use any type of key",
    reason: "`Map` allows you to use any type of key, including objects and functions, whereas plain objects only accept strings and symbols as keys."
},
{
    question: "Why use `Promise.allSettled()` instead of `Promise.all()`?",
    options: ["To get results of all promises regardless of their outcome", "To handle only the first settled promise", "To ignore rejections", "To handle multiple promises"],
    answer: "To get results of all promises regardless of their outcome",
    reason: "`Promise.allSettled()` waits for all promises to settle (either resolve or reject) and provides the result for each promise, making it useful when you need to know the outcome of all promises."
},
{
    question: "Why use `function*` for generators?",
    options: ["To create iterable objects", "To enhance performance", "To simplify code", "To handle async operations"],
    answer: "To create iterable objects",
    reason: "`function*` defines a generator function that creates an iterable object, allowing you to control iteration and manage stateful sequences of values."
},
{
    question: "Why use `Object.seal()`?",
    options: ["To prevent adding or removing properties", "To make objects immutable", "To enhance performance", "To create copies of objects"],
    answer: "To prevent adding or removing properties",
    reason: "`Object.seal()` prevents adding or removing properties from an object, though it still allows modifying existing properties. This can be useful for ensuring the shape of an object remains consistent."
},
{
    question: "Why use `Array.prototype.some()`?",
    options: ["To check if any element meets a condition", "To filter elements", "To find the first matching element", "To map values"],
    answer: "To check if any element meets a condition",
    reason: "`Array.prototype.some()` tests whether at least one element in the array passes the provided test function, returning `true` if it does, and `false` otherwise."
},
{
    question: "Why prefer `let` over `var`?",
    options: ["For block-level scope", "For faster execution", "For better performance", "To handle hoisting"],
    answer: "For block-level scope",
    reason: "`let` provides block-level scope, which helps avoid issues with variable hoisting and scope leakage, unlike `var` which only provides function-level scope."
},
{
    question: "Why use `WeakSet` instead of `Set`?",
    options: ["To avoid memory leaks", "For better performance", "For more functionality", "To store primitive values"],
    answer: "To avoid memory leaks",
    reason: "`WeakSet` holds weak references to objects, allowing them to be garbage-collected when no other references exist, preventing memory leaks in scenarios where objects might be removed."
},
{
    question: "Why use `Object.assign()`?",
    options: ["To copy properties from one object to another", "To merge arrays", "To modify object properties", "To create new objects"],
    answer: "To copy properties from one object to another",
    reason: "`Object.assign()` is used to copy properties from one or more source objects to a target object, useful for merging properties or creating new objects with combined properties."
}

    
];

console.log("Total Advance Questions : " ,quizDataAdvanced.length)