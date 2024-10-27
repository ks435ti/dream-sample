{
    /**
     * Type Inference
     */

    let text = 'hello' // 선언함과 동시에 타입을 선언됨
    // text = 1 // 
    function print(message: string) {
        console.log(message)
    }
    print('hello')
    // print(1) // print 함수의 파라미터의 타입을 정의하지 않으면 input 으로 숫자도 넣을수 있다

    function add(x: number, y: number): number {
        return x + y
    }
    const result = add(1, 2)

}