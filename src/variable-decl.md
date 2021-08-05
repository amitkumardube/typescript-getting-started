# Variable Declaration in typescript

### var
* anything declared with var is moved at the top of the file while running javascript.
* Below code is valid code in typescript or javascript though it is very confusing as variable  is declared after it's being printed.
* It works fine as javascript at runtime will move all the variable at top before executing any code.
```   
    console.log(myname);
    var myname = "Amit";
```
### let
* The order of declaration matters with let.
* Below code will throw compilation errors in tyepscript as myname declared after being used.
```
    console.log(myname);
    let myname = "Amit";
```
* This works fine as variable is declared first and used later.
```
    let myname = "Amit";
    console.log(myname);
```
### const
* The order of declaration matters with const.
* The value of a variable once declared can't be changed.
* Below code will throw compilation errors in tyepscript as myname declared after being used.
```
    console.log(myname);
    const myname = "Amit";
```
* This works fine as constant is declared first and used later.
```
    const myname = "Amit";
    console.log(myname);
```
