{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array.....
     */
  
    // number
    const num: number = -6;
  
    // string
    const str: string = 'hello';
  
    // boolean
    const boal: boolean = false;
  
    // undefined
    let name: undefined; // 💩
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
      return undefined;
    }
  
    // null
    let person: null; // 💩
    let person2: string | null;
  
    // unknown 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;
  
    // any 💩
    let anything: any = 0;
    anything = 'hello';
  
    // void(생략 가능)
    // 함수에서 아무것도 리턴하지 않을 때
    function print(): void {
      console.log('hello');
      return;
    }
    let unusable: void = undefined; // 💩
  
    // never
    // 함수에서 절대 리턴하지 않을 때
    // 에러 던지거나 끝나지 않는 루프에 씀(while 같은)
    function throwError(message: string): never {
      // message -> server (log)
      throw new Error(message);
      while (true) {}
    }
    let neverEnding: never; // 💩
  
    // objet
    let obj: object; // 💩
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });
  }
  