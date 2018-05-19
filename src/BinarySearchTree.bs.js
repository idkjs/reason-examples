// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

function make_empty() {
  return /* Leaf */0;
}

function make(x) {
  return /* Node */[
          x,
          /* Leaf */0,
          /* Leaf */0
        ];
}

function insert(x, tree) {
  if (tree) {
    var right = tree[2];
    var left = tree[1];
    var k = tree[0];
    if (Caml_obj.caml_lessthan(x, k)) {
      return /* Node */[
              k,
              insert(x, left),
              right
            ];
    } else if (Caml_obj.caml_greaterthan(x, k)) {
      return /* Node */[
              k,
              left,
              insert(x, right)
            ];
    } else {
      return /* Node */[
              x,
              /* Leaf */0,
              /* Leaf */0
            ];
    }
  } else {
    return /* Node */[
            x,
            /* Leaf */0,
            /* Leaf */0
          ];
  }
}

function create_a_tree_example() {
  var tree = insert(1, insert(7, insert(6, /* Node */[
                5,
                /* Leaf */0,
                /* Leaf */0
              ])));
  console.log(tree);
  return /* () */0;
}

function tree_of_array(arr) {
  var _acc = /* Leaf */0;
  var _x = $$Array.to_list(arr);
  while(true) {
    var x = _x;
    var acc = _acc;
    if (x) {
      _x = x[1];
      _acc = insert(x[0], acc);
      continue ;
    } else {
      return acc;
    }
  };
}

function mem(x, _tree) {
  while(true) {
    var tree = _tree;
    if (tree) {
      if (Caml_obj.caml_equal(x, tree[0]) || mem(x, tree[1])) {
        return true;
      } else {
        _tree = tree[2];
        continue ;
      }
    } else {
      return false;
    }
  };
}

function sum(tree) {
  if (tree) {
    return (tree[0] + sum(tree[1]) | 0) + sum(tree[2]) | 0;
  } else {
    return 0;
  }
}

function max(x, y) {
  var match = Caml_obj.caml_greaterthan(x, y);
  if (match) {
    return x;
  } else {
    return y;
  }
}

function height(tree) {
  if (tree) {
    return 1 + max(height(tree[1]), height(tree[2])) | 0;
  } else {
    return 0;
  }
}

function size(tree) {
  if (tree) {
    return (1 + size(tree[1]) | 0) + size(tree[2]) | 0;
  } else {
    return 0;
  }
}

function min(tree) {
  var _acc = 0;
  var _t = tree;
  while(true) {
    var t = _t;
    var acc = _acc;
    if (t) {
      _t = t[1];
      _acc = t[0];
      continue ;
    } else {
      return acc;
    }
  };
}

exports.make_empty = make_empty;
exports.make = make;
exports.insert = insert;
exports.create_a_tree_example = create_a_tree_example;
exports.tree_of_array = tree_of_array;
exports.mem = mem;
exports.sum = sum;
exports.max = max;
exports.height = height;
exports.size = size;
exports.min = min;
/* No side effect */
