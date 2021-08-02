// explicit  type
let uname: string;
uname = 'abc';
console.log(uname);

// arrays
let mixed_t : (string | number | boolean)[] = [];

mixed_t.push('abc');
mixed_t.push(10);
mixed_t.push(true);

console.log(mixed_t);