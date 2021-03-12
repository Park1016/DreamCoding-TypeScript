/**
 * Let's make a calculator 🧮
 */
function calculate(str:string, a:number, b:number):number {
    if(str === 'add'){
        return a + b;
    }else if(str === 'substract'){
        return a - b;
    }else if(str === 'multiply'){
        return a * b;
    }else if(str === 'divide'){
        return a / b;
    }else if(str === 'remainder'){
        return a % b;
    }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
