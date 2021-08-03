interface isUser {
    Name: string;
    Age : number;
    purchase (amount : number): void;
    payment (amount : number) : number;
}

let you : isUser = {
    Name : 'Amit',
    Age : 20,
    purchase(amount : number) : void {
        console.log(amount);
    },
    payment(amount : number) : number  {
        return amount;
    }
};

you.Name = 'Amit';
you.Age = 20;
you.purchase(20);
you.payment(30);

console.log(you);