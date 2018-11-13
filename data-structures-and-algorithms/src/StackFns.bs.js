// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Stack$ReasonExamples = require("./data-structures/Stack.bs.js");
var StringFns$ReasonExamples = require("./StringFns.bs.js");

function is_balanced(str) {
  var _stack = Stack$ReasonExamples.make(/* () */0);
  var _s = StringFns$ReasonExamples.string_to_list(str);
  while(true) {
    var s = _s;
    var stack = _stack;
    if (s) {
      switch (s[0]) {
        case "(" : 
            _s = s[1];
            _stack = Stack$ReasonExamples.push("(", stack);
            continue ;
        case ")" : 
            var match = Stack$ReasonExamples.pop(stack);
            if (match[0] === "(") {
              _s = s[1];
              _stack = match[1];
              continue ;
            } else {
              return false;
            }
        case "{" : 
            _s = s[1];
            _stack = Stack$ReasonExamples.push("{", stack);
            continue ;
        case "}" : 
            var match$1 = Stack$ReasonExamples.pop(stack);
            if (match$1[0] === "{") {
              _s = s[1];
              _stack = match$1[1];
              continue ;
            } else {
              return false;
            }
        default:
          _s = s[1];
          continue ;
      }
    } else {
      return Stack$ReasonExamples.is_empty(stack);
    }
  };
}

exports.is_balanced = is_balanced;
/* No side effect */
