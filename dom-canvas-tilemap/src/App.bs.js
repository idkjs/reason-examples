// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Js_math = require("bs-platform/lib/js/js_math.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Demo$BsTilemap = require("./Demo.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

console.log(Demo$BsTilemap.foo);

function setOnloadFn(fn) {
  window.onload = fn;
  return /* () */0;
}

var Window = /* module */[/* setOnloadFn */setOnloadFn];

var Document = /* module */[];

function loadFromSrc(imageSrc) {
  var imageEl = new Image();
  var loadImagePromise = new Promise((function (resolve, reject) {
          imageEl.onload = (function () {
              return resolve(imageEl);
            });
          imageEl.onerror = (function () {
              return reject([
                          Caml_builtin_exceptions.invalid_argument,
                          "Could not load image: " + imageSrc
                        ]);
            });
          return /* () */0;
        }));
  imageEl.src = imageSrc;
  return loadImagePromise;
}

var HtmlImageElement = /* module */[/* loadFromSrc */loadFromSrc];

function getElementById(id) {
  return document.getElementById(id);
}

var Canvas = /* module */[/* getElementById */getElementById];

var Context = /* module */[];

function make(src, spriteWidth) {
  return loadFromSrc(src).then((function (imageElement) {
                return Promise.resolve(/* record */[
                            /* imageElement */imageElement,
                            /* spriteWidth */spriteWidth
                          ]);
              }));
}

function drawSprite(atlas, ctx, atlasNumber, x, y) {
  ctx.drawImage(atlas[/* imageElement */0], Caml_int32.imul(atlasNumber, atlas[/* spriteWidth */1]), 0, atlas[/* spriteWidth */1], atlas[/* spriteWidth */1], x, y, atlas[/* spriteWidth */1], atlas[/* spriteWidth */1]);
  return /* () */0;
}

var SpriteAtlas = /* module */[
  /* make */make,
  /* drawSprite */drawSprite
];

function make$1(atlas, numRows, numCols, tileSize, tiles) {
  return /* record */[
          /* atlas */atlas,
          /* numRows */numRows,
          /* numCols */numCols,
          /* tileSize */tileSize,
          /* tiles */tiles
        ];
}

function getRowAndColumn(idx, tilemap) {
  var col = Caml_int32.mod_(idx, tilemap[/* numCols */2]);
  var row = Js_math.floor(idx / tilemap[/* numCols */2]);
  return /* tuple */[
          row,
          col
        ];
}

function render(ctx, tilemap) {
  return List.iteri((function (i, num) {
                var match = getRowAndColumn(i, tilemap);
                return drawSprite(tilemap[/* atlas */0], ctx, num, Caml_int32.imul(match[1], tilemap[/* tileSize */3]), Caml_int32.imul(match[0], tilemap[/* tileSize */3]));
              }), tilemap[/* tiles */4]);
}

var TileMap = /* module */[
  /* make */make$1,
  /* getRowAndColumn */getRowAndColumn,
  /* render */render
];

function doWindowOnload() {
  var canvas = document.getElementById("demo");
  var ctx = canvas.getContext("2d");
  make("./tiles16.png", 16).then((function (atlas) {
            var tilemap = make$1(atlas, 2, 3, 16, /* :: */[
                  2,
                  /* :: */[
                    2,
                    /* :: */[
                      2,
                      /* :: */[
                        3,
                        /* :: */[
                          3,
                          /* :: */[
                            3,
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]);
            render(ctx, tilemap);
            return Promise.resolve(/* () */0);
          })).catch((function (err) {
          console.log("Failure!", err);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

window.onload = doWindowOnload;

exports.Window = Window;
exports.Document = Document;
exports.HtmlImageElement = HtmlImageElement;
exports.Canvas = Canvas;
exports.Context = Context;
exports.SpriteAtlas = SpriteAtlas;
exports.TileMap = TileMap;
exports.doWindowOnload = doWindowOnload;
/*  Not a pure module */
