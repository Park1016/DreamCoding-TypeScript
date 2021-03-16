{
const beans:number = 1;

function makeCoffee(shot:number):string{
    const coffee = beans * shot;
    switch(coffee){
        case 1:
            return `1 shot coffee`;
        case 2:
            return `2 shot coffee`;
        case 3:
            return `3 shot coffee`;
        default:
            throw new Error(`unknown shot`);
    }
}

console.log(makeCoffee(1));
console.log(makeCoffee(2));
console.log(makeCoffee(3));
console.log(makeCoffee(4));
}