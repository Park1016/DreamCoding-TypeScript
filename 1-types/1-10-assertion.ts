{
    /**
     * Type Assertions 💩
     * 어쩔 수 없이 사용해야될 때를 빼곤 사용하지 않는것이 좋음
     */
    function jsStrFunc(): any {  //리턴타입을 any로 선언
      return 2;
    }
    const result = jsStrFunc();
    //리턴타입이 무조건 string이라고 지정하는 두가지 방법
    console.log((result as string).length); 
    console.log((<string>result).length);
  
    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 😱
  
    function findNumbers(): number[] | undefined {
      return undefined;
    }
    const numbers = findNumbers()!;
    numbers.push(2); // 😱
    // 리턴타입이 number일수도 있고 undefined일수도 있음
    // 무조건 리턴타입이 절대적으로 값이 있어! null값이 아니야! 라고 표현할 때 느낌표를 붙힘
    //     const numbers = findNumbers()!;
    //     numbers.push(2);
    // 또는
    //     const numbers = findNumbers();
    //     numbers!.push(2);
    // 둘 다 가능
  
    const button = document.querySelector('class')!;
    // class는 null값일수도 있고 값이 있을 수도 있음
    // 이 때 무조건 값이 있다고 확신하면 위처럼 느낌표 붙히기
  }
  