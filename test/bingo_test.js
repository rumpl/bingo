/*
 * bingo
 * https://github.com/rumpl/bingo
 *
 * Copyright (c) 2012 Djorje Lukic
 * Licensed under the MIT license.
 */
 
var bingo = require('../lib/bingo.js');

exports.bingo = {
  setUp: function(done) {
    done();
  },
  'Works with objects created with new': function(test) {
    "use strict";
    var Test = function() {};
    Test.prototype.test = function() {};
    Test.prototype.test2 = function() {};

    var t = new Test(); 

    t = bingo(t);

    test.equal(t.test.didExecute(), false);
    test.equal(t.test.timesExecuted(), 0);

    t.test();

    test.equal(t.test.didExecute(), true);
    test.equal(t.test.timesExecuted(), 1);
    test.equal(t.test2.didExecute(), false);

    test.done();
  },
  'Works with other objects': function(test) {
    "use strict";
    var t = { 
      a: function() {
        console.log('a');
      },
      b: function() { 
      }
    };
    
    t = bingo(t);

    test.equal(t.b.didExecute(), false);
    t.b();
    test.equal(t.b.didExecute(), true);
    test.equal(t.b.timesExecuted(), 1);
    
    for (var i = 0; i < 10; i++) {
      t.b();
    }
    
    test.equal(t.b.timesExecuted(), 11);
    
    test.equal(t.a.didExecute(), false);

    test.done();
  }
};
