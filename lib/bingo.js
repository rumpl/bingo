/*
 * bingo
 * https://github.com/rumpl/bingo
 *
 * Copyright (c) 2012 Djorje Lukic
 * Licensed under the MIT license.
 */

function bingo(func, obj) {
  "use strict";
  var newF = function() {
    newF._didExecute = true;
    newF._timesExecuted++;

    func.apply(obj, arguments);
  };

  newF._didExecute = false;
  newF._timesExecuted = 0;

  newF.didExecute = function () {
    return newF._didExecute;
  };

  newF.timesExecuted = function() {
    return newF._timesExecuted;
  };

  return newF;
}

module.exports = function(obj) {
  "use strict";

  for (var o in obj) {
    if (typeof obj[o] !== 'function') {
      continue;
    }

    obj[o] = bingo(obj[o], obj);
  }

  return obj;
};
