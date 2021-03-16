{
    type CoffeeCup = {
      shots: number;
      hasMilk: boolean;
    };
  
    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7;
        coffeeBeans: number = 0;

        constructor(beans:number){
            this.coffeeBeans = beans;
        }

        makeCoffee(shots: number): CoffeeCup {
          if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
          }
          this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
          return {
            shots,
            hasMilk: false,
          };
        }
    }

    const coffee = new CoffeeMaker(2);
    const coffee2 = new CoffeeMaker(3);

    console.log(coffee);
    console.log(coffee2);
}
  