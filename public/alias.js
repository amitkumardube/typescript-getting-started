"use strict";
let meeting = (a) => {
    console.log(a);
};
let objectreturn = (a) => {
    return a.a + a.b;
};
meeting("Hello");
console.log(objectreturn({ a: 10, b: 20 }));
