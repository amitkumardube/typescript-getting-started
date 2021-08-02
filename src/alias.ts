type strornum = string | number

type objecttype = {a : number , b :number}

let meeting = (a : strornum) => {
    console.log(a);
}

let objectreturn = (a : objecttype) => {
    return a.a + a.b
}

meeting("Hello");

console.log(objectreturn({ a: 10 , b : 20}))