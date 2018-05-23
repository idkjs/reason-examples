// Generated by BUCKLESCRIPT VERSION 3.1.1, PLEASE EDIT WITH CARE
'use strict';

var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function make() {
  return /* [] */0;
}

function push(x, stack) {
  return /* :: */[
          x,
          stack
        ];
}

function pop(stack) {
  if (stack) {
    return /* tuple */[
            stack[0],
            stack[1]
          ];
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
}

function peek(stack) {
  if (stack) {
    return stack[0];
  } else {
    return 0;
  }
}

function is_empty(stack) {
  if (stack) {
    return false;
  } else {
    return true;
  }
}

exports.make = make;
exports.push = push;
exports.pop = pop;
exports.peek = peek;
exports.is_empty = is_empty;
/* No side effect */
