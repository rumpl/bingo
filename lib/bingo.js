/*
 * bingo
 * https://github.com/rumpl/bingo
 *
 * Copyright (c) 2012 Djorje Lukic
 * Licensed under the MIT license.
 */
 
 (function () {
   "use strict";

   var root = this;

   function _bingo(func, obj) {
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

   var bingo = function(obj) {
     for (var o in obj) {
       if (typeof obj[o] !== 'function') {
         continue;
       }

       obj[o] = _bingo(obj[o], obj);
     }

     return obj;
   };
   
   if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = bingo;
    }

    exports.bingo = bingo;
  } else {
    root['bingo'] = bingo;
  }
}.call(this));
