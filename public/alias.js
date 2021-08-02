"use strict";
var meeting = function (a) {
    console.log(a);
};
var objectreturn = function (a) {
    return a.a + a.b;
};
meeting("Hello");
console.log(objectreturn({ a: 10, b: 20 }));
