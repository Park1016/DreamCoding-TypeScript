{
    // Array
    // 배열 선언하는 두가지 방법
    const fruits: string[] = ['🍅', '🍌'];
    const scroes: Array<number> = [1, 3, 4];
    // fruits를 절대 변경할 수 없고 읽기만 가능하게 할 때(이 때는 첫번째 방법만 가능)
    function printArray(fruits: readonly string[]) {}
  
    // Tuple
    // 서로다른 타입을 함께 담을 수 있는 배열
    // 하지만 사용을 권장하진 않음
    // interface, type alias, class로 대체해서 사용하는 것이 좋음
    // 동적으로 뭔가를 리턴할 때, 동적으로 관련있는 다른 타입의 데이터를 묶어서, 사용자가 이름을 정의해서 쓸 경우
    let student: [string, number];
    student = ['name', 123];
    // [?]이런식으로 접근하는건 접근성이 떨어짐
    student[0]; // name
    student[1]; // 123
    // object distructuring??
    const [name, age] = student;
  }
  