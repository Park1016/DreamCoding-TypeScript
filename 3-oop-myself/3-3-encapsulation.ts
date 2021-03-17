{
    type CoffeeCup = {
      shots: number;
      hasMilk: boolean;
    };
  
    class CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
      private coffeeBeans: number = 0; // instance (object) level
  
      private constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }
  
      static makeMachine(coffeeBeans: number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeans);
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

      fillCoffeeBeans(beans:number){
        if(beans<0){
            throw new Error(`bean's number should be greater than 0`);
        }
        this.coffeeBeans += beans;
      }
    }
  
    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);
  }
  