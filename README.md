# bingo

Test function calls.

## Getting Started
This module is not on npm yet but you can download it here on github.

## Examples

```javascript
// Require the module.
var bingo = require('bingo');

// Bingo that object.
var someObject = bingo(someObject);

// Get info about the function.
console.log(someObject.didExecute() === false); // true
console.log(someObject.timesExecuted()); // 0

// Call some function.
someObject.someFunction();

// Get info about the execution of the function.
console.log(someObject.didExecute() === true); // true
console.log(someObject.timesExecuted()); // 1
```

## Contributing
Yes yes, please, contribute. What else do you want to know about an execution of a function ?
Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
 - 0.1.0 (2012-09-14) First version

## License

Copyright (c) 2012 Djorje Lukic
Licensed under the [MIT license](http://rumpl.mit-license.org/).
