{
    // Array
    const fruits: string[] = ["🍅", '🍌']
    const scroes: Array<number> = [1, 2, 3]
    function printArray(fruits: readonly string[]) { //  Array<String> -- 불가능
        // fruits.push("🍓")
    }

    // Tuple - 권장 X : index 만 보고 타입을 알수 없음 --> interface, type alias, class   예외(react useState)
    let student: [string, number];
    student = ['name', 123]
    student[0] // name ==> student.name
    student[1] // 123  ==> student.age

    const [name, age] = student;

}