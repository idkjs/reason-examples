// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var LinkedList$ReasonExamples = require("../src/data-structures/LinkedList.bs.js");

Jest.describe("make", (function (param) {
        return Jest.test("make", (function (param) {
                      return Jest.Expect[/* toBe */2](/* Empty */0, Jest.Expect[/* expect */0](LinkedList$ReasonExamples.make(/* () */0)));
                    }));
      }));

Jest.describe("head", (function (param) {
        return Jest.test("head", (function (param) {
                      return Jest.Expect[/* toBe */2](2, Jest.Expect[/* expect */0](LinkedList$ReasonExamples.head(LinkedList$ReasonExamples.cons(2, LinkedList$ReasonExamples.make(/* () */0)))));
                    }));
      }));

Jest.describe("tail", (function (param) {
        return Jest.test("tail", (function (param) {
                      return Jest.Expect[/* toBe */2](5, Jest.Expect[/* expect */0](LinkedList$ReasonExamples.head(LinkedList$ReasonExamples.tail(LinkedList$ReasonExamples.cons(7, LinkedList$ReasonExamples.cons(5, LinkedList$ReasonExamples.cons(3, LinkedList$ReasonExamples.cons(1, LinkedList$ReasonExamples.make(/* () */0)))))))));
                    }));
      }));

var a = "";

exports.a = a;
/*  Not a pure module */
