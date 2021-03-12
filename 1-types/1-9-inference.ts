/**
 * Type Inference
 * 타입 추론
 * 타입을 명확하게 명시하지 않아도 알아서 타입이 결정되는 경우
 */
 let text = 'hello';
 function print(message = 'hello') {
   console.log(message);
 }
 print('hello');
 
 function add(x: number, y: number): number {
   return x + y;
 }
 const result = add(1, 2);
 