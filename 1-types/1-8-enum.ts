{
    /**
     * Enum
     * 여러가지 상수값들을 한곳에 모아서 정의
     */
    // JavaScript엔 enum type이 없음. 보통 상수는 대문자로 정의함(한번 정해지면 바뀌지 않는 고정값을 나타낼 때)
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    const dayOfToday = DAYS_ENUM.MONDAY;
  
    // TypeScript에서는 enum 쓰면 타입보장이 잘 안됨. 안쓰는 게 좋음. 대신 union 써라
    // union type
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days { //enum은 첫글자만 대문자로 씀
      Monday,  //enum에 값을 따로 정하지 않으면 자동으로 0부터 시작함, 내 맘대로 지정하고 싶다면 Monday = 1|Monday = 'abc'처럼 쓰면 됨
      Tuesday, //1
      Wednesday, //2
      Thursday, //3
      Friday, //4
      Saturday, //5
      Sunday, //6
    }
    console.log(Days.Monday);
    let day: Days = Days.Saturday;
    day = Days.Tuesday;
    day = 10;
    console.log(day);
  
    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Wednesday';

    // 다른 모바일 클라이언트(안드로이드, ios)는 코틀린, 스위프트를 사용하기 때문에
    // 사용자의 데이터를 json으로 묶어서 다시 다른 클라이언트에게 보내야될 때
    // 모바일 클라이언트에서 사용하는 native 프로그래밍 언어에서는
    // union type을 표현할 수 있는 방법이 없어서, 서로 이해할 수 있는 enum type을 씀
    // 하지만 웹 클라이언트와 프로그래밍을 하고 다른 모바일 클라이언트와 의사소통 할 일이 없다면 enum은 안쓰는 게 좋음
  }
  