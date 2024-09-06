{
    // // JavaScript  💩
    // function jsAdd(num1, num2) {
    //     return num1 + num2
    // }

    // // TypeScript✨
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // JavaScript  💩
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // // TypeScript✨
    // function fetchNum(id: string): Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }


    // JavaScript ✨ ==> TypeScript
    // Optional parameter
    function printName(firstName: string, lastName?: string) {  // lastName:string|undefined  => 명시적
        console.log(firstName)
        console.log(lastName)
    }
    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Anna', undefined)

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message)
    }
    printMessage()

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        // console.log(...number);
        // var sum = 0;
        // for (let i = 0; i < number.length; i++) {
        //     sum += number[i]
        // }
        // return sum;
        return numbers.reduce((a, b) => a + b)
    }
    console.log(addNumbers(1, 2, 3))
    console.log(addNumbers(1, 2, 3, 4, 5))
    console.log(addNumbers(1, 2, 3, 4, 5, 1))
}