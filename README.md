# bingo

Test function calls.

## Getting Started
Install the module with: `npm install bingo`

## Examples

```javascript
// Require the module.
var bingo = require('bingo');

// Bingo that object.
var someObject = bingo(someObject);

// Get info about the function.
console.log(someObject.someFunction.didExecute() === false); // true
console.log(someObject.someFunction.timesExecuted()); // 0

// Call some function.
someObject.someFunction();

// Get info about the execution of the function.
console.log(someObject.someFunction.didExecute() === true); // true
console.log(someObject.someFunction.timesExecuted()); // 1
```

## Contributing
Yes yes, please, contribute. What else do you want to know about an execution of a function ?

Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
- 0.2.0 (2012-06-14) Make bingo work in the browser
- 0.1.0 (2012-06-14) First version

## License

Copyright (c) 2012 Djorje Lukic

Licensed under the [MIT license](http://rumpl.mit-license.org/).
