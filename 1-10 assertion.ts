{
    /**
     * Type Assertions 💩
     */

    function jsStrFunc(): any {
        return 1;
    }

    const result = jsStrFunc();
    console.log((result as string).length) // 100 % 인경우만 사용  // 컴파일이나 실행단계에서 undefined를 리턴할뿐 죽지는 않는다
    console.log((<string>result).length) // 100 % 인경우만 사용     // 컴파일이나 실행단계에서 undefined를 리턴할뿐 죽지는 않는다
    console.log((result as Array<number>).push(2)) // 100 % 인경우만 사용     // 죽는 경우도 있음

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2)  //확신하는 경우에 사용가능
    const numbers2 = findNumbers()!;  // 실행하고 ! 할수도 있음
    numbers2?.push(2)  // ?까지 실행했을때 값이 falthy 할 경우 null ?? undefined? 를 리턴함

    const button = document.querySelector('class') // 이것은 값을 리턴하거나 null 을 리턴한다. 그래서 확신하는 경우가 아니면 ! 는 사용하지 않는것이 좋다.






}