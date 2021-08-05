"use strict";
let you = {
    Name: 'Amit',
    Age: 20,
    purchase(amount) {
        console.log(amount);
    },
    payment(amount) {
        return amount;
    }
};
you.Name = 'Amit';
you.Age = 20;
you.purchase(20);
you.payment(30);
console.log(you);
//# sourceMappingURL=user.js.map