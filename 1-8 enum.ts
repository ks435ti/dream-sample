{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ 'MONDAY': 0, 'TUESDAY': 1, 'WEDNEDAY': 2 })
    const dayOfToday = DAYS_ENUM.MONDAY


    // TypeScript
    // 기본값은 0 이지만 1로 변경 가능, string값으로 할당할 땐 모두 할당해야한다.
    // 다른 언어에서 유용하지만, typescript에선 사용하지 않는 것을 권장함 ( 타입이 아닌 숫자로 할당해도 들어간다, 이전 버전에서는 범위 밖의 숫자도 입력가능했던것 같음)
    // union type을 지원하지 않는 다른 플랫폼(aos , ios)과 통신하는 경우에 enum 을 사용한다.
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | "Thursday" | "Triday" | "Satarday" | "Sunday"
    enum Days {
        Monday = 1, // = 1  or  = 'monday'
        Tuesday, // 
        Wednesday,
        Thursday,
        Triday,
        Satarday,
        Sunday
    }
    console.log(Days.Monday)
    console.log(Days.Satarday)

    let day: Days = Days.Satarday;
    day = Days.Tuesday;
    day = 4;
    console.log(day)
    let daysOfWeek: DaysOfWeek = 'Monday'
    daysOfWeek = 'Tuesday'
    // daysOfWeek = "el" // 다른 값 할당 불가

}